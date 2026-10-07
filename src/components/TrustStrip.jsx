import React from 'react';

const results = [
    { metric: '24 auf 374 Google-Klicks/Mt.', client: 'Blitz Hamburg' },
    { metric: '23 auf 792 Google-Klicks/Mt.', client: 'KinderAlbum' },
    { metric: '2,4× Google-Impressionen', client: 'DYBeauty' },
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
