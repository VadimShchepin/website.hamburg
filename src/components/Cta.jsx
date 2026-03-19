import React from 'react';
import Link from 'next/link';

export default function Cta() {
    return (
        <section id="cta" className="final-cta section">
            <div className="container">
                <div className="cta-box bull-boundary animate-up">
                    <p className="section-kicker">Bereit?</p>
                    <h2 className="section-title">Lassen Sie uns Ihr Wachstum starten.</h2>
                    <p className="offer-framing">Kostenlose Website-Analyse: Wir prufen Geschwindigkeit, SEO, Struktur und Conversion-Potenzial Ihrer aktuellen Website — unverbindlich und konkret.</p>
                    <div className="cta-actions mt-4">
                        <Link href="/kontakt" className="button button-primary button-large">
                            Jetzt Analyse anfordern
                        </Link>
                        <a href="tel:+4917632194754" className="cta-phone">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            0176 / 321 94 754
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
