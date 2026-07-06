import { NextResponse } from 'next/server';

const BLOCKED_HOST = /^(localhost$|127\.|10\.|0\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|\[|::1$)/i;

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

function normalizeUrl(input) {
    let raw = String(input || '').trim();
    if (!raw) return null;
    if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
    let parsed;
    try {
        parsed = new URL(raw);
    } catch {
        return null;
    }
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;
    if (BLOCKED_HOST.test(parsed.hostname) || !parsed.hostname.includes('.')) return null;
    return parsed;
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
    }

    const parsed = normalizeUrl(body.url);
    if (!parsed) {
        return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
    }

    const started = Date.now();
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(parsed.href, {
            redirect: 'follow',
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; WebseiteHamburgCheck/1.0; +https://webseite.hamburg)',
                Accept: 'text/html,application/xhtml+xml',
            },
        });
        clearTimeout(timer);
        const responseMs = Date.now() - started;
        const finalUrl = res.url || parsed.href;
        const html = (await res.text()).slice(0, 500000);

        const title = decodeEntities((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim());
        let description = '';
        let viewport = false;
        for (const meta of html.match(/<meta\b[^>]*>/gi) || []) {
            const name = meta.match(/name=["']([^"']+)["']/i)?.[1]?.toLowerCase();
            if (name === 'description') description = decodeEntities(meta.match(/content=["']([^"']*)["']/i)?.[1] || '');
            if (name === 'viewport') viewport = true;
        }
        const h1Count = (html.match(/<h1[\s>]/gi) || []).length;

        return NextResponse.json({
            ok: true,
            status: res.status,
            finalUrl,
            responseMs,
            checks: {
                https: finalUrl.startsWith('https://'),
                title,
                titleLength: title.length,
                description,
                descriptionLength: description.length,
                h1Count,
                viewport,
            },
        });
    } catch {
        return NextResponse.json({ ok: false, error: 'unreachable' });
    }
}
