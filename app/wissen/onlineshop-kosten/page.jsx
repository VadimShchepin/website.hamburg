import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Onlineshop Kosten 2026: alle Posten offen',
    description: 'Shopify ab 27 Euro im Monat, Shopware Community kostenlos, WooCommerce quasi gratis. Was danach kommt: Umsetzung, Transaktionsgebühren, Pflichten, Pflege.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/onlineshop-kosten',
    },
    openGraph: {
        title: 'Onlineshop Kosten 2026: alle Posten offen',
        description: 'Plattformpreise, Umsetzung, Transaktionsgebühren, gesetzliche Pflichten und laufende Pflege, mit Rechenbeispielen.',
        url: 'https://webseite.hamburg/wissen/onlineshop-kosten',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Was kostet ein Onlineshop?',
        a: 'Die Plattform ist der kleinste Posten. Shopify kostet in Deutschland laut eigener Preisseite bei Jahreszahlung 27 Euro im Monat im Tarif Basic, 79 Euro bei Grow, 289 Euro bei Advanced und ab 2.100 Euro bei Plus. Shopware bietet eine kostenlose Community Edition zum Selbsthosten, die kommerziellen Editionen laufen über Anfrage. WooCommerce ist als Erweiterung kostenlos, verlagert die Kosten aber in Hosting, Erweiterungen und Pflege. Entscheidend für Ihr Budget sind Umsetzung, Produktdaten und laufende Betreuung.',
    },
    {
        q: 'Was kostet die Einrichtung eines Shops durch einen Dienstleister?',
        a: 'Bei mir sind E-Commerce-Projekte Sache einer individuellen Kalkulation, weil der Aufwand fast vollständig am Sortiment und an den Schnittstellen hängt. Als Orientierung: Ein Shop mit überschaubarem Sortiment auf einer fertigen Plattform liegt im Bereich einer Unternehmenswebsite, also ab 4.500 Euro. Ein Shop mit Warenwirtschaftsanbindung, B2B-Preisen oder Konfiguratoren liegt deutlich darüber.',
    },
    {
        q: 'Welche Gebühren fallen pro Verkauf an?',
        a: 'Zwei Arten. Zahlungsgebühren fallen immer an, üblich sind bei Kartenzahlung ein Prozentsatz des Umsatzes plus ein fester Betrag je Transaktion. Zusätzliche Plattform-Transaktionsgebühren erheben gehostete Anbieter, wenn Sie einen fremden Zahlungsanbieter verwenden statt des hauseigenen. Wer die Angebote vergleicht, muss deshalb Grundgebühr und Prozentsätze zusammen rechnen, nicht nur den Monatspreis.',
    },
    {
        q: 'Welche Pflichten kosten bei einem Shop zusätzlich Geld?',
        a: 'Rechtstexte für Widerruf, Versand und Zahlung, die Registrierung im Verpackungsregister für Verkaufsverpackungen, gegebenenfalls Meldepflichten für Elektro- und Batteriegeräte, seit dem 28. Juni 2025 die Barrierefreiheit nach dem BFSG für alle, die nicht als Kleinstunternehmen ausgenommen sind, sowie Steuerthemen bei Verkäufen in andere EU-Länder. Das ist kein einzelner großer Betrag, sondern eine Reihe kleiner, die man in der Planung gern vergisst.',
    },
    {
        q: 'Was ist der am häufigsten unterschätzte Kostenposten?',
        a: 'Die Produktdaten. Fotos, Beschreibungen, Varianten, Maße, Versandgewichte und Kategorien für jeden Artikel. Bei 50 Artikeln ist das eine Woche Arbeit, bei 500 ein Projekt. Diese Arbeit fällt unabhängig von der Plattform an, sie lässt sich schlecht auslagern, weil nur Sie Ihre Produkte kennen, und sie entscheidet mehr über den Umsatz als das Design.',
    },
    {
        q: 'Shopify oder eigener Shop, was ist günstiger?',
        a: 'Bei kleinem Sortiment und Standardprozessen ist Shopify meist günstiger, weil Zahlung, Steuern, Versandanbindung und Sicherheit gelöst sind und keine Pflege anfällt. Bei individuellen Prozessen, B2B-Anforderungen oder einer Warenwirtschaftsanbindung dreht sich das, weil Sie sonst jede Sonderanforderung über Erweiterungen mit monatlichen Kosten abbilden. Rechnen Sie über drei Jahre, nicht über ein Jahr.',
    },
];

