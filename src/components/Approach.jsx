import React from 'react';

export default function Approach() {
    return (
        <section id="approach" className="approach section light-bg">
            <div className="container">
                <div className="two-col-layout items-center">
                    <div className="text-col">
                        <p className="section-kicker animate-up">Unser Ansatz</p>
                        <h2 className="section-title animate-up">Websites die arbeiten — nicht nur existieren.</h2>
                        <p className="large-text animate-up">Wir verkaufen kein Design. Wir bauen ein System, das Kunden bringt. Jede Entscheidung basiert auf Daten, nicht auf Geschmack.</p>
                        <ul className="check-list mt-4 animate-up">
                            <li><strong>Marktanalyse:</strong> Verstehen, was Ihre Kunden wirklich suchen.</li>
                            <li><strong>Struktur:</strong> Klarer Conversion-Pfad von Anfang an.</li>
                            <li><strong>Performance:</strong> Blitzschnelle Ladezeiten, technisch einwandfrei.</li>
                            <li><strong>Sichtbarkeit:</strong> SEO und Ads, die qualifizierte Anfragen bringen.</li>
                        </ul>
                    </div>
                    <div className="visual-col">
                        <div className="market-frame content-frame animate-up">
                            <h3>Strategie + Umsetzung</h3>
                            <p>Ihre Website wird zum Geschaftsinstrument — nicht nur ein Design-Projekt.</p>
                            <div className="frame-stats">
                                <div className="frame-stat">
                                    <span className="frame-stat-value">0.8s</span>
                                    <span className="frame-stat-label">Avg. Ladezeit</span>
                                </div>
                                <div className="frame-stat">
                                    <span className="frame-stat-value">3x</span>
                                    <span className="frame-stat-label">Mehr Anfragen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
