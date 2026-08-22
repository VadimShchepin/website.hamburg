import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'WordPress-Alternativen: der ehrliche Vergleich',
    description: 'WordPress läuft auf 40,7 Prozent aller Websites. Wann ein Wechsel sich lohnt, welche Alternativen wofür taugen und was der Umzug wirklich kostet.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/wordpress-alternativen',
    },
    openGraph: {
        title: 'WordPress-Alternativen: der ehrliche Vergleich',
        description: 'Wann ein Wechsel von WordPress sich lohnt, welche Alternativen wofür taugen und was der Umzug wirklich kostet.',
        url: 'https://webseite.hamburg/wissen/wordpress-alternativen',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Was ist die beste Alternative zu WordPress?',
        a: 'Es gibt keine allgemein beste, weil WordPress drei sehr verschiedene Dinge gleichzeitig ist: Redaktionssystem, Website-Baukasten und Plugin-Marktplatz. Für eine Firmenwebsite mit wenigen Seiten und hohem Anspruch an Ladezeit und Sicherheit ist ein statisch generierter Aufbau die stärkste Option. Für inhaltsgetriebene Seiten mit vielen Redakteuren ist ein klassisches CMS wie TYPO3, Drupal oder Craft sinnvoll. Für reine Blogs ist Ghost der direkteste Ersatz. Für Shops sind Shopify, Shopware oder ein Headless-Aufbau die Kandidaten.',
    },
    {
        q: 'Wie viele Websites nutzen WordPress?',
        a: 'Laut W3Techs mit Stand 22. August 2026 laufen 40,7 Prozent aller Websites auf WordPress, gemessen an allen Websites mit erkennbarem Content-Management-System sind es 58,9 Prozent. Auf den weiteren Plätzen folgen Shopify mit 5,3 Prozent, Wix mit 4,2 Prozent und Squarespace mit 2,4 Prozent aller Websites.',
    },
    {
        q: 'Ist WordPress unsicher?',
        a: 'Der Kern ist es nicht. Im Patchstack-Bericht State of WordPress Security in 2026 wurden für 2025 insgesamt 11.334 neue Schwachstellen im WordPress-Umfeld gemeldet, ein Plus von 42 Prozent. 91 Prozent davon steckten in Plugins, 9 Prozent in Themes, und im WordPress-Kern selbst waren es sechs, alle als geringes Risiko eingestuft. Das Risiko liegt also in den Erweiterungen und deren Pflege, nicht in WordPress selbst.',
    },
    {
        q: 'Was kostet der Wechsel von WordPress zu etwas anderem?',
        a: 'Der Wechsel ist ein Neubau mit Inhaltsübernahme, nicht ein Umzug. Realistisch liegt er im Bereich eines neuen Website-Projekts, bei mir also ab 1.500 Euro für eine einzelne Seite und ab 4.500 Euro für eine Unternehmenswebsite. Dazu kommt der Aufwand für Weiterleitungen, der mit der Anzahl bestehender URLs steigt und der beim Wechsel der teuerste unterschätzte Posten ist.',
    },
    {
        q: 'Wann sollte ich bei WordPress bleiben?',
        a: 'Wenn Ihr Team es kennt und bedient, wenn Sie auf ein Plugin angewiesen sind, für das es keinen Ersatz gibt, wenn regelmäßig Inhalte von mehreren Personen gepflegt werden, oder wenn die Seite läuft und Anfragen bringt. Ein Systemwechsel ohne konkretes Problem ist die teuerste Form von Aufräumen.',
    },
    {
        q: 'Verliere ich beim Wechsel Google-Rankings?',
        a: 'Nur wenn Sie die Weiterleitungen vergessen. Google bewertet das ausgelieferte Ergebnis, nicht das System dahinter. Wer jede alte URL per 301 auf ihr neues Ziel weiterleitet, überträgt die Signale. Wer das nicht tut, verliert Sichtbarkeit, die vorher da war, und bemerkt es typischerweise erst nach mehreren Wochen.',
    },
];

