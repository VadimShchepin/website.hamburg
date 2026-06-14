import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'SEO Hamburg | Lokale Sichtbarkeit & Google Rankings',
    description: 'Lokale Suchmaschinenoptimierung für Unternehmen in Hamburg: Google Business Profile, Google Maps, technisches SEO und Content. Live-Dashboard, monatliche Reports. Ab 1.000 €/Monat.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/seo',
    },
    openGraph: {
        title: 'SEO Hamburg | Lokale Sichtbarkeit & Google Rankings',
        description: 'Lokale Suchmaschinenoptimierung für Unternehmen in Hamburg: Google Business Profile, Google Maps, technisches SEO und Content. Ab 1.000 €/Monat.',
        url: 'https://webseite.hamburg/leistungen/seo',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet lokale SEO in Hamburg?', a: 'Ab 1.000 € pro Monat. Der genaue Betrag hängt vom Wettbewerb in Ihrer Branche und Region ab — ein Steuerberater in der Innenstadt hat ein anderes Wettbewerbsumfeld als ein Maler im Umland. Mindestlaufzeit sind 3 Monate, danach ist der Vertrag monatlich kündbar. Im Erstgespräch sage ich Ihnen ehrlich, ob SEO für Ihre Situation sinnvoll ist und welches Budget realistisch ist.' },
    { q: 'Wie schnell sehe ich SEO-Ergebnisse?', a: 'Erste messbare Verbesserungen typischerweise nach 4–8 Wochen, deutliche Ranking-Veränderungen nach 3–6 Monaten. SEO ist eine Investition in dauerhaften, klickkostenfreien Traffic: Anders als bei Google Ads hört der Besucherstrom nicht auf, wenn das Budget stoppt.' },
    { q: 'Lohnt sich SEO oder Google Ads mehr für mein Unternehmen?', a: 'Beides hat seinen Platz. Google Ads liefern ab Tag 1 Anfragen, kosten aber pro Klick und stoppen, sobald das Budget endet. Lokale SEO braucht 3–6 Monate, bringt danach aber dauerhaft Besucher ohne Klickkosten. Für die meisten Hamburger Unternehmen ist die Kombination am stärksten: Ads für den Sofort-Effekt, SEO für den langfristigen Aufbau.' },
    { q: 'Was ist der Unterschied zwischen lokalem SEO und normalem SEO?', a: 'Lokales SEO fokussiert auf Sichtbarkeit in Ihrer Region: Google Maps, das lokale 3er-Pack, lokale Suchergebnisse und Ihr Google Business Profile. Klassisches (organisches) SEO zielt auf bundesweite oder thematische Suchbegriffe ohne Ortsbezug. Wenn Ihre Kunden in Hamburg oder Umgebung suchen, ist lokales SEO der direkteste Kanal.' },
    { q: 'Garantieren Sie Platz 1 bei Google?', a: 'Nein — und seien Sie vorsichtig bei jedem, der das tut. Google-Rankings hängen von über 200 Faktoren ab, die niemand vollständig kontrolliert. Was ich garantiere: transparente, datenbasierte Arbeit, monatliche Reports und Optimierung, bis die Ergebnisse stimmen.' },
    { q: 'Brauche ich eine neue Website für SEO?', a: 'Nicht unbedingt. Oft lassen sich bestehende Websites technisch und inhaltlich optimieren. Wenn die Basis schlecht ist (langsame Ladezeiten, nicht mobiloptimiert, veraltete Technik), kann ein Relaunch langfristig günstiger sein als Flickwerk. Das klären wir in der Analyse.' },
    { q: 'Bekomme ich Zugang zu den Daten?', a: 'Ja. Sie erhalten Zugang zu einem Live-Dashboard mit allen Rankings, Traffic-Daten aus Google Search Console und Anfragen. Dazu monatliche Reports mit Zusammenfassung und konkreten nächsten Schritten. Volle Transparenz, keine Blackbox.' },
];

