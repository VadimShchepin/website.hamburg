import React from 'react';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            slug: 'webdesign',
            title: 'Webdesign & Entwicklung',
            desc: 'Schnelle, konversionsstarke Websites mit klarer Struktur. Kein Baukasten, sondern individuell entwickelt fur Ihr Geschaft.',
            points: ['Responsive Design', 'PageSpeed 100/100', 'Klare Nutzerfuhrung', 'CMS oder Custom'],
            price: 'Ab 2.000',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
            ),
        },
        {
            slug: 'seo',
            title: 'SEO & AI-Sichtbarkeit',
            desc: 'Sichtbar werden, wo Ihre Kunden suchen: Google, Google Maps, ChatGPT und Perplexity.',
            points: ['Lokale SEO-Strategie', 'Technisches SEO', 'Content-Optimierung', 'AI Search Ready'],
            price: 'Ab 1.000/Mt.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            ),
        },
        {
            slug: 'google-ads',
            title: 'Google & Local Ads',
            desc: 'Kampagnen die echte Anfragen generieren. Messbar, prazise, auf ROI optimiert.',
            points: ['Google Search Ads', 'Local Services Ads', 'Conversion Tracking', 'Monatliches Reporting'],
            price: 'Ab 500/Mt.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
        },
        {
            slug: 'website-audit',
            title: 'Website-Audit',
            desc: 'Kostenlose Analyse Ihrer aktuellen Website: Geschwindigkeit, SEO, Struktur und Conversion-Potenzial.',
            points: ['Performance-Check', 'SEO-Analyse', 'Conversion-Bewertung', 'Konkrete Handlungsempfehlungen'],
            price: 'Kostenlos',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">Leistungen</p>
                    <h2 className="section-title animate-up">Alles aus einer Hand.</h2>
                    <p className="section-desc animate-up">Strategie, Design, Entwicklung und Marketing, alles aufeinander abgestimmt.</p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <Link key={i} href={`/leistungen/${s.slug}`} className={`service-card market-frame animate-up delay-${(i % 3) + 1}`}>
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <ul className="service-points">
                                {s.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                            <div className="service-card-price">{s.price}</div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-5 animate-up">
                    <Link href="/leistungen" className="button">Alle Leistungen & Preise ansehen</Link>
                </div>
            </div>
        </section>
    );
}
