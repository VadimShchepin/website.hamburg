import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Google Ads Kosten: echte Zahlen statt Schätzung',
    description: '90 Tage aus einem betreuten Konto: 2.991 Euro, 1.032 Klicks, 42 Anfragen. Klickpreise, Kosten je Anfrage und warum billige Klicks die teuren sind.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/google-ads-kosten',
    },
    openGraph: {
        title: 'Google Ads Kosten: echte Zahlen statt Schätzung',
        description: '90 Tage aus einem betreuten Konto: Klickpreise, Kosten je Anfrage und warum billige Klicks die teuren sind.',
        url: 'https://webseite.hamburg/wissen/google-ads-kosten',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Was kostet Google Ads pro Monat?',
        a: 'Sie bestimmen das Budget selbst, Google zieht nur, was ausgegeben wird. In dem hier ausgewerteten Konto eines Hamburger Dienstleisters lagen die Mediakosten in den vergangenen Monaten zwischen etwa 945 und 1.350 Euro monatlich. Für lokale Dienstleister empfehle ich mindestens 500 Euro Werbebudget im Monat, weil darunter zu wenig Daten für sinnvolle Entscheidungen zusammenkommen.',
    },
    {
        q: 'Wie hoch ist ein normaler Klickpreis?',
        a: 'Es gibt keinen normalen Klickpreis, nur einen je Markt. In dem ausgewerteten Konto lag der durchschnittliche Klickpreis über 90 Tage bei 2,90 Euro, bei einer Klickrate von 6,5 Prozent. Der Google Keyword Planner nennt für Deutschland teils extreme Spannen: für den Suchbegriff google ads kosten selbst 2,67 bis 58,74 Euro für die oberen Positionen. Wer eine Zahl für seinen Markt braucht, sollte den Planner für die eigenen Begriffe abfragen.',
    },
    {
        q: 'Was kostet eine Anfrage über Google Ads?',
        a: 'In dem ausgewerteten Konto 71 Euro je Conversion über 90 Tage, mit großen Unterschieden zwischen den Suchbegriffen: von 40 Euro bei präzise passenden Begriffen bis 190 Euro bei weit gefassten. Über zwölf Monate lag der Wert bei rund 69 Euro. Sinnvoll ist diese Zahl nur im Verhältnis zu Ihrem Auftragswert und Ihrer Abschlussquote.',
    },
    {
        q: 'Warum sind billige Klicks oft die teuersten?',
        a: 'Weil weit gefasste Keyword-Optionen viele unpassende Suchanfragen einsammeln. In dem ausgewerteten Konto kostete ein Klick auf den weitgehend passenden Begriff 1,00 Euro, eine Anfrage daraus aber 162 Euro. Beim gleichen Begriff als Wortgruppe kostete der Klick 3,79 Euro und die Anfrage nur 43 Euro. Der teurere Klick war also fast viermal wirtschaftlicher.',
    },
    {
        q: 'Was kostet die Betreuung durch eine Agentur?',
        a: 'Bei mir kostet das Kampagnen-Setup ab 700 Euro einmalig, die laufende Betreuung ab 500 Euro im Monat, das Werbebudget kommt separat obendrauf. Übliche Alternativmodelle im Markt sind ein Prozentsatz der Mediaausgaben oder Stundensätze. Beim Prozentmodell sollten Sie darauf achten, dass es keinen Anreiz erzeugt, das Budget zu erhöhen.',
    },
    {
        q: 'Wie bestimmt Google, was ein Klick kostet?',
        a: 'Über eine Auktion. Google gibt selbst an, dass der tatsächliche Klickpreis oft und teilweise deutlich unter dem maximalen Gebot liegt. Maßgeblich ist der Anzeigenrang, in den unter anderem Gebot, Anzeigenqualität zum Auktionszeitpunkt, Wettbewerb, Suchkontext und die erwartete Wirkung von Assets und Anzeigenformaten einfließen. Bessere Anzeigenqualität senkt also den Preis für dieselbe Position.',
    },
];

