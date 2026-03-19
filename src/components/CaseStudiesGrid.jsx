import React from 'react';
import Link from 'next/link';

export default function CaseStudiesGrid() {
    const cases = [
        {
            id: 1,
            tag: 'WEBDESIGN + ADS',
            title: 'Blitz Hamburg: Von Null auf stabile Auftragslage',
            desc: 'Website, Google Ads und organische Sichtbarkeit fur einen Handwerksbetrieb in Hamburg. Innerhalb weniger Wochen: top Google-Positionen, gewonnene Auktionen und ein stetiger Strom qualifizierter Anfragen.',
            url: '/referenzen/blitz-hamburg',
            internal: true,
            results: ['Top-Positionen in Google', 'Stabile Kundengewinnung', '5.0 Sterne, 24 Bewertungen'],
        },
        {
            id: 2,
            tag: 'APP + AI SEO',
            title: 'KinderAlbum: Platz 1 in ChatGPT, Perplexity & Google AI',
            desc: 'DSGVO-konforme Schulfotos-App mit Hunderten aktiven Nutzern. Durch strukturierte Daten und AI-SEO-Strategie: erste Platze in allen grossen AI-Suchsystemen — ein echtes Praxisbeispiel fur AI-Sichtbarkeit.',
            url: 'https://dsgvoschulfotos.de/',
            results: ['#1 in ChatGPT & Perplexity', 'Hunderte aktive Nutzer', 'Echtes Problem gelost'],
        },
        {
            id: 3,
            tag: 'WEBSITE + SYSTEM',
            title: 'Solovei Beauty: 5.000 Impressionen in 2 Monaten',
            desc: 'Website mit integriertem Buchungssystem, Vertragsmanagement, Rollen und Kommunikation fur einen Beauty-Coworking-Space. Ergebnis: voll ausgebuchte Arbeitsplatze in kurzester Zeit.',
            url: 'https://www.solovei-beauty.com/de',
            results: ['5.000 Impressionen in 8 Wochen', 'Komplettes Buchungssystem', 'Voll ausgebuchte Platze'],
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
                                <span className="case-tag">{item.tag}</span>
                                <h3 className="case-title">{item.title}</h3>
                                <p className="case-desc">{item.desc}</p>
                                <ul className="case-results">
                                    {item.results.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                                <span className="case-link">
                                    {item.internal ? 'Case Study lesen' : 'Projekt ansehen'}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                                </span>
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
            </div>
        </section>
    );
}
