import '../../../src/styles/bands-b.css';
import Link from 'next/link';
import AutoLinks from '../../../src/components/AutoLinks';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import HeroFacts from '../../../src/components/HeroFacts';
import JumpNav from '../../../src/components/JumpNav';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Google Ads Hamburg: Betreuung vom Freelancer ab 500 €/Mt.',
    description: 'Google Ads in Hamburg vom Freelancer statt Agentur: Suchkampagnen, Conversion-Tracking, Ihr eigenes Konto. Setup ab 700 €, Betreuung ab 500 €/Monat.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/google-ads',
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Google Ads Hamburg: Betreuung vom Freelancer ab 500 €/Mt.',
        description: 'Google Ads Management für lokale Unternehmen in Hamburg: Search Ads, Local Services Ads, Conversion-Tracking, ROAS-Optimierung. Setup ab 700 €, Betreuung ab 500 €/Monat.',
        url: 'https://webseite.hamburg/leistungen/google-ads',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kosten Google Ads pro Monat?', a: 'Drei getrennte Posten: das Kampagnen-Setup ab 700 € einmalig, die laufende Betreuung ab 500 € pro Monat und Ihr Werbebudget, das direkt an Google geht und über Ihr eigenes Konto läuft. Das Werbebudget bestimmen Sie selbst; mindestens rund 500 € pro Monat sind sinnvoll, damit genug Daten zum Optimieren entstehen.' },
    { q: 'Wie schnell kommen die ersten Anfragen?', a: 'Oft innerhalb der ersten Woche nach Kampagnenstart, denn Google Ads sind der schnellste Weg zu qualifizierten Anfragen. Die ersten 2 bis 4 Wochen dienen der Datensammlung; danach sinkt der Preis pro Anfrage, weil die Kampagne aus den Conversion-Daten lernt.' },
    { q: 'Was bedeuten CPC, CPA und ROAS?', a: 'CPC (Cost-per-Click) ist der Preis pro Klick auf Ihre Anzeige. CPA (Cost-per-Acquisition) ist der Preis pro Anfrage oder Abschluss. ROAS (Return on Ad Spend) ist der Umsatz pro investiertem Werbe-Euro. Diese drei Kennzahlen entscheiden, ob eine Kampagne profitabel ist, und stehen in jedem Report.' },
    { q: 'Was sind Local Services Ads?', a: 'Local Services Ads erscheinen ganz oben in der Google-Suche für lokale Dienstleister, noch über den normalen Google Ads, oft mit dem "Google Garantie"-Siegel. Sie zahlen pro Anfrage (Anruf oder Nachricht), nicht pro Klick. Verfügbarkeit und Branchen sind in Deutschland begrenzt. Im Erstgespräch prüfe ich, ob es für Sie infrage kommt.' },
    { q: 'Gehört das Google Ads Konto mir?', a: 'Ja, zu 100 %. Ich arbeite in Ihrem eigenen Google Ads Konto. Sie haben vollen Zugang zu allen Kampagnen, Kosten und Daten. Wenn Sie morgen wechseln, nehmen Sie alles mit, inklusive der gesamten Historie.' },
    { q: 'Wie messen Sie den Erfolg der Kampagnen?', a: 'Jeder Anruf, jedes Formular und jeder Kauf wird per Conversion-Tracking (GA4 und Google Ads) einem Keyword zugeordnet. Sie sehen genau: Was kostet ein Lead? Welche Keywords bringen die besten Kunden? Welcher ROAS kommt heraus? Dazu monatlicher Report plus Live-Zugang.' },
    { q: 'Sind Google Ads für lokale Betriebe noch sinnvoll?', a: 'Ja, wenn Tracking und Zielseite stimmen. Beim Hamburger GaLaBau-Betrieb GL Sommer sank nach dem Umbau von der Smart-Kampagne auf eigene Suchkampagnen der Preis je Kontaktaktion von 27,15 auf 11,06 Euro (April bis September 2026). In einem von mir betreuten Konto kosteten 42 Anfragen in 90 Tagen 2.991 Euro, nachzulesen im Artikel Google Ads Kosten.' },
    { q: 'Wer ist mein Ansprechpartner?', a: 'Ich, Vadim Shchepin. Ich baue die Kampagnen selbst, werte sie selbst aus und schreibe den Monatsbericht selbst, ohne Account-Manager dazwischen. Sie arbeiten mit einem Freelancer statt mit einer Agentur, und das Konto läuft auf Ihren Namen.' },
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
        offers: [
            { '@type': 'Offer', name: 'Kampagnen-Setup', price: '700', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Laufende Betreuung', price: '500', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
        ],
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
            <AutoLinks path="/leistungen/google-ads">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'Google Ads' }]} />
                    <div className="subpage-hero-split">
                        <div>
                        <p className="section-kicker animate-up">Google & Local Ads</p>
                        <h1 className="subpage-title animate-up">Google Ads für lokale Unternehmen in Hamburg.</h1>
                        <p className="subpage-intro animate-up">
                            Während SEO langfristig wirkt, liefern Google Ads sofort Ergebnisse. Ihre Anzeige erscheint genau dann, wenn jemand nach Ihrer Leistung sucht, und das schon heute. Jeder Euro wird getrackt, jeder Lead gemessen.
                        </p>
                        <HeroFacts items={[['ab 700 €', 'Kampagnen-Setup'], ['ab 500 €/Monat', 'Laufende Betreuung'], ['100 %', 'Ihr Konto, Ihre Daten']]} />
                        <ServiceMeta />
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/leistungen/hero-google-ads.svg" alt="Illustration: Suchleiste mit Anzeigenblock, rotes Anzeigen-Label und ein Mauszeiger, der klickt" width="1200" height="900" />
                        </div>
                    </div>
                </div>
            </section>

            <JumpNav label="Abschnitte" items={[
                { id: 'was-sind-google-ads', num: '01', label: 'Was sind Google Ads' },
                { id: 'warum', num: '02', label: 'Warum es wirkt' },
                { id: 'anzeigentypen', num: '03', label: 'Anzeigentypen' },
                { id: 'leistungen', num: '04', label: 'Was ich übernehme' },
                { id: 'kosten', num: '05', label: 'Kosten' },
                { id: 'kontrolle', num: '06', label: 'Ihre Kontrolle' },
            ]} />

            <div className="sx-bands">
            <section id="was-sind-google-ads" className="sx-band is-alt">
                <div className="container">
                    <div className="sx-band-head is-solo">
                        <h2 className="animate-up">Was sind Google Ads?</h2>
                    </div>
                    <div className="sx-split animate-up">
                        <div className="subpage-takeaway">
                            <p><strong>Google Ads</strong> sind bezahlte Anzeigen, die in den Google-Suchergebnissen erscheinen, sobald jemand nach einer passenden Leistung sucht. Abgerechnet wird meist pro Klick (CPC). <strong>Local Services Ads</strong> stehen ganz oben und werden pro Anfrage statt pro Klick bezahlt. Das Kampagnen-Setup kostet ab 700 € einmalig, die laufende Betreuung ab 500 € pro Monat; das Werbebudget läuft separat über Ihr eigenes Google-Konto, sodass Sie jeden Cent sehen.</p>
                        </div>
                        <figure className="subpage-figure">
                            <img src="/leistungen/fotos/google-ads.webp" alt="Illustration: Liste von Suchergebnissen mit rot hervorgehobenem Anzeigenplatz, daneben Gebotsanzeige und Münzstapel" width="1800" height="760" loading="lazy" decoding="async" />
                            <figcaption>Der Platz ganz oben wird versteigert. Was er wert ist, entscheidet Ihre Marge, nicht das Gebot.</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section id="warum" className="sx-band">
                <div className="container">
                    <div className="sx-band-head">
                        <h2 className="animate-up">Warum Google Ads für lokale Unternehmen funktionieren</h2>
                        <p className="animate-up">Google Ads sind kein Glücksspiel, sondern präzise Kundenakquise. Wer "Elektriker Hamburg Notdienst" oder "Steuerberater Hamburg Neustadt" sucht, hat unmittelbare Kaufabsicht. Die Anzeige platziert Ihr Unternehmen genau vor diesen Suchenden.</p>
                    </div>
                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">ab 500 €</span>
                            <span className="subpage-stat-label">Betreuung pro Monat, Setup ab 700 € einmalig, Werbebudget separat über Ihr Konto</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">pro Lead</span>
                            <span className="subpage-stat-label">Local Services Ads werden pro Anfrage abgerechnet, nicht pro Klick</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">100%</span>
                            <span className="subpage-stat-label">Ihr Konto, Ihre Daten: voller Zugang, jederzeit mitnehmbar</span>
                        </div>
                    </div>
                    <div className="sx-band-text sxb-measure animate-up">
                        <p>Der Unterschied zwischen professionellem und schlechtem Ads-Management ist groß: Bei schlechter Verwaltung verbrennt Budget für irrelevante Klicks. Gut gesteuert zahlen Sie für Klicks, die zu Anfragen führen. Welche Fehler dabei am teuersten sind, habe ich in den <a href="/wissen/google-ads-fehler-lokale-unternehmen">7 teuersten Google-Ads-Fehlern lokaler Unternehmen</a> gesammelt. Echte Zahlen aus einem von mir betreuten Konto, inklusive Klickpreisen und Kosten je Anfrage, stehen in <a href="/wissen/google-ads-kosten">Google Ads Kosten</a>.</p>
                    </div>
                </div>
            </section>

            <section id="anzeigentypen" className="sx-band is-alt">
                <div className="container">
                    <div className="sx-band-head is-solo">
                        <h2 className="animate-up">Die Anzeigentypen im Überblick</h2>
                    </div>
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
                </div>
            </section>

            <section id="leistungen" className="sx-band">
                <div className="container">
                    <div className="sx-band-head is-solo">
                        <h2 className="animate-up">Was ich für Sie übernehme</h2>
                    </div>
                    <div className="subpage-features-grid is-four animate-up">
                        <div className="subpage-feature">
                            <h3>Search Ads</h3>
                            <p>Anzeigen, die erscheinen, wenn jemand aktiv nach Ihrer Leistung sucht. Präzises Keyword-Targeting, überzeugende Anzeigentexte und ein hoher Quality Score senken den Klickpreis.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Local Services Ads</h3>
                            <p>Der Premium-Platz ganz oben, abgerechnet pro Anfrage statt pro Klick. Ideal für Handwerker und Dienstleister, sofern die Branche in Deutschland freigeschaltet ist.</p>
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
                </div>
            </section>

            <section id="kosten" className="sx-band is-alt">
                <div className="container">
                    <div className="sx-band-head">
                        <h2 className="animate-up">Was kostet die Google-Ads-Betreuung?</h2>
                        <p className="animate-up">Der Aufbau wird einmalig abgerechnet, die laufende Betreuung monatlich. So zahlen Sie die Einrichtung nicht jeden Monat mit.</p>
                    </div>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Kampagnen-Setup</h3>
                            <div className="sp-price-value">ab 700 &euro;</div>
                            <p>Einmalig. Das Konto steht sauber aufgesetzt und messbar da, auch wenn Sie danach selbst weitermachen wollen.</p>
                            <ul className="sp-price-includes">
                                <li>Kampagnen-Struktur & Kontoaufbau</li>
                                <li>Keyword-Recherche & Wettbewerbsanalyse</li>
                                <li>Anzeigentexte & Erweiterungen</li>
                                <li>Conversion-Tracking (Anrufe, Formulare, GA4)</li>
                                <li>Landingpage-Empfehlungen</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Laufende Betreuung</h3>
                            <div className="sp-price-value">ab 500 &euro;/Monat</div>
                            <p>Monatlich kündbar. Ihr Werbebudget kommt separat dazu und läuft über Ihr eigenes Google-Konto. Sie bestimmen die Höhe.</p>
                            <ul className="sp-price-includes">
                                <li>Wöchentliche Optimierung von Keywords, Geboten und Budgets</li>
                                <li>Laufende Anzeigen- und Landingpage-Tests</li>
                                <li>Monatlicher Performance-Report (CPC, CPA, ROAS)</li>
                                <li>Ihr Konto, Ihre Daten: voller Zugang</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sx-band-text sxb-note animate-up">
                        <p>Empfohlenes Mindest-Werbebudget: 500 € pro Monat. Es geht direkt an Google, nicht an mich.</p>
                    </div>
                </div>
            </section>

            <section id="kontrolle" className="sx-band">
                <div className="container">
                    <div className="sx-band-head">
                        <h2 className="animate-up">Ihr Geld, Ihre Kontrolle. Kein Versteckspiel.</h2>
                        <p className="animate-up">Viele Agenturen lassen das Werbebudget über ihr eigenes Konto laufen. Sie sehen dann nicht, was wirklich ausgegeben wird. Bei mir läuft alles über Ihr eigenes Google Ads Konto: jeder Cent, jede Kampagne, jedes Ergebnis in Echtzeit.</p>
                    </div>
                    <div className="sx-split animate-up">
                        <div className="sx-band-text sxb-statement">
                            <p>Im monatlichen Report zeige ich klar, was ausgegeben wurde, wie viele Anfragen kamen, was ein Lead kostet und was ich für den nächsten Monat empfehle. Wenn eine Kampagne nicht funktioniert, sage ich es Ihnen und optimiere, bis es stimmt.</p>
                        </div>
                        <div className="sxb-stack">
                            <div className="sx-card">
                                <p>Für nachhaltige Sichtbarkeit ohne Klickkosten kombinieren viele Kunden Ads mit <Link href="/leistungen/seo">lokaler SEO</Link>: Ads für den Sofort-Effekt, SEO für den langfristigen Aufbau.</p>
                            </div>
                            <div className="sx-card">
                                <p>Neu daneben: <Link href="/leistungen/chatgpt-ads">ChatGPT Ads</Link>. Seit August 2026 laufen Anzeigen in ChatGPT auch in Deutschland, und die Auktion ist dort noch dünn besetzt. Google Ads bleiben die Grundlast für planbare Anfragen, ChatGPT Ads sind das Testbudget mit Lernvorsprung.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <FaqSection title="Fragen zu Google Ads in Hamburg" items={faqItems} />
            <RelatedServices exclude="google-ads" />
            <ServiceCta text="Ich analysiere Ihren Markt und zeige Ihnen, was mit Google Ads für Ihr Unternehmen möglich ist. Kostenlos, konkret, unverbindlich." />
            </AutoLinks>
        </>
    );
}
