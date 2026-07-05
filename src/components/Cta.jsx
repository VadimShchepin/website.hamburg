'use client';

import React from 'react';
import Link from 'next/link';

function getAvailability() {
    const now = new Date();
    const countByMonth = [3, 5, 2, 4, 3, 2, 5, 4, 3, 5, 2, 4];
    const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    return {
        count: countByMonth[now.getMonth()],
        nextMonth: monthNames[(now.getMonth() + 1) % 12],
    };
}

export default function Cta() {
    const { count, nextMonth } = getAvailability();
    return (
        <section id="cta" className="final-cta section">
            <div className="container">
                <div className="cta-box bull-boundary animate-up">
                    <p className="section-kicker">Bereit?</p>
                    <h2 className="section-title">Lassen Sie uns Ihr Wachstum starten.</h2>
                    <p className="offer-framing">Fordern Sie die kostenlose Website-Analyse an. Das bekommen Sie, unverbindlich und ohne Verkaufsgespräch:</p>
                    <ul className="cta-deliverables">
                        <li>Ladezeit- und PageSpeed-Report Ihrer Website</li>
                        <li>SEO-Quick-Check: Sichtbarkeit, Struktur, Technik</li>
                        <li>3 konkrete Verbesserungsvorschläge, innerhalb von 48 h</li>
                    </ul>
                    <p className="cta-urgency">Noch {count} Projektplätze frei im {nextMonth}, danach Warteliste.</p>
                    <div className="cta-actions mt-4">
                        <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="cta-section">
                            Jetzt Analyse anfordern
                        </Link>
                        <a href="tel:+4917632194754" className="cta-phone" data-umami-event="phone-call" data-umami-event-location="cta-section">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            0176 / 321 94 754
                        </a>
                        <a href="https://wa.me/4917632194754" target="_blank" rel="noopener noreferrer" className="cta-phone" data-umami-event="whatsapp-click" data-umami-event-location="cta-section">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
