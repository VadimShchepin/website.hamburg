'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Kostenloser Website-Check, eingesetzt auf /website-check.
// Die Messung läuft serverseitig in app/api/website-check/route.js.

function normalizeUrl(input) {
    let raw = String(input || '').trim();
    if (!raw) return null;
    if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
    try {
        const parsed = new URL(raw);
        if (!parsed.hostname.includes('.')) return null;
        return parsed.href;
    } catch {
        return null;
    }
}

function CheckRow({ ok, warn, label, detail }) {
    const state = ok ? 'ok' : warn ? 'warn' : 'fail';
    return (
        <li className={`wc-check wc-check-${state}`}>
            <span className="wc-check-icon" aria-hidden="true">{ok ? '✓' : warn ? '!' : '✕'}</span>
            <span>
                <strong>{label}</strong>
                {detail ? <em>{detail}</em> : null}
                <span className="sr-only">{ok ? ' (in Ordnung)' : warn ? ' (prüfen)' : ' (Fehler)'}</span>
            </span>
        </li>
    );
}

const fmtMs = (ms) => (ms < 1000 ? `${ms} ms` : `${(ms / 1000).toFixed(1).replace('.', ',')} s`);

export default function WebsiteCheck({ id = 'check' }) {
    const [url, setUrl] = useState('');
    const [phase, setPhase] = useState('idle'); // idle | running | done | error
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const [checkedUrl, setCheckedUrl] = useState('');

    const runCheck = async (e) => {
        e.preventDefault();
        const normalized = normalizeUrl(url);
        if (!normalized) {
            setError('invalid');
            setPhase('error');
            return;
        }
        window.umami?.track('website-check-start');
        setPhase('running');
        setData(null);
        setCheckedUrl(normalized);
        try {
            const res = await fetch('/api/website-check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: normalized }),
            });
            const json = await res.json().catch(() => ({ ok: false, error: 'unreachable' }));
            if (!json.ok) {
                setError(json.error === 'status' ? `status:${json.status}` : json.error || 'unreachable');
                setPhase('error');
                window.umami?.track('website-check-error');
                return;
            }
            setData(json);
            setPhase('done');
            window.umami?.track('website-check-done');
        } catch {
            setError('unreachable');
            setPhase('error');
        }
    };

    const c = data?.checks;
    const titleOk = c ? c.titleLength >= 30 && c.titleLength <= 65 : false;
    const descOk = c ? c.descriptionLength >= 70 && c.descriptionLength <= 160 : false;
    const ttfbState = c ? (c.ttfbMs <= 800 ? 'ok' : c.ttfbMs <= 1800 ? 'warn' : 'fail') : null;
    const fails = c
        ? [!c.https, c.noindex, !titleOk, !descOk, c.h1Count !== 1, !c.viewport, ttfbState === 'fail', !c.compressed, !c.sitemap].filter(Boolean).length
        : 0;

    const errorText = {
        invalid: 'Das sieht nicht nach einer Web-Adresse aus. Bitte so eingeben: ihre-website.de',
        limit: 'Sie haben in kurzer Zeit viele Prüfungen gestartet. Bitte versuchen Sie es in ein paar Minuten noch einmal.',
        unreachable: 'Diese Adresse war nicht erreichbar oder hat zu lange gebraucht. Prüfen Sie die Schreibweise (z. B. ihre-website.de) und versuchen Sie es erneut.',
    };

    return (
        <div id={id} className="website-check wc-panel">
            <form className="wc-form" onSubmit={runCheck}>
                <label htmlFor={`${id}-url`} className="sr-only">Adresse Ihrer Website</label>
                <input
                    id={`${id}-url`}
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="ihre-website.de"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit" className="button button-primary button-large" disabled={phase === 'running'}>
                    {phase === 'running' ? 'Prüfe …' : 'Jetzt prüfen'}
                </button>
            </form>
            <p className="wc-note">Ohne Anmeldung, ohne E-Mail-Adresse. Geprüft wird nur die öffentliche Startseite, die Sie eingeben.</p>

            <div aria-live="polite">
                {phase === 'running' && (
                    <div className="wc-progress" role="status">
                        <span className="availability-dot" />
                        Seite wird geladen und ausgewertet …
                    </div>
                )}

                {phase === 'error' && (
                    <div className="wc-error">
                        {error.startsWith('status:')
                            ? `Die Seite hat mit dem Fehlercode ${error.slice(7)} geantwortet. So sieht sie auch Google.`
                            : errorText[error] || errorText.unreachable}
                    </div>
                )}

                {phase === 'done' && c && (
                    <div className="wc-results">
                        <p className="wc-checked">Ergebnis für <strong>{data.finalUrl}</strong></p>
                        <div className="wc-facts">
                            <div className="wc-fact"><strong>{fmtMs(c.ttfbMs)}</strong><span>Server-Antwort</span></div>
                            <div className="wc-fact"><strong>{c.htmlKb} KB</strong><span>HTML der Startseite</span></div>
                            <div className="wc-fact"><strong>{c.scripts}</strong><span>Externe Skripte</span></div>
                            <div className="wc-fact"><strong>{c.redirects}</strong><span>Weiterleitungen</span></div>
                        </div>

                        <h3 className="wc-subtitle">Ladezeit und Technik</h3>
                        <ul className="wc-checks">
                            <CheckRow ok={ttfbState === 'ok'} warn={ttfbState === 'warn'} label="Server-Antwortzeit" detail={`${fmtMs(c.ttfbMs)} bis zum ersten Byte (gut: bis 0,8 s)`} />
                            <CheckRow ok={c.compressed} label="Komprimierung" detail={c.compressed ? 'aktiv (gzip oder Brotli)' : 'fehlt, die Seite wird unkomprimiert übertragen'} />
                            <CheckRow ok={c.https} label="HTTPS-Verschlüsselung" detail={c.https ? 'aktiv' : 'fehlt, Browser warnen vor der Seite'} />
                            <CheckRow ok={c.redirects <= 1} warn={c.redirects > 1} label="Weiterleitungen" detail={c.redirects <= 1 ? `${c.redirects} bis zur Startseite` : `${c.redirects} hintereinander, jede kostet Zeit`} />
                            <CheckRow ok={c.viewport} label="Mobile Darstellung (Viewport)" detail={c.viewport ? 'Angabe vorhanden' : 'fehlt, auf dem Handy wird die Seite verkleinert'} />
                            <CheckRow ok={!c.googleFonts} warn={c.googleFonts} label="Schriften" detail={c.googleFonts ? 'werden von Google-Servern geladen, datenschutzrechtlich prüfen' : 'keine Google-Fonts-Einbindung gefunden'} />
                        </ul>

                        <h3 className="wc-subtitle">SEO-Grundlagen</h3>
                        <ul className="wc-checks">
                            <CheckRow ok={!c.noindex} label="Indexierung erlaubt" detail={c.noindex ? 'noindex gesetzt, Google nimmt die Seite nicht auf' : 'kein noindex gefunden'} />
                            <CheckRow ok={titleOk} warn={c.titleLength > 0 && !titleOk} label="Seitentitel" detail={c.titleLength === 0 ? 'fehlt' : `${c.titleLength} Zeichen (Richtwert: 30 bis 65)`} />
                            <CheckRow ok={descOk} warn={c.descriptionLength > 0 && !descOk} label="Meta-Beschreibung" detail={c.descriptionLength === 0 ? 'fehlt, Google wählt den Text selbst' : `${c.descriptionLength} Zeichen (Richtwert: 70 bis 160)`} />
                            <CheckRow ok={c.h1Count === 1} warn={c.h1Count > 1} label="H1-Überschrift" detail={c.h1Count === 1 ? 'genau eine' : c.h1Count === 0 ? 'fehlt' : `${c.h1Count} gefunden (üblich: eine)`} />
                            <CheckRow ok={Boolean(c.lang)} label="Sprachangabe" detail={c.lang ? `lang="${c.lang}"` : 'fehlt im html-Element'} />
                            <CheckRow ok={c.canonical} warn={!c.canonical} label="Canonical-Angabe" detail={c.canonical ? 'vorhanden' : 'nicht gefunden'} />
                            <CheckRow ok={c.structuredData} warn={!c.structuredData} label="Strukturierte Daten" detail={c.structuredData ? 'JSON-LD vorhanden' : 'kein JSON-LD gefunden'} />
                            <CheckRow ok={c.imgsNoAlt === 0} warn={c.imgsNoAlt > 0} label="Alternativtexte" detail={c.images === 0 ? 'keine Bilder im HTML' : c.imgsNoAlt === 0 ? `alle ${c.images} Bilder haben ein alt-Attribut` : `${c.imgsNoAlt} von ${c.images} Bildern ohne alt-Attribut`} />
                            <CheckRow ok={c.robotsTxt} warn={!c.robotsTxt} label="robots.txt" detail={c.robotsTxt ? 'vorhanden' : 'nicht gefunden'} />
                            <CheckRow ok={c.sitemap} label="XML-Sitemap" detail={c.sitemap ? 'gefunden' : 'nicht gefunden'} />
                        </ul>

                        <div className="wc-verdict">
                            <p>
                                {fails >= 3
                                    ? `${fails} Punkte sind rot. Jeder davon kostet Sie Besucher, und damit Anfragen.`
                                    : fails > 0
                                        ? 'Die Basis steht, aber nicht vollständig. Die roten Punkte sind meist schnell behoben.'
                                        : 'Die technische Basis ist sauber. Ob Ihre Seite auch Anfragen bringt, zeigt erst der Blick auf Inhalte, Rankings und den Weg zur Anfrage.'}
                                {' '}Die echten Ladezeiten aus Nutzersicht (Core Web Vitals) messen Sie bei{' '}
                                <a href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(data.finalUrl)}`} target="_blank" rel="noopener nofollow">PageSpeed Insights</a>.
                            </p>
                            <Link
                                href={`/kontakt?website=${encodeURIComponent(checkedUrl)}`}
                                className="button button-primary button-large"
                                data-umami-event="cta-click"
                                data-umami-event-location="website-check"
                            >
                                Persönliches Website-Audit anfordern
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
