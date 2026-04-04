import React from 'react';

export default function TrustStrip() {
    return (
        <section className="trust-strip">
            <div className="container">
                <div className="trust-items">
                    <div className="trust-item">
                        <span className="trust-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </span>
                        <span>Google Ads Experte</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        </span>
                        <span>100/100 PageSpeed</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </span>
                        <span>10+ Jahre Erfahrung</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </span>
                        <span>Datenbasierte Strategie</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
