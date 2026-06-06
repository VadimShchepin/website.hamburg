import React from 'react';

const MONTHS = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

// Server component — the date is evaluated at build time, so it reflects
// the most recent deploy and never drifts far from "current".
export default function ServiceMeta() {
    const now = new Date();
    const updated = `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

    return (
        <div className="subpage-byline animate-up">
            <span>Von <strong><a href="https://www.linkedin.com/in/vadim-shchepin/" rel="author">Vadim Shchepin</a></strong></span>
            <span className="byline-sep">·</span>
            <span>Webdesign, SEO &amp; Google Ads in Hamburg</span>
            <span className="byline-sep">·</span>
            <span>Zuletzt aktualisiert: {updated}</span>
        </div>
    );
}
