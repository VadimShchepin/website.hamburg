import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Impressum und Datenschutz: was rein muss',
    description: 'Die Impressumspflicht steht seit Mai 2024 in § 5 DDG, nicht mehr im TMG. Alle Pflichtangaben, die Informationspflichten nach Art. 13 DSGVO und die haeufigen Fehler.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/impressum-datenschutzerklaerung-pflicht',
    },
    openGraph: {
        title: 'Impressum und Datenschutz: was rein muss',
        description: 'Die Impressumspflicht steht seit Mai 2024 in § 5 DDG. Alle Pflichtangaben, Art. 13 DSGVO und die haeufigen Fehler.',
        url: 'https://webseite.hamburg/wissen/impressum-datenschutzerklaerung-pflicht',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'In welchem Gesetz steht die Impressumspflicht?',
        a: 'Seit dem 14. Mai 2024 in § 5 des Digitale-Dienste-Gesetzes (DDG). Das DDG hat das Telemediengesetz (TMG) ersetzt. Wer in seiner Datenschutzerklärung oder auf seiner Impressumsseite noch § 5 TMG zitiert, verweist auf eine Vorschrift, die es nicht mehr gibt. Inhaltlich sind die Pflichtangaben weitgehend gleich geblieben.',
    },
    {
        q: 'Welche Angaben muss ein Impressum enthalten?',
        a: 'Nach § 5 Absatz 1 DDG: Name und Anschrift der Niederlassung, bei juristischen Personen zusätzlich Rechtsform, Vertretungsberechtigte und gegebenenfalls Angaben zum Kapital; Angaben zur schnellen elektronischen Kontaktaufnahme einschließlich E-Mail-Adresse; die zuständige Aufsichtsbehörde, soweit die Tätigkeit einer behördlichen Zulassung bedarf; Register und Registernummer; bei reglementierten Berufen Kammer, Berufsbezeichnung und berufsrechtliche Regelungen; die Umsatzsteuer-Identifikationsnummer, sofern vorhanden; bei Gesellschaften in Abwicklung oder Liquidation ein Hinweis darauf.',
    },
    {
        q: 'Brauche ich als Kleinunternehmer ein Impressum?',
        a: 'Ja. Die Pflicht knüpft an die geschäftsmäßige Bereitstellung digitaler Dienste an, nicht an Umsatz oder Rechtsform. Eine Umsatzsteuer-Identifikationsnummer müssen Sie nur angeben, wenn Sie eine haben. Kleinunternehmer nach § 19 UStG haben in der Regel keine, dann entfällt diese eine Angabe, nicht das Impressum.',
    },
    {
        q: 'Reicht ein Kontaktformular statt einer E-Mail-Adresse?',
        a: 'Nein. § 5 Absatz 1 Nummer 2 DDG verlangt Angaben, die eine schnelle elektronische Kontaktaufnahme ermöglichen, einschließlich der Adresse der elektronischen Post. Die E-Mail-Adresse muss also im Impressum stehen. Ein Formular kann zusätzlich angeboten werden.',
    },
    {
        q: 'Was muss in die Datenschutzerklärung?',
        a: 'Die Informationen nach Art. 13 DSGVO: Identität und Kontaktdaten des Verantwortlichen, gegebenenfalls des Datenschutzbeauftragten, Zwecke und Rechtsgrundlagen jeder Verarbeitung, berechtigte Interessen bei Art. 6 Absatz 1 lit. f, Empfänger oder Kategorien von Empfängern, Übermittlungen in Drittländer mit Angabe der Grundlage, Speicherdauer oder Kriterien dafür, die Betroffenenrechte, das Beschwerderecht bei der Aufsichtsbehörde und ob die Bereitstellung der Daten erforderlich ist.',
    },
    {
        q: 'Braucht ein Cookie-Banner eine Einwilligung für Statistik-Cookies?',
        a: 'Ja, in der Regel. § 25 TDDDG erlaubt die Speicherung von Informationen auf dem Endgerät oder den Zugriff darauf nur mit Einwilligung, außer die Speicherung dient allein der Übertragung einer Nachricht oder ist unbedingt erforderlich, damit ein vom Nutzer ausdrücklich gewünschter Dienst bereitgestellt werden kann. Reichweitenmessung ist für die Bereitstellung der Website nicht unbedingt erforderlich, also einwilligungspflichtig.',
    },
];

export default function ImpressumDatenschutzPflichtPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Impressum und Datenschutzerklärung: welche Pflichtangaben eine Website 2026 braucht',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/impressum-datenschutzerklaerung-pflicht',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/impressum-datenschutzerklaerung-pflicht' },
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
            { '@type': 'ListItem', position: 3, name: 'Impressum und Datenschutz: Pflichtangaben', item: 'https://webseite.hamburg/wissen/impressum-datenschutzerklaerung-pflicht' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="impressum-datenschutzerklaerung-pflicht"
                category="RECHT"
                title="Impressum und Datenschutzerklärung: welche Pflichtangaben eine Website 2026 braucht"
                readTime="11 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-impressum-pflicht.svg"
                heroAlt="Illustration: zwei gestapelte Dokumentseiten mit Paragraphenzeichen und einem roten Stempel darueber"
            >
                <p>
                    Es gibt einen Fehler, den ich auf so vielen deutschen Websites finde, dass er inzwischen fast
                    normal wirkt: den Verweis auf § 5 TMG. Das Telemediengesetz ist am 14. Mai 2024 außer Kraft
                    getreten. Die Impressumspflicht steht seither in § 5 des Digitale-Dienste-Gesetzes.
                </p>
                <p>
                    Inhaltlich ändert das wenig, die Pflichtangaben sind fast identisch. Wirkung hat es trotzdem:
                    Ein veralteter Paragraf zeigt, dass die Rechtstexte seit mindestens zwei Jahren niemand
                    angesehen hat. Wenn ich das sehe, sehe ich es auch bei Cookie-Banner und Auftragsverarbeitung.
                    Es ist der Riss, der auf den Zustand des Hauses schließen lässt.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Drei Regelwerke betreffen jede geschäftliche Website.
                        § 5 DDG regelt das Impressum, Art. 13 DSGVO die Datenschutzerklärung, § 25 TDDDG die
                        Einwilligung für Cookies und vergleichbare Zugriffe auf das Endgerät. Das TMG und das
                        TTDSG heißen seit dem 14. Mai 2024 DDG und TDDDG.
                    </p>
                    <p>
                        Die E-Mail-Adresse muss ins Impressum, ein Kontaktformular genügt nicht. Die
                        Umsatzsteuer-Identifikationsnummer nur, wenn Sie eine haben. Statistik- und
                        Marketing-Cookies brauchen eine Einwilligung, bevor sie gesetzt werden.
                    </p>
                </div>

                <h2>Das Impressum: § 5 DDG, Angabe für Angabe</h2>
                <p>
                    Die Pflicht trifft Anbieter digitaler Dienste, die geschäftsmäßig, in der Regel gegen Entgelt
                    angeboten werden. Für die Praxis heißt das: Jede Website, die einem Unternehmen, einem
                    Freiberufler oder einem geschäftlichen Zweck dient, braucht ein Impressum. Auch die reine
                    Visitenkartenseite ohne Shop.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Pflichtangabe nach § 5 Absatz 1 DDG</th>
                                <th>Gilt für</th>
                                <th>Häufiger Fehler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name und Anschrift der Niederlassung</th>
                                <td>alle</td>
                                <td>Postfach statt Anschrift; bei Einzelunternehmen fehlt der bürgerliche Name</td>
                            </tr>
                            <tr>
                                <th>Rechtsform, Vertretungsberechtigte, gegebenenfalls Kapitalangaben</th>
                                <td>juristische Personen</td>
                                <td>Geschäftsführer nicht genannt</td>
                            </tr>
                            <tr>
                                <th>Schnelle elektronische Kontaktaufnahme einschließlich E-Mail-Adresse</th>
                                <td>alle</td>
                                <td>nur Kontaktformular, keine E-Mail-Adresse</td>
                            </tr>
                            <tr>
                                <th>Zuständige Aufsichtsbehörde</th>
                                <td>zulassungspflichtige Tätigkeiten</td>
                                <td>fehlt bei erlaubnispflichtigen Gewerben</td>
                            </tr>
                            <tr>
                                <th>Register und Registernummer</th>
                                <td>eingetragene Unternehmen</td>
                                <td>Registergericht fehlt</td>
                            </tr>
                            <tr>
                                <th>Kammer, Berufsbezeichnung, berufsrechtliche Regelungen</th>
                                <td>reglementierte Berufe</td>
                                <td>kein Link zu den Berufsordnungen</td>
                            </tr>
                            <tr>
                                <th>Umsatzsteuer-Identifikationsnummer</th>
                                <td>wer eine hat</td>
                                <td>Steuernummer statt USt-IdNr. veröffentlicht</td>
                            </tr>
                            <tr>
                                <th>Hinweis auf Abwicklung oder Liquidation</th>
                                <td>betroffene Gesellschaften</td>
                                <td>fehlt regelmäßig</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Ein Detail, über das viele stolpern: Steuernummer und
                    Umsatzsteuer-Identifikationsnummer sind nicht dasselbe. Zu veröffentlichen ist nur die
                    USt-IdNr., und nur wenn sie existiert. Die Steuernummer gehört nicht ins Internet.
                </p>
                <p>
                    Für reglementierte Berufe wird es aufwendiger, weil zur Kammer auch die berufsrechtlichen
                    Regelungen und deren Fundstelle gehören. Wie das für Ärzte und Anwälte konkret aussieht,
                    steht auf den Branchenseiten für <Link href="/leistungen/webdesign-aerzte">Arztpraxen</Link> und
                    für <Link href="/leistungen/webdesign-anwaelte">Anwälte</Link>.
                </p>

                <h2>Erreichbarkeit: zwei Klicks, kein Rätsel</h2>
                <p>
                    Das Gesetz verlangt, dass die Angaben leicht erkennbar, unmittelbar erreichbar und ständig
                    verfügbar sind. Die gefestigte Praxis dazu: ein klar benannter Link, sichtbar auf jeder Seite,
                    höchstens zwei Klicks entfernt. Der Link heißt Impressum oder Kontakt. Er heißt nicht Über
                    uns, nicht Rechtliches im Kleingedruckten und ganz sicher nicht nur im Cookie-Dialog.
                </p>
                <p>
                    Zwei Fälle, die regelmäßig übersehen werden. Erstens: Auch eine Landingpage ohne Navigation
                    braucht den Link. Wer für eine Kampagne eine Seite ohne Footer baut, baut eine Seite ohne
                    Impressum. Zweitens: Social-Media-Profile brauchen ebenfalls eine Anbieterkennzeichnung, in
                    der Regel gelöst über einen Link ins Website-Impressum.
                </p>

                <h2>Die Datenschutzerklärung: Art. 13 DSGVO</h2>
                <p>
                    Die Datenschutzerklärung ist kein juristischer Zierrat, sondern die Erfüllung einer
                    Informationspflicht. Art. 13 DSGVO listet auf, was der Verantwortliche mitteilen muss, wenn er
                    Daten bei der betroffenen Person erhebt. Für eine Website heißt das im Kern:
                </p>
                <ul>
                    <li>Wer ist verantwortlich, mit Kontaktdaten, und gibt es einen Datenschutzbeauftragten</li>
                    <li>Welche Verarbeitung findet statt, zu welchem Zweck, auf welcher Rechtsgrundlage</li>
                    <li>Bei berechtigtem Interesse: welches Interesse konkret</li>
                    <li>Wer bekommt die Daten, mindestens die Kategorien von Empfängern</li>
                    <li>Gehen Daten in Drittländer, und auf welcher Grundlage</li>
                    <li>Wie lange wird gespeichert, oder nach welchen Kriterien bestimmt sich das</li>
                    <li>Die Betroffenenrechte: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch, Widerruf einer Einwilligung</li>
                    <li>Das Beschwerderecht bei einer Aufsichtsbehörde</li>
                    <li>Ob die Bereitstellung der Daten erforderlich ist und was passiert, wenn man sie nicht gibt</li>
                </ul>
                <p>
                    Der praktische Fehler Nummer eins ist eine Generator-Erklärung, die Dienste beschreibt, die
                    gar nicht eingesetzt werden, und die tatsächlich eingesetzten nicht nennt. Ich habe
                    Datenschutzerklärungen gesehen, die Facebook-Pixel und Newsletter erklären, während die Seite
                    ein Buchungssystem und eine Chat-Einbettung betreibt, von denen kein Wort dort steht. Ein
                    Generator ist ein guter Anfang und eine schlechte Endkontrolle.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Die verlässlichste Methode, die ich kenne: Öffnen Sie Ihre Seite im Browser, öffnen Sie die
                        Entwicklerwerkzeuge, gehen Sie auf den Netzwerk-Tab und laden Sie neu, ohne im Cookie-Banner
                        etwas anzuklicken. Sie sehen dann jede Fremd-Domain, die kontaktiert wird. Diese Liste ist
                        Ihre echte Verarbeitungsliste.
                    </p>
                    <p>
                        Bei einem Kunden standen dort neun fremde Domains, bevor der Banner überhaupt beantwortet
                        war: eine Kartenanbindung, zwei Schriftdienste, ein Video-Anbieter, ein Chat-Werkzeug, zwei
                        Werbepixel und zwei Anbieter, die niemand im Haus zuordnen konnte. Die Datenschutzerklärung
                        nannte drei. Und alle neun liefen vor der Einwilligung, was das eigentliche Problem war.
                    </p>
                </div>

                <h2>Cookies und das Endgerät: § 25 TDDDG</h2>
                <p>
                    Hier liegt der Unterschied, den viele Banner falsch abbilden. § 25 TDDDG regelt nicht die
                    Datenverarbeitung, sondern den Zugriff auf das Endgerät. Speichern oder Lesen von
                    Informationen im Browser ist nur zulässig, wenn der Endnutzer auf Grundlage klarer und
                    umfassender Informationen eingewilligt hat.
                </p>
                <p>
                    Zwei Ausnahmen nennt Absatz 2: wenn die Speicherung allein der Übertragung einer Nachricht
                    dient, und wenn sie unbedingt erforderlich ist, damit ein vom Nutzer ausdrücklich gewünschter
                    Dienst bereitgestellt werden kann. Warenkorb und Login fallen darunter. Reichweitenmessung,
                    A/B-Tests, Werbe-Pixel und Karten- oder Video-Einbettungen von Dritten fallen nicht darunter.
                </p>
                <p>
                    Daraus folgen drei Anforderungen an das Banner, die man leicht prüfen kann: Vor der
                    Einwilligung darf nichts Einwilligungspflichtiges laden. Ablehnen muss genauso einfach sein
                    wie Zustimmen, also auf derselben Ebene, nicht zwei Klicks tiefer. Und die Einwilligung muss
                    widerrufbar sein, ohne dass man die Seite verlässt.
                </p>

                <div className="rule-cols">
                    <div className="rule-col">
                        <h3>Ohne Einwilligung zulässig</h3>
                        <ul>
                            <li>Session-Cookie für den Warenkorb</li>
                            <li>Login-Sitzung</li>
                            <li>Speicherung der Cookie-Entscheidung selbst</li>
                            <li>Sprach- oder Währungsauswahl, die der Nutzer getroffen hat</li>
                            <li>Sicherheitsfunktionen wie ein Formular-Token</li>
                            <li>Lokal ausgelieferte Schriften und Skripte vom eigenen Server</li>
                        </ul>
                    </div>
                    <div className="rule-col rule-no">
                        <h3>Erst nach Einwilligung</h3>
                        <ul>
                            <li>Statistik und Reichweitenmessung</li>
                            <li>Werbe- und Conversion-Pixel</li>
                            <li>Eingebettete Videos von Fremdanbietern</li>
                            <li>Kartendienste von Fremdanbietern</li>
                            <li>Chat- und Support-Werkzeuge Dritter</li>
                            <li>Dynamisch von Fremdservern geladene Schriften</li>
                            <li>A/B-Test- und Personalisierungswerkzeuge</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Der letzte Punkt in der rechten Spalte hat eine eigene Geschichte, samt Abmahnwelle. Sie steht
                    im Artikel zu <Link href="/wissen/website-abmahnung-vermeiden">Abmahnungen wegen Google Fonts und Cookie-Bannern</Link>.
                </p>

                <h2>Auftragsverarbeitung: der vergessene Vertrag</h2>
                <p>
                    Wer personenbezogene Daten durch einen Dienstleister verarbeiten lässt, braucht nach
                    Art. 28 DSGVO einen Vertrag zur Auftragsverarbeitung. Betroffen sind in der Regel: Hosting,
                    Newsletter-Werkzeug, Analytik, Chat, Buchungssystem, Formulardienst, Backup-Dienst und
                    häufig auch die Agentur oder der Entwickler, der Zugriff auf das System hat.
                </p>
                <p>
                    Diese Verträge stellen die Anbieter bereit, meist als Download oder Klickvereinbarung im
                    Kundenkonto. Sie kosten nichts außer zwanzig Minuten. Wenn Daten dabei in Drittländer gehen,
                    kommen Art. 44 und folgende DSGVO ins Spiel. Was das für die Wahl des Hosters bedeutet, steht
                    im Artikel zu <Link href="/wissen/website-umzug-hosting-deutschland">Hosting in Deutschland und Serverumzug</Link>.
                </p>

                <h2>Die Prüfliste, die ich bei jedem Projekt durchgehe</h2>
                <ol>
                    <li><strong>Rechtsgrundlagen aktualisieren.</strong> § 5 DDG statt § 5 TMG, § 25 TDDDG statt § 25 TTDSG.</li>
                    <li><strong>Impressum abgleichen.</strong> Alle acht Punkte oben, E-Mail-Adresse vorhanden, Vertretungsberechtigte genannt.</li>
                    <li><strong>Netzwerk-Tab prüfen.</strong> Welche Fremd-Domains laden, und laden sie vor der Einwilligung.</li>
                    <li><strong>Datenschutzerklärung gegen diese Liste abgleichen.</strong> Jeder tatsächlich genutzte Dienst muss vorkommen, jeder genannte muss existieren.</li>
                    <li><strong>Banner testen.</strong> Ablehnen so einfach wie Zustimmen, Widerruf erreichbar, kein Nachladen vor Zustimmung.</li>
                    <li><strong>AV-Verträge sammeln.</strong> Ein Ordner, ein Datum, fertig.</li>
                    <li><strong>Auf jeder Seite erreichbar.</strong> Auch auf Landingpages ohne Navigation.</li>
                    <li><strong>Datum notieren.</strong> Wer nicht dokumentiert, wann er geprüft hat, prüft in zwei Jahren wieder alles.</li>
                </ol>

                <h2>Wo ich helfe und wo nicht</h2>
                <p>
                    Ich baue Websites, in denen diese Dinge technisch richtig funktionieren: Schriften lokal,
                    Einbettungen erst nach Einwilligung, Banner mit gleichwertigem Ablehnen, Rechtstexte an der
                    richtigen Stelle verlinkt. Der <Link href="/leistungen/website-audit">Website-Audit</Link> ist
                    kostenlos und listet auf, was vor der Einwilligung lädt. Sie arbeiten direkt mit mir. Braucht
                    ein Projekt zusätzliche Expertise, hole ich geprüfte Spezialisten dazu. Ansprechpartner und
                    Verantwortlicher für das Ergebnis bleibe ich.
                </p>
                <p>
                    Was ich nicht mache, ist Rechtsberatung. Die Formulierung Ihrer Rechtstexte und die Bewertung
                    Ihres Einzelfalls gehören zu einem Anwalt oder einem Datenschutzbeauftragten. Dieser Artikel
                    fasst zusammen, was in den genannten Vorschriften steht, mit Fundstelle zum Nachlesen.
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
                        <li>Digitale-Dienste-Gesetz (DDG), § 5 Allgemeine Informationspflichten, in Kraft seit 14. Mai 2024, Nachfolger von § 5 TMG. <a href="https://www.gesetze-im-internet.de/ddg/__5.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG), § 25 Schutz der Privatsphäre bei Endeinrichtungen, Einwilligungserfordernis und die zwei Ausnahmen in Absatz 2. <a href="https://www.gesetze-im-internet.de/ttdsg/__25.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>DSGVO Art. 13, Informationspflicht bei Erhebung von Daten bei der betroffenen Person. <a href="https://dsgvo-gesetz.de/art-13-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                        <li>DSGVO Art. 28, Auftragsverarbeiter und der Vertrag zur Auftragsverarbeitung. <a href="https://dsgvo-gesetz.de/art-28-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                        <li>DSGVO Art. 44, allgemeine Grundsätze der Datenübermittlung an Drittländer. <a href="https://dsgvo-gesetz.de/art-44-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
