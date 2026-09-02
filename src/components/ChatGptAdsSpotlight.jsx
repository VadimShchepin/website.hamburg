import React from 'react';
import Link from 'next/link';

const timeline = [
    { date: '24.08.2026', label: 'Anzeigen in Deutschland live' },
    { date: '31.08.2026', label: 'Self-Service-Zugang offen' },
    { date: '01.09.2026', label: 'meine ersten Kampagnen' },
];

export default function ChatGptAdsSpotlight() {
    return (
        <section className="cga-spotlight section light-bg">
            <div className="container">
                <div className="cga-grid">
                    <div className="cga-body">
                        <p className="cga-eyebrow animate-up">
                            <span className="cga-badge">Neu</span>
                            <span className="cga-eyebrow-text">ChatGPT Ads, Deutschland</span>
                        </p>
                        <h2 className="cga-title animate-up">
                            Werbung in ChatGPT?
                            <span className="cga-title-accent">Läuft bei mir bereits.</span>
                        </h2>
                        <p className="cga-text animate-up">
                            Seit dem 24. August 2026 sieht Deutschland Anzeigen in ChatGPT, seit dem 31. August kann sie jedes Unternehmen selbst buchen. Ich fahre seit dem ersten Tag eigene Kampagnen im Ads Manager und baue Ihnen dasselbe Setup auf: Konto, Gebote, Anzeigen und ein Conversion-Tracking, das vor dem Datenschutz besteht.
                        </p>
                        <div className="cga-timeline animate-up">
                            {timeline.map((t) => (
                                <div key={t.date} className="cga-tl-item">
                                    <span className="cga-tl-date">{t.date}</span>
                                    <span className="cga-tl-label">{t.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="cga-actions animate-up">
                            <Link href="/leistungen/chatgpt-ads" className="button button-primary" data-umami-event="home-chatgpt-ads-cta">
                                ChatGPT Ads schalten
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                            <Link href="/kontakt" className="cga-secondary-link">Oder erst im 15-Minuten-Call prüfen lassen</Link>
                        </div>
                    </div>

                    <figure className="cga-media animate-up">
                        <div className="cga-media-frame">
                            <img
                                src="/leistungen/fotos/chatgpt-ads-anzeige-live.webp"
                                alt="Anzeige von AISEO Hamburg in ChatGPT: Foto, Absendername, Anzeigen-Label, Titel und Beschreibung"
                                width="732"
                                height="274"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <figcaption>Keine Illustration: meine eigene Anzeige, wie ChatGPT sie ausliefert. Screenshot aus dem Ads Manager, 1. September 2026.</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
