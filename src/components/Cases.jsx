import React from 'react';

export default function Cases() {
    return (
        <section id="cases" className="cases section section-divider-top section-divider-bottom">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">So arbeiten wir</p>
                    <h2 className="section-title animate-up">Vom Erstgesprach zum Ergebnis.</h2>
                </div>

                <div className="process-timeline mt-5">
                    <div className="process-step animate-up">
                        <div className="step-num">01</div>
                        <h4>Analyse</h4>
                        <p>Marktforschung, Wettbewerbsanalyse und Zielsetzung fur Ihr Unternehmen.</p>
                    </div>
                    <div className="process-step animate-up delay-1">
                        <div className="step-num">02</div>
                        <h4>Strategie</h4>
                        <p>Klare Seitenstruktur und Conversion-Pfade, die Besucher zu Kunden machen.</p>
                    </div>
                    <div className="process-step animate-up delay-2">
                        <div className="step-num">03</div>
                        <h4>Umsetzung</h4>
                        <p>Schnelle, technisch einwandfreie Entwicklung mit Fokus auf Performance.</p>
                    </div>
                    <div className="process-step animate-up delay-3">
                        <div className="step-num">04</div>
                        <h4>Wachstum</h4>
                        <p>SEO, Ads und laufende Optimierung fur nachhaltige Sichtbarkeit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
