import React from 'react';

export default function ProblemSolution() {
    return (
        <section id="problem" className="problem-solution section light-bg section-divider-bottom">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">Problem & Lösung</p>
                    <h2 className="section-title animate-up">Die meisten Firmenwebsites funktionieren nicht.</h2>
                    <p className="section-desc animate-up">Ihre kann anders sein. Der Unterschied liegt nicht im Design, sondern im System dahinter.</p>
                </div>
                <div className="two-col-layout ps-grid">
                    <div className="ps-col ps-col-problem animate-up">
                        <h3>Woran Websites scheitern</h3>
                        <ul className="x-list">
                            <li><strong>Langsame Ladezeiten:</strong> Besucher springen ab, bevor die Seite geladen ist.</li>
                            <li><strong>Design ohne Nutzerführung:</strong> Dekoration statt rotem Faden.</li>
                            <li><strong>Keine Conversion-Strategie:</strong> Besucher kommen, aber es gibt keinen klaren Weg zur Anfrage.</li>
                            <li><strong>Agenturen, die nicht liefern:</strong> Schöne Präsentation, keine Ergebnisse.</li>
                        </ul>
                    </div>
                    <div className="ps-col ps-col-solution blue-border-left animate-up delay-2">
                        <h3>Was wir anders machen</h3>
                        <ul className="check-list">
                            <li><strong>Marktanalyse:</strong> Verstehen, was Ihre Kunden wirklich suchen.</li>
                            <li><strong>Klarer Conversion-Pfad</strong> von der ersten Sekunde bis zur Anfrage.</li>
                            <li><strong>Blitzschnelle Technik:</strong> 100/100 PageSpeed bei jedem Projekt.</li>
                            <li><strong>Volle Transparenz:</strong> Monatliche Reports mit echten Zahlen. Ihre Daten und Zugänge gehören Ihnen.</li>
                        </ul>
                    </div>
                </div>
                <p className="ps-cta-hint text-center animate-up">
                    Wo steht Ihre Website? <a href="#website-check">Machen Sie den kostenlosen 60-Sekunden-Check ↓</a>
                </p>
            </div>
        </section>
    );
}
