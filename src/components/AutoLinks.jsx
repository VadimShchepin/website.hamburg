import React from 'react';
import Link from 'next/link';
import { KEYWORD_LINKS, MAX_AUTO_LINKS } from '../lib/keywordLinks';

// Server component: wraps page content and turns the first occurrence of each
// keyword from src/lib/keywordLinks.js into a link to the page that owns it.
//
// It walks the JSX tree passed as children before render, so the links are in the
// server HTML that Google reads. Only plain host elements are walked (p, li, td,
// div, section ...). It never links inside headings, links, buttons, labels, quotes,
// code or scripts, skips hero, price, source and CTA blocks (see SKIP_CLASS), never
// links a page to itself, never links a target the page already links to by hand,
// links each target at most once per page and adds at most MAX_AUTO_LINKS links.
// Text rendered inside other components (FaqSection, ServiceCta, client components)
// is left alone.
//
// Usage in a page: <AutoLinks path="/leistungen/seo"> ...page JSX... </AutoLinks>
// Inside ArticleLayout (a client component) wrap the children, not the layout:
// <ArticleLayout ...><AutoLinks path="/wissen/x">...</AutoLinks></ArticleLayout>

const SKIP = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'label', 'code', 'pre',
    'script', 'style', 'svg', 'title', 'summary', 'nav', 'select', 'option', 'textarea', 'figcaption',
    'blockquote', 'q', 'cite', 'th', 'caption', 'img', 'picture']);

// Blocks where an extra link reads oddly: heroes, price cards, stats, source lists,
// breadcrumbs, call-to-action boxes, cards that are links themselves.
const SKIP_CLASS = /(^|\s)(subpage-hero|vx-hero|sp-hero|cs-hero|subpage-sources|sp-price|subpage-price|subpage-stat|cs-metric|breadcrumb|cta-box|sp-cta|vx-cta|wissen-card|vx-service|vx-proof|vx-announce|sp-step-num|ecx-stat|subpage-toc|article-toc|no-autolink)/;

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Word boundary that understands umlauts and hyphenated compounds.
const W = 'A-Za-zÄÖÜäöüß0-9';

function normalizeHref(href) {
    if (typeof href !== 'string') return null;
    let h = href.replace(/^https?:\/\/(www\.)?webseite\.hamburg/, '');
    if (!h.startsWith('/')) return null;
    h = h.split(/[?#]/)[0];
    if (h.length > 1) h = h.replace(/\/$/, '');
    return h || '/';
}

function buildMatchers(path) {
    const list = [];
    for (const { href, phrases } of KEYWORD_LINKS) {
        if (href === path) continue;
        for (const p of phrases) {
            // Spaces in a phrase match any whitespace (line breaks, non-breaking spaces).
            const body = escape(p).replace(/ /g, '\\s+');
            list.push({ href, phrase: p, cased: /[A-ZÄÖÜ]/.test(p), re: new RegExp(`(?<![${W}-])${body}(?![${W}-])`, 'gi') });
        }
    }
    return list;
}

// First usable hit of a matcher in a text: not inside "quotes" (search examples such
// as "Steuerberater für Handwerksbetriebe" stay plain) and not written all lowercase
// when the phrase is capitalised (keyword lists like "website erstellen lassen kosten").
function firstHit(m, text) {
    m.re.lastIndex = 0;
    let hit;
    while ((hit = m.re.exec(text)) !== null) {
        const quotes = (text.slice(0, hit.index).match(/"/g) || []).length;
        const lower = m.cased && hit[0] === hit[0].toLowerCase();
        if (quotes % 2 === 0 && !lower) return hit;
    }
    return null;
}

// Targets the page already links to by hand (anywhere in the tree, also inside
// components), so the automatic pass does not add a second link to them.
function collectHrefs(node, out) {
    if (Array.isArray(node)) { node.forEach((n) => collectHrefs(n, out)); return out; }
    if (!React.isValidElement(node)) return out;
    const h = normalizeHref(node.props?.href);
    if (h) out.add(h);
    if (node.props?.children !== undefined) collectHrefs(node.props.children, out);
    return out;
}

export default function AutoLinks({ path, children, max = MAX_AUTO_LINKS }) {
    const matchers = buildMatchers(path);
    const used = collectHrefs(children, new Set());
    used.add(path);
    let count = 0;

    function linkText(text, keyBase) {
        if (count >= max || !text.trim()) return text;
        let best = null;
        for (const m of matchers) {
            if (used.has(m.href)) continue;
            const hit = firstHit(m, text);
            if (hit && (!best || hit.index < best.index ||
                (hit.index === best.index && hit[0].length > best.len))) {
                best = { index: hit.index, len: hit[0].length, href: m.href };
            }
        }
        if (!best) return text;
        used.add(best.href);
        count += 1;
        const before = text.slice(0, best.index);
        const match = text.slice(best.index, best.index + best.len);
        const after = text.slice(best.index + best.len);
        // A keyed fragment, not a bare array, so React sees no unkeyed list.
        return (
            <React.Fragment key={keyBase}>
                {before}
                <Link href={best.href} className="auto-link"
                    data-umami-event="auto-link" data-umami-event-target={best.href}>{match}</Link>
                {linkText(after, `${keyBase}-r`)}
            </React.Fragment>
        );
    }

    function withKey(el, k) {
        return React.isValidElement(el) && el.key == null ? React.cloneElement(el, { key: k }) : el;
    }

    function walk(node, key) {
        if (count >= max) return node;
        if (typeof node === 'string') return linkText(node, key);
        // Sibling JSX passed as an array has no keys; add positional ones.
        if (Array.isArray(node)) return node.map((n, i) => withKey(walk(n, `${key}.${i}`), `${key}.${i}`));
        if (!React.isValidElement(node)) return node;
        // Only host elements (strings) are walked; components keep their own text.
        if (typeof node.type !== 'string' && node.type !== React.Fragment) return node;
        if (SKIP.has(node.type)) return node;
        const props = node.props || {};
        if (props.dangerouslySetInnerHTML || props['data-no-autolink'] !== undefined) return node;
        if (typeof props.className === 'string' && SKIP_CLASS.test(props.className)) return node;
        const kids = props.children;
        if (kids === undefined || kids === null) return node;
        const next = Array.isArray(kids)
            ? React.Children.map(kids, (c, i) => walk(c, `${key}.${i}`))
            : walk(kids, `${key}.0`);
        return React.cloneElement(node, undefined, next);
    }

    return <>{walk(children, 'al')}</>;
}
