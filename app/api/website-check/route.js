import { NextResponse } from 'next/server';
import { lookup } from 'node:dns/promises';
import net from 'node:net';

// Kostenloser Website-Check (/website-check).
// Misst serverseitig, was sich ohne Browser zuverlässig messen lässt: Antwortzeit,
// Weiterleitungen, Komprimierung, HTML-Größe und die SEO-Grundlagen im Quelltext.
// Bewusst ohne PageSpeed-API: das gemeinsame Google-Kontingent war live ständig
// erschöpft (siehe Commit 6e0c5a0). Für Core Web Vitals verlinkt die Seite auf
// PageSpeed Insights.

export const runtime = 'nodejs';
export const preferredRegion = 'fra1';
export const maxDuration = 30;

const UA = 'Mozilla/5.0 (compatible; WebseiteHamburgCheck/2.0; +https://webseite.hamburg/website-check)';
const MAX_HTML = 3_000_000;

// Einfache Bremse gegen Missbrauch: 8 Prüfungen pro IP und 10 Minuten (pro Instanz).
const hits = new Map();
function limited(ip) {
    const now = Date.now();
    const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
    list.push(now);
    hits.set(ip, list);
    if (hits.size > 5000) hits.clear();
    return list.length > 8;
}

function privateIp(ip) {
    if (net.isIPv4(ip)) {
        const [a, b] = ip.split('.').map(Number);
        return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31)
            || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224;
    }
    const v = ip.toLowerCase();
    if (v.startsWith('::ffff:')) return privateIp(v.slice(7));
    return v === '::1' || v === '::' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe80');
}

async function safeHost(hostname) {
    if (!hostname.includes('.') || /^(localhost|.*\.local|.*\.internal)$/i.test(hostname)) return false;
    if (net.isIP(hostname)) return !privateIp(hostname);
    try {
        const addrs = await lookup(hostname, { all: true });
        return addrs.length > 0 && addrs.every((a) => !privateIp(a.address));
    } catch {
        return false;
    }
}

function normalizeUrl(input) {
    let raw = String(input || '').trim();
    if (!raw || raw.length > 500) return null;
    if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
    try {
        const u = new URL(raw);
        if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password) return null;
        if (u.port && !['80', '443'].includes(u.port)) return null;
        return u;
    } catch {
        return null;
    }
}

function decodeEntities(str) {
    return str
        .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
        .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&(auml|ouml|uuml|Auml|Ouml|Uuml|szlig);/g, (_, e) => ({ auml: 'ä', ouml: 'ö', uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß' }[e]));
}

function attr(tag, name) {
    const m = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
    return m ? (m[1] ?? m[2] ?? m[3] ?? '') : null;
}

async function timedFetch(url, ms, opts = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    try {
        return await fetch(url, { ...opts, signal: controller.signal, headers: { 'User-Agent': UA, ...(opts.headers || {}) } });
    } finally {
        clearTimeout(timer);
    }
}

// Folgt Weiterleitungen von Hand, damit jedes Ziel gegen interne Adressen geprüft wird.
async function fetchPage(start) {
    let url = start;
    let redirects = 0;
    const t0 = Date.now();
    for (;;) {
        if (!(await safeHost(url.hostname))) throw new Error('blocked');
        const tReq = Date.now();
        const res = await timedFetch(url.href, 10000, {
            redirect: 'manual',
            headers: { Accept: 'text/html,application/xhtml+xml', 'Accept-Encoding': 'gzip, br' },
        });
        const ttfb = Date.now() - tReq;
        const loc = res.headers.get('location');
        if (res.status >= 300 && res.status < 400 && loc) {
            if (++redirects > 5) throw new Error('loop');
            url = new URL(loc, url);
            if (!['http:', 'https:'].includes(url.protocol)) throw new Error('blocked');
            continue;
        }
        const buf = await res.arrayBuffer();
        return {
            res,
            url,
            redirects,
            ttfb,
            totalMs: Date.now() - t0,
            html: new TextDecoder('utf-8').decode(buf.byteLength > MAX_HTML ? buf.slice(0, MAX_HTML) : buf),
            bytes: buf.byteLength,
        };
    }
}

async function exists(url) {
    try {
        const res = await timedFetch(url, 5000, { redirect: 'follow' });
        const text = res.ok ? (await res.text()).slice(0, 200000) : '';
        return { ok: res.ok, text };
    } catch {
        return { ok: false, text: '' };
    }
}

export async function POST(request) {
    const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    if (limited(ip)) {
        return NextResponse.json({ ok: false, error: 'limit' }, { status: 429 });
    }

    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
    }
    const parsed = normalizeUrl(body?.url);
    if (!parsed) return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });

    let page;
    try {
        page = await fetchPage(parsed);
    } catch {
        return NextResponse.json({ ok: false, error: 'unreachable' });
    }

    const { res, html, url } = page;
    const head = html.split(/<\/head>/i)[0];
    const title = decodeEntities((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim());

    let description = '';
    let viewport = false;
    let robotsMeta = '';
    for (const meta of html.match(/<meta\b[^>]*>/gi) || []) {
        const name = (attr(meta, 'name') || '').toLowerCase();
        if (name === 'description') description = decodeEntities(attr(meta, 'content') || '').trim();
        if (name === 'viewport') viewport = true;
        if (name === 'robots' || name === 'googlebot') robotsMeta += ' ' + (attr(meta, 'content') || '').toLowerCase();
    }
    const noindex = /noindex/.test(robotsMeta) || /noindex/i.test(res.headers.get('x-robots-tag') || '');
    const canonical = (html.match(/<link\b[^>]*rel=["']?canonical["']?[^>]*>/i) || [])[0];
    const lang = attr(html.match(/<html\b[^>]*>/i)?.[0] || '', 'lang') || '';
    const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
    const structuredData = /<script[^>]*type=["']?application\/ld\+json/i.test(html);
    const imgs = html.match(/<img\b[^>]*>/gi) || [];
    const imgsNoAlt = imgs.filter((t) => attr(t, 'alt') === null).length;
    const scripts = (html.match(/<script\b[^>]*\bsrc=/gi) || []).length;
    const stylesheets = (html.match(/<link\b[^>]*rel=["']?stylesheet/gi) || []).length;
    const googleFonts = /fonts\.(googleapis|gstatic)\.com/i.test(html);
    const encoding = (res.headers.get('content-encoding') || '').toLowerCase();

    const origin = url.origin;
    const robots = await exists(`${origin}/robots.txt`);
    const sitemapHint = robots.text.match(/^\s*sitemap:\s*(\S+)/im)?.[1];
    let sitemap = false;
    if (sitemapHint) sitemap = true;
    else sitemap = (await exists(`${origin}/sitemap.xml`)).ok || (await exists(`${origin}/sitemap_index.xml`)).ok;

    return NextResponse.json({
        ok: res.status < 400,
        status: res.status,
        error: res.status >= 400 ? 'status' : undefined,
        finalUrl: url.href,
        checks: {
            https: url.protocol === 'https:',
            redirects: page.redirects,
            ttfbMs: page.ttfb,
            totalMs: page.totalMs,
            htmlKb: Math.round(page.bytes / 1024),
            compressed: /gzip|br|zstd|deflate/.test(encoding),
            scripts,
            stylesheets,
            images: imgs.length,
            imgsNoAlt,
            title,
            titleLength: title.length,
            description,
            descriptionLength: description.length,
            h1Count,
            viewport,
            lang,
            canonical: Boolean(canonical),
            noindex,
            structuredData,
            robotsTxt: robots.ok,
            sitemap,
            googleFonts,
        },
    });
}
