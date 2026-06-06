import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Google Ads Hamburg | Sofort qualifizierte Anfragen',
    description: 'Google Ads Management für lokale Unternehmen in Hamburg: Search Ads, Local Services Ads, Conversion-Tracking, ROAS-Optimierung. Ihr Konto, Ihre Daten. Ab 500 €/Monat.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/google-ads',
    },
    openGraph: {
        title: 'Google Ads Hamburg | Sofort qualifizierte Anfragen',
        description: 'Google Ads Management für lokale Unternehmen in Hamburg: Search Ads, Local Services Ads, Conversion-Tracking, ROAS-Optimierung. Ab 500 €/Monat.',
        url: 'https://webseite.hamburg/leistungen/google-ads',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kosten Google Ads pro Monat?', a: 'Zwei getrennte Posten: die Management-Fee ab 500 € pro Monat für Aufbau und laufende Optimierung, plus Ihr Werbebudget, das direkt an Google geht und über Ihr eigenes Konto läuft. Das Werbebudget bestimmen Sie — mindestens rund 500 € pro Monat sind sinnvoll, damit genug Daten zum Optimieren entstehen.' },
    { q: 'Wie schnell kommen die ersten Anfragen?', a: 'Oft innerhalb der ersten Woche nach Kampagnenstart — Google Ads sind der schnellste Weg zu qualifizierten Anfragen. Die ersten 2–4 Wochen dienen der Datensammlung; danach sinkt der Preis pro Anfrage, weil die Kampagne aus den Conversion-Daten lernt.' },
    { q: 'Was bedeuten CPC, CPA und ROAS?', a: 'CPC (Cost-per-Click) ist der Preis pro Klick auf Ihre Anzeige. CPA (Cost-per-Acquisition) ist der Preis pro Anfrage oder Abschluss. ROAS (Return on Ad Spend) ist der Umsatz pro investiertem Werbe-Euro. Diese drei Kennzahlen entscheiden, ob eine Kampagne profitabel ist — und stehen in jedem Report.' },
    { q: 'Was sind Local Services Ads?', a: 'Local Services Ads erscheinen ganz oben in der Google-Suche für lokale Dienstleister, noch über den normalen Google Ads, oft mit dem „Google Garantie"-Siegel. Sie zahlen pro Anfrage (Anruf oder Nachricht), nicht pro Klick. Verfügbarkeit und Branchen sind in Deutschland begrenzt — im Erstgespräch prüfe ich, ob es für Sie infrage kommt.' },
    { q: 'Gehört das Google Ads Konto mir?', a: 'Ja, zu 100 %. Ich arbeite in Ihrem eigenen Google Ads Konto. Sie haben vollen Zugang zu allen Kampagnen, Kosten und Daten. Wenn Sie morgen wechseln, nehmen Sie alles mit — inklusive der gesamten Historie.' },
    { q: 'Wie messen Sie den Erfolg der Kampagnen?', a: 'Jeder Anruf, jedes Formular und jeder Kauf wird per Conversion-Tracking (GA4 und Google Ads) einem Keyword zugeordnet. Sie sehen genau: Was kostet ein Lead? Welche Keywords bringen die besten Kunden? Welcher ROAS kommt heraus? Dazu monatlicher Report plus Live-Zugang.' },
];