export default function OnlineshopKostenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Onlineshop Kosten 2026: was wirklich zusammenkommt',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/onlineshop-kosten',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/onlineshop-kosten' },
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
            { '@type': 'ListItem', position: 3, name: 'Onlineshop Kosten', item: 'https://webseite.hamburg/wissen/onlineshop-kosten' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="onlineshop-kosten"
                category="E-COMMERCE"
                title="Onlineshop Kosten 2026: was wirklich zusammenkommt"
                readTime="11 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-onlineshop-kosten.svg"
                heroAlt="Illustration: Einkaufswagen vor einem Browser-Fenster, daran ein rotes Preisschild"
            >
                <p>
                    Die Frage nach den Kosten eines Onlineshops wird fast immer mit dem Monatspreis einer Plattform
                    beantwortet. Das ist ungefähr so hilfreich wie die Antwort auf die Frage nach den Kosten eines
                    Lieferwagens mit dem Preis der Kfz-Steuer.
                </p>
                <p>
                    Deshalb liste ich hier alle Posten auf, in der Reihenfolge, in der sie Ihnen begegnen, mit
                    echten Listenpreisen von den Anbieterseiten. Am Ende stehen zwei Rechenbeispiele über drei
                    Jahre.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Die Plattform ist der kleinste Posten. Shopify kostet in
                        Deutschland bei Jahreszahlung 27 Euro im Monat für Basic, 79 Euro für Grow, 289 Euro für
                        Advanced, ab 2.100 Euro für Plus. Shopware hat eine kostenlose Community Edition zum
                        Selbsthosten. WooCommerce ist als Erweiterung kostenlos.
                    </p>
                    <p>
                        Die eigentlichen Kosten liegen in vier Posten: Umsetzung und Gestaltung, Produktdaten,
                        Zahlungs- und Transaktionsgebühren, laufende Pflege. Dazu kommen gesetzliche Pflichten, die
                        einzeln klein und in der Summe spürbar sind.
                    </p>
                </div>

                <h2>Posten 1: die Plattform</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Plattform</th>
                                <th>Preis</th>
                                <th>Betriebsmodell</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Shopify Basic</th>
                                <td>27 Euro im Monat bei Jahreszahlung</td>
                                <td>gehostet, Updates und Sicherheit inklusive</td>
                            </tr>
                            <tr>
                                <th>Shopify Grow</th>
                                <td>79 Euro im Monat</td>
                                <td>gehostet, bis zu fünf Mitarbeiterkonten</td>
                            </tr>
                            <tr>
                                <th>Shopify Advanced</th>
                                <td>289 Euro im Monat</td>
                                <td>gehostet, Versandtarife Dritter in Echtzeit</td>
                            </tr>
                            <tr>
                                <th>Shopify Plus</th>
                                <td>ab 2.100 Euro im Monat</td>
                                <td>gehostet, für komplexe Unternehmen</td>
                            </tr>
                            <tr>
                                <th>Shopware Community Edition</th>
                                <td>kostenlos</td>
                                <td>selbst gehostet, Pflege bei Ihnen</td>
                            </tr>
                            <tr>
                                <th>Shopware kommerzielle Editionen</th>
                                <td>auf Anfrage</td>
                                <td>gestaffelt nach Funktionsumfang</td>
                            </tr>
                            <tr>
                                <th>WooCommerce</th>
                                <td>Erweiterung kostenlos</td>
                                <td>selbst gehostet auf WordPress, Erweiterungen kostenpflichtig</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Der Unterschied zwischen den Zeilen ist nicht der Preis, sondern wo die Arbeit anfällt. Bei
                    gehosteten Plattformen zahlen Sie monatlich und haben keine Wartungspflicht. Bei
                    selbstgehosteten Systemen ist die Software kostenlos und die Pflege Ihre Aufgabe. Bei
                    WooCommerce gilt zusätzlich das, was für jede WordPress-Installation gilt, siehe
                    {' '}<Link href="/wissen/wordpress-sicherheit-wartung">WordPress absichern und warten</Link>.
                </p>

                <h2>Posten 2: Umsetzung und Gestaltung</h2>
                <p>
                    Hier liegt der größte Einmalbetrag. Der Aufwand hängt an vier Dingen: Anzahl der Produkte und
                    Varianten, Zahl der Schnittstellen, Umfang der Sonderprozesse und wie individuell das Design
                    sein soll.
                </p>
                <ul>
                    <li><strong>Fertiges Theme mit Anpassung.</strong> Am günstigsten, funktioniert bei klarem Sortiment und Standardprozessen gut. Die Gefahr: Ihr Shop sieht aus wie zehntausend andere.</li>
                    <li><strong>Individuelle Gestaltung auf einer Plattform.</strong> Der übliche Weg für Marken, die sich unterscheiden wollen. Bei mir im Bereich einer Unternehmenswebsite, also ab 4.500 Euro, mit Aufschlag je nach Sortiment.</li>
                    <li><strong>Individuelle Entwicklung mit Schnittstellen.</strong> Warenwirtschaft, B2B-Preise, Konfiguratoren, Abonnements. Hier bestimmt die Schnittstelle den Preis, nicht das Design. Kalkulation immer individuell, Details unter <Link href="/leistungen/e-commerce-entwicklung">E-Commerce-Entwicklung</Link>.</li>
                </ul>

                <h2>Posten 3: Produktdaten, der unterschätzte Riese</h2>
                <p>
                    Jeder Artikel braucht Fotos, Beschreibung, Varianten, Maße, Versandgewicht, Kategorien,
                    Artikelnummer und Steuersatz. Rechnen Sie pro Artikel mit 15 bis 45 Minuten, je nach
                    Komplexität, Fotografie nicht eingerechnet.
                </p>
                <p>
                    Bei 50 Artikeln ist das eine gute Arbeitswoche. Bei 500 ist es ein eigenes Projekt, und dann
                    stellt sich die Frage nach einem Import aus einem bestehenden System. Diese Arbeit lässt sich
                    kaum delegieren, weil nur Sie Ihre Produkte kennen, und sie entscheidet über Umsatz mehr als
                    jede Designentscheidung. Produktfotos sind dabei der Posten, an dem Sparen sich am schnellsten
                    rächt.
                </p>

                <h2>Posten 4: Gebühren pro Verkauf</h2>
                <p>
                    Zwei Arten, die man auseinanderhalten muss. Zahlungsgebühren fallen bei jedem Zahlungsanbieter
                    an, typischerweise als Prozentsatz des Umsatzes plus ein fester Betrag je Transaktion.
                    Plattform-Transaktionsgebühren erheben gehostete Anbieter zusätzlich, wenn Sie einen fremden
                    Zahlungsanbieter nutzen statt des hauseigenen.
                </p>
                <p>
                    Die Konsequenz für den Vergleich: Ein Tarif mit niedriger Grundgebühr und höherem Prozentsatz
                    ist bei kleinem Umsatz günstiger und ab einer bestimmten Schwelle teurer. Rechnen Sie mit Ihrem
                    erwarteten Monatsumsatz durch, nicht mit dem Monatspreis allein. Bei 5.000 Euro Umsatz macht ein
                    Prozentpunkt Unterschied 50 Euro im Monat, also mehr als der Sprung von Basic auf Grow.
                </p>

                <h2>Posten 5: die Pflichten, die Geld und Zeit kosten</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Pflicht</th>
                                <th>Was zu tun ist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Rechtstexte</th>
                                <td>Widerrufsbelehrung mit Muster-Formular, Versand- und Zahlungsbedingungen, Preisangaben, Impressum nach § 5 DDG</td>
                            </tr>
                            <tr>
                                <th>Datenschutz</th>
                                <td>Informationen nach Art. 13 DSGVO, Auftragsverarbeitung mit Zahlungsanbieter, Versandpartner und Hoster nach Art. 28</td>
                            </tr>
                            <tr>
                                <th>Cookies und Tracking</th>
                                <td>Einwilligung vor dem Setzen nach § 25 TDDDG, gerade bei Werbe-Pixeln im Shop</td>
                            </tr>
                            <tr>
                                <th>Verpackungen</th>
                                <td>Registrierung im Verpackungsregister und Systembeteiligung für Verkaufsverpackungen</td>
                            </tr>
                            <tr>
                                <th>Barrierefreiheit</th>
                                <td>seit 28. Juni 2025 nach BFSG, wenn Sie nicht als Kleinstunternehmen ausgenommen sind; für Shops gilt zusätzlich § 19 BFSGV für Identifizierung, Authentifizierung und Zahlung</td>
                            </tr>
                            <tr>
                                <th>Steuern im EU-Versand</th>
                                <td>Schwellenwerte und Meldeverfahren beim grenzüberschreitenden Verkauf an Verbraucher</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die Zeile Barrierefreiheit ist die neue und die, die am häufigsten übersehen wird. Ein Shop ist
                    eine Dienstleistung im elektronischen Geschäftsverkehr, also erfasst, sofern Sie nicht unter
                    die Kleinstunternehmensausnahme fallen. Und § 19 BFSGV verlangt ausdrücklich, dass
                    Identifizierung, Authentifizierung, Sicherheitsfunktionen und Zahlung wahrnehmbar, bedienbar,
                    verständlich und robust sind. Genau die Bestellstrecke also. Was das bedeutet, steht in
                    {' '}<Link href="/wissen/barrierefreie-website-pflicht">Barrierefreie Website: Pflicht nach dem BFSG</Link> und
                    praktisch in <Link href="/wissen/website-barrierefrei-machen">Website barrierefrei machen</Link>.
                </p>

                <h2>Posten 6: laufender Betrieb</h2>
                <ul>
                    <li><strong>Plattform oder Hosting.</strong> Monatlich, siehe Tabelle oben. Bei selbstgehosteten Systemen liegt der Bedarf höher als bei einer normalen Website, weil ein Shop mehr Rechenlast erzeugt.</li>
                    <li><strong>Erweiterungen.</strong> Bewertungen, Newsletter, Versandetiketten, Buchhaltungsanbindung. Jede kostet oft einen kleinen zweistelligen Betrag im Monat, und sie summieren sich unauffällig.</li>
                    <li><strong>Pflege und Updates.</strong> Bei gehosteten Plattformen entfällt das, bei selbstgehosteten nicht.</li>
                    <li><strong>Werbung.</strong> Der größte laufende Posten bei fast jedem Shop. Ein Shop ohne Werbebudget ist ein Schaufenster in einer Seitengasse. Zahlen dazu in <Link href="/wissen/google-ads-kosten">Google Ads Kosten</Link>.</li>
                </ul>

                <h2>Zwei Rechenbeispiele über drei Jahre</h2>
                <p>
                    Ohne Werbebudget, ohne Zahlungsgebühren, weil beide vom Umsatz abhängen. Nur Aufbau und
                    Betrieb.
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Posten</th>
                                <th>Kleiner Shop, 40 Artikel, Standardprozesse</th>
                                <th>Mittlerer Shop, 300 Artikel, Warenwirtschaft</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Plattform, 36 Monate</th>
                                <td>Shopify Basic, rund 970 Euro</td>
                                <td>Shopify Grow oder selbstgehostet, rund 2.800 bis 3.500 Euro</td>
                            </tr>
                            <tr>
                                <th>Umsetzung</th>
                                <td>Theme mit Anpassung, ab 4.500 Euro</td>
                                <td>individuell mit Schnittstelle, deutlich darüber, Kalkulation je Projekt</td>
                            </tr>
                            <tr>
                                <th>Produktdaten</th>
                                <td>eine Arbeitswoche intern</td>
                                <td>mehrere Wochen oder Datenimport</td>
                            </tr>
                            <tr>
                                <th>Erweiterungen, 36 Monate</th>
                                <td>rund 500 bis 1.500 Euro</td>
                                <td>rund 1.500 bis 4.000 Euro</td>
                            </tr>
                            <tr>
                                <th>Rechtstexte und Registrierungen</th>
                                <td>einmalig mittlerer dreistelliger Bereich plus laufende Systembeteiligung</td>
                                <td>dito, mit mehr Aufwand bei EU-Versand</td>
                            </tr>
                            <tr>
                                <th>Pflege</th>
                                <td>bei gehosteter Plattform nahe null</td>
                                <td>bei Selbsthosting Wartungspaket, üblich 30 bis 150 Euro im Monat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die Zahlen zur Plattform sind Listenpreise von den Anbieterseiten, Stand August 2026. Die
                    Umsetzungsbeträge sind meine Preise, die Bandbreiten bei Erweiterungen und Pflege sind
                    Marktbeobachtung und keine Zusage.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Bei einem Shopify-Projekt für einen Kosmetikhändler lag der Aufwand am Ende nicht dort, wo
                        das Budget geplant war. Die Gestaltung war schnell fertig. Was Zeit brauchte, waren
                        Produktdaten mit Inhaltsstoffangaben, Varianten in mehreren Größen und Bilder in
                        einheitlicher Anmutung. Danach kam die eigentliche Arbeit: Inhalte, die Menschen finden und
                        überzeugen.
                    </p>
                    <p>
                        Die Erkenntnis daraus, die ich seither in jedes Shop-Gespräch mitnehme: Ein Shop ist kein
                        Bauprojekt mit Abschluss, sondern ein Betrieb mit Eröffnung. Wer das gesamte Budget in den
                        Aufbau steckt und nichts für die ersten sechs Monate übrig hat, hat ein sehr schönes,
                        sehr leeres Geschäft. Der Fall ist beschrieben in der Fallstudie
                        {' '}<Link href="/referenzen/dybeauty">DYBEAUTY</Link>.
                    </p>
                </div>

                <h2>Woran Sie sparen können und woran nicht</h2>
                <div className="rule-cols">
                    <div className="rule-col">
                        <h3>Sparen lohnt sich</h3>
                        <ul>
                            <li>Am Sortiment zum Start. 30 gute Artikel schlagen 300 halbfertige.</li>
                            <li>An Sonderfunktionen, die niemand angefragt hat.</li>
                            <li>An individueller Gestaltung, solange die Marke nicht der Verkaufsgrund ist.</li>
                            <li>An Erweiterungen, die ein Problem lösen, das Sie noch nicht haben.</li>
                        </ul>
                    </div>
                    <div className="rule-col rule-no">
                        <h3>Sparen rächt sich</h3>
                        <ul>
                            <li>An Produktfotos. Das ist Ihr Schaufenster.</li>
                            <li>Am Bestellprozess. Jeder unnötige Schritt kostet Umsatz.</li>
                            <li>An Ladezeit. Shops sind bildlastig und mobil.</li>
                            <li>An Rechtstexten. Der günstigste Posten mit dem größten Schadensrisiko.</li>
                            <li>Am Werbebudget nach dem Start.</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Zum Bestellprozess: Was dort typischerweise Umsatz verliert und wie man es messbar behebt,
                    steht in <Link href="/wissen/website-conversion-optimierung">Conversion-Optimierung</Link>. Zur
                    Ladezeit gibt es eine Messung an einem echten Projekt in der
                    {' '}<Link href="/wissen/case-study-fotogalerie-performance">Fallstudie zur Fotogalerie</Link>.
                </p>

                <h2>Wenn Sie eine Zahl für Ihren Fall wollen</h2>
                <p>
                    Nennen Sie mir drei Dinge: Anzahl der Artikel, ob eine Warenwirtschaft angebunden werden muss,
                    und ob Sie an Verbraucher oder an Unternehmen verkaufen. Damit kann ich einordnen, ob Ihr
                    Projekt bei einer fertigen Plattform oder bei individueller Entwicklung günstiger liegt. Sie
                    arbeiten direkt mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder
                    Fotografie, hole ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für das
                    Ergebnis bleibe ich. Details unter
                    {' '}<Link href="/leistungen/e-commerce-entwicklung">E-Commerce-Entwicklung</Link> oder direkt
                    im <Link href="/kontakt">Kontakt</Link>.
                </p>
                <p>
                    Die rechtlichen Punkte in diesem Artikel sind eine Übersicht mit Fundstellen, keine
                    Rechtsberatung. Für Rechtstexte und Meldepflichten lohnt ein Anwalt oder ein Fachdienst, weil
                    ein Fehler dort schnell teurer ist als die Beratung.
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
                        <li>Shopify Deutschland, Preise, Stand August 2026, Jahreszahlung: Basic 27 Euro, Grow 79 Euro, Advanced 289 Euro, Plus ab 2.100 Euro im Monat. <a href="https://www.shopify.com/de/preise" rel="nofollow noopener" target="_blank">shopify.com</a></li>
                        <li>Shopware, Pläne und Preise: kostenlose Community Edition zum Selbsthosten, kommerzielle Editionen Rise, Evolve und Beyond. <a href="https://www.shopware.com/de/preise/" rel="nofollow noopener" target="_blank">shopware.com</a></li>
                        <li>Barrierefreiheitsstärkungsgesetz (BFSG), § 1 Absatz 3 Nummer 5: Dienstleistungen im elektronischen Geschäftsverkehr, Anwendung ab 28. Juni 2025. <a href="https://www.gesetze-im-internet.de/bfsg/__1.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSGV § 19: zusätzliche Anforderungen für Dienstleistungen im elektronischen Geschäftsverkehr, unter anderem barrierefreie Identifizierung, Authentifizierung und Zahlung. <a href="https://www.gesetze-im-internet.de/bfsgv/__19.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Zentrale Stelle Verpackungsregister, Registrierungspflicht für Verkaufsverpackungen. <a href="https://www.verpackungsregister.org/" rel="nofollow noopener" target="_blank">verpackungsregister.org</a></li>
                        <li>Digitale-Dienste-Gesetz (DDG), § 5: Impressumspflicht. <a href="https://www.gesetze-im-internet.de/ddg/__5.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG), § 25: Einwilligung vor Zugriff auf das Endgerät. <a href="https://www.gesetze-im-internet.de/ttdsg/__25.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
