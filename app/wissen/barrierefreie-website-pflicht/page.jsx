import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Barrierefreie Website: Pflicht oder nicht?',
    description: 'Das BFSG gilt seit dem 28. Juni 2025. Wer betroffen ist, wer als Kleinstunternehmen ausgenommen bleibt, was im Gesetz steht und was bei Verstößen droht.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/barrierefreie-website-pflicht',
    },
    openGraph: {
        title: 'Barrierefreie Website: Pflicht oder nicht?',
        description: 'Das BFSG gilt seit dem 28. Juni 2025. Wer betroffen ist, wer ausgenommen bleibt und was bei Verstößen droht.',
        url: 'https://webseite.hamburg/wissen/barrierefreie-website-pflicht',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Muss meine Website barrierefrei sein?',
        a: 'Das hängt an zwei Fragen. Erstens: Bietet Ihre Website eine Dienstleistung aus § 1 Absatz 3 BFSG an Verbraucher an, insbesondere eine Dienstleistung im elektronischen Geschäftsverkehr? Reine Firmenvorstellungen ohne Vertragsabschluss fallen nach überwiegender Lesart nicht darunter, ein Onlineshop, eine Online-Buchung oder ein Kaufvertrag über die Seite schon. Zweitens: Sind Sie Kleinstunternehmen? Nach § 2 Nummer 17 BFSG ist das ein Unternehmen mit weniger als zehn Beschäftigten, das entweder höchstens 2 Millionen Euro Jahresumsatz oder höchstens 2 Millionen Euro Jahresbilanzsumme hat. Für Dienstleistungen sind Kleinstunternehmen nach § 3 Absatz 3 BFSG ausgenommen.',
    },
    {
        q: 'Seit wann gilt das BFSG?',
        a: 'Seit dem 28. Juni 2025. § 1 BFSG stellt darauf ab, dass Produkte nach diesem Datum in Verkehr gebracht und Dienstleistungen nach diesem Datum erbracht werden. Für einzelne Fälle gibt es Übergangsbestimmungen in § 38 BFSG, etwa für Selbstbedienungsterminals.',
    },
    {
        q: 'Was kostet ein Verstoß gegen das BFSG?',
        a: 'Nach § 37 Absatz 2 BFSG bis zu 100.000 Euro in den Fällen des Absatzes 1 Nummer 1, 7, 8, 9 und 10, in den übrigen Fällen bis zu 10.000 Euro. Das sind gesetzliche Höchstgrenzen, keine Regelstrafen. Wahrscheinlicher als ein Bußgeld ist zunächst ein Marktüberwachungsverfahren mit der Aufforderung, den Mangel abzustellen.',
    },
    {
        q: 'Wer kontrolliert die Barrierefreiheit von Websites?',
        a: 'Die Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen, kurz MLBF. Sie ist bundesweit zuständig und hat eine Meldemöglichkeit für Verbraucher auf ihrer Website. Nach § 32 BFSG können Verbraucher außerdem die Einleitung eines Marktüberwachungsverfahrens beantragen.',
    },
    {
        q: 'Reicht ein Overlay-Tool oder ein Accessibility-Widget?',
        a: 'Nein. Ein Widget, das Kontraste hochdreht oder Text vergrößert, ändert nichts an fehlenden Alternativtexten, unbeschrifteten Formularfeldern, fehlender Tastaturbedienbarkeit oder falscher Überschriftenstruktur. Die Anforderungen aus § 12 BFSGV richten sich an die Website selbst, nicht an ein aufgesetztes Menü.',
    },
    {
        q: 'Was muss ich über die Barrierefreiheit meiner Dienstleistung veröffentlichen?',
        a: 'Nach § 14 BFSG müssen Dienstleistungserbringer die Informationen nach Anlage 3 Nummer 1 BFSG erstellen und der Allgemeinheit in barrierefreier Form zugänglich machen. In der Praxis ist das eine eigene Seite, oft Erklärung zur Barrierefreiheit genannt, die beschreibt, wie die Dienstleistung die Anforderungen erfüllt.',
    },
];

export default function BarrierefreieWebsitePflichtPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Barrierefreie Website: Wer muss, wer nicht, und was das BFSG wirklich verlangt',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/barrierefreie-website-pflicht',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/barrierefreie-website-pflicht' },
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
            { '@type': 'ListItem', position: 3, name: 'Barrierefreie Website: Pflicht', item: 'https://webseite.hamburg/wissen/barrierefreie-website-pflicht' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="barrierefreie-website-pflicht"
                category="RECHT"
                title="Barrierefreie Website: Wer muss, wer nicht, und was das BFSG wirklich verlangt"
                readTime="12 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-bfsg-pflicht.svg"
                heroAlt="Illustration: Browser-Fenster mit dem Barrierefreiheits-Symbol, daneben ein rotes Amtssiegel mit Paragraphenzeichen"
            >
                <p>
                    Seit dem Sommer 2025 bekomme ich diese Frage in fast jedem Erstgespräch. Meist in einer von zwei
                    Varianten: Panik, weil ein Newsletter mit 100.000 Euro Bußgeld gedroht hat, oder Gleichmut, weil
                    der Steuerberater gesagt hat, das gelte nur für Behörden. Beide liegen daneben.
                </p>
                <p>
                    Ich habe für diesen Artikel das Gesetz selbst gelesen, nicht die Zusammenfassungen davon. Alle
                    Paragrafen unten stehen mit Fundstelle da, damit Sie nachsehen können. Was ich nicht kann, ist
                    Rechtsberatung. Wenn viel Geld an der Antwort hängt, gehört sie einem Anwalt.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Das Barrierefreiheitsstärkungsgesetz (BFSG) gilt seit dem
                        28. Juni 2025. Es verpflichtet Unternehmen, die Verbrauchern bestimmte Dienstleistungen
                        anbieten, unter anderem Dienstleistungen im elektronischen Geschäftsverkehr. Wer weniger als
                        zehn Personen beschäftigt und höchstens 2 Millionen Euro Jahresumsatz oder Jahresbilanzsumme
                        hat, ist als Kleinstunternehmen bei Dienstleistungen ausgenommen. Für Produkte gilt diese
                        Ausnahme nicht.
                    </p>
                    <p>
                        Eine reine Firmenwebsite ohne Vertragsabschluss ist nach überwiegender Lesart keine
                        Dienstleistung im Sinne des Gesetzes. Ein Onlineshop, eine Online-Terminbuchung oder ein
                        Vertragsabschluss auf der Seite schon.
                    </p>
                </div>

                <h2>Woher das Gesetz kommt</h2>
                <p>
                    Das BFSG setzt die EU-Richtlinie 2019/882 um, den European Accessibility Act. Anders als die
                    BITV 2.0, die sich an öffentliche Stellen richtet, adressiert das BFSG die Privatwirtschaft.
                    Das ist die Änderung, die viele übersehen haben: Barrierefreiheit war zwanzig Jahre lang ein
                    Behördenthema, und ist es seit dem 28. Juni 2025 nicht mehr.
                </p>
                <p>
                    Zwei Dokumente gehören zusammen. Das BFSG regelt, wer verpflichtet ist und was passiert, wenn
                    man es nicht einhält. Die Verordnung dazu, die BFSGV, regelt, was Barrierefreiheit technisch
                    bedeutet. Wer nur das Gesetz liest, findet die konkreten Anforderungen nicht und wundert sich.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/bfsg-entscheidung.svg" alt="Entscheidungsbaum: Bietet die Website eine Dienstleistung an Verbraucher, ist das Unternehmen Kleinstunternehmen, ergibt sich Pflicht oder keine Pflicht" width="1600" height="900" />
                    <figcaption>Die Reihenfolge der Prüfung. Erst die Dienstleistung, dann die Unternehmensgröße.</figcaption>
                </figure>

                <h2>Schritt 1: Fällt Ihr Angebot überhaupt darunter?</h2>
                <p>
                    § 1 Absatz 3 BFSG zählt die erfassten Dienstleistungen auf. Es ist eine geschlossene Liste,
                    kein Beispielkatalog:
                </p>
                <ul>
                    <li>Telekommunikationsdienste, mit Ausnahme reiner Maschine-zu-Maschine-Übertragung</li>
                    <li>Personenverkehrsdienste im Luft-, Bus-, Schienen- und Schiffsverkehr</li>
                    <li>Bankdienstleistungen für Verbraucher</li>
                    <li>E-Books und die zugehörige Software</li>
                    <li>Dienstleistungen im elektronischen Geschäftsverkehr</li>
                </ul>
                <p>
                    Für die meisten Unternehmen entscheidet sich alles am letzten Punkt. Ein Onlineshop ist der
                    klare Fall. Eine Praxis mit Online-Terminbuchung, ein Restaurant mit Tischreservierung, ein
                    Handwerksbetrieb mit einem Buchungssystem, ein Hotel mit eigener Buchungsstrecke: hier wird
                    ein Vertrag auf elektronischem Weg geschlossen, und damit wird es eng.
                </p>
                <p>
                    Die Website, die nur zeigt, was ein Betrieb macht, wo er sitzt und wie man ihn anruft, ist
                    dagegen kein elektronischer Geschäftsverkehr. Sie ist Werbung. Diese Abgrenzung ist die
                    praktisch wichtigste im ganzen Gesetz, und sie ist noch nicht gerichtlich ausgefochten. Wer
                    knapp daneben liegt, liegt daneben.
                </p>

                <div className="rule-cols">
                    <div className="rule-col">
                        <h3>Spricht für eine Pflicht</h3>
                        <ul>
                            <li>Onlineshop mit Warenkorb und Kasse</li>
                            <li>Online-Buchung oder Terminvergabe mit Verbindlichkeit</li>
                            <li>Vertragsabschluss oder Bestellung direkt auf der Seite</li>
                            <li>Kundenkonto mit Anmeldung</li>
                            <li>Bezahlvorgang, auch über einen Dienstleister eingebettet</li>
                            <li>Digitale Produkte zum Download gegen Bezahlung</li>
                        </ul>
                    </div>
                    <div className="rule-col rule-no">
                        <h3>Spricht gegen eine Pflicht</h3>
                        <ul>
                            <li>Reine Leistungs- und Firmendarstellung</li>
                            <li>Kontaktformular für eine unverbindliche Anfrage</li>
                            <li>Angebot ausschließlich an Unternehmen, nicht an Verbraucher</li>
                            <li>Kleinstunternehmen nach § 2 Nummer 17 BFSG</li>
                            <li>Archivierte Inhalte, die vor dem 28. Juni 2025 veröffentlicht und seither nicht geändert wurden (§ 1 Absatz 4 BFSG)</li>
                            <li>Fremdinhalte, die Sie nicht finanzieren, entwickeln oder kontrollieren</li>
                        </ul>
                    </div>
                </div>

                <h2>Schritt 2: Sind Sie Kleinstunternehmen?</h2>
                <p>
                    Hier steckt die Ausnahme, die für viele Betriebe in Hamburg den Fall entscheidet. § 3 Absatz 3
                    BFSG lautet im Wortlaut: Absatz 1 gilt nicht für Kleinstunternehmen, die Dienstleistungen
                    anbieten oder erbringen. Ein Satz, drei wichtige Details.
                </p>
                <p>
                    Erstens die Definition. § 2 Nummer 17 BFSG nennt ein Unternehmen Kleinstunternehmen, wenn es
                    weniger als zehn Personen beschäftigt und entweder einen Jahresumsatz von höchstens
                    2 Millionen Euro erzielt oder eine Jahresbilanzsumme von höchstens 2 Millionen Euro hat. Die
                    Beschäftigtenzahl muss also stimmen, und zusätzlich eine der beiden Finanzgrenzen.
                </p>
                <p>
                    Zweitens gilt die Ausnahme nur für Dienstleistungen. Wer Produkte in Verkehr bringt, etwa
                    E-Book-Reader oder Selbstbedienungsterminals, ist auch als Kleinstunternehmen verpflichtet.
                </p>
                <p>
                    Drittens ist neun Beschäftigte kein Dauerzustand. Wer wächst, wächst in die Pflicht hinein.
                    Deshalb baue ich bei jedem Shop-Projekt Barrierefreiheit ein, auch wenn der
                    Kunde heute ausgenommen ist. Nachrüsten kostet ein Vielfaches von Mitbauen, und der Zeitpunkt
                    des Wachstums ist selten der Zeitpunkt, an dem Budget für Nacharbeit da ist.
                </p>
                <p>
                    Kleinstunternehmen werden von der Bundesfachstelle Barrierefreiheit kostenlos beraten. Das ist
                    ein echtes Angebot des Bundes, kein Marketing, und es kostet Sie einen Anruf.
                </p>

                <h2>Was genau verlangt wird</h2>
                <p>
                    Die inhaltlichen Anforderungen stehen in der BFSGV. § 12 BFSGV nennt für Dienstleistungen
                    ausdrücklich Webseiten, die zugehörigen Online-Anwendungen und mobile Apps, und verlangt, dass
                    sie wahrnehmbar, bedienbar, verständlich und robust gestaltet sind. Das sind die vier Prinzipien
                    der WCAG, wörtlich ins deutsche Verordnungsrecht übernommen.
                </p>
                <p>
                    Für Onlineshops kommt § 19 BFSGV dazu. Der verlangt zwei Dinge: Informationen zur
                    Barrierefreiheit der verkauften Produkte und Dienstleistungen, soweit sie vom Verantwortlichen
                    verfügbar sind, und dass Identifizierung, Authentifizierung, Sicherheitsfunktionen und
                    Zahlungsvorgänge wahrnehmbar, bedienbar, verständlich und robust sind. Auf Deutsch: Wenn Ihre
                    Kasse nur mit der Maus funktioniert, hilft die schönste barrierefreie Startseite nicht.
                </p>
                <p>
                    Und § 14 BFSG verlangt, dass Sie die Informationen nach Anlage 3 Nummer 1 erstellen und
                    barrierefrei öffentlich zugänglich machen. Das ist die Erklärung zur Barrierefreiheit. Sie ist
                    der Teil, den die Marktüberwachung am schnellsten prüfen kann, weil sie entweder existiert oder
                    nicht. Wie die technische Umsetzung konkret aussieht, steht in der
                    {' '}<Link href="/wissen/website-barrierefrei-machen">Anleitung zur barrierefreien Website</Link>.
                </p>

                <h2>Wer kontrolliert, und wie realistisch ist das</h2>
                <p>
                    Zuständig ist die Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und
                    Dienstleistungen, kurz MLBF. Die 16 Bundesländer haben sie gemeinsam gegründet, sie ist
                    bundesweit zuständig, und sie hat auf ihrer Website eine Meldemöglichkeit für Verbraucher.
                    Nach § 32 BFSG kann jeder Verbraucher die Einleitung eines Marktüberwachungsverfahrens
                    beantragen.
                </p>
                <p>
                    Das ist der Mechanismus, den man verstehen muss. Niemand crawlt systematisch alle deutschen
                    Websites. Aber ein einziger Kunde, der an Ihrer Kasse scheitert und sich ärgert, braucht ein
                    Formular und fünf Minuten. Das Risiko ist nicht flächendeckend, es ist punktuell und
                    unvorhersehbar. Ungefähr wie beim Brandschutz.
                </p>
                <p>
                    Kommt es zum Verfahren, geht es zuerst um Abstellen des Mangels. Bußgelder stehen in § 37
                    BFSG: bis zu 100.000 Euro in den Fällen des Absatzes 1 Nummer 1, 7, 8, 9 und 10, in den
                    übrigen Fällen bis zu 10.000 Euro. Höchstgrenzen, nicht Preisliste.
                </p>

                <h2>Wie weit die Realität vom Gesetz entfernt ist</h2>
                <p>
                    Die WebAIM Million untersucht jedes Jahr eine Million Startseiten automatisiert. Im Bericht
                    vom Februar 2026 hatten 95,9 Prozent der Startseiten feststellbare WCAG-2-Fehler, im Schnitt
                    56,1 pro Seite, 10,1 Prozent mehr als im Vorjahr. Sechs Fehlerarten machen 96 Prozent aller
                    Funde aus.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Fehlerart</th>
                                <th>Anteil der Startseiten</th>
                                <th>Aufwand zur Behebung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Zu geringer Textkontrast</th>
                                <td>83,9 Prozent</td>
                                <td>gering, meist eine Änderung im Design-System</td>
                            </tr>
                            <tr>
                                <th>Fehlender Alternativtext bei Bildern</th>
                                <td>53,1 Prozent</td>
                                <td>gering pro Bild, hoch in der Summe</td>
                            </tr>
                            <tr>
                                <th>Unbeschriftete Formularfelder</th>
                                <td>51,0 Prozent</td>
                                <td>gering, oft ein fehlendes label-Element</td>
                            </tr>
                            <tr>
                                <th>Leere Links</th>
                                <td>46,3 Prozent</td>
                                <td>gering, typisch bei Icon-Links ohne Text</td>
                            </tr>
                            <tr>
                                <th>Leere Buttons</th>
                                <td>30,6 Prozent</td>
                                <td>gering, gleiche Ursache</td>
                            </tr>
                            <tr>
                                <th>Fehlende Sprachangabe im HTML</th>
                                <td>13,5 Prozent</td>
                                <td>eine Zeile</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Zwei Dinge liest man daraus. Erstens: Sie sind mit dem Problem nicht allein, was rechtlich
                    nichts hilft, psychologisch aber schon. Zweitens: Die häufigsten Fehler sind die billigsten.
                    Kontraste, Alternativtexte, Formularbeschriftungen und eine Sprachangabe sind ein Tagewerk,
                    kein Projekt. Der teure Teil sind Bestellprozesse und komplexe interaktive Elemente.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Bei einem Shop-Projekt habe ich den Bestellvorgang einmal komplett ohne Maus durchgeklickt.
                        Erst mit der Tastatur, dann mit aktiviertem Screenreader. Bis zum Warenkorb lief es. Der
                        Rabattcode war ein Feld ohne Beschriftung, das Zahlungsauswahl-Element war ein
                        umgestyltes div ohne Tastaturfokus, und der Bestellen-Button lag im Tab-Reihenfolge nach
                        dem Footer. Kein einziger dieser Fehler war im Design zu sehen. Alle drei hätten jeden
                        Nutzer ausgesperrt, der nicht mit der Maus zeigt.
                    </p>
                    <p>
                        Deshalb rate ich zu diesem Test als Erstem: Ziehen Sie den Mausstecker und kaufen Sie in
                        Ihrem eigenen Shop etwas. Sie brauchen dafür kein Werkzeug und keinen Berater. Nach zehn
                        Minuten wissen Sie, ob Sie ein kleines oder ein großes Problem haben.
                    </p>
                </div>

                <h2>Was das mit Sichtbarkeit zu tun hat</h2>
                <p>
                    Barrierefreiheit ist kein Rankingfaktor, und ich verkaufe sie nicht als einen. Aber die
                    Maßnahmen überschneiden sich stark mit dem, was Suchmaschinen und KI-Systeme brauchen:
                    saubere Überschriftenhierarchie, sprechende Alternativtexte, semantisches HTML, klare
                    Linktexte, Sprachangabe im Dokument. Ein Screenreader und ein Crawler lesen erstaunlich
                    ähnlich. Wer für den einen aufräumt, räumt für den anderen mit auf. Wie sich das auf die
                    Auffindbarkeit auswirkt, steht in <Link href="/leistungen/seo">SEO</Link> und für KI-Antworten
                    in <Link href="/leistungen/ai-seo">AI SEO</Link>.
                </p>

                <h2>Die Reihenfolge, die ich empfehle</h2>
                <ol>
                    <li><strong>Betroffenheit klären.</strong> Schließt Ihre Seite Verträge? Sind Sie Kleinstunternehmen? Zwei Fragen, schriftlich beantwortet, mit Datum. Das ist Ihre Grundlage für alles weitere.</li>
                    <li><strong>Tastaturtest machen.</strong> Ohne Maus durch die wichtigsten Wege: Startseite, Leistung, Kontakt oder Bestellung. Notieren, wo Sie steckenbleiben.</li>
                    <li><strong>Automatisiert prüfen.</strong> Kostenlose Werkzeuge finden die sechs häufigen Fehlerarten zuverlässig. Sie finden nicht alles, aber sie finden das Meiste vom Billigen.</li>
                    <li><strong>Kontraste und Beschriftungen beheben.</strong> Der größte Effekt pro Stunde.</li>
                    <li><strong>Bestellstrecke oder Buchung reparieren.</strong> Der rechtlich heikelste Teil, siehe § 19 BFSGV.</li>
                    <li><strong>Erklärung zur Barrierefreiheit veröffentlichen.</strong> Nach § 14 BFSG, barrierefrei zugänglich, mit ehrlicher Beschreibung dessen, was noch offen ist.</li>
                    <li><strong>Manuell mit Hilfsmitteln testen.</strong> Screenreader, Vergrößerung, Bedienung nur mit Tastatur. Erst hier finden Sie die Fehler, die Werkzeuge übersehen.</li>
                </ol>
                <p>
                    Punkt 6 überrascht viele: Eine Erklärung, die offene Punkte benennt, ist besser als keine
                    Erklärung. Sie zeigt, dass Sie den Stand kennen und daran arbeiten. Eine Erklärung, die
                    vollständige Barrierefreiheit behauptet, während der Bestellprozess sie nicht hat, ist eine
                    schriftlich fixierte Falschangabe.
                </p>

                <h2>Wenn Sie es prüfen lassen wollen</h2>
                <p>
                    Sie arbeiten direkt mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text
                    oder Fotografie, hole ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für
                    das Ergebnis bleibe ich. Der <Link href="/leistungen/website-audit">Website-Audit</Link> ist
                    kostenlos und deckt die technische Seite mit ab. Wenn danach klar ist, dass Ihre Seite ohnehin
                    in die Jahre gekommen ist, ist ein
                    {' '}<Link href="/leistungen/webdesign">Neubau</Link> oft günstiger als das Nachrüsten von
                    zehn Jahren Altlast. Warum, steht in der
                    {' '}<Link href="/wissen/website-relaunch-checkliste">Relaunch-Checkliste</Link>.
                </p>
                <p>
                    Und der wichtigste Satz zum Schluss: Dieser Artikel ist Recherche, keine Rechtsberatung. Ich
                    lese Gesetze, weil ich Websites baue, die sie einhalten müssen. Wenn Ihre Betroffenheit
                    zweifelhaft ist und viel Umsatz daran hängt, ist das Geld für eine anwaltliche Einschätzung
                    besser angelegt als in jedem Werkzeug.
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
                        <li>Barrierefreiheitsstärkungsgesetz (BFSG), § 1 Anwendungsbereich, Anwendung auf Dienstleistungen nach dem 28. Juni 2025, Liste der erfassten Dienstleistungen in Absatz 3, Ausnahmen in Absatz 4. <a href="https://www.gesetze-im-internet.de/bfsg/__1.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSG § 2 Nummer 17, Definition Kleinstunternehmen: weniger als zehn Beschäftigte und höchstens 2 Millionen Euro Jahresumsatz oder Jahresbilanzsumme. <a href="https://www.gesetze-im-internet.de/bfsg/__2.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSG § 3 Absatz 3, Ausnahme für Kleinstunternehmen bei Dienstleistungen. <a href="https://www.gesetze-im-internet.de/bfsg/__3.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSG § 14, Informationen nach Anlage 3 Nummer 1 barrierefrei zugänglich machen. <a href="https://www.gesetze-im-internet.de/bfsg/__14.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSG § 32, Antrag von Verbrauchern auf Einleitung eines Marktüberwachungsverfahrens. <a href="https://www.gesetze-im-internet.de/bfsg/__32.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSG § 37 Absatz 2, Bußgeldrahmen bis 100.000 Euro beziehungsweise bis 10.000 Euro. <a href="https://www.gesetze-im-internet.de/bfsg/__37.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSG § 38, Übergangsbestimmungen. <a href="https://www.gesetze-im-internet.de/bfsg/__38.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Barrierefreiheitsstärkungsgesetz-Verordnung (BFSGV), § 12, Anforderungen an Dienstleistungen einschließlich Webseiten und mobiler Apps, Prinzipien wahrnehmbar, bedienbar, verständlich, robust. <a href="https://www.gesetze-im-internet.de/bfsgv/__12.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSGV § 19, zusätzliche Anforderungen für Dienstleistungen im elektronischen Geschäftsverkehr. <a href="https://www.gesetze-im-internet.de/bfsgv/__19.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF), bundesweite Zuständigkeit und Meldemöglichkeit. <a href="https://mlbf-barrierefrei.de/" rel="nofollow noopener" target="_blank">mlbf-barrierefrei.de</a></li>
                        <li>Bundesfachstelle Barrierefreiheit, FAQ zum BFSG und kostenlose Beratung für Kleinstunternehmen. <a href="https://www.bundesfachstelle-barrierefreiheit.de/DE/Fachwissen/Produkte-und-Dienstleistungen/Barrierefreiheitsstaerkungsgesetz/FAQ/faq_node.html" rel="nofollow noopener" target="_blank">bundesfachstelle-barrierefreiheit.de</a></li>
                        <li>WebAIM Million, Bericht Februar 2026: 95,9 Prozent der Startseiten mit feststellbaren WCAG-2-Fehlern, 56,1 Fehler im Schnitt. <a href="https://webaim.org/projects/million/" rel="nofollow noopener" target="_blank">webaim.org</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
