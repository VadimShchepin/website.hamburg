import React from 'react';

export default function Problem() {
    const problems = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
            ),
            title: 'Langsame Websites',
            desc: 'Besucher verlassen die Seite, bevor sie geladen hat. Geschwindigkeit entscheidet.'
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
            ),
            title: 'Veraltetes Design',
            desc: 'Dekoration statt klarer Nutzerfuhrung. Kein roter Faden, keine Struktur.'
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
            ),
            title: 'Keine Conversion-Strategie',
            desc: 'Besucher kommen, aber es gibt keinen klaren Weg zur Anfrage.'
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
            ),
            title: 'Agenturen, die nicht liefern',
            desc: 'Schone Prasentation, keine Ergebnisse. Vertrage statt Verantwortung. Sie zahlen und warten.'
        },
    ];

    return (
        <section id="problem" className="problem section light-bg section-divider-bottom">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">Das Problem</p>
                    <h2 className="section-title animate-up">Die meisten Firmenwebsites funktionieren nicht.</h2>
                    <p className="section-desc animate-up">Und die meisten Unternehmer wissen es nicht einmal.</p>
                </div>
                <div className="problem-grid">
                    {problems.map((p, i) => (
                        <div key={i} className={`problem-card animate-up delay-${(i % 3) + 1}`}>
                            <div className="problem-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
