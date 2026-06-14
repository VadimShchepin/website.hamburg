'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const I = {
    compass: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>,
    cart: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
    bolt: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    plug: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M9 2v6" /><path d="M15 2v6" /><path d="M7 8h10v3a5 5 0 0 1-10 0V8z" /><path d="M12 16v6" /></svg>,
    pen: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    megaphone: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>,
};

const SERVICES = [
    {
        icon: I.compass,
        title: 'Strategie & Beratung',
        short: 'Wir wählen mit Ihnen das passende System und planen den Shop, bevor jemand Code schreibt.',
        detail: 'Bevor wir bauen, klären wir die Grundlagen. Welches System passt zu Ihrem Sortiment und Ihren Plänen? Wo verlieren Sie heute Umsatz? Wir schauen uns Markt und Wettbewerb an und geben eine ehrliche Empfehlung. An Lizenzen verdienen wir nichts, also raten wir zu dem, was für Sie funktioniert.',
        includes: ['Systemvergleich: Shopify, Shopware, WooCommerce oder Custom', 'Sortiments- und Zielgruppenanalyse', 'Wettbewerbs-Check', 'Grobe Roadmap und Budgetrahmen'],
    },
    {
        icon: I.cart,
        title: 'Shop-Entwicklung',
        short: 'Neubau oder Umzug auf ein neues System. Schnell, sicher und für mobile Käufer gebaut.',
        detail: 'Wir bauen den Shop von Grund auf oder ziehen Ihren bestehenden auf ein neues System um, ohne dass Bestellungen oder Google-Rankings verloren gehen. Tempo steht dabei im Mittelpunkt: schnelle Ladezeiten und grüne Core Web Vitals, weil langsame Shops Käufer kosten.',
        includes: ['Theme- oder Headless-Entwicklung', 'Reibungsloser Checkout und gängige Zahlungsarten', 'Mobile-First, getestet auf echten Geräten', 'Datenmigration und sauberer Go-live'],
    },
    {
        icon: I.bolt,
        title: 'Erweiterung & Optimierung',
        short: 'Ihr Shop steht schon? Wir machen ihn schneller, größer und verkaufsstärker.',
        detail: 'Nicht jedes Projekt braucht einen Relaunch. Oft reicht es, an den richtigen Stellen anzusetzen: neue Funktionen, mehr Tempo, ein besserer Checkout. Wir starten mit einem Blick auf den Ist-Zustand und sagen Ihnen ehrlich, was sich lohnt.',
        includes: ['Neue Funktionen und eigene Plugins oder Apps', 'Performance-Tuning für bessere Core Web Vitals', 'Conversion-Optimierung am Checkout und an Produktseiten', 'Laufende Pflege und Fehlerbehebung'],
    },
    {
        icon: I.plug,
        title: 'Schnittstellen',
        short: 'Wir verbinden Ihren Shop mit den Systemen, mit denen Sie ohnehin arbeiten.',
        detail: 'Ein Shop steht selten allein. Wir binden ihn an Ihre Warenwirtschaft, Buchhaltung und Versanddienstleister an und spielen Ihre Produkte auf Marktplätzen aus. So fließen Daten automatisch dorthin, wo sie gebraucht werden.',
        includes: ['Warenwirtschaft und ERP', 'Zahlungsanbieter und Versanddienstleister', 'Buchhaltung und DATEV-Export', 'Marktplätze: Amazon, eBay, Otto'],
    },
    {
        icon: I.pen,
        title: 'Content & Produkttexte',
        short: 'Texte, die verkaufen und bei Google gefunden werden, über das ganze Sortiment.',
        detail: 'Gute Produkte verkaufen sich nicht von selbst, wenn die Texte nicht stimmen. Wir schreiben Produkt- und Kategorietexte, die Käufer überzeugen und gleichzeitig zu dem passen, wonach Menschen wirklich suchen. Auch bei großen Sortimenten bleibt das konsistent.',
        includes: ['Produkttexte mit klarer Suchintention', 'Kategorie- und Ratgebertexte', 'Bildoptimierung und Alt-Texte', 'SEO-Struktur über das gesamte Sortiment'],
    },
    {
        icon: I.megaphone,
        title: 'Marketing & Wachstum',
        short: 'Ein fertiger Shop ist der Anfang. Danach sorgen wir für Besucher und Käufer.',
        detail: 'Damit aus dem Shop Umsatz wird, braucht es Reichweite. Wir kümmern uns um SEO und Google Ads, halten Ihre Produktdaten im Merchant Center sauber und arbeiten daran, mehr Besucher zu Käufern zu machen. Was funktioniert, sehen Sie im monatlichen Reporting.',
        includes: ['SEO und lokale Sichtbarkeit', 'Google Ads und Shopping-Kampagnen', 'Google Merchant Center und Feed-Management', 'Conversion-Optimierung und Reporting'],
    },
];

export default function EcomServices() {
    const [open, setOpen] = useState(null);
    const active = open !== null ? SERVICES[open] : null;

    const close = useCallback(() => setOpen(null), []);

    useEffect(() => {
        if (open === null) return undefined;
        const onKey = (e) => { if (e.key === 'Escape') close(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, close]);

    return (
        <>
            <div className="services-grid">
                {SERVICES.map((s, i) => (
                    <button
                        key={s.title}
                        type="button"
                        className={`service-card market-frame ecx-service-btn animate-up delay-${(i % 3) + 1}`}
                        onClick={() => setOpen(i)}
                        aria-haspopup="dialog"
                    >
                        <div className="service-icon">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.short}</p>
                        <span className="ecx-service-more">Mehr erfahren
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </span>
                    </button>
                ))}
            </div>

            {active && (
                <div className="ecx-modal-backdrop" onClick={close} role="presentation">
                    <div className="ecx-modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="ecx-modal-close" onClick={close} aria-label="Schließen">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </button>
                        <div className="ecx-modal-icon">{active.icon}</div>
                        <h3 className="ecx-modal-title">{active.title}</h3>
                        <p className="ecx-modal-detail">{active.detail}</p>
                        <p className="ecx-modal-label">Das steckt drin</p>
                        <ul className="ecx-modal-list">
                            {active.includes.map((item) => (
                                <li key={item}>
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="button button-primary" onClick={close} data-umami-event="cta-click" data-umami-event-location="ecom-service-modal">
                            Dazu beraten lassen
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
