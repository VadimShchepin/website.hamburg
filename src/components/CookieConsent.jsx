'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-label="Cookie-Hinweis">
            <div className="cookie-banner-inner">
                <p>
                    Wir nutzen datenschutzfreundliche Analyse-Tools, um unsere Website zu verbessern. Keine personenbezogenen Daten, keine Cookies.{' '}
                    <Link href="/datenschutz">Mehr erfahren</Link>
                </p>
                <div className="cookie-actions">
                    <button onClick={accept} className="button button-primary button-sm">Einverstanden</button>
                    <button onClick={decline} className="cookie-decline">Ablehnen</button>
                </div>
            </div>
        </div>
    );
}
