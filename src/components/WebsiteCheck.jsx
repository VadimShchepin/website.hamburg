'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const STEPS = [
    'Website wird geladen …',
    'Ladezeit wird gemessen (Google PageSpeed) …',
    'SEO-Grundlagen werden geprüft …',
    'Ergebnis wird erstellt …',
];

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

function scoreColor(score) {
    if (score === null) return 'var(--color-text-muted)';
    if (score >= 90) return '#22c55e';
    if (score >= 50) return '#f59e0b';
    return '#E53935';
}

function ScoreRing({ score, label }) {
    const r = 44;
    const c = 2 * Math.PI * r;
    const value = score === null ? 0 : score;
    return (
        <div className="wc-score">
            <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="7" />
                <circle
                    cx="55" cy="55" r={r} fill="none"
                    stroke={scoreColor(score)}
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={c}
                    strokeDashoffset={c - (c * value) / 100}
                    transform="rotate(-90 55 55)"
                    style={{ transition: 'stroke-dashoffset 1.2s ease' }}
                />
                <text x="55" y="62" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="700" fontFamily="var(--font-heading)">
                    {score === null ? '–' : score}
                </text>
            </svg>
            <span className="wc-score-label">{label}</span>
        </div>
    );
}

function CheckRow({ ok, warn, label, detail }) {
    return (
        <li className={`wc-check ${ok ? 'wc-check-ok' : warn ? 'wc-check-warn' : 'wc-check-fail'}`}>
            <span className="wc-check-icon">{ok ? '✓' : warn ? '!' : '✕'}</span>
            <span>
                <strong>{label}</strong>
                {detail ? <em>{detail}</em> : null}
            </span>
        </li>
    );
}