export default function WordPressAlternativenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'WordPress-Alternativen: wann ein Wechsel sich lohnt und wann nicht',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/wordpress-alternativen',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/wordpress-alternativen' },
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
            { '@type': 'ListItem', position: 3, name: 'WordPress-Alternativen', item: 'https://webseite.hamburg/wissen/wordpress-alternativen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="wordpress-alternativen"
                category="WEBDESIGN"
                title="WordPress-Alternativen: wann ein Wechsel sich lohnt und wann nicht"
                readTime="12 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-wordpress-alternativen.svg"
                heroAlt="Illustration: links eine Mauer aus gleichen Bausteinen als großes System, rechts drei unterschiedliche Bausteine als Alternativen, einer rot"
            >
                <p>
                    Die Frage nach einer WordPress-Alternative kommt fast nie aus technischer Neugier. Sie kommt
                    nach einem Vorfall: die Seite war zwei Tage offline, ein Update hat das Layout zerlegt, ein
                    Plugin wurde eingestellt, der Ladezeit-Test zeigt Rot, oder eine Sicherheitsmeldung ist
                    aufgeschlagen.
                </p>
                <p>
                    Deshalb fange ich nicht mit den Alternativen an, sondern mit der Diagnose. Bei etwa der Hälfte
                    der Anfragen ist WordPress nicht das Problem, sondern zwölf Jahre Plugin-Archäologie auf einem
                    fünf Euro teuren Shared-Hosting-Paket. Ein Systemwechsel behebt das, ein Aufräumen aber auch,
                    und zwar günstiger.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> WordPress läuft laut W3Techs auf 40,7 Prozent aller Websites
                        und auf 58,9 Prozent der Seiten mit erkennbarem CMS. Diese Verbreitung ist gleichzeitig
                        seine größte Stärke, das Ökosystem, und seine größte Schwäche, die Angriffsfläche. Im
                        Patchstack-Bericht 2026 stammten 91 Prozent der 11.334 neu gemeldeten Schwachstellen aus
                        Plugins und nur sechs aus dem Kern.
                    </p>
                    <p>
                        Ein Wechsel lohnt bei wenigen, selten geänderten Seiten mit hohem Anspruch an Ladezeit und
                        Ruhe. Er lohnt nicht, wenn viele Redakteure täglich Inhalte pflegen oder ein
                        unersetzliches Plugin im Einsatz ist.
                    </p>
                </div>

                <h2>Erst die Diagnose: was genau stört Sie?</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Symptom</th>
                                <th>Meist die eigentliche Ursache</th>
                                <th>Systemwechsel nötig?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Seite lädt langsam</th>
                                <td>billiges Shared Hosting, Seiten-Editor, unoptimierte Bilder, 30 Plugins</td>
                                <td>selten, erst Aufräumen und Hosting prüfen</td>
                            </tr>
                            <tr>
                                <th>Updates zerlegen das Layout</th>
                                <td>Seiten-Editor plus Theme-Anpassungen ohne Child-Theme</td>
                                <td>oft ja, weil die Abhängigkeit strukturell ist</td>
                            </tr>
                            <tr>
                                <th>Sicherheitsmeldungen und Angriffsversuche</th>
                                <td>ungepflegte Plugins, kein Update-Prozess</td>
                                <td>nein, Wartung einführen</td>
                            </tr>
                            <tr>
                                <th>Niemand traut sich, Inhalte zu ändern</th>
                                <td>zu komplexer Editor, keine Einweisung</td>
                                <td>manchmal, ein einfacheres System hilft echt</td>
                            </tr>
                            <tr>
                                <th>Laufende Kosten steigen</th>
                                <td>Premium-Plugin-Lizenzen, Wartungspaket, Hosting</td>
                                <td>je nach Rechnung, siehe unten</td>
                            </tr>
                            <tr>
                                <th>Neue Anforderung passt nicht ins System</th>
                                <td>Schnittstelle, Mehrsprachigkeit, komplexe Datenstrukturen</td>
                                <td>häufig ja</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Bei Ladezeit lohnt der Blick in die Details, bevor Sie Geld ausgeben. Was Verzögerung konkret
                    kostet, steht in
                    {' '}<Link href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Kunden kosten</Link>,
                    die Sicherheits- und Wartungsseite in
                    {' '}<Link href="/wissen/wordpress-sicherheit-wartung">WordPress absichern und warten</Link>.
                </p>

                <h2>Die drei Familien von Alternativen</h2>
                <p>
                    Der übliche Vergleichsartikel wirft fünfzehn Namen in eine Tabelle. Hilfreicher ist die
                    Einteilung nach Bauprinzip, weil sich daran entscheidet, wer die Seite künftig pflegt.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/cms-landschaft.svg" alt="Diagramm mit drei Spalten: Baukasten mit gestapelten Blöcken, klassisches CMS als grosser Block, Headless mit getrennter Datenbank und zwei Ausgabekanaelen" width="1600" height="900" />
                    <figcaption>Drei Bauprinzipien. Die Wahl entscheidet vor allem darüber, wer künftig Inhalte pflegt.</figcaption>
                </figure>

                <h3>Familie 1: Baukästen</h3>
                <p>
                    Wix, Jimdo, Squarespace, IONOS. Sie lösen das Problem Wartung vollständig, indem sie es
                    übernehmen, und schaffen dafür ein neues: Sie kommen an das Ergebnis nur so weit heran, wie
                    der Anbieter es vorsieht. Für viele kleine Betriebe ist das ein guter Handel. Die
                    Fünf-Jahres-Rechnung und die Frage, was beim Umzug mitkommt, stehen in
                    {' '}<Link href="/wissen/website-baukasten-oder-eigene-website">Website-Baukasten oder eigene Website</Link>.
                    Kurzfassung: Die Domain nehmen Sie mit, die Bauleistung nicht.
                </p>

                <h3>Familie 2: Klassische Redaktionssysteme</h3>
                <p>
                    TYPO3, Drupal, Craft, Contao, Statamic, Kirby, Ghost. Alle folgen demselben Prinzip wie
                    WordPress: Server, Datenbank, Administrationsbereich, Ausgabe im Browser. Der Unterschied liegt
                    im Zuschnitt.
                </p>
                <ul>
                    <li><strong>TYPO3</strong> ist in Deutschland stark verbreitet, besonders bei Institutionen und größeren Mittelständlern. Es ist mächtig bei Rechten, Mehrsprachigkeit und großen Strukturen, und es ist kein System, das man nebenbei selbst betreibt.</li>
                    <li><strong>Drupal</strong> spielt seine Stärken bei komplexen Datenmodellen und vielen Rollen aus. Ähnliche Einstiegshürde wie TYPO3.</li>
                    <li><strong>Craft, Statamic und Kirby</strong> sind die Antwort auf die häufigste WordPress-Beschwerde: Sie geben Redakteuren genau die Felder, die es geben soll, und keinen Baukasten, mit dem sich das Layout zerlegen lässt. Craft und Statamic kosten eine Lizenz, Kirby ebenfalls. Alle drei sind angenehm ruhig im Betrieb.</li>
                    <li><strong>Contao</strong> ist im deutschsprachigen Raum verbreitet und bei Agenturen beliebt, die eine saubere Rechteverwaltung wollen.</li>
                    <li><strong>Ghost</strong> ist die direkte Antwort für Publikationen: Schreiben, Newsletter, Mitgliedschaften. Als Firmenwebsite mit vielen Sonderseiten wird es schnell eng.</li>
                </ul>

                <h3>Familie 3: Statisch generiert und Headless</h3>
                <p>
                    Hier wird die Seite vorab gebaut und als fertige Dateien ausgeliefert. Inhalte kommen entweder
                    aus Dateien im Projekt oder aus einem separaten Redaktionssystem wie Sanity, Payload, Directus
                    oder Strapi. Diese Website läuft so, mit Next.js.
                </p>
                <p>
                    Die Vorteile sind konkret: Es gibt keine Datenbankabfrage beim Seitenaufruf, also auch keine
                    Verzögerung dadurch. Es gibt keinen Administrationsbereich im Netz, den jemand angreifen kann.
                    Updates zerlegen kein Layout, weil kein fremder Seiten-Editor mitrendert. Und die Ladezeit ist
                    strukturell gut, nicht mühsam optimiert.
                </p>
                <p>
                    Der Preis dafür ist ebenso konkret: Ohne Entwickler ändern Sie keine Struktur. Inhalte pflegen
                    Sie, wenn ein Redaktionssystem angebunden ist, sonst nicht. Für ein Unternehmen, das zweimal im
                    Jahr Texte anpasst, ist das gleichgültig. Für eine Redaktion mit täglichen Beiträgen ist es das
                    falsche Werkzeug.
                </p>

                <h2>Die Zuordnung, die ich in Gesprächen benutze</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Ihre Situation</th>
                                <th>Sinnvolle Wahl</th>
                                <th>Warum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Firmenwebsite, 5 bis 30 Seiten, selten geändert</th>
                                <td>statisch generiert</td>
                                <td>schnellste Auslieferung, keine Wartungslast, kein Angriffsziel</td>
                            </tr>
                            <tr>
                                <th>Website mit Blog, ein bis zwei Redakteure</th>
                                <td>statisch mit angebundenem Redaktionssystem, oder Craft, Statamic, Kirby</td>
                                <td>Pflege ohne Layout-Risiko</td>
                            </tr>
                            <tr>
                                <th>Viele Redakteure, viele Rollen, mehrsprachig</th>
                                <td>TYPO3 oder Drupal</td>
                                <td>Rechte und Übersetzungen sind dort zu Hause</td>
                            </tr>
                            <tr>
                                <th>Publikation, Newsletter, Mitgliedschaften</th>
                                <td>Ghost</td>
                                <td>genau dafür gebaut</td>
                            </tr>
                            <tr>
                                <th>Shop mit überschaubarem Sortiment</th>
                                <td>Shopify</td>
                                <td>Zahlung, Steuern, Versand fertig gelöst</td>
                            </tr>
                            <tr>
                                <th>Shop mit eigenen Prozessen, B2B, Warenwirtschaft</th>
                                <td>Shopware oder Headless</td>
                                <td>Schnittstellen und Datenmodell frei</td>
                            </tr>
                            <tr>
                                <th>Kleines Budget, Zeit zum Selbstbauen</th>
                                <td>Baukasten</td>
                                <td>am schnellsten online, klare laufende Kosten</td>
                            </tr>
                            <tr>
                                <th>Bestehende WordPress-Seite, die Anfragen bringt</th>
                                <td>WordPress behalten, aufräumen, warten</td>
                                <td>ein laufendes System zu ersetzen ist die teuerste Option</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Ein Sonderfall, der öfter vorkommt als man denkt: Wer Webflow gegen WordPress abwägt, wägt
                    eigentlich Baukasten gegen Redaktionssystem ab. Das steht ausführlich in
                    {' '}<Link href="/wissen/webflow-oder-wordpress">Webflow oder WordPress</Link>.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Diese Website ist mein eigener Testfall. Sie läuft statisch generiert, hat keinen
                        Administrationsbereich im Netz und keine Datenbank im Auslieferungspfad. Der Effekt, den
                        ich dabei nicht erwartet hatte, ist nicht die Ladezeit, sondern die Ruhe: keine
                        Update-Benachrichtigungen, keine Plugin-Konflikte, keine Angst vor dem Dienstagvormittag,
                        an dem ein Sicherheitsupdate erscheint.
                    </p>
                    <p>
                        Der Nachteil ist genauso real. Als ich vor kurzem zehn neue Seiten veröffentlicht habe,
                        musste ich sechs verschiedene Dateien anfassen, damit jede Seite in Übersichten, Sitemap
                        und internen Verlinkungen auftaucht. In WordPress wäre das ein Klick auf
                        Veröffentlichen gewesen. Wer diese Arbeit nicht selbst machen will oder kann, ist mit
                        einem Redaktionssystem besser dran, und das sage ich als jemand, der das Gegenteil verkauft.
                    </p>
                </div>

                <h2>Was der Wechsel kostet, realistisch</h2>
                <p>
                    Ein Systemwechsel ist ein Neubau mit Inhaltsübernahme. Wer das anders verkauft, hat die
                    Weiterleitungen noch nicht gemacht. Die Posten:
                </p>
                <ul>
                    <li><strong>Neubau.</strong> Bei mir ab 1.500 Euro für eine einzelne Seite mit bewährtem Layout, ab 2.900 Euro für eine Conversion-Landingpage, ab 4.500 Euro für eine Unternehmenswebsite. Die Aufschlüsselung steht in <Link href="/wissen/webdesign-kosten">Webdesign Kosten</Link>.</li>
                    <li><strong>Inhaltsübernahme.</strong> Skaliert mit der Seitenzahl. Bei mehr als 50 Seiten lohnt eine Prüfung, welche Seiten überhaupt Besucher haben. Meist kann ein Drittel weg.</li>
                    <li><strong>Weiterleitungen.</strong> Jede alte URL braucht ein Ziel. Das ist der Posten, an dem Wechsel scheitern, und der einzige, bei dem Sparen direkt Sichtbarkeit kostet.</li>
                    <li><strong>Laufender Betrieb.</strong> Bei statischen Seiten sinkt er meist deutlich, weil Hosting anspruchsloser ist und Plugin-Lizenzen entfallen.</li>
                </ul>
                <p>
                    Die vollständige Reihenfolge mit allen Fallen steht in der
                    {' '}<Link href="/wissen/website-relaunch-checkliste">Relaunch-Checkliste</Link>. Wer nur einen
                    Punkt daraus mitnimmt: URL-Liste vorher exportieren, nicht nachher rekonstruieren.
                </p>

                <h2>Zwei Fragen, die die Entscheidung meist lösen</h2>
                <p>
                    Erste Frage: Wie oft ändert jemand Inhalte, und wer ist dieser jemand? Wenn die Antwort
                    zweimal im Jahr und ich selbst lautet, brauchen Sie kein Redaktionssystem, sondern eine
                    schnelle, robuste Seite. Wenn die Antwort täglich und drei Kollegen lautet, brauchen Sie ein
                    gutes Redaktionssystem, und dann ist WordPress ein sehr vernünftiger Kandidat.
                </p>
                <p>
                    Zweite Frage: Gibt es eine Funktion, die Sie an Ihr aktuelles System bindet? Ein Buchungssystem,
                    eine Warenwirtschaftsanbindung, ein Mitgliederbereich. Wenn ja, ist diese Funktion der
                    Ausgangspunkt der Planung und nicht das Design.
                </p>

                <h2>Wenn Sie das durchrechnen wollen</h2>
                <p>
                    Schicken Sie mir den Link zu Ihrer Seite. Ich sage Ihnen im
                    {' '}<Link href="/leistungen/website-audit">kostenlosen Website-Audit</Link>, ob Ihr Problem am
                    System hängt oder am Zustand, und was das jeweils kostet. Wenn ein Neubau die richtige Antwort
                    ist, finden Sie die Rahmenbedingungen unter
                    {' '}<Link href="/leistungen/webdesign">Webdesign</Link>, für Shops unter
                    {' '}<Link href="/leistungen/e-commerce-entwicklung">E-Commerce-Entwicklung</Link>. Sie arbeiten
                    direkt mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder
                    Fotografie, hole ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für das
                    Ergebnis bleibe ich.
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
                        <li>W3Techs, Usage statistics of content management systems, Stand 22. August 2026: WordPress 40,7 Prozent aller Websites und 58,9 Prozent der Seiten mit bekanntem CMS, Shopify 5,3 Prozent, Wix 4,2 Prozent, Squarespace 2,4 Prozent. <a href="https://w3techs.com/technologies/overview/content_management" rel="nofollow noopener" target="_blank">w3techs.com</a></li>
                        <li>Patchstack, State of WordPress Security in 2026: 11.334 neue Schwachstellen im Jahr 2025, plus 42 Prozent gegenüber 2024, davon 91 Prozent in Plugins, 9 Prozent in Themes und sechs im Kern. <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" rel="nofollow noopener" target="_blank">patchstack.com</a></li>
                        <li>Google Search Central, Site moves with URL changes: Vorgehen und Weiterleitungen beim Umzug auf neue Adressen. <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Central, Page Experience: Core Web Vitals als Teil der Page-Experience-Signale. <a href="https://developers.google.com/search/docs/appearance/page-experience" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
