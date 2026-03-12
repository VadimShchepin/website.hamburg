import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqSection from '../../components/FaqSection';
import RelatedServices from '../../components/RelatedServices';
import ServiceCta from '../../components/ServiceCta';
import { BUSINESS } from '../../lib/schema';

const faqItems = [
    { q: 'Wie viel Werbebudget brauche ich?', a: 'Mindestens 500 Euro pro Monat als Werbebudget (zusatzlich zur Management-Fee). Je nach Branche und Wettbewerb kann mehr sinnvoll sein. Im Erstgesprach analysiere ich Ihren Markt und gebe eine realistische Empfehlung. Lieber mit kleinem Budget starten und skalieren als zu viel ausgeben ohne Daten.' },
    { q: 'Wie schnell kommen die ersten Anfragen?', a: 'Oft innerhalb der ersten Woche nach Kampagnenstart. Google Ads sind der schnellste Weg zu qualifizierten Anfragen. Die ersten 2-4 Wochen nutze ich fur Datensammlung und Optimierung, danach wird die Kampagne zunehmend effizienter.' },
    { q: 'Gehort das Google Ads Konto mir?', a: 'Ja, zu 100%. Ich arbeite in Ihrem eigenen Google Ads Konto. Sie haben vollen Zugang zu allen Kampagnen, Kosten und Daten. Wenn Sie morgen wechseln, nehmen Sie alles mit — inklusive aller historischen Daten.' },
    { q: 'Was sind Local Services Ads?', a: 'Local Services Ads erscheinen ganz oben in den Google-Suchergebnissen fur lokale Dienstleister — noch uber den normalen Google Ads. Sie zahlen nur fur tatsachliche Anfragen (Anrufe/Nachrichten), nicht fur Klicks. Besonders effektiv fur Handwerker, Dienstleister und lokale Unternehmen.' },
    { q: 'Kann ich das Werbebudget jederzeit andern?', a: 'Ja. Sie konnen das Budget jederzeit erhohen, senken oder pausieren. Ich empfehle, Anderungen auf Basis der Daten zu treffen — nicht aus dem Bauch heraus. Ich berate Sie ehrlich, wenn ein Budget zu hoch oder zu niedrig ist.' },
    { q: 'Wie messen Sie den Erfolg der Kampagnen?', a: 'Jeder Anruf, jede Anfrage, jeder Kauf wird getrackt und einem Keyword zugeordnet. Sie sehen genau: Was kostet ein Lead? Welche Keywords bringen die besten Kunden? Welcher ROI kommt raus? Monatlicher Report plus Live-Zugang.' },
];

export default function GoogleAdsPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Google Ads & Local Services Ads Management Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://website.hamburg/leistungen/google-ads',
        description: 'Professionelles Google Ads Management fur lokale Unternehmen in Hamburg. Search Ads, Local Services Ads, Conversion Tracking, ROI-Optimierung.',
        offers: { '@type': 'Offer', price: '500', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'Google Ads' }]} />
                    <p className="section-kicker animate-up">Google & Local Ads</p>
                    <h1 className="subpage-title animate-up">Google Ads fur lokale Unternehmen in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Wahrend SEO langfristig wirkt, liefern Google Ads sofort Ergebnisse. Ihre Anzeige erscheint genau in dem Moment, in dem ein potenzieller Kunde nach Ihrer Dienstleistung sucht — heute noch. Jeder Euro wird getrackt, jeder Lead gemessen.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Warum Google Ads fur lokale Unternehmen funktionieren</h2>
                    <p className="animate-up">Google Ads sind kein Glucksspiel — sie sind prazise Kundenakquise. Wenn jemand "Elektriker Hamburg Notdienst" oder "Steuerberater Hamburg Neustadt" googelt, hat diese Person eine unmittelbare Kaufabsicht. Google Ads platzieren Ihr Unternehmen genau vor diese Suchenden.</p>
                    <p className="animate-up">Der Unterschied zwischen professionellem und amateurhaftem Ads-Management: Bei schlechter Verwaltung verbrennen Sie Geld fur irrelevante Klicks. Bei professionellem Management zahlen Sie nur fur Klicks, die tatsachlich zu Anfragen fuhren.</p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Google Search Ads</h3>
                            <p>Ihre Anzeige erscheint, wenn jemand aktiv nach Ihrer Leistung sucht. Prazises Keyword-Targeting, uberzeugende Anzeigentexte und Landingpage-Optimierung fur maximale Conversion.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Local Services Ads</h3>
                            <p>Der Premium-Platz ganz oben in Google — noch uber den normalen Anzeigen. Sie zahlen nur fur echte Anfragen, nicht fur Klicks. Ideal fur Handwerker und Dienstleister.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion Tracking</h3>
                            <p>Jeder Anruf, jedes Formular, jeder Kauf wird einem Keyword zugeordnet. Sie wissen genau, was ein Lead kostet und welche Kampagnen den besten ROI liefern.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Laufende Optimierung</h3>
                            <p>Wochentliche Analyse und Anpassung: Keywords, Gebote, Anzeigentexte, Budgets. Die Kampagne wird kontinuierlich effizienter — weniger Kosten pro Lead, mehr Anfragen.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise und Leistungen</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 500 &euro;/Monat</div>
                        <p>Management-Fee fur Kampagnenerstellung und laufende Optimierung. Ihr Werbebudget lauft uber Ihr eigenes Google-Konto — Sie bestimmen die Hohe und haben volle Kontrolle.</p>
                        <ul className="sp-price-includes">
                            <li>Kampagnen-Setup & Struktur</li>
                            <li>Keyword-Recherche & Wettbewerbsanalyse</li>
                            <li>Anzeigentexte & Erweiterungen</li>
                            <li>Conversion Tracking (Anrufe, Formulare)</li>
                            <li>Landingpage-Empfehlungen</li>
                            <li>Wochentliche Optimierung</li>
                            <li>Monatlicher Performance-Report</li>
                            <li>Ihr Konto, Ihre Daten — voller Zugang</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">Ihr Geld, Ihre Kontrolle — kein Versteckspiel</h2>
                    <p className="animate-up">Viele Agenturen lassen das Werbebudget uber ihr eigenes Konto laufen. Sie sehen nicht, was wirklich ausgegeben wird. Bei mir lauft alles uber Ihr eigenes Google Ads Konto. Sie sehen jeden Cent, jede Kampagne, jedes Ergebnis — in Echtzeit.</p>
                    <p className="animate-up">Im monatlichen Report zeige ich Ihnen klar: Was wurde ausgegeben? Wie viele Anfragen kamen rein? Was kostet ein Lead? Was empfehle ich fur den nachsten Monat und warum? Wenn eine Kampagne nicht funktioniert, sage ich es Ihnen — und optimiere, bis es stimmt.</p>
                </div>
            </section>

            <FaqSection title="Fragen zu Google Ads" items={faqItems} />
            <RelatedServices exclude="google-ads" />
            <ServiceCta text="Ich analysiere Ihren Markt und zeige Ihnen, was mit Google Ads fur Ihr Unternehmen moglich ist. Kostenlos, konkret, unverbindlich." />
        </>
    );
}