export default function GoogleAdsPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Google Ads & Local Services Ads Management Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/google-ads',
        description: 'Google Ads Management für lokale Unternehmen in Hamburg: Search Ads, Local Services Ads, Conversion-Tracking, ROAS-Optimierung.',
        offers: { '@type': 'Offer', price: '500', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Google Ads', item: 'https://webseite.hamburg/leistungen/google-ads' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'Google Ads' }]} />
                    <p className="section-kicker animate-up">Google & Local Ads</p>
                    <h1 className="subpage-title animate-up">Google Ads für lokale Unternehmen in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Während SEO langfristig wirkt, liefern Google Ads sofort Ergebnisse. Ihre Anzeige erscheint genau dann, wenn jemand nach Ihrer Leistung sucht — noch heute. Jeder Euro wird getrackt, jeder Lead gemessen.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was sind Google Ads?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p><strong>Google Ads</strong> sind bezahlte Anzeigen, die in den Google-Suchergebnissen erscheinen, sobald jemand nach einer passenden Leistung sucht. Abgerechnet wird meist pro Klick (CPC). <strong>Local Services Ads</strong> stehen ganz oben und werden pro Anfrage statt pro Klick bezahlt. Das Management kostet ab 500 € pro Monat; das Werbebudget läuft separat über Ihr eigenes Google-Konto, sodass Sie jeden Cent sehen.</p>
                    </div>

                    <h2 className="animate-up">Warum Google Ads für lokale Unternehmen funktionieren</h2>
                    <p className="animate-up">Google Ads sind kein Glücksspiel, sondern präzise Kundenakquise. Wer „Elektriker Hamburg Notdienst" oder „Steuerberater Hamburg Neustadt" sucht, hat unmittelbare Kaufabsicht. Die Anzeige platziert Ihr Unternehmen genau vor diesen Suchenden.</p>
                    <p className="animate-up">Der Unterschied zwischen professionellem und schlechtem Ads-Management ist groß: Bei schlechter Verwaltung verbrennt Budget für irrelevante Klicks. Gut gesteuert zahlen Sie für Klicks, die zu Anfragen führen.</p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">ab 500 €</span>
                            <span className="subpage-stat-label">Management-Fee pro Monat, Werbebudget separat über Ihr Konto</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">pro Lead</span>
                            <span className="subpage-stat-label">Local Services Ads werden pro Anfrage abgerechnet, nicht pro Klick</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">100%</span>
                            <span className="subpage-stat-label">Ihr Konto, Ihre Daten — voller Zugang, jederzeit mitnehmbar</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Die Anzeigentypen im Überblick</h2>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Anzeigentyp</th><th>Abrechnung</th><th>Ideal für</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Search Ads</th><td>pro Klick (CPC)</td><td>Suchbegriffe mit klarer Kaufabsicht</td></tr>
                                <tr><th>Local Services Ads</th><td>pro Anfrage (Lead)</td><td>lokale Dienstleister, Handwerker (wo verfügbar)</td></tr>
                                <tr><th>Performance Max</th><td>Conversion-orientiert (CPA / ROAS)</td><td>breite Reichweite über alle Google-Kanäle</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="animate-up">Was ich für Sie übernehme</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Search Ads</h3>
                            <p>Anzeigen, die erscheinen, wenn jemand aktiv nach Ihrer Leistung sucht. Präzises Keyword-Targeting, überzeugende Anzeigentexte und ein hoher Quality Score senken den Klickpreis.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Local Services Ads</h3>
                            <p>Der Premium-Platz ganz oben, abgerechnet pro Anfrage statt pro Klick. Ideal für Handwerker und Dienstleister — sofern die Branche in Deutschland freigeschaltet ist.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Tracking</h3>
                            <p>Jeder Anruf, jedes Formular, jeder Kauf wird über GA4 und Google Ads einem Keyword zugeordnet. So wissen Sie, was ein Lead kostet (CPA) und welche Kampagne den besten ROAS liefert.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Laufende Optimierung</h3>
                            <p>Wöchentliche Analyse von Keywords, Geboten, Anzeigentexten und Budgets. Die Kampagne wird kontinuierlich effizienter: weniger Kosten pro Lead, mehr Anfragen.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise und Leistungen</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 500 &euro;/Monat</div>
                        <p>Management-Fee für Kampagnenerstellung und laufende Optimierung. Ihr Werbebudget läuft über Ihr eigenes Google-Konto — Sie bestimmen die Höhe und behalten die volle Kontrolle.</p>
                        <ul className="sp-price-includes">
                            <li>Kampagnen-Setup & Struktur</li>
                            <li>Keyword-Recherche & Wettbewerbsanalyse</li>
                            <li>Anzeigentexte & Erweiterungen</li>
                            <li>Conversion-Tracking (Anrufe, Formulare, GA4)</li>
                            <li>Landingpage-Empfehlungen</li>
                            <li>Wöchentliche Optimierung</li>
                            <li>Monatlicher Performance-Report (CPC, CPA, ROAS)</li>
                            <li>Ihr Konto, Ihre Daten — voller Zugang</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">Ihr Geld, Ihre Kontrolle — kein Versteckspiel</h2>
                    <p className="animate-up">Viele Agenturen lassen das Werbebudget über ihr eigenes Konto laufen. Sie sehen dann nicht, was wirklich ausgegeben wird. Bei mir läuft alles über Ihr eigenes Google Ads Konto: jeder Cent, jede Kampagne, jedes Ergebnis in Echtzeit.</p>
                    <p className="animate-up">Im monatlichen Report zeige ich klar, was ausgegeben wurde, wie viele Anfragen kamen, was ein Lead kostet und was ich für den nächsten Monat empfehle. Wenn eine Kampagne nicht funktioniert, sage ich es Ihnen und optimiere, bis es stimmt.</p>

                    <p className="animate-up">Für nachhaltige Sichtbarkeit ohne Klickkosten kombinieren viele Kunden Ads mit <Link href="/leistungen/seo">lokaler SEO</Link>: Ads für den Sofort-Effekt, SEO für den langfristigen Aufbau.</p>
                </div>
            </section>

            <FaqSection title="Fragen zu Google Ads" items={faqItems} />
            <RelatedServices exclude="google-ads" />
            <ServiceCta text="Ich analysiere Ihren Markt und zeige Ihnen, was mit Google Ads für Ihr Unternehmen möglich ist. Kostenlos, konkret, unverbindlich." />
        </>
    );
}