export default function GoogleAdsKostenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Google Ads Kosten: 90 Tage aus einem echten Konto',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/google-ads-kosten',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/google-ads-kosten' },
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Google Ads Kosten', item: 'https://webseite.hamburg/wissen/google-ads-kosten' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="google-ads-kosten"
                category="GOOGLE ADS"
                title="Google Ads Kosten: 90 Tage aus einem echten Konto"
                readTime="11 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-google-ads-kosten.svg"
                heroAlt="Illustration: Auktionshammer über einem Suchfeld, darunter drei aufsteigende Münzstapel, der höchste rot"
            >
                <p>
                    Die meisten Artikel zu diesem Thema erklären die Auktion und nennen dann eine Spanne von einem
                    bis fünfzig Euro pro Klick. Das ist nicht falsch und hilft niemandem. Ich mache es hier anders
                    und zeige Zahlen aus einem Konto, das ich betreue: 90 Tage, jeder Betrag aus der
                    Kontoauswertung, nichts geschätzt.
                </p>
                <p>
                    Es ist ein Konto eines Hamburger Dienstleistungsbetriebs im Umzugs- und Entrümpelungsumfeld.
                    Ihre Branche hat andere Preise. Was übertragbar ist, sind die Verhältnisse, und die eine
                    Erkenntnis, die fast jedes Konto teilt: Die billigen Klicks sind die teuren.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> In 90 Tagen (24. Mai bis 21. August 2026) hat das
                        ausgewertete Konto 2.991,54 Euro ausgegeben und dafür 15.940 Impressionen, 1.032 Klicks und
                        42 Conversions erhalten. Das ergibt 2,90 Euro je Klick, eine Klickrate von 6,5 Prozent und
                        71 Euro je Anfrage. Über zwölf Monate lag der Wert bei rund 69 Euro je Anfrage.
                    </p>
                    <p>
                        Ihre Kosten bestehen aus drei Teilen: Werbebudget an Google, einmaliges Setup und laufende
                        Betreuung. Bei mir: Setup ab 700 Euro einmalig, Betreuung ab 500 Euro im Monat, Budget
                        separat mit einer Empfehlung von mindestens 500 Euro im Monat.
                    </p>
                </div>

                <h2>Woraus sich Ihre Google-Ads-Kosten zusammensetzen</h2>
                <p>
                    Drei Posten, die man auseinanderhalten muss, weil sie unterschiedlich steuerbar sind.
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Posten</th>
                                <th>Höhe</th>
                                <th>Wer bestimmt sie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Werbebudget an Google</th>
                                <td>frei wählbar, Empfehlung ab 500 Euro im Monat für lokale Dienstleister</td>
                                <td>Sie, über Tagesbudget und Gebotsstrategie</td>
                            </tr>
                            <tr>
                                <th>Klickpreis innerhalb des Budgets</th>
                                <td>im ausgewerteten Konto 1,00 bis 7,84 Euro je Suchbegriff</td>
                                <td>Auktion, beeinflussbar über Anzeigenqualität</td>
                            </tr>
                            <tr>
                                <th>Einmaliges Setup</th>
                                <td>ab 700 Euro</td>
                                <td>Umfang: Konten, Conversion-Messung, Kampagnenstruktur, Anzeigen, Negativlisten</td>
                            </tr>
                            <tr>
                                <th>Laufende Betreuung</th>
                                <td>ab 500 Euro im Monat</td>
                                <td>Suchanfragenprüfung, Gebote, Anzeigentests, Ausschlüsse</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Warum Setup und Betreuung getrennt sind, hat einen Grund: Der Aufbau ist einmalige Arbeit und
                    sollte nicht jeden Monat neu abgerechnet werden. Die Preise für alle Leistungen stehen
                    vollständig auf der Seite <Link href="/leistungen/google-ads">Google Ads</Link>.
                </p>

                <h2>Die Zahlen aus dem Konto, 90 Tage</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Kennzahl</th>
                                <th>Wert</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Zeitraum</th>
                                <td>24. Mai bis 21. August 2026</td>
                            </tr>
                            <tr>
                                <th>Impressionen</th>
                                <td>15.940</td>
                            </tr>
                            <tr>
                                <th>Klicks</th>
                                <td>1.032</td>
                            </tr>
                            <tr>
                                <th>Klickrate</th>
                                <td>6,5 Prozent</td>
                            </tr>
                            <tr>
                                <th>Mediakosten</th>
                                <td>2.991,54 Euro</td>
                            </tr>
                            <tr>
                                <th>Durchschnittlicher Klickpreis</th>
                                <td>2,90 Euro</td>
                            </tr>
                            <tr>
                                <th>Conversions</th>
                                <td>42</td>
                            </tr>
                            <tr>
                                <th>Kosten je Conversion</th>
                                <td>71,23 Euro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Eine Klickrate von 6,5 Prozent ist für Suchanzeigen ordentlich und sagt vor allem: Die
                    Anzeigen passen zu den Suchanfragen. Bei 1 bis 2 Prozent wäre die erste Baustelle nicht das
                    Gebot, sondern die Übereinstimmung von Suchbegriff, Anzeigentext und Zielseite.
                </p>

                <h2>Der wichtigste Befund: billige Klicks, teure Anfragen</h2>
                <p>
                    Derselbe Suchbegriff, drei Keyword-Optionen, drei völlig verschiedene Wirtschaftlichkeiten. Das
                    ist die Tabelle, für die dieser Artikel existiert.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Keyword-Option</th>
                                <th>Klicks</th>
                                <th>Klickpreis</th>
                                <th>Conversions</th>
                                <th>Kosten je Anfrage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>weitgehend passend</th>
                                <td>162</td>
                                <td>1,00 Euro</td>
                                <td>1</td>
                                <td>162 Euro</td>
                            </tr>
                            <tr>
                                <th>passende Wortgruppe</th>
                                <td>182</td>
                                <td>3,79 Euro</td>
                                <td>16</td>
                                <td>43 Euro</td>
                            </tr>
                            <tr>
                                <th>genau passend</th>
                                <td>59</td>
                                <td>4,24 Euro</td>
                                <td>4</td>
                                <td>63 Euro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Lesen Sie die Tabelle von links nach rechts, und die Verlockung wird sichtbar. Die
                    weitgehend passende Variante liefert die meisten Klicks zum niedrigsten Preis. In jedem
                    Bericht, der bei Klicks aufhört, ist das die Gewinnerzeile. Sie hat in 90 Tagen genau eine
                    Anfrage gebracht.
                </p>
                <p>
                    Der Grund ist nicht mysteriös: Weit gefasste Optionen sammeln Suchanfragen ein, die thematisch
                    verwandt und kaufmännisch nutzlos sind. Wer Preise vergleicht, wer eine Anleitung sucht, wer
                    Arbeit sucht statt Dienstleistung. Diese Klicks sind günstig, weil niemand sonst dafür bietet.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/googleads-matchtypes.svg" alt="Balkenvergleich: bei weitgehend passenden Keywords ist der Klickpreis niedrig und die Kosten je Anfrage sehr hoch, bei Wortgruppen umgekehrt" width="1600" height="900" />
                    <figcaption>Klickpreis und Kosten je Anfrage laufen gegeneinander. Wer nur den linken Balken optimiert, verschlechtert den rechten.</figcaption>
                </figure>

                <h2>Die Spannweite innerhalb eines Kontos</h2>
                <p>
                    Aus derselben Auswertung, die zehn teuersten Suchbegriffe nach Ausgaben. Die Spanne der
                    Klickpreise reicht von 1,00 bis 7,84 Euro, die Spanne der Anfragekosten von 40 bis über 190
                    Euro. Alles im gleichen Konto, in der gleichen Stadt, in der gleichen Branche.
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Art des Suchbegriffs</th>
                                <th>Klickpreis</th>
                                <th>Kosten je Anfrage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Hauptleistung plus Stadt, als Wortgruppe</th>
                                <td>3,79 Euro</td>
                                <td>43 Euro</td>
                            </tr>
                            <tr>
                                <th>Synonym der Hauptleistung plus Stadt</th>
                                <td>3,77 Euro</td>
                                <td>40 Euro</td>
                            </tr>
                            <tr>
                                <th>Kostenfrage plus Leistung plus Stadt</th>
                                <td>3,13 Euro</td>
                                <td>51 Euro</td>
                            </tr>
                            <tr>
                                <th>Berufsbezeichnung plus Stadt</th>
                                <td>4,98 Euro</td>
                                <td>47 Euro</td>
                            </tr>
                            <tr>
                                <th>Nebenleistung plus Stadt</th>
                                <td>3,33 Euro</td>
                                <td>keine Anfrage in 90 Tagen</td>
                            </tr>
                            <tr>
                                <th>Verwandte Leistung, weit gefasst</th>
                                <td>1,70 Euro</td>
                                <td>190 Euro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die Zeile mit der Kostenfrage ist interessant. Wer nach dem Preis einer Leistung sucht, gilt
                    als weniger kaufbereit. In diesem Konto liefert dieser Begriff Anfragen zu 51 Euro. Wer solche
                    Suchen grundsätzlich ausschließt, wirft einen gut funktionierenden Kanal weg. Deshalb baue ich
                    Kostenseiten, statt die Frage zu vermeiden, siehe
                    {' '}<Link href="/wissen/webdesign-kosten">Webdesign Kosten</Link> und
                    {' '}<Link href="/wissen/seo-kosten-hamburg">SEO Kosten</Link>.
                </p>

                <h2>Was Google offiziell zum Preis sagt</h2>
                <p>
                    Zwei Aussagen aus der Google-Ads-Hilfe, die man kennen sollte. Erstens: Der tatsächliche
                    Klickpreis ist der Betrag, der berechnet wird, und er liegt oft, teilweise deutlich, unter dem
                    maximalen Gebot. Zweitens: Maßgeblich ist der Anzeigenrang, in den neben dem Gebot die
                    Anzeigenqualität zum Auktionszeitpunkt, der Wettbewerb, der Suchkontext und die erwartete
                    Wirkung von Assets und Anzeigenformaten einfließen.
                </p>
                <p>
                    Praktisch heißt das: Qualität ist ein Preisnachlass. Eine Anzeige, die genau zur Suchanfrage
                    passt, und eine Zielseite, die genau das Versprochene liefert, kosten für dieselbe Position
                    weniger. Deshalb mache ich Ads-Projekte nie ohne Blick auf die Zielseite. Was
                    dort wirkt, steht in
                    {' '}<Link href="/leistungen/conversion-optimierung">Conversion-Optimierung</Link>.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Der wirksamste Handgriff in diesem Konto war nicht das Gebot, sondern die Suchanfragenliste.
                        Wöchentlich durchgehen, alles ausschließen, was nichts mit der Leistung zu tun hat. In den
                        ersten Wochen sind das Dutzende Begriffe: Stellenangebote, Nachbarstädte außerhalb des
                        Einsatzgebiets, Bastelanleitungen, Vergleichsportale.
                    </p>
                    <p>
                        Das ist die langweiligste Arbeit im ganzen Kanal, und sie hat den größten Effekt. Was
                        typischerweise schiefgeht, wenn niemand hinsieht, steht in
                        {' '}<Link href="/wissen/google-ads-fehler-lokale-unternehmen">Die 7 teuersten Google Ads Fehler lokaler Unternehmen</Link>.
                        Der Fall dieses Kontos ist in der Fallstudie
                        {' '}<Link href="/referenzen/blitz-hamburg">Blitz Hamburg</Link> beschrieben.
                    </p>
                </div>

                <h2>Was Sie für Ihre Branche erwarten können</h2>
                <p>
                    Statt einer erfundenen Branchentabelle der belastbare Weg: Fragen Sie die Spannen für Ihre
                    eigenen Begriffe im Google Keyword Planner ab. Der nennt für jeden Begriff die Gebote für die
                    oberen Positionen. Zwei Beispiele aus meiner Abfrage für Deutschland im August 2026:
                </p>
                <ul>
                    <li><strong>google ads kosten</strong>, rund 1.000 Suchen im Monat, Gebotsspanne für obere Positionen 2,67 bis 58,74 Euro.</li>
                    <li><strong>website erstellen lassen kosten</strong>, rund 480 Suchen im Monat, Gebotsspanne 3,44 bis 11,12 Euro.</li>
                </ul>
                <p>
                    Die Spanne von 2,67 bis 58,74 Euro beim ersten Beispiel zeigt, warum Pauschalaussagen zu
                    Klickpreisen nichts wert sind. In derselben Auktion bieten Betriebe mit 300 Euro Auftragswert
                    gegen Anbieter mit 30.000 Euro Vertragswert. Der obere Rand einer solchen Spanne ist nicht Ihr
                    Preis, sondern der Preis dessen, für den er sich noch rechnet.
                </p>
                <p>
                    Rechnen Sie deshalb rückwärts, nicht vorwärts. Was ist ein Auftrag bei Ihnen wert? Wie viele
                    Anfragen brauchen Sie für einen Auftrag? Daraus ergibt sich, was eine Anfrage kosten darf, und
                    daraus, ob der Kanal für Sie funktioniert. Bei 71 Euro je Anfrage und einer Abschlussquote von
                    einem Drittel kostet ein Auftrag etwa 214 Euro Werbekosten. Bei einem Auftragswert von 800
                    Euro trägt das. Bei 150 Euro nicht.
                </p>

                <h2>Ads oder SEO: die Kostenfrage dahinter</h2>
                <p>
                    Ads kosten pro Klick und wirken sofort. Wenn Sie zahlen, kommen Besucher, wenn Sie aufhören,
                    nicht mehr. Suchmaschinenoptimierung kostet vorne und wirkt später, dafür ohne Klickpreis. Die
                    beiden Kanäle konkurrieren nicht, sie haben verschiedene Zeitprofile.
                </p>
                <p>
                    Meine Empfehlung für lokale Betriebe: mit Ads anfangen, weil man in vier Wochen weiß, ob es
                    Nachfrage gibt und was eine Anfrage kostet. Diese Zahl ist die beste Grundlage für die
                    Entscheidung, ob und wie viel Sie in <Link href="/leistungen/seo">SEO</Link> stecken. Zahlen
                    zur zweiten Seite in <Link href="/wissen/seo-kosten-hamburg">SEO Kosten Hamburg</Link>.
                </p>

                <h2>Wenn Sie es durchrechnen wollen</h2>
                <p>
                    Nennen Sie mir Ihre Leistung, Ihr Einsatzgebiet und Ihren durchschnittlichen Auftragswert. Ich
                    schätze Ihnen daraus, welches Budget sinnvoll ist und bei welchem Preis je Anfrage sich der
                    Kanal für Sie noch trägt. Sie arbeiten direkt mit mir. Braucht ein Projekt zusätzliche
                    Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu.
                    Ansprechpartner und Verantwortlicher für das Ergebnis bleibe ich. Zur Leistungsseite
                    {' '}<Link href="/leistungen/google-ads">Google Ads</Link> oder direkt zum
                    {' '}<Link href="/kontakt">Kontakt</Link>.
                </p>
                <p>
                    Ein Wort zu den Zahlen oben: Sie kommen aus einem einzigen Konto in einer einzigen Branche in
                    einer einzigen Stadt. Sie sind echt und sie sind nicht repräsentativ. Ich zeige sie, weil eine
                    nachvollziehbare echte Zahl mehr wert ist als eine gemittelte Behauptung über alle Branchen.
                </p>

                <h2>Häufige Fragen</h2>
                {faqItems.map((item) => (
                    <div key={item.q}>
                        <h3>{item.q}</h3>
                        <p>{item.a}</p>
                    </div>
                ))}

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>Eigene Kontoauswertung eines von mir betreuten Google-Ads-Kontos, Zeitraum 24. Mai bis 21. August 2026: 15.940 Impressionen, 1.032 Klicks, 2.991,54 Euro Mediakosten, 42 Conversions; Keyword-Ebene für die Match-Type-Vergleiche. Zwölfmonatsvergleich aus demselben Konto.</li>
                        <li>Google Ads Hilfe, Tatsächlicher Cost-per-Click und Anzeigenrang: der berechnete Betrag liegt oft unter dem maximalen Gebot, maßgeblich sind Gebot, Anzeigenqualität, Wettbewerb, Suchkontext und erwartete Wirkung von Assets und Formaten. <a href="https://support.google.com/google-ads/answer/6297" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Keyword Planner, Abfrage für Deutschland in deutscher Sprache, August 2026: Suchvolumen und Gebotsspannen für obere Positionen, unter anderem google ads kosten 2,67 bis 58,74 Euro und website erstellen lassen kosten 3,44 bis 11,12 Euro.</li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
