import ArticleLayout from '../../../src/components/ArticleLayout';
import AutoLinks from '../../../src/components/AutoLinks';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

const PAGE_URL = 'https://webseite.hamburg/wissen/website-mit-ki-erstellen';

export const metadata = {
    title: 'Website mit KI erstellen: was das 2026 wirklich kann',
    description: 'Website mit KI erstellen: Was Baukästen mit KI und ChatGPT heute schaffen, wo sie scheitern (Recht, Ladezeit, Google) und wann sich ein Entwickler lohnt.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Website mit KI erstellen: was das 2026 wirklich kann',
        description: 'Fünf KI-Baukästen geprüft, zwei KI-Programmierwerkzeuge im Selbstversuch: was funktioniert, wo es scheitert und was es kostet.',
        url: PAGE_URL,
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Kann ich eine Website komplett mit KI erstellen?',
        a: 'Einen ersten Entwurf ja, in Minuten. Wix, Jimdo, Hostinger, 10Web und Framer erzeugen aus einer Beschreibung Seiten, Texte und Bilder. In meinem eigenen Test hat ein KI-Programmierwerkzeug aus einem einzigen Satz eine fertig aussehende Seite gebaut. Live gehen konnte keines der Ergebnisse so: Es fehlten echte Pflichtangaben, ein funktionierendes Kontaktformular oder es waren Kontaktdaten erfunden.',
    },
    {
        q: 'Welcher KI-Website-Baukasten ist der beste?',
        a: 'Das hängt am Ziel. Für Betriebe in Deutschland sind Wix und Jimdo am weitesten, weil beide Hilfe für Impressum und Datenschutzerklärung anbieten und einen Cookie-Banner mitbringen. Jimdo hostet in Irland. Framer liefert die gestalterisch stärksten Seiten, überlässt Datenschutz und Rechtstexte aber vollständig Ihnen. Hostinger ist anfangs am günstigsten, aber nur bei 48 Monaten Vorauszahlung.',
    },
    {
        q: 'Was kostet eine Website mit KI?',
        a: 'Die Einstiegstarife der KI-Baukästen lagen am 07.10.2026 zwischen etwa 3 und 17 Euro im Monat, mit sehr unterschiedlichen Bedingungen: Wix Core 14,87 Euro nur im Aktionspreis bei Jahreszahlung, Jimdo Start 12 Euro bei 12 Monaten, Hostinger 2,99 Euro netto nur bei 48 Monaten Vorauszahlung, danach 9,99 Euro. Dazu kommen Ihre Zeit und gegebenenfalls Rechtstexte. Eine individuell gebaute Website kostet bei mir ab 1.500 Euro.',
    },
    {
        q: 'Ist eine KI-Website DSGVO-konform?',
        a: 'Nicht automatisch. Wix nennt Rechenzentren in den USA und Irland, Framer hostet in den USA, 10Web betreibt alles außer dem Hosting in US-Rechenzentren. Mehrere Demo-Seiten laden Schriften direkt von Google-Servern. Und in meinem Selbstversuch band ein KI-Werkzeug ein Skript von einem US-CDN ein. Ob Ihre Seite konform ist, entscheidet sich an dem, was tatsächlich geladen wird, nicht am Werkzeug.',
    },
    {
        q: 'Rankt eine KI-Website bei Google?',
        a: 'Sie kann. Google bewertet Inhalte nach Qualität, nicht danach, wie sie entstanden sind. Das Problem ist ein anderes: KI erzeugt austauschbare Texte ohne eigene Fakten, und in meinem Test standen erfundene Adresse und Telefonnummer sogar in den strukturierten Daten. Lighthouse gab beiden Testseiten trotzdem 100 Punkte für SEO. Der Wert misst technische Grundlagen, nicht ob Sie gefunden werden.',
    },
    {
        q: 'Kann ich eine KI-Website später zu einem anderen Anbieter umziehen?',
        a: 'Bei Wix und Jimdo nicht, dort lässt sich nur die Domain mitnehmen. Hostinger erlaubt im Agenten-Modus einen Download des Codes, im manuellen Modus nicht. 10Web baut auf WordPress, rät aber selbst davon ab, KI-generierte Seiten woanders zu betreiben. Framer erlaubt den Export der veröffentlichten Dateien, nicht des bearbeitbaren Projekts. Wer selbst Code erzeugen lässt, besitzt ihn vollständig.',
    },
];

export default function WebsiteMitKiErstellenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Website mit KI erstellen: was 2026 wirklich funktioniert',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-10-07',
        dateModified: '2026-10-07',
        url: PAGE_URL,
        image: 'https://webseite.hamburg/wissen/hero-website-mit-ki.svg',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
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
            { '@type': 'ListItem', position: 3, name: 'Website mit KI erstellen', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-mit-ki-erstellen"
                category="WEBDESIGN"
                title="Website mit KI erstellen: was 2026 wirklich funktioniert"
                readTime="12 Min."
                publishDate="2026-10-07"
                heroImage="/wissen/hero-website-mit-ki.svg"
                heroAlt="Illustration: Browserfenster, in dem sich Layout-Blöcke aus einem Prompt zusammensetzen, mit rotem Warndreieck am Rand"
            >
                <AutoLinks path="/wissen/website-mit-ki-erstellen">
                <p>
                    Die Suche "website mit ki erstellen" ist das einzige große Thema im Webdesign, das gerade
                    wächst: rund 1.300 Suchen im Monat in Deutschland, vor einem Jahr waren es noch etwa 720, so der
                    Keyword Planner von Google. Die Versprechen der Anbieter sind entsprechend: eine Beschreibung
                    eintippen, fertig ist die Website.
                </p>
                <p>
                    Ich baue Websites mit Next.js und setze KI-Werkzeuge beim Programmieren täglich ein. Ich bin also
                    kein Skeptiker aus Prinzip. Für diesen Artikel habe ich am 07.10.2026 die KI-Funktionen, Preise,
                    Hosting- und Exportbedingungen von fünf Baukästen auf deren eigenen Seiten nachgelesen, je zwei
                    ihrer Vorzeige-Seiten mit Lighthouse gemessen und zwei KI-Programmierwerkzeugen denselben
                    Auftrag gegeben, den ein Handwerksbetrieb schreiben würde. Die Ergebnisse stehen unten, mit
                    Quellen.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> KI baut 2026 in Minuten einen Entwurf, der professionell
                        aussieht. Wix, Jimdo, Hostinger, 10Web und Framer erzeugen Seiten, Texte und Bilder aus einer
                        Beschreibung, KI-Programmierwerkzeuge schreiben sogar den Code. Was keine KI liefert, sind Ihre
                        echten Daten: In meinem Test fehlten die Pflichtangaben, ein Werkzeug erfand Adresse, Telefon
                        und "100% Kundenzufriedenheit", und das Kontaktformular schickte nichts ab.
                    </p>
                    <p>
                        Für eine Visitenkarte oder einen Test reicht ein KI-Baukasten. Sobald die Website Anfragen
                        bringen soll, entscheiden Rechtstexte, Datenschutz, Ladezeit, Inhalte und die Frage, wem der
                        Code gehört. Da hilft KI beim Bauen, ersetzt aber nicht die Prüfung.
                    </p>
                </div>

                <h2>Zwei Wege: KI im Baukasten oder KI schreibt den Code</h2>
                <p>
                    Wer heute "Website mit KI" sagt, meint eines von zwei Dingen. Der erste Weg ist ein Baukasten mit
                    KI-Assistent: Sie beschreiben Ihr Unternehmen, die KI erzeugt Seiten, Texte und Bilder, und das
                    Ergebnis läuft auf den Servern des Anbieters. Der zweite Weg ist ein KI-Programmierwerkzeug wie
                    Codex von OpenAI oder die Antigravity-CLI von Google. Dort entsteht echter Code, der Ihnen gehört
                    und den Sie überall betreiben können, für den Sie aber auch selbst verantwortlich sind. Wer ChatGPT im
                    Chat um eine Website bittet, landet ebenfalls hier: Heraus kommt Code, den Sie selbst prüfen,
                    hochladen und betreiben müssen.
                </p>
                <p>
                    Ein klassischer Baukasten-Vergleich ohne KI-Fokus mit Fünf-Jahres-Rechnung steht im Artikel
                    {' '}<Link href="/wissen/website-baukasten-oder-eigene-website">Website-Baukasten oder eigene Website</Link>.
                    Hier geht es um das, was die KI-Funktionen tatsächlich leisten.
                </p>

                <h2>Fünf KI-Baukästen im Vergleich</h2>
                <p>
                    Alle Angaben stammen von den Seiten der Anbieter selbst, Stand 07.10.2026. Preise ändern sich
                    oft und hängen an Laufzeiten, deshalb steht die Bedingung jeweils dabei.
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Anbieter</th>
                                <th>Was die KI macht</th>
                                <th>Günstigster Tarif</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Wix (Harmony mit Agent Aria)</th>
                                <td>Seiten, Layout, Starttexte und Bilder aus einer Beschreibung, Änderungen per Chat oder Drag and Drop</td>
                                <td>Light 16,66 Euro, Core in einer 50-Prozent-Aktion 14,87 Euro im Monat, jeweils Jahreszahlung inkl. MwSt.; Gratis-Tarif mit Wix-Werbung und wixsite.com-Adresse</td>
                            </tr>
                            <tr>
                                <th>Jimdo (Website Builder)</th>
                                <td>Struktur, Texte, Bilder und Handlungsaufforderungen per Assistent; Chat-Änderungen nur für Texte und SEO, 25 Nachrichten pro Tag</td>
                                <td>Start 12 Euro im Monat bei 12 Monaten, inkl. MwSt.; Gratis-Tarif mit 5 Seiten, Werbung und jimdosite.com-Adresse</td>
                            </tr>
                            <tr>
                                <th>Hostinger (KI-Baukasten)</th>
                                <td>Fertige Seite aus einem Prompt bis 700 Zeichen, oder Agenten-Modus, in dem alles per Chat entsteht</td>
                                <td>2,99 Euro im Monat netto nur bei 48 Monaten Vorauszahlung (143,52 Euro), danach 9,99 Euro; kein Gratis-Tarif, 7 Tage Test ohne Veröffentlichung</td>
                            </tr>
                            <tr>
                                <th>10Web</th>
                                <td>Komplette mehrseitige WordPress-Seite aus einem Prompt, Bearbeitung im Elementor-Editor und per Chat</td>
                                <td>10 US-Dollar im Monat bei Jahreszahlung, 20 US-Dollar monatlich; kein Gratis-Tarif, eine Woche Test</td>
                            </tr>
                            <tr>
                                <th>Framer (Agents)</th>
                                <td>Seiten, Abschnitte, Texte und Bilder per Chat; etwa 300 Credits je Landingpage</td>
                                <td>Basic 10 US-Dollar im Monat bei Jahreszahlung plus Steuer; Gratis-Tarif nur für nicht-kommerzielle Nutzung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Und die Fragen, die nach dem Entwurf kommen: Wer kümmert sich um die Pflichttexte, wo liegen die
                    Daten, und kommen Sie wieder heraus?
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Anbieter</th>
                                <th>Rechtstexte für Deutschland</th>
                                <th>Hosting</th>
                                <th>Export</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Wix (Harmony mit Agent Aria)</th>
                                <td>kostenlose Vorlagen für Impressum und Datenschutz, Cookie-Banner von Usercentrics</td>
                                <td>USA und Irland, Auftragsverarbeitung mit Standardvertragsklauseln</td>
                                <td>nein, nur die Domain</td>
                            </tr>
                            <tr>
                                <th>Jimdo (Website Builder)</th>
                                <td>Rechtstexte-Generator (Trusted Shops) erst ab Grow Legal für 29 Euro, sonst Zusatzkosten; Cookie-Banner automatisch</td>
                                <td>AWS in Irland, einzelne Unterauftragnehmer in den USA</td>
                                <td>nein</td>
                            </tr>
                            <tr>
                                <th>Hostinger (KI-Baukasten)</th>
                                <td>Vorlagen für Datenschutz und AGB, keine Impressum-Vorlage gefunden; Cookie-Banner</td>
                                <td>eigenes CDN, kein Standort genannt</td>
                                <td>nur im Agenten-Modus als Code, im manuellen Modus nicht</td>
                            </tr>
                            <tr>
                                <th>10Web</th>
                                <td>nichts in der Hilfe gefunden</td>
                                <td>Google Cloud, Frankfurt wählbar; alles außer dem Hosting in US-Rechenzentren</td>
                                <td>Zugriff per SFTP und Datenbank, aber laut 10Web nicht lauffähig außerhalb der eigenen Umgebung</td>
                            </tr>
                            <tr>
                                <th>Framer (Agents)</th>
                                <td>keine; Datenschutz liegt laut Framer beim Kunden; Cookie-Banner-Komponente</td>
                                <td>AWS in den USA, dazu Infrastruktur in Europa</td>
                                <td>veröffentlichte HTML-, CSS- und JS-Dateien, nicht das Projekt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Drei Dinge fallen auf. Erstens: Nur Wix und Jimdo kümmern sich überhaupt um deutsches Recht, und
                    bei Jimdo kostet der Rechtstexte-Generator in kleinen Tarifen extra. Zweitens: Bei Wix und Jimdo
                    gibt es keinen Ausgang, außer die Domain mitzunehmen. Drittens: Die KI ist überall gratis dabei,
                    aber nicht unbegrenzt. Jimdo begrenzt den Chat auf 25 Nachrichten pro Tag, Framer rechnet in
                    Credits ab und schreibt in einem eigenen Beitrag, dass frühe Tester für eine komplette Website bis
                    zu 300 US-Dollar an Tokens verbraucht haben.
                </p>

                <h2>Der Selbstversuch: ein Satz, zwei KI-Werkzeuge</h2>
                <p>
                    Baukästen lassen sich ohne Konto nur bis zur Vorschau testen. Deshalb habe ich den zweiten Weg
                    selbst ausprobiert: Zwei KI-Programmierwerkzeuge bekamen am 07.10.2026 exakt denselben Auftrag,
                    formuliert so, wie ihn ein Inhaber schreiben würde:
                </p>
                <div className="subpage-story">
                    <span className="subpage-story-label">Der Auftrag</span>
                    <p>
                        "Erstelle mir eine Website für meinen Malerbetrieb in Hamburg-Altona. Wir machen
                        Innenanstrich, Fassaden und Tapezieren. Sie soll modern aussehen und bei Google gefunden
                        werden. Mach einfach alles fertig, als statische HTML-Seite."
                    </p>
                    <p>
                        Den Malerbetrieb gibt es nicht. Genau das ist der Test: Was macht eine KI, wenn sie keine
                        echten Daten bekommt?
                    </p>
                </div>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Prüfpunkt</th>
                                <th>Codex CLI (OpenAI, Version 0.155.1)</th>
                                <th>Antigravity-CLI (Google, Version 1.3.1)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th>Dauer</th><td>11 Minuten</td><td>2 Minuten 25 Sekunden</td></tr>
                            <tr><th>Ergebnis</th><td>Startseite, Impressum, Datenschutz, CSS, Skript, lokales Foto</td><td>eine einzelne HTML-Datei</td></tr>
                            <tr><th>Impressum und Datenschutz</th><td>als Platzhalter angelegt, ausdrücklich "vor Veröffentlichung vervollständigen"</td><td>nur Links im Footer, die ins Leere führen</td></tr>
                            <tr><th>Erfundene Angaben</th><td>keine Adresse, kein Telefon, keine Bewertungen; nur ein Platzhalter-Name</td><td>Adresse "Musterstraße 1", Telefon, E-Mail, "seit vielen Jahren", "100% Kundenzufriedenheit", kostenlose Besichtigung, Leistungen wie Riss-Sanierung</td></tr>
                            <tr><th>Strukturierte Daten</th><td>ohne Adresse, bewusst</td><td>Unternehmenseintrag mit der erfundenen Adresse und Koordinaten in der Hamburger Innenstadt statt in Altona</td></tr>
                            <tr><th>Kontaktformular</th><td>sendet nichts, sagt das aber auf der Seite</td><td>sendet nichts und sagt es nicht</td></tr>
                            <tr><th>Externe Dienste</th><td>keine</td><td>Tailwind-Skript von einem US-CDN, 127 KB</td></tr>
                            <tr><th>Lighthouse Mobil (Leistung / Barrierefreiheit / SEO)</th><td>92 / 93 / 100</td><td>95 / 90 / 100</td></tr>
                            <tr><th>Barrierefreiheitsfehler</th><td>Kontrast, unzulässige ARIA-Angabe, Beschriftung passt nicht zum Namen</td><td>Kontrast, kein main-Bereich</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Beide Seiten sahen auf den ersten Blick ordentlich aus. Die von Codex wirkte wie von einer
                    Agentur, mit warmer Farbpalette und eigener Bildsprache. Die der Antigravity-CLI war eine saubere,
                    aber austauschbare Standard-Landingpage mit einem Haus-Symbol, wo ein Foto hingehört.
                </p>
                <p>
                    Der Unterschied im Verhalten ist das eigentliche Ergebnis. Codex hat angekündigt, keine
                    Firmendaten zu erfinden, und Lücken als Lücken markiert. Die Antigravity-CLI hat in zweieinhalb
                    Minuten eine Seite geliefert, die live gehen könnte und dabei Versprechen macht, die der Inhaber
                    nie gegeben hat: kostenlose Besichtigung, Meisterqualität, 100 Prozent Kundenzufriedenheit. Das
                    ist nicht nur peinlich. Wer mit Leistungen und Eigenschaften wirbt, die er nicht hat, bewegt sich
                    im Bereich der Irreführung nach § 5 UWG. Und das Formular, das Anfragen stillschweigend verschluckt, kostet
                    Aufträge, ohne dass es jemand merkt.
                </p>
                <p>
                    Eine Einschränkung gehört dazu: Das sind zwei Durchläufe, keine Statistik. Ein anderer Auftrag
                    oder ein zweiter Versuch kann anders ausgehen. Die Fehlerarten sind aber genau die, die ich auch
                    in Baukasten-Entwürfen erwarte, weil die Ursache dieselbe ist: Die KI kennt Ihr Unternehmen nicht.
                </p>

                <h2>Was gut funktioniert</h2>
                <ul>
                    <li><strong>Der erste Entwurf.</strong> Struktur, Abschnitte und eine stimmige Gestaltung in Minuten. Für eine Idee, die Sie testen wollen, ist das ein echter Gewinn.</li>
                    <li><strong>Technische Grundlagen.</strong> Beide Testseiten hatten Seitentitel, Beschreibung, genau eine H1 und eine Sprachangabe. Lighthouse vergab für SEO jeweils 100 Punkte.</li>
                    <li><strong>Leichte Seiten.</strong> Die selbst erzeugten Seiten waren klein und schnell, die Ladezeit wurde vor allem vom Foto bestimmt.</li>
                    <li><strong>Formulierungshilfe.</strong> Als Rohfassung für Leistungstexte ist KI brauchbar, wenn Sie danach Ihre echten Fakten einsetzen.</li>
                </ul>

                <h2>Wo es scheitert</h2>
                <h3>Impressum und Datenschutzerklärung</h3>
                <p>
                    Keine KI kennt Ihre Rechtsform, Ihre Registernummer oder Ihre Umsatzsteuer-ID. Das Impressum nach
                    § 5 DDG muss aber genau diese Angaben enthalten, und die Datenschutzerklärung muss beschreiben,
                    was Ihre Seite tatsächlich verarbeitet. Hostinger bietet keine Impressum-Vorlage, Framer und 10Web
                    gar keine Rechtstexte. Was hineingehört, steht in
                    {' '}<Link href="/wissen/impressum-datenschutzerklaerung-pflicht">Impressum und Datenschutzerklärung</Link>.
                </p>
                <h3>Datenschutz und Hosting</h3>
                <p>
                    Drei der fünf Anbieter betreiben wesentliche Teile in den USA. Das ist mit
                    Standardvertragsklauseln oder dem Data Privacy Framework zulässig, gehört aber in Ihre
                    Datenschutzerklärung. Konkreter wird es bei dem, was die Seite lädt: Die Vorzeige-Seiten von
                    Hostinger, Framer und eine von 10Web holen Schriften direkt von Google-Servern, und im Selbstversuch
                    lud eine Seite ein Skript von einem US-CDN, dessen Hersteller selbst schreibt, es sei nicht für den
                    Produktivbetrieb gedacht. Warum genau solche Einbindungen seit dem Google-Fonts-Urteil Abmahnungen
                    auslösen, steht in{' '}
                    <Link href="/wissen/website-abmahnung-vermeiden">Abmahnung wegen der Website vermeiden</Link>.
                </p>
                <h3>Ladezeit</h3>
                <p>
                    Die Vorzeige-Seiten der Anbieter sind nicht automatisch schnell. Ich habe je zwei davon zweimal mit
                    Lighthouse auf Mobil gemessen. Die Leistungswerte lagen zwischen 39 und 93 Punkten, der größte
                    Inhalt erschien nach 1,2 bis 15,2 Sekunden, und die Seiten waren zwischen 384 KB und 5,6 MB
                    schwer. Eine Wix-Vorlage brauchte 314 Anfragen. Die Werte schwanken zwischen zwei Messungen
                    stark, die Spannweite ist trotzdem aussagekräftig: Sie haben auf die Grundlast des Baukastens
                    keinen Einfluss.
                </p>
                <h3>Google und Inhalte</h3>
                <p>
                    Eine 100 bei Lighthouse-SEO heißt nur, dass Titel, Beschreibung und ein paar technische Angaben
                    vorhanden sind. Sie sagt nichts darüber, ob jemand Ihre Seite findet. Was fehlt, sind eigene
                    Inhalte: welche Arbeiten Sie tatsächlich machen, in welchen Stadtteilen, zu welchen Preisen, mit
                    welchen Referenzen. KI-Texte ohne diese Fakten klingen wie die Seiten Ihrer Wettbewerber, weil
                    sie aus denselben Mustern entstehen. Und erfundene Kontaktdaten in den strukturierten Daten
                    widersprechen im schlimmsten Fall Ihrem Google-Unternehmensprofil.
                </p>
                <h3>Barrierefreiheit</h3>
                <p>
                    Beide Testseiten hatten Kontrastfehler, eine zusätzlich falsche ARIA-Angaben. Bei keinem der fünf
                    Anbieter habe ich eine Zusage gefunden, dass die damit gebauten Kundenseiten barrierefrei sind. Jimdo schreibt ausdrücklich, das
                    nicht garantieren zu können. Für Seiten mit Online-Buchung oder Shop kann das nach dem BFSG
                    Pflicht sein, siehe{' '}
                    <Link href="/wissen/barrierefreie-website-pflicht">Barrierefreie Website: Pflicht nach dem BFSG</Link>.
                </p>
                <h3>Lock-in</h3>
                <p>
                    Bei Wix und Jimdo gibt es keinen Export. Hostinger erlaubt ihn nur im Agenten-Modus und nur in
                    bezahlten Tarifen. 10Web baut auf WordPress, rät aber selbst davon ab, KI-erzeugte Seiten auf
                    anderem Hosting zu betreiben. Framer gibt die veröffentlichten Dateien heraus, aber kein
                    bearbeitbares Projekt. Wer den Anbieter wechseln will, baut in den meisten Fällen neu.
                </p>

                <h2>Was eine Website mit KI kostet</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Weg</th>
                                <th>Laufende Kosten</th>
                                <th>Was Sie selbst übernehmen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>KI-Baukasten</th>
                                <td>etwa 3 bis 17 Euro im Monat im Einstieg, je nach Laufzeit und Aktion; Rechtstexte teils extra</td>
                                <td>alle Inhalte und Fotos, Rechtstexte, Datenschutz-Prüfung, Pflege</td>
                            </tr>
                            <tr>
                                <th>KI-Programmierwerkzeug</th>
                                <td>Abo des Werkzeugs plus Hosting</td>
                                <td>alles oben, dazu Formular-Backend, Hosting, Sicherheit und Updates</td>
                            </tr>
                            <tr>
                                <th>Entwickler</th>
                                <td>bei mir ab 1.500 Euro einmalig für den Website-Start, ab 4.500 Euro für eine Unternehmenswebsite</td>
                                <td>Ihre Fakten und Freigaben</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die Monatsbeträge der Baukästen täuschen ein wenig. Bei Hostinger gilt der niedrige Preis nur
                    mit 48 Monaten Vorauszahlung, bei Wix lief am Stichtag eine Rabattaktion. Und der größte
                    Kostenposten bei allen KI-Wegen ist Ihre Zeit: Texte prüfen, Fakten einsetzen, Rechtliches klären.
                    Eine ausführliche Rechnung mit allen Preisstufen steht unter
                    {' '}<Link href="/wissen/webdesign-kosten">Webdesign Kosten</Link>.
                </p>

                <h2>Wann sich ein Entwickler lohnt</h2>
                <p>
                    Ein KI-Baukasten ist eine gute Wahl, wenn Sie eine Idee testen, eine Visitenkarte brauchen oder
                    Ihre Kunden ohnehin über Empfehlung kommen. Ein Entwickler lohnt sich, sobald die Website Anfragen
                    bringen soll: wenn Sie bei Google für Ihre Leistungen in Ihrem Stadtteil gefunden werden wollen,
                    wenn Online-Buchung oder ein Shop dranhängen, wenn Sie Kontrolle über Datenschutz und Ladezeit
                    brauchen oder die Seite nicht an einen Anbieter binden wollen.
                </p>
                <p>
                    So arbeite ich selbst: Ich baue mit Next.js und setze KI beim Programmieren ein, weil sie
                    Routinearbeit schneller macht. Die Fakten kommen von Ihnen, nicht aus einem Sprachmodell, und was
                    die KI schreibt, prüfe ich, bevor es live geht. Sie arbeiten direkt mit mir. Braucht ein Projekt zusätzliche
                    Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu.
                    Ansprechpartner und Verantwortlicher für das Ergebnis bleibe ich.
                </p>
                <p>
                    Wenn Sie schon eine KI-Seite haben und wissen wollen, wo sie steht: Der kostenlose
                    {' '}<Link href="/website-check">Website-Check</Link> zeigt in einer Minute die technischen
                    Grundlagen. Wie ein Projekt mit mir abläuft, steht unter
                    {' '}<Link href="/leistungen/website-erstellen-lassen">Website erstellen lassen</Link>.
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
                        <li>Wix, KI-Werkzeuge im Harmony-Editor. <a href="https://support.wix.com/en/article/wix-harmony-editor-about-the-ai-tools" rel="nofollow noopener" target="_blank">support.wix.com</a></li>
                        <li>Wix, Tarife Deutschland, abgerufen am 07.10.2026. <a href="https://de.wix.com/upgrade/website" rel="nofollow noopener" target="_blank">de.wix.com</a></li>
                        <li>Wix, kostenlose Website: Gratis-Tarif mit Wix-Werbung und Subdomain. <a href="https://support.wix.com/en/article/building-a-website-for-free" rel="nofollow noopener" target="_blank">support.wix.com</a></li>
                        <li>Wix, Textvorlage für das Impressum. <a href="https://support.wix.com/de/article/juristische-textvorlage-f%C3%BCr-dein-impressum" rel="nofollow noopener" target="_blank">support.wix.com</a></li>
                        <li>Wix, Trust Center: Rechenzentren in den USA und Irland. <a href="https://www.wix.com/trust-center/faq" rel="nofollow noopener" target="_blank">wix.com</a></li>
                        <li>Wix, Export oder Einbettung der Website an anderer Stelle nicht möglich. <a href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" rel="nofollow noopener" target="_blank">support.wix.com</a></li>
                        <li>Jimdo, Preise, abgerufen am 07.10.2026. <a href="https://www.jimdo.com/de/preise/" rel="nofollow noopener" target="_blank">jimdo.com</a></li>
                        <li>Jimdo, Companion: Chat-Änderungen, 25 Nachrichten pro 24 Stunden. <a href="https://help.jimdo-dolphin.com/hc/en-us/articles/43211664189076-Companion-Your-Business-Advisor-in-Jimdo" rel="nofollow noopener" target="_blank">help.jimdo-dolphin.com</a></li>
                        <li>Jimdo, Rechtstexte-Generator. <a href="https://www.jimdo.com/de/addon/legal-text-generator/" rel="nofollow noopener" target="_blank">jimdo.com</a></li>
                        <li>Jimdo, Sicherheitsinformationen: Hosting bei AWS in Irland. <a href="https://legal.jimdo.com/hc/en-us/articles/20936603294868-Jimdo-Security-Information" rel="nofollow noopener" target="_blank">legal.jimdo.com</a></li>
                        <li>Jimdo, Datensicherung: kein Download der Website. <a href="https://help.jimdo-dolphin.com/hc/en-us/articles/360000898703-How-do-I-backup-my-Jimdo-website" rel="nofollow noopener" target="_blank">help.jimdo-dolphin.com</a></li>
                        <li>Jimdo, Erklärung zur Barrierefreiheit: keine Garantie für Kundenseiten. <a href="https://help.jimdo.com/hc/en-us/articles/35942098037524-Accessibility-Statement-for-Jimdo" rel="nofollow noopener" target="_blank">help.jimdo.com</a></li>
                        <li>Hostinger, KI-Website-Baukasten: Preise ohne MwSt., Laufzeit, Verlängerungspreis. <a href="https://www.hostinger.com/de/ai-website-builder" rel="nofollow noopener" target="_blank">hostinger.com</a></li>
                        <li>Hostinger, kostenloser Test ohne Veröffentlichung. <a href="https://www.hostinger.com/support/10323594-how-to-try-hostinger-website-builder-for-free/" rel="nofollow noopener" target="_blank">hostinger.com</a></li>
                        <li>Hostinger, Rechtsseiten im Baukasten. <a href="https://www.hostinger.com/support/6454245-hostinger-website-builder-how-to-add-legal-pages/" rel="nofollow noopener" target="_blank">hostinger.com</a></li>
                        <li>Hostinger, Code-Export im Agenten-Modus. <a href="https://www.hostinger.com/support/10771345-hostinger-horizons-how-to-export-code/" rel="nofollow noopener" target="_blank">hostinger.com</a></li>
                        <li>10Web, KI-Website-Baukasten. <a href="https://10web.io/ai-website-builder/" rel="nofollow noopener" target="_blank">10web.io</a></li>
                        <li>10Web, Preise. <a href="https://10web.io/pricing/" rel="nofollow noopener" target="_blank">10web.io</a></li>
                        <li>10Web, Sicherheitserklärung: alle Server außer dem Hosting in US-Rechenzentren. <a href="https://10web.io/legal/security-statement/" rel="nofollow noopener" target="_blank">10web.io</a></li>
                        <li>10Web, KI-generierte Seiten auf anderem Hosting. <a href="https://help.10web.io/hc/en-us/articles/11594324041106-Can-I-Use-an-AI-Builder-Generated-Website-on-Other-Hostings" rel="nofollow noopener" target="_blank">help.10web.io</a></li>
                        <li>Framer, KI-Agenten. <a href="https://www.framer.com/ai/" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Framer, Preise. <a href="https://www.framer.com/pricing" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Framer, Credits je Landingpage. <a href="https://www.framer.com/blog/ai-credits-simpler-plans-and-lower-prices/" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Framer, Entwicklungsbericht zu den Agents: bis zu 300 US-Dollar an Tokens für eine komplette Website. <a href="https://www.framer.com/blog/building-framer-agents/" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Framer, DSGVO und Cookies: Verantwortung beim Kunden. <a href="https://www.framer.com/help/articles/gdpr-and-cookies/" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Framer, Sicherheit: Hosting bei AWS in den USA. <a href="https://www.framer.com/legal/security" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Framer, Daten aus Framer übertragen. <a href="https://www.framer.com/help/articles/porting-your-data-from-framer/" rel="nofollow noopener" target="_blank">framer.com</a></li>
                        <li>Tailwind CSS, Play CDN: nur für die Entwicklung, nicht für den Produktivbetrieb gedacht. <a href="https://tailwindcss.com/docs/installation/play-cdn" rel="nofollow noopener" target="_blank">tailwindcss.com</a></li>
                        <li>Gesetz gegen den unlauteren Wettbewerb (UWG), § 5 Irreführende geschäftliche Handlungen. <a href="https://www.gesetze-im-internet.de/uwg_2004/__5.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Google Search Central, Leitfaden zu KI-generierten Inhalten: Bewertet wird die Qualität, nicht die Art der Erstellung. <a href="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Digitale-Dienste-Gesetz (DDG), § 5 Allgemeine Informationspflichten. <a href="https://www.gesetze-im-internet.de/ddg/__5.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Eigener Test am 07.10.2026: Codex CLI 0.155.1 und Antigravity-CLI 1.3.1 mit identischem Auftrag, Auswertung mit Lighthouse 13.1.0 (Mobil). Lighthouse-Messungen von je zwei Vorzeige-Seiten der fünf Anbieter, jeweils zwei Durchläufe.</li>
                        <li>Google Keyword Planner, Suchvolumen "website mit ki erstellen" in Deutschland, Abruf am 07.10.2026.</li>
                    </ol>
                </div>
                </AutoLinks>
            </ArticleLayout>
        </>
    );
}
