import React from 'react';

export default function QualityTransparency() {
    return (
        <section id="quality" className="quality-transparency section light-bg">
            <div className="container">
                <div className="two-col-layout">
                    <div className="quality-block animate-up">
                        <div className="qt-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                        </div>
                        <h2 className="section-title">Wir liefern. Punkt.</h2>
                        <p className="large-text">Viele Agenturen verkaufen Websites. Wir bauen Maschinen, die Kunden bringen — und horen erst auf, wenn die Ergebnisse stehen.</p>
                        <ul className="check-list mt-4">
                            <li>Blitzschnelle Ladezeiten — 100/100 bei jedem Projekt</li>
                            <li>Durchdachte Conversion-Logik statt hubscher Deko</li>
                            <li>Ergebnisse in Wochen, nicht in Quartalen</li>
                        </ul>
                    </div>
                    <div className="transparency-block blue-border-left animate-up delay-2">
                        <div className="qt-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                            </svg>
                        </div>
                        <h2 className="section-title">Sie wissen immer, was passiert</h2>
                        <p className="large-text">Kein Versteckspiel. Echte Zahlen, direkte Kommunikation, monatliche Reports. Wenn etwas nicht funktioniert, sagen wir es — und fixen es.</p>
                        <ul className="check-list mt-4">
                            <li>Monatliche Performance-Reports mit echten KPIs</li>
                            <li>Direkte Kommunikation — kein Agentur-Sprech</li>
                            <li>Ihre Daten und Zugange gehoren Ihnen. Immer.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