export default function WebsiteCheck() {
    const [url, setUrl] = useState('');
    const [phase, setPhase] = useState('idle'); // idle | running | done | error
    const [step, setStep] = useState(0);
    const [basic, setBasic] = useState(null);
    const [psi, setPsi] = useState(null);
    const [psiFailed, setPsiFailed] = useState(false);
    const [checkedUrl, setCheckedUrl] = useState('');
    const stepTimer = useRef(null);

    useEffect(() => () => clearInterval(stepTimer.current), []);

    const runCheck = async (e) => {
        e.preventDefault();
        const normalized = normalizeUrl(url);
        if (!normalized) {
            setPhase('error');
            return;
        }
        window.umami?.track('website-check-start');
        setPhase('running');
        setStep(0);
        setBasic(null);
        setPsi(null);
        setPsiFailed(false);
        setCheckedUrl(normalized);

        clearInterval(stepTimer.current);
        stepTimer.current = setInterval(() => {
            setStep((s) => Math.min(s + 1, STEPS.length - 1));
        }, 9000);

        const basicPromise = fetch('/api/website-check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: normalized }),
        }).then((r) => r.json()).catch(() => ({ ok: false }));

        // Key is referrer-restricted in Google Cloud console; safe to expose
        const psiKey = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY;
        const psiController = new AbortController();
        const psiTimeout = setTimeout(() => psiController.abort(), 55000);
        const psiPromise = fetch(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(normalized)}&strategy=mobile&category=PERFORMANCE&category=SEO&locale=de${psiKey ? `&key=${psiKey}` : ''}`,
            { signal: psiController.signal }
        ).then((r) => (r.ok ? r.json() : null)).catch(() => null);

        const basicResult = await basicPromise;
        setBasic(basicResult);

        if (!basicResult.ok) {
            clearInterval(stepTimer.current);
            clearTimeout(psiTimeout);
            psiController.abort();
            setPhase('error');
            window.umami?.track('website-check-error');
            return;
        }

        const psiResult = await psiPromise;
        clearTimeout(psiTimeout);
        clearInterval(stepTimer.current);

        if (psiResult?.lighthouseResult?.categories) {
            const cats = psiResult.lighthouseResult.categories;
            setPsi({
                performance: Math.round((cats.performance?.score ?? 0) * 100),
                seo: Math.round((cats.seo?.score ?? 0) * 100),
                lcp: psiResult.lighthouseResult.audits?.['largest-contentful-paint']?.displayValue || null,
            });
        } else {
            setPsiFailed(true);
        }
        setPhase('done');
        window.umami?.track('website-check-done');
    };

    const c = basic?.checks;
    const titleOk = c ? c.titleLength >= 30 && c.titleLength <= 65 : false;
    const descOk = c ? c.descriptionLength >= 50 && c.descriptionLength <= 165 : false;
    const lowScore = psi && (psi.performance < 80 || psi.seo < 80);
    const failedBasics = c ? [!c.https, !titleOk, !descOk, c.h1Count !== 1, !c.viewport].filter(Boolean).length : 0;

    return (
        <section id="website-check" className="website-check section dark-blue-bg">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker" style={{ color: 'rgba(255,255,255,0.6)' }}>Kostenloser Schnelltest</p>
                    <h2 className="section-title" style={{ color: '#fff' }}>Wie gut ist Ihre Website? Der 60-Sekunden-Check.</h2>
                    <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Ladezeit, SEO-Grundlagen und Technik, gemessen mit Google PageSpeed, direkt hier, ohne E-Mail-Adresse.
                    </p>
                </div>

                <form className="wc-form" onSubmit={runCheck}>
                    <input
                        type="text"
                        inputMode="url"
                        placeholder="ihre-website.de"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        aria-label="Ihre Website-Adresse"
                        required
                    />
                    <button type="submit" className="button button-primary button-large" disabled={phase === 'running'}>
                        {phase === 'running' ? 'Läuft …' : 'Jetzt prüfen'}
                    </button>
                </form>

                {phase === 'running' && (
                    <div className="wc-progress" role="status">
                        <span className="availability-dot" />
                        {STEPS[step]}
                    </div>
                )}

                {phase === 'error' && (
                    <div className="wc-error">
                        Diese Adresse war nicht erreichbar. Prüfen Sie die Schreibweise (z.&nbsp;B. <strong>ihre-website.de</strong>) und versuchen Sie es erneut.
                    </div>
                )}

                {phase === 'done' && c && (
                    <div className="wc-results">
                        <div className="wc-scores">
                            {psiFailed ? (
                                <p className="wc-psi-note">Der Google-PageSpeed-Test ist gerade ausgelastet. Hier sind Ihre SEO-Grundlagen, die volle Messung liefere ich in der kostenlosen Analyse nach.</p>
                            ) : (
                                <>
                                    <ScoreRing score={psi?.performance ?? null} label="Performance (Mobil)" />
                                    <ScoreRing score={psi?.seo ?? null} label="SEO-Basis" />
                                    <div className="wc-facts">
                                        {psi?.lcp && <div className="wc-fact"><strong>{psi.lcp}</strong><span>Largest Contentful Paint</span></div>}
                                        <div className="wc-fact"><strong>{(basic.responseMs / 1000).toFixed(1)}s</strong><span>Server-Antwortzeit</span></div>
                                    </div>
                                </>
                            )}
                        </div>

                        <ul className="wc-checks">
                            <CheckRow ok={c.https} label="HTTPS-Verschlüsselung" detail={c.https ? 'aktiv' : 'fehlt, Warnung im Browser'} />
                            <CheckRow ok={titleOk} warn={c.titleLength > 0 && !titleOk} label="Seitentitel" detail={c.titleLength === 0 ? 'fehlt' : `${c.titleLength} Zeichen (optimal: 30 bis 65)`} />
                            <CheckRow ok={descOk} warn={c.descriptionLength > 0 && !descOk} label="Meta-Beschreibung" detail={c.descriptionLength === 0 ? 'fehlt, Google wählt den Text selbst' : `${c.descriptionLength} Zeichen (optimal: 50 bis 165)`} />
                            <CheckRow ok={c.h1Count === 1} warn={c.h1Count > 1} label="H1-Überschrift" detail={c.h1Count === 1 ? 'genau eine, korrekt' : c.h1Count === 0 ? 'fehlt' : `${c.h1Count} gefunden (empfohlen: genau eine)`} />
                            <CheckRow ok={c.viewport} label="Mobile Optimierung (Viewport)" detail={c.viewport ? 'vorhanden' : 'fehlt'} />
                        </ul>

                        <div className="wc-verdict">
                            <p>
                                {lowScore || failedBasics >= 2
                                    ? 'Hier liegt messbares Potenzial. Jeder dieser Punkte kostet Sie Besucher, und damit Anfragen.'
                                    : 'Solide Basis. Wie viel mehr möglich ist, zeigt erst der Blick auf Struktur, Inhalte und Conversion-Pfade.'}
                                {' '}Die kostenlose Analyse zeigt Ihnen die 3 wichtigsten Hebel, konkret und umsetzbar, innerhalb von 48 h.
                            </p>
                            <Link
                                href={`/kontakt?website=${encodeURIComponent(checkedUrl)}`}
                                className="button button-primary button-large"
                                data-umami-event="cta-click"
                                data-umami-event-location="website-check"
                            >
                                Kostenlose vollständige Analyse anfordern
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
