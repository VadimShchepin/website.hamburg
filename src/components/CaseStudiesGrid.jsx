import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GOOGLE_STAR = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const GOOGLE_ICON = (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const reviews = [
    {
        name: 'ZumaXX',
        text: 'Ausgezeichneter Webentwickler! Er hat die Arbeit qualitativ hochwertig und termingerecht erledigt. Er hat fur uns eine Website erstellt, die unseren Erwartungen vollstandig entspricht. Sehr zu empfehlen!',
    },
    {
        name: 'Alexey Karasev',
        text: 'Vadim hat super Arbeit geleistet. Er hat sehr schnell zugestimmt, sich mit mir getroffen und alles professionell umgesetzt.',
    },
    {
        name: 'J. Landon',
        text: 'Wir waren sehr zufrieden. Vielen Dank fur die tolle Unterstutzung.',
    },
    {
        name: 'steiko',
        text: 'Herr Shchepin hat meinem Unternehmen gut mit der Webseite und Aktualisierung unseres internen Tool fur Datenpflege geholfen. Schnelle Umsetzung und Kompetente Kundenorientierte Beratung! Kann ich nur empfehlen!',
    },
];

export default function CaseStudiesGrid() {
    const cases = [
        {
            id: 1,
            tag: 'SEO + ADS + REDESIGN',
            title: 'GL Sommer: 728 lokale Aktionen pro Monat',
            desc: 'Hamburgs etabliertes GaLaBau-Unternehmen — Website modernisiert, SEO-Audit von 34/100 aufwarts, Google Ads mit 1.113 Klicks und 728 lokalen Aktionen bei nur 529 EUR Monatsbudget.',
            url: '/referenzen/gl-sommer',
            internal: true,
            image: '/referenzen/previews/Blitz-alternative1-hero-section.webp',
            results: ['728 lokale Aktionen / Monat', '19 Conversions bei 529 EUR', 'SEO-Score von 34 aufwarts'],
        },
        {
            id: 2,
            tag: 'E-COMMERCE SEO',
            title: 'DYBeauty: Organischen Traffic verdoppelt in 90 Tagen',
            desc: 'K-Beauty Shopify-Shop ohne SEO-Grundlage — 723 Produkte optimiert, Google Merchant Center aufgebaut, Content-Strategie. Ergebnis: Traffic verdoppelt, 78.500 Impressionen.',
            url: '/referenzen/dybeauty',
            internal: true,
            image: '/referenzen/previews/solovei-hero-section.webp',
            results: ['2x organischer Traffic', '723 Produkte optimiert', '78.500 Impressionen in 90 Tagen'],
        },
        {
            id: 3,
            tag: 'WEBDESIGN + ADS',
            title: 'Blitz Hamburg: ROI in 7 Wochen, ~40 Kunden/Monat',
            desc: 'Handwerksbetrieb ohne Online-Prasenz — neue Website mit KI-Kostenschatzer, Google Ads und lokale SEO. Investition in 7 Wochen zuruckgeholt, heute ~40 Kunden pro Monat.',
            url: '/referenzen/blitz-hamburg',
            internal: true,
            image: '/referenzen/previews/Blitz-alternative1-hero-section.webp',
            results: ['ROI in 7 Wochen', '~40 Kunden / Monat', '72 getrackte Interaktionen / Monat'],
        },
    ];

    return (
        <section id="work" className="case-studies section" style={{ paddingTop: 'var(--space-md)' }}>
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">Referenzen</p>
                    <h2 className="section-title animate-up">Echte Projekte. Echte Ergebnisse.</h2>
                </div>
                <div className="cases-grid">
                    {cases.map((item, index) => {
                        const className = `case-card animate-up delay-${(index % 3) + 1}`;
                        const content = (
                            <>
                                <div className="case-image-wrap">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} — Website Screenshot`}
                                            width={1200}
                                            height={781}
                                            quality={80}
                                            className="case-image"
                                        />
                                    ) : (
                                        <div className="case-image-placeholder" />
                                    )}
                                    <div className="case-image-overlay">
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                                <div className="case-body">
                                    <span className="case-tag">{item.tag}</span>
                                    <h3 className="case-title">{item.title}</h3>
                                    <ul className="case-results">
                                        {item.results.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                    <span className="case-link">
                                        {item.internal ? 'Case Study lesen' : 'Projekt ansehen'}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                    </span>
                                </div>
                            </>
                        );

                        return item.internal ? (
                            <Link key={item.id} href={item.url} className={className}>
                                {content}
                            </Link>
                        ) : (
                            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className={className}>
                                {content}
                            </a>
                        );
                    })}
                </div>

                {/* Google Reviews */}
                <div className="google-reviews animate-up">
                    <div className="google-reviews-header">
                        <a href="https://share.google/Ta1IQevSFQFxhXvvn" target="_blank" rel="noopener noreferrer" className="google-reviews-badge" title="Alle Google-Bewertungen ansehen">
                            {GOOGLE_ICON}
                            <span className="google-reviews-score">5.0</span>
                            <span className="google-reviews-stars">
                                {GOOGLE_STAR}{GOOGLE_STAR}{GOOGLE_STAR}{GOOGLE_STAR}{GOOGLE_STAR}
                            </span>
                        </a>
                    </div>
                    <div className="google-reviews-grid">
                        {reviews.map((r, i) => (
                            <div key={i} className="google-review-card">
                                <div className="google-review-top">
                                    <div className="google-review-avatar">{r.name[0]}</div>
                                    <div>
                                        <strong className="google-review-name">{r.name}</strong>
                                        <div className="google-review-stars">
                                            {GOOGLE_STAR}{GOOGLE_STAR}{GOOGLE_STAR}{GOOGLE_STAR}{GOOGLE_STAR}
                                        </div>
                                    </div>
                                </div>
                                <p className="google-review-text">{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
