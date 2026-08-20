import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Was kostet SEO in Hamburg?',
    description: 'Monatsbudgets, Stundensätze und was ein Retainer wirklich enthält. Mit Google-Aussagen zur Dauer, Warnsignalen und einer Rechnung, was 1.000 Euro kaufen.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/seo-kosten-hamburg',
    },
    openGraph: {
        title: 'Was kostet SEO in Hamburg?',
        description: 'Monatsbudgets, Stundensätze und was ein Retainer wirklich enthält. Mit Warnsignalen und einer ehrlichen Rechnung.',
        url: 'https://webseite.hamburg/wissen/seo-kosten-hamburg',
        type: 'article',
    },
};

export default function SeoKostenHamburgPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Was kostet SEO in Hamburg? Preise, Modelle und was Sie dafür bekommen',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
        url: 'https://webseite.hamburg/wissen/seo-kosten-hamburg',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/seo-kosten-hamburg' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'SEO Kosten Hamburg', item: 'https://webseite.hamburg/wissen/seo-kosten-hamburg' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="seo-kosten-hamburg"
                category="SEO"
                title="Was kostet SEO in Hamburg? Preise, Modelle und was Sie dafür bekommen"
                readTime="11 Min."
                publishDate="2026-08-20"
            >
                <p>
                    Kurze Antwort für lokale Unternehmen in Hamburg: 800 bis 2.500 Euro im Monat bei Freelancern und
                    kleinen Anbietern, 2.000 bis 5.000 Euro bei Agenturen, jeweils netto und mit einer Laufzeit von
                    mindestens drei bis sechs Monaten. Bei mir beginnt laufende SEO-Betreuung bei 1.000 Euro pro Monat
                    mit drei Monaten Mindestlaufzeit. Was in diesen Beträgen steckt und woran Sie unseriöse Angebote
                    erkennen, steht in diesem Artikel.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/seo-kosten-hero.svg" alt="Illustration: Waage mit Euromünzen als Monatsbudget auf der einen und einer steigenden Kurve mit Lupe als Ergebnis auf der anderen Seite, darunter eine Zeitachse mit Monatsmarken" width="1600" height="900" />
                    <figcaption>SEO ist eine Investition mit Anlaufzeit. Wer das einpreist, wird nicht enttäuscht.</figcaption>
                </figure>

                <h2>Die drei üblichen Abrechnungsmodelle</h2>
                <p>
                    Die Preisumfrage von Ahrefs unter SEO-Dienstleistern zeigt, wie der Markt abrechnet: 78,2 Prozent
                    arbeiten mit monatlichen Pauschalen, 48,9 Prozent mit Projektpreisen und 34,8 Prozent nach
                    Stundensatz, wobei Mehrfachantworten möglich waren. Der häufigste Stundensatz liegt international
                    zwischen 100 und 150 Dollar. Für die monatlichen Budgets nennt dieselbe Erhebung im Schnitt rund
                    3.209 Dollar bei Agenturen und 1.348 Dollar bei Freelancern, und 63 Prozent der Auftraggeber
                    bewegen sich zwischen 500 und 5.000 Dollar im Monat.
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Modell</th>
                                <th>Typischer Preis</th>
                                <th>Passt, wenn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Monatliche Betreuung</th>
                                <td>800 bis 5.000 Euro im Monat</td>
                                <td>Sie dauerhaft Sichtbarkeit aufbauen wollen und intern jemanden haben, der Inhalte freigibt</td>
                            </tr>
                            <tr>
                                <th>Projekt oder Audit</th>
                                <td>1.500 bis 6.000 Euro einmalig</td>
                                <td>Sie erst wissen wollen, wo Sie stehen, oder eine konkrete Baustelle haben, etwa nach einem Relaunch</td>
                            </tr>
                            <tr>
                                <th>Stundenweise</th>
                                <td>90 bis 180 Euro pro Stunde</td>
                                <td>Sie SEO selbst machen und punktuell Beratung brauchen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    In Hamburg liegen Agentursätze eher am oberen Rand, weil Fixkosten und Wettbewerb um Fachkräfte
                    hoch sind. Das macht Hamburger Anbieter nicht besser, es macht sie teurer. Umgekehrt hat lokale
                    Nähe echte Vorteile: Wer den Markt kennt, weiß, dass „Steuerberater Hamburg" und „Steuerberater
                    Winterhude" zwei verschiedene Suchen mit sehr verschiedenem Wettbewerb sind.
                </p>

                <h2>Was 1.000 Euro im Monat tatsächlich kaufen</h2>
                <p>
                    Ein Monatsbudget ist Arbeitszeit, nichts anderes. Bei einem realistischen Stundensatz von 100 Euro
                    sind 1.000 Euro etwa zehn Stunden. Zehn Stunden sind viel, wenn sie an den richtigen Stellen
                    landen, und nichts, wenn sie in Reporting verschwinden. So sieht eine ehrliche Aufteilung in
                    einem laufenden Monat aus:
                </p>
                <ul>
                    <li><strong>2 Stunden</strong> technische Prüfung und Behebung: Indexierung, Ladezeit, strukturierte Daten, defekte Links.</li>
                    <li><strong>3 bis 4 Stunden</strong> Inhalte: eine neue Seite oder eine gründlich überarbeitete bestehende Seite. Das ist der Teil, der Rankings bewegt.</li>
                    <li><strong>1 Stunde</strong> lokale Signale: Unternehmensprofil, Verzeichnisse, Bewertungen, Konsistenz der Adressdaten.</li>
                    <li><strong>1 bis 2 Stunden</strong> Analyse: Search Console, Rankings, was funktioniert hat und was nicht.</li>
                    <li><strong>1 Stunde</strong> Abstimmung mit Ihnen, weil ohne Ihre Fachkenntnis kein guter Text entsteht.</li>
                </ul>
                <p>
                    Wenn ein Anbieter für 299 Euro im Monat „vollumfängliche SEO-Betreuung" verspricht, kaufen Sie
                    also zweieinhalb Stunden. Rechnen Sie nach, was davon nach dem automatisierten Report übrig
                    bleibt. Genau das ist der Grund, warum billige SEO-Verträge so selten wirken: Es ist keine
                    Betrugsabsicht, es ist Arithmetik.
                </p>

                <h2>Wie lange es dauert, und was Google dazu sagt</h2>
                <p>
                    In der offiziellen Dokumentation von Google Search Central steht zwei Dinge, die jeder Anbieter
                    kennen sollte. Erstens: „Niemand kann eine Platzierung auf Platz 1 bei Google garantieren."
                    Zweitens, aus demselben Leitfaden: In den meisten Fällen brauchen SEO-Dienstleister vier Monate
                    bis zu einem Jahr, um Verbesserungen umzusetzen und dann Wirkung zu sehen.
                </p>
                <p>
                    Die Datenlage dazu ist unbarmherzig. Eine Ahrefs-Auswertung von Millionen Seiten zeigt, dass nur
                    etwa 1,74 Prozent neu veröffentlichter Seiten innerhalb von zwölf Monaten die Top 10 erreichen.
                    Die Seiten, die es schaffen, brauchen dafür im Schnitt zwei bis sechs Monate. Wer also im dritten
                    Monat den Vertrag kündigt, kündigt in der Regel genau vor dem Punkt, an dem es interessant wird.
                </p>
                <p>
                    Deshalb arbeite ich mit drei Monaten Mindestlaufzeit und danach monatlicher Kündbarkeit. Drei
                    Monate sind lang genug, um Technik und erste Inhalte umzusetzen, und kurz genug, dass Sie kein
                    Jahresrisiko tragen.
                </p>

                <h2>Woran Sie unseriöse Angebote erkennen</h2>
                <p>
                    Google nennt in derselben Dokumentation ausdrücklich Warnsignale. Ergänzt um das, was ich in
                    Hamburger Angeboten regelmäßig lese:
                </p>
                <ul>
                    <li><strong>Ranking-Garantien.</strong> Platz 1 kann niemand garantieren, auch nicht für „ausgewählte Keywords".</li>
                    <li><strong>Behauptete Sonderbeziehung zu Google.</strong> Es gibt keine bevorzugte Einreichung und keinen Freundschaftsdienst.</li>
                    <li><strong>Keine Nennung der Arbeitsstunden.</strong> Wer nicht sagt, wie viel Zeit im Paket steckt, verkauft ein Gefühl.</li>
                    <li><strong>Berichte statt Arbeit.</strong> Ein 30-seitiger PDF-Report im Monat ist keine Optimierung.</li>
                    <li><strong>Eigene Konten.</strong> Analytics, Search Console und Ads gehören Ihnen, nicht der Agentur. Sonst ist der Wechsel später teuer.</li>
                    <li><strong>Linkpakete.</strong> „500 Backlinks für 199 Euro" ist der schnellste Weg zu einem Problem, das man nicht mehr wegoptimiert.</li>
                    <li><strong>Keine Aussage zur Laufzeit.</strong> Zwölf Monate Bindung ohne Ausstieg ist bei einem lokalen Betrieb unnötig.</li>
                </ul>

                <h2>Wann SEO die falsche Investition ist</h2>
                <p>
                    Das sagt Ihnen selten jemand, der SEO verkauft, also sage ich es: SEO lohnt nicht immer.
                </p>
                <ul>
                    <li><strong>Sie brauchen Aufträge in zwei Wochen.</strong> Dann ist <Link href="/leistungen/google-ads">Google Ads</Link> das richtige Werkzeug, weil es sofort wirkt und sich abschalten lässt.</li>
                    <li><strong>Ihre Website konvertiert nicht.</strong> Mehr Besucher auf eine Seite zu schicken, die keine Anfragen erzeugt, ist teuer. Erst <Link href="/leistungen/conversion-optimierung">Conversion-Optimierung</Link>, dann Reichweite.</li>
                    <li><strong>Sie haben keine Kapazität für neue Kunden.</strong> Klingt absurd, kommt oft vor. Dann ist Preiserhöhung günstiger als Marketing.</li>
                    <li><strong>Ihr Angebot wird nicht gesucht.</strong> Bei wirklich neuen Leistungen gibt es kein Suchvolumen. Dann brauchen Sie Aufmerksamkeit, nicht Rankings.</li>
                </ul>

                <h2>Der günstigste erste Schritt</h2>
                <p>
                    Bevor Sie ein Monatsbudget freigeben, sollten Sie wissen, wo Sie stehen. Zwei Dinge kosten dabei
                    nichts. Erstens: Prüfen Sie, ob Ihre Seiten überhaupt im Index sind. Wenn nicht, ist jedes
                    SEO-Budget verbrannt, bevor es wirkt. Wie man das prüft, steht im Artikel
                    {' '}<Link href="/wissen/website-nicht-bei-google-gefunden">Website nicht bei Google zu finden</Link>.
                    Zweitens: Pflegen Sie Ihr <Link href="/wissen/google-business-profile-optimieren">Google-Unternehmensprofil</Link>,
                    das ist der stärkste kostenlose Hebel für lokale Betriebe.
                </p>
                <p>
                    Danach kommt die Frage, welche Suchen für Ihr Geschäft überhaupt Geld wert sind. Dafür biete ich
                    ein <Link href="/leistungen/website-audit">kostenloses Website-Audit</Link> an: Sie bekommen eine
                    priorisierte Liste, was zuerst zu tun ist, ohne Vertrag. Was Sie damit machen, ist Ihre Sache.
                </p>

                <h2>Was Ergebnisse konkret aussehen können</h2>
                <p>
                    Damit die Zahlen nicht abstrakt bleiben, zwei Beispiele aus meinen Projekten. Bei
                    {' '}<Link href="/referenzen/dybeauty">DYBeauty</Link>, einem Shopify-Shop, hat sich der Traffic
                    innerhalb von 90 Tagen verdoppelt, nach einem SEO-Audit, 723 überarbeiteten Produktseiten und
                    einer sauberen Merchant-Center-Anbindung. Bei
                    {' '}<Link href="/referenzen/gl-sommer">GL Sommer</Link> aus dem Garten- und Landschaftsbau kamen
                    728 lokale Aktionen und 1.113 Klicks pro Monat zusammen, nachdem Website und lokale Sichtbarkeit
                    modernisiert waren.
                </p>
                <p>
                    Beides sind keine Versprechen für Ihr Projekt, sondern Größenordnungen. Wettbewerb, Ausgangslage
                    und Branche entscheiden mit. Ein Handwerksbetrieb in einem Stadtteil hat einen anderen Weg vor
                    sich als ein Shop, der bundesweit verkauft.
                </p>

                <h2>Und wenn das Budget bei 500 Euro liegt?</h2>
                <p>
                    Dann würde ich es nicht in monatliche Betreuung stecken. Sinnvoller ist eine einmalige Umsetzung:
                    Technik geradeziehen, die drei wichtigsten Seiten neu schreiben, Unternehmensprofil aufräumen,
                    Bewertungen einsammeln. Danach halten Sie die Seite selbst in Bewegung und holen sich Hilfe, wenn
                    etwas Größeres ansteht. Für viele lokale Betriebe ist das die wirtschaftlich richtige Antwort,
                    auch wenn sie mir weniger Umsatz bringt.
                </p>
                <p>
                    Wenn Sie wissen wollen, welche Variante zu Ihrer Lage passt: <Link href="/kontakt">Schreiben Sie mir</Link>,
                    und Sie erhalten eine ehrliche Einschätzung mit Zahlen. Details zum Leistungsumfang stehen auf
                    der Seite <Link href="/leistungen/seo">SEO und lokale Sichtbarkeit</Link>.
                </p>

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>Google Search Central, Benötigen Sie einen SEO?: keine Garantie für Platz 1, Zeitrahmen von vier Monaten bis zu einem Jahr, Warnsignale bei der Anbieterauswahl. <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=de" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Ahrefs, SEO Pricing Survey: 78,2 Prozent monatliche Pauschalen, häufigster Stundensatz 100 bis 150 Dollar, Durchschnittsbudget 3.209 Dollar bei Agenturen und 1.348 Dollar bei Freelancern. <a href="https://ahrefs.com/blog/seo-pricing/" rel="nofollow noopener" target="_blank">ahrefs.com</a></li>
                        <li>Ahrefs, How Long Does It Take to Rank in Google?: 1,74 Prozent neuer Seiten erreichen in zwölf Monaten die Top 10, erfolgreiche Seiten brauchen zwei bis sechs Monate. <a href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/" rel="nofollow noopener" target="_blank">ahrefs.com</a></li>
                        <li>freelancermap, Marktstudie Freelancer-Kompass 2025 und 2026: durchschnittliche Stundensätze im DACH-Raum. <a href="https://www.freelancermap.de/marktstudie" rel="nofollow noopener" target="_blank">freelancermap.de</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
