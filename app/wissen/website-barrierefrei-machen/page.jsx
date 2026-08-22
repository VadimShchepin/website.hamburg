import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Website barrierefrei machen: die Anleitung',
    description: 'WCAG 2.2 praktisch umgesetzt: die vier Prinzipien, die sechs haeufigsten Fehler, Tastatur- und Screenreader-Test, Aufwand und Reihenfolge.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/website-barrierefrei-machen',
    },
    openGraph: {
        title: 'Website barrierefrei machen: die Anleitung',
        description: 'WCAG 2.2 praktisch umgesetzt: vier Prinzipien, sechs haeufige Fehler, Tastatur- und Screenreader-Test, Aufwand und Reihenfolge.',
        url: 'https://webseite.hamburg/wissen/website-barrierefrei-machen',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Welche WCAG-Version und welche Stufe gilt für Websites in Deutschland?',
        a: 'Die BFSGV nennt keine WCAG-Version, sondern die vier Prinzipien wahrnehmbar, bedienbar, verständlich und robust. Die Praxis richtet sich an WCAG in der Stufe AA aus, weil die harmonisierte europäische Norm EN 301 549 auf die WCAG verweist und AA die Stufe ist, die in Verwaltungsvorgaben und Prüfverfahren angesetzt wird. WCAG 2.2 ist die aktuelle W3C-Empfehlung in der Fassung vom 12. Dezember 2024 und enthält gegenüber 2.1 neun neue Erfolgskriterien.',
    },
    {
        q: 'Wie prüfe ich meine Website auf Barrierefreiheit?',
        a: 'In drei Stufen. Erstens automatisiert: kostenlose Prüfwerkzeuge finden Kontrastfehler, fehlende Alternativtexte und unbeschriftete Formularfelder zuverlässig. Zweitens mit der Tastatur: Tab-Taste durch alle wichtigen Wege, ohne Maus. Drittens manuell mit Screenreader und Vergrößerung. Automatisierte Tests finden nach Erfahrungswerten nur einen Teil der Probleme, aber sie finden den billig behebbaren Teil.',
    },
    {
        q: 'Was kostet es, eine Website barrierefrei zu machen?',
        a: 'Bei einer sauber gebauten Website mit klarem HTML sind Kontraste, Alternativtexte, Formularbeschriftungen und Fokus-Sichtbarkeit meist ein bis drei Tage Arbeit. Bei einer über Jahre gewachsenen Seite mit Seitenbaukasten, vielen Plugins und individuellen Interaktionen wird es ein Projekt, weil jeder Baustein einzeln geprüft werden muss. Wenn die Seite ohnehin älter als fünf Jahre ist, ist ein Neubau häufig günstiger als das Nachrüsten.',
    },
    {
        q: 'Helfen Accessibility-Overlays oder Widgets?',
        a: 'Für die Erfüllung der Anforderungen nicht. Ein Overlay legt eine Bedienleiste über die Seite und kann Kontraste oder Schriftgrößen anpassen. Es ändert nichts an fehlenden Alternativtexten, unbeschrifteten Feldern, fehlender Tastaturbedienbarkeit oder einer kaputten Überschriftenstruktur. Die Anforderungen richten sich an die Seite selbst.',
    },
    {
        q: 'Was ist der schnellste Test, den ich selbst machen kann?',
        a: 'Ziehen Sie die Maus ab und bedienen Sie Ihre wichtigsten Wege nur mit Tabulator und Eingabetaste: Startseite, Navigation, Kontaktformular, Bestellung oder Buchung. Sie sehen sofort, ob der Fokus sichtbar ist, ob die Reihenfolge logisch läuft und ob Sie irgendwo hängenbleiben. Der Test kostet zehn Minuten und findet die schwersten Fehler.',
    },
    {
        q: 'Verbessert Barrierefreiheit das Google-Ranking?',
        a: 'Nicht direkt, Barrierefreiheit ist kein bestätigter Rankingfaktor. Die Maßnahmen überschneiden sich aber stark mit technisch gutem HTML: Überschriftenhierarchie, aussagekräftige Alternativtexte, sprechende Linktexte, semantische Elemente und eine Sprachangabe im Dokument. Das hilft Crawlern und KI-Systemen beim Verstehen der Seite.',
    },
];

export default function WebsiteBarrierefreiMachenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Website barrierefrei machen: WCAG 2.2 in der Praxis',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/website-barrierefrei-machen',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/website-barrierefrei-machen' },
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
            { '@type': 'ListItem', position: 3, name: 'Website barrierefrei machen', item: 'https://webseite.hamburg/wissen/website-barrierefrei-machen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-barrierefrei-machen"
                category="RECHT"
                title="Website barrierefrei machen: WCAG 2.2 in der Praxis"
                readTime="13 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-barrierefrei-machen.svg"
                heroAlt="Illustration: Browser-Fenster mit drei Prueffeldern fuer Kontrast, Formularbeschriftung und Tastaturfokus, davor eine Lupe"
            >
                <p>
                    Ob Sie überhaupt müssen, klärt der Artikel zur
                    {' '}<Link href="/wissen/barrierefreie-website-pflicht">Pflicht nach dem BFSG</Link>. Hier geht
                    es um das Danach: was konkret zu tun ist, in welcher Reihenfolge, und wie viel davon Sie selbst
                    schaffen.
                </p>
                <p>
                    Die gute Nachricht steckt in einer Zahl. Sechs Fehlerarten machen laut WebAIM Million 96 Prozent
                    aller automatisch feststellbaren Verstöße aus. Fünf davon behebt man an einem Tag. Die schlechte
                    Nachricht: Was Werkzeuge nicht sehen, ist der Teil, der Nutzer wirklich aussperrt.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Die BFSGV verlangt für Websites und Apps die vier Prinzipien
                        wahrnehmbar, bedienbar, verständlich, robust. Übersetzt in Arbeit heißt das: ausreichende
                        Kontraste, Alternativtexte für Bilder, beschriftete Formularfelder, vollständige
                        Tastaturbedienbarkeit mit sichtbarem Fokus, korrekte Überschriftenhierarchie, Sprachangabe
                        im HTML, verständliche Fehlermeldungen und funktionierende Standardelemente statt
                        umgestylter div-Container.
                    </p>
                    <p>
                        Prüfen in drei Stufen: automatisiert, dann Tastaturtest ohne Maus, dann manuell mit
                        Screenreader. Aufwand bei sauberem Code ein bis drei Tage, bei gewachsenen Seiten ein
                        Projekt.
                    </p>
                </div>

                <h2>Was WCAG 2.2 ist und was daran neu ist</h2>
                <p>
                    Die Web Content Accessibility Guidelines sind eine W3C-Empfehlung. Version 2.2 liegt in der
                    Fassung vom 12. Dezember 2024 vor und bringt gegenüber 2.1 neun neue Erfolgskriterien mit,
                    während das alte Kriterium 4.1.1 Parsing entfallen ist. Es gibt drei Konformitätsstufen: A,
                    AA und AAA. In der Praxis ist AA der Maßstab.
                </p>
                <p>
                    Die neun neuen Kriterien lohnen einen Blick, weil sie erstaunlich alltäglich sind. Es geht um
                    Fokus, der nicht von Sticky-Headern oder Cookie-Bannern verdeckt wird, um Mindestgrößen für
                    Klickziele, um Alternativen zu Ziehbewegungen, um Hilfe, die auf jeder Seite an derselben
                    Stelle steht, um Formulare, die nicht dieselbe Angabe zweimal verlangen, und um Anmeldungen,
                    die kein Gedächtnisspiel sind. Wer in den letzten Jahren ein Cookie-Banner über den
                    Tastaturfokus gelegt hat, ist hier gemeint.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/wcag-vier-prinzipien.svg" alt="Diagramm der vier WCAG-Prinzipien wahrnehmbar, bedienbar, verstaendlich, robust mit je einem typischen Pruefpunkt" width="1600" height="900" />
                    <figcaption>Die vier Prinzipien, wie sie auch in § 12 BFSGV stehen, mit je einem typischen Prüfpunkt.</figcaption>
                </figure>

                <h2>Die sechs häufigen Fehler und wie man sie behebt</h2>
                <p>
                    Alle sechs sind automatisiert auffindbar, alle sechs sind billig. Reihenfolge nach Häufigkeit
                    in der WebAIM-Million-Untersuchung vom Februar 2026.
                </p>

                <h3>1. Zu geringer Textkontrast, 83,9 Prozent der Startseiten</h3>
                <p>
                    Der Klassiker. Hellgrauer Text auf weißem Grund sieht in Entwürfen elegant aus und ist auf
                    einem Handy in der Sonne unlesbar. WCAG verlangt in Stufe AA ein Kontrastverhältnis von
                    mindestens 4,5 zu 1 für normalen Text und 3 zu 1 für großen Text ab 18 Punkt beziehungsweise
                    14 Punkt fett. Die Behebung ist eine Änderung an zwei oder drei Farbwerten in Ihrem
                    Design-System, nicht eine Änderung an 200 Seiten. Wenn sie doch 200 Änderungen ist, haben Sie
                    ein anderes Problem: Ihre Seite hat kein Design-System.
                </p>

                <h3>2. Fehlende Alternativtexte, 53,1 Prozent</h3>
                <p>
                    Ein Alternativtext beschreibt, was auf dem Bild passiert und warum es da ist. Nicht
                    Dateiname, nicht Keyword-Salat. Dekorative Bilder bekommen ein leeres alt-Attribut, damit
                    Screenreader sie überspringen, und das ist ausdrücklich richtig, kein Schlampigkeitsfehler.
                    Wer beides verwechselt, produziert entweder Schweigen bei wichtigen Bildern oder Vorlesen von
                    Zierlinien.
                </p>

                <h3>3. Unbeschriftete Formularfelder, 51,0 Prozent</h3>
                <p>
                    Ein Platzhaltertext im Feld ist keine Beschriftung. Er verschwindet beim Tippen, ist meist zu
                    kontrastarm und wird von Screenreadern unterschiedlich behandelt. Jedes Feld braucht ein
                    verknüpftes label-Element. Das ist eine Zeile pro Feld und gleichzeitig eine der Änderungen
                    mit der besten Wirkung auf Ihre Anfragen, weil beschriftete Formulare auch für Sehende
                    schneller ausfüllbar sind. Mehr dazu in
                    {' '}<Link href="/wissen/website-conversion-optimierung">Conversion-Optimierung</Link>.
                </p>

                <h3>4. Leere Links, 46,3 Prozent, und 5. leere Buttons, 30,6 Prozent</h3>
                <p>
                    Beide haben dieselbe Ursache: ein Icon ohne Textalternative. Das Lupensymbol, das Burger-Menü,
                    die Social-Media-Kacheln im Footer. Ein Screenreader liest dort Link, Link, Link, Link. Die
                    Behebung ist ein aria-label oder unsichtbarer Text im Element.
                </p>

                <h3>6. Fehlende Sprachangabe, 13,5 Prozent</h3>
                <p>
                    Ohne lang-Attribut im html-Element weiß die Sprachausgabe nicht, in welcher Sprache sie
                    vorlesen soll. Deutscher Text mit englischer Aussprache ist tatsächlich unverständlich, nicht
                    nur unschön. Eine Zeile.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Maßnahme</th>
                                <th>Findet man mit</th>
                                <th>Typischer Aufwand</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Kontraste anheben</th>
                                <td>automatisiertem Test</td>
                                <td>2 bis 4 Stunden bei vorhandenem Design-System</td>
                            </tr>
                            <tr>
                                <th>Alternativtexte ergänzen</th>
                                <td>automatisiertem Test</td>
                                <td>1 bis 2 Minuten pro Bild</td>
                            </tr>
                            <tr>
                                <th>Formularfelder beschriften</th>
                                <td>automatisiertem Test</td>
                                <td>10 Minuten pro Formular</td>
                            </tr>
                            <tr>
                                <th>Icon-Links benennen</th>
                                <td>automatisiertem Test</td>
                                <td>1 bis 2 Stunden</td>
                            </tr>
                            <tr>
                                <th>Sichtbarer Tastaturfokus</th>
                                <td>Tastaturtest</td>
                                <td>1 bis 3 Stunden</td>
                            </tr>
                            <tr>
                                <th>Logische Tab-Reihenfolge</th>
                                <td>Tastaturtest</td>
                                <td>je nach Layout, halber bis ganzer Tag</td>
                            </tr>
                            <tr>
                                <th>Überschriftenhierarchie ordnen</th>
                                <td>Tastaturtest, Screenreader</td>
                                <td>halber Tag</td>
                            </tr>
                            <tr>
                                <th>Bestellstrecke oder Buchung bedienbar machen</th>
                                <td>manuellem Test</td>
                                <td>1 bis 5 Tage, der teure Posten</td>
                            </tr>
                            <tr>
                                <th>Individuelle Interaktionen, Karten, Slider</th>
                                <td>manuellem Test</td>
                                <td>offen, oft Neubau des Bausteins</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Der Test, der zählt: ohne Maus</h2>
                <p>
                    Automatisierte Werkzeuge prüfen, was maschinell entscheidbar ist. Ob der Alternativtext das
                    Bild beschreibt oder nur existiert, kann keine Software beurteilen. Ob die Tab-Reihenfolge dem
                    Blickverlauf folgt, auch nicht. Deshalb dieser Ablauf:
                </p>
                <ol>
                    <li><strong>Maus weglegen.</strong> Nur Tabulator, Umschalt plus Tabulator, Eingabetaste, Leertaste, Pfeiltasten.</li>
                    <li><strong>Ist der Fokus immer sichtbar?</strong> Sie müssen jederzeit erkennen, wo Sie sind. Ein entfernter Fokusrahmen ist der häufigste absichtlich eingebaute Fehler, weil er Designern nicht gefällt.</li>
                    <li><strong>Kommen Sie überall hin?</strong> Menü aufklappen, Untermenü erreichen, Suchfeld benutzen, Cookie-Banner schließen, Formular abschicken.</li>
                    <li><strong>Kommen Sie wieder heraus?</strong> Aus Dialogen, Overlays, Video-Playern. Fokusfallen sind heimtückisch, weil sie am Mauszeiger nicht existieren.</li>
                    <li><strong>Deckt etwas den Fokus ab?</strong> Sticky-Header und Cookie-Leisten sind die üblichen Täter. Genau dafür gibt es in WCAG 2.2 zwei neue Kriterien.</li>
                    <li><strong>Dann mit Sprachausgabe.</strong> macOS hat VoiceOver eingebaut, Windows den Narrator, NVDA ist kostenlos. Zehn Minuten mit geschlossenen Augen sind lehrreicher als jeder Prüfbericht.</li>
                </ol>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Der teuerste Fehler, den ich in dieser Kategorie gesehen habe, war ein Zahlungsauswahl-Element
                        in einem Shop. Optisch drei saubere Radio-Buttons. Im Code drei div-Container mit
                        Klick-Handler. Mit der Maus perfekt, mit der Tastatur unerreichbar. Der Shop hat monatelang
                        nicht verstanden, warum ein kleiner Teil der Bestellungen im letzten Schritt abbrach.
                    </p>
                    <p>
                        Die Lehre daraus ist unspektakulär und gilt fast immer: Nehmen Sie die Standardelemente von
                        HTML. Ein echter Button, ein echtes Auswahlfeld, ein echtes Formular. Die Browser haben
                        Tastaturbedienung, Fokus und Rollen seit zwanzig Jahren eingebaut. Jedes Nachbauen mit
                        div-Containern bedeutet, das alles selbst zu implementieren, und dann fehlt regelmäßig die
                        Hälfte.
                    </p>
                </div>

                <h2>Was Overlays nicht können</h2>
                <p>
                    Die Werbung ist verlockend: eine Zeile JavaScript, und die Seite ist barrierefrei. Was das
                    Widget tatsächlich kann, ist Kontrast erhöhen, Schrift vergrößern, Animationen anhalten,
                    manchmal einen eigenen Vorleser starten. Was es nicht kann: einem Bild einen sinnvollen
                    Alternativtext geben, einem Feld eine Beschriftung, einem div-Button eine Tastaturbedienung
                    oder einer Seite mit fünf h1-Elementen eine Struktur.
                </p>
                <p>
                    Die Anforderungen aus § 12 BFSGV richten sich an die Dienstleistung, also an die Website
                    selbst. Ein Overlay ist eine Bedienhilfe darüber. Es kann für einen Teil Ihrer Besucher den
                    Alltag erleichtern, und es ersetzt keine der Maßnahmen aus der Tabelle oben.
                </p>

                <h2>Was das mit Ihrer Sichtbarkeit macht</h2>
                <p>
                    Ein Screenreader und ein Crawler lesen dieselbe Datei. Beide brauchen Struktur statt Optik.
                    Überschriften in der richtigen Ordnung, sprechende Linktexte statt hier klicken,
                    aussagekräftige Alternativtexte, semantische Elemente, eine Sprachangabe. Deshalb bekommen
                    Seiten, die man barrierefrei aufräumt, in der Regel gleich ein besseres technisches Fundament
                    für <Link href="/leistungen/seo">SEO</Link> und für die Zitierbarkeit in KI-Antworten, siehe
                    {' '}<Link href="/leistungen/ai-seo">AI SEO</Link>. Ranking-Versprechen sind das nicht,
                    Aufräumen mit doppeltem Nutzen schon.
                </p>

                <h2>Nachrüsten oder neu bauen</h2>
                <p>
                    Die ehrliche Antwort hängt an einer Frage: Wie viel Ihrer Seite haben Sie unter Kontrolle?
                    Bei einer individuell gebauten Website ändern Sie Farben und Bausteine an einer Stelle. Bei
                    einer über Jahre mit Seitenbaukasten und 30 Plugins gewachsenen Installation prüfen Sie 30
                    Fremdbausteine einzeln und können viele davon nicht reparieren, sondern nur austauschen.
                </p>
                <p>
                    Ab welchem Punkt sich das dreht, hängt am Alter und am Zustand. Grobe Faustregel aus meinen
                    Projekten: Wer ohnehin über einen Relaunch nachdenkt, sollte Barrierefreiheit nicht vorher
                    nachrüsten, sondern beim Neubau mitnehmen. Die Kostenlage steht in
                    {' '}<Link href="/wissen/webdesign-kosten">Webdesign Kosten</Link>, die Fallen beim Wechsel in
                    der <Link href="/wissen/website-relaunch-checkliste">Relaunch-Checkliste</Link>. Und wenn Sie
                    einen Baukasten nutzen, prüfen Sie zuerst, wie weit der Anbieter Sie überhaupt an das HTML
                    heranlässt, siehe <Link href="/wissen/website-baukasten-oder-eigene-website">Baukasten oder eigene Website</Link>.
                </p>

                <h2>Der Einstieg, wenn Sie jetzt anfangen wollen</h2>
                <p>
                    Machen Sie den Tastaturtest heute. Er kostet nichts, dauert zehn Minuten und liefert Ihnen die
                    Liste, mit der jedes weitere Gespräch sinnvoll wird. Wenn Sie danach eine Einschätzung von
                    außen wollen: Der <Link href="/leistungen/website-audit">Website-Audit</Link> ist kostenlos.
                    Sie arbeiten direkt mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text
                    oder Fotografie, hole ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für
                    das Ergebnis bleibe ich.
                </p>
                <p>
                    Dieser Artikel beschreibt technische Umsetzung, nicht Rechtslage im Einzelfall. Für die Frage,
                    ob und in welchem Umfang Sie verpflichtet sind, hilft der
                    {' '}<Link href="/wissen/barrierefreie-website-pflicht">BFSG-Artikel</Link> und im Zweifel ein
                    Anwalt.
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
                        <li>W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation in der Fassung vom 12. Dezember 2024: neun neue Erfolgskriterien gegenüber 2.1, Entfall von 4.1.1 Parsing, Konformitätsstufen A, AA, AAA. <a href="https://www.w3.org/TR/WCAG22/" rel="nofollow noopener" target="_blank">w3.org</a></li>
                        <li>Barrierefreiheitsstärkungsgesetz-Verordnung (BFSGV), § 12: Anforderungen an Dienstleistungen einschließlich Webseiten, Online-Anwendungen und mobiler Apps, Prinzipien wahrnehmbar, bedienbar, verständlich, robust. <a href="https://www.gesetze-im-internet.de/bfsgv/__12.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>BFSGV § 19: zusätzliche Anforderungen für Dienstleistungen im elektronischen Geschäftsverkehr, unter anderem barrierefreie Identifizierung, Authentifizierung und Zahlung. <a href="https://www.gesetze-im-internet.de/bfsgv/__19.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>WebAIM Million, Bericht Februar 2026: 95,9 Prozent der Startseiten mit feststellbaren WCAG-2-Fehlern, 56,1 Fehler je Seite, Verteilung der sechs häufigsten Fehlerarten. <a href="https://webaim.org/projects/million/" rel="nofollow noopener" target="_blank">webaim.org</a></li>
                        <li>Bundesfachstelle Barrierefreiheit, FAQ zum BFSG, kostenlose Beratung für Kleinstunternehmen. <a href="https://www.bundesfachstelle-barrierefreiheit.de/DE/Fachwissen/Produkte-und-Dienstleistungen/Barrierefreiheitsstaerkungsgesetz/FAQ/faq_node.html" rel="nofollow noopener" target="_blank">bundesfachstelle-barrierefreiheit.de</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