export default function SeoPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO & Lokale Suchmaschinenoptimierung Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/seo',
        description: 'Lokale Suchmaschinenoptimierung für Unternehmen in Hamburg: Google Business Profile, Google Maps, technisches SEO und Content-Optimierung.',
        offers: { '@type': 'Offer', price: '1000', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://webseite.hamburg/leistungen/seo' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'SEO' }]} />
                    <p className="section-kicker animate-up">SEO & Lokale Sichtbarkeit</p>
                    <h1 className="subpage-title animate-up">Suchmaschinenoptimierung für lokale Unternehmen in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Wenn jemand in Hamburg nach Ihrer Leistung sucht und Sie nicht auf der ersten Seite stehen, existieren Sie für diese Person nicht. Lokale SEO ändert das — messbar und ohne Klickkosten pro Besucher.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was ist lokale SEO?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p><strong>Lokale SEO</strong> (lokale Suchmaschinenoptimierung) sorgt dafür, dass ein Unternehmen in der regionalen Google-Suche, in Google Maps und im lokalen 3er-Pack erscheint, wenn Menschen in der Nähe nach einer Leistung suchen. Sie umfasst vier Bausteine: Optimierung des Google Business Profile, technisches SEO, lokale Inhalte und den Aufbau von Citations. In Hamburg liegt die Investition bei ab 1.000 € pro Monat.</p>
                    </div>

                    <h2 className="animate-up">Warum lokale Sichtbarkeit über Aufträge entscheidet</h2>
                    <p className="animate-up">Jeden Tag suchen Menschen in Hamburg nach Leistungen wie Ihrer: "Elektriker Hamburg", "Steuerberater in der Nähe", "Webdesigner Hamburg". Diese Suchanfragen haben hohe Kaufabsicht — der Suchende braucht jetzt eine Lösung. Wer dann nicht sichtbar ist, verliert die Anfrage an den Wettbewerber, der oben steht. Wie lokale Rankings konkret funktionieren, steht im <a href="/wissen/lokales-seo-hamburg-guide">Leitfaden zu lokalem SEO in Hamburg</a>.</p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">76%</span>
                            <span className="subpage-stat-label">der lokalen Smartphone-Suchen führen innerhalb eines Tages zu einem Geschäftsbesuch (Think with Google)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">28%</span>
                            <span className="subpage-stat-label">der „in der Nähe"-Suchen enden mit einem Kauf (Think with Google)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">0 €</span>
                            <span className="subpage-stat-label">Klickpreis: organische Rankings kosten pro Besucher nichts — anders als Ads</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Was lokales SEO konkret bedeutet</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Google Business Profile</h3>
                            <p>Optimierung Ihres Unternehmensprofils für Google Maps und das lokale 3er-Pack: Fotos, Öffnungszeiten, Leistungen, Bewertungsmanagement und regelmäßige Beiträge. Das Profil ist oft der erste Kontaktpunkt — noch vor der Website.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Technisches SEO</h3>
                            <p>Saubere Seitenstruktur, schnelle Ladezeiten und gute Core Web Vitals (LCP unter 2,5 s, INP unter 200 ms, CLS unter 0,1), Mobile-Optimierung und korrekte Indexierung. Die technische Basis, die Google braucht, um Ihre Seite zu bewerten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>On-Page-Optimierung</h3>
                            <p>Inhalte, die für Suchende und Suchmaschinen geschrieben sind: Meta-Tags, Überschriftenstruktur, interne Verlinkung und strukturierte Daten (Schema.org). Keine Keyword-Überfüllung — die schadet messbar.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lokale Autorität (Citations)</h3>
                            <p>Konsistente NAP-Daten (Name, Adresse, Telefon) in Branchenverzeichnissen plus lokale Backlinks. Google muss verstehen, dass Ihr Unternehmen in Hamburg relevant und vertrauenswürdig ist.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">SEO oder Google Ads — der direkte Vergleich</h2>
                    <p className="animate-up">Die beiden Kanäle schließen sich nicht aus. Sie lösen unterschiedliche Probleme:</p>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Kriterium</th><th>Lokale SEO</th><th><Link href="/leistungen/google-ads">Google Ads</Link></th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Erste Wirkung</th><td>nach 3–6 Monaten</td><td>ab Tag 1</td></tr>
                                <tr><th>Kosten pro Klick</th><td>0 € (organisch)</td><td>bezahlt pro Klick / Anfrage</td></tr>
                                <tr><th>Nach Budgetstopp</th><td>Sichtbarkeit bleibt</td><td>Anzeigen verschwinden sofort</td></tr>
                                <tr><th>Stärke</th><td>nachhaltiger Aufbau</td><td>schnelle Anfragen, Tests</td></tr>
                                <tr><th>Einstieg</th><td>ab 1.000 €/Monat</td><td>ab 500 €/Monat + Werbebudget</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="animate-up">Was im SEO-Paket enthalten ist</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 1.000 &euro;/Monat</div>
                        <p>Mindestlaufzeit 3 Monate, danach monatlich kündbar. Keine versteckten Kosten.</p>
                        <ul className="sp-price-includes">
                            <li>Initiales SEO-Audit und Strategie</li>
                            <li>Google Business Profile Optimierung</li>
                            <li>Technisches SEO (laufend)</li>
                            <li>On-Page-Optimierung aller relevanten Seiten</li>
                            <li>Keyword-Recherche und Content-Strategie</li>
                            <li>Lokaler Autoritätsaufbau (Citations, Backlinks)</li>
                            <li>Monatliches Reporting mit allen KPIs</li>
                            <li>Live-Dashboard mit Ranking-Tracking</li>
                            <li>Wettbewerber-Monitoring</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">So messe ich Erfolg</h2>
                    <p className="animate-up">Kein Agentur-Sprech, keine vagen Versprechen. Sie erhalten jeden Monat einen klaren Report mit:</p>
                    <ul className="check-list animate-up">
                        <li><strong>Rankings:</strong> Wo stehen Sie für Ihre wichtigsten Keywords, und wie hat sich das verändert?</li>
                        <li><strong>Organischer Traffic:</strong> Wie viele Besucher kommen über Google, welche Seiten performen?</li>
                        <li><strong>Anfragen:</strong> Wie viele Leads kommen über die organische Suche?</li>
                        <li><strong>Nächste Schritte:</strong> Was wird im kommenden Monat optimiert und warum?</li>
                    </ul>
                    <p className="animate-up">Dazu haben Sie jederzeit Zugang zum Live-Dashboard. Sie können mich fragen, wo wir stehen, und ich zeige es Ihnen in Echtzeit.</p>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Think with Google, Consumer Insights zu „near me"-Suchen (76 % Geschäftsbesuch innerhalb eines Tages, 28 % Kauf). <a href="https://www.thinkwithgoogle.com/" rel="nofollow noopener" target="_blank">thinkwithgoogle.com</a></li>
                            <li>Google, Core Web Vitals — Schwellenwerte für LCP, INP und CLS. <a href="https://web.dev/articles/vitals" rel="nofollow noopener" target="_blank">web.dev/articles/vitals</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zu SEO" items={faqItems} />
            <RelatedServices exclude="seo" />
            <ServiceCta text="Lassen Sie mich Ihre aktuelle Sichtbarkeit analysieren. Ich sage Ihnen ehrlich, wo Sie stehen und was möglich ist — kostenlos und unverbindlich." />
        </>
    );
}
