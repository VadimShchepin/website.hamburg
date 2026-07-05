import React from 'react';

const results = [
    { metric: '~40 Kunden/Monat', client: 'Blitz Hamburg' },
    { metric: '728 lokale Aktionen/Mt.', client: 'GL Sommer' },
    { metric: '2× organischer Traffic', client: 'DYBeauty' },
    { metric: '50+ Projekte', client: 'in 10+ Jahren geliefert' },
];

export default function TrustStrip() {
    return (
        <section className="trust-strip">
            <div className="container">
                <p className="trust-strip-label">Messbare Ergebnisse für Hamburger Unternehmen</p>
                <div className="trust-items">
                    {results.map((r, i) => (
                        <div key={i} className="trust-item trust-item-result">
                            <span className="trust-metric">{r.metric}</span>
                            <span className="trust-client">{r.client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
