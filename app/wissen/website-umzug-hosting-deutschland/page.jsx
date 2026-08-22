import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Hosting in Deutschland und Website umziehen',
    description: 'Warum der Serverstandort weniger entscheidet als der Auftragsverarbeitungsvertrag, was beim Umzug schiefgeht und die Reihenfolge, die Rankings erhält.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/website-umzug-hosting-deutschland',
    },
    openGraph: {
        title: 'Hosting in Deutschland und Website umziehen',
        description: 'Serverstandort, Auftragsverarbeitung, Drittlandtransfer und die Umzugsreihenfolge, die Rankings erhält.',
        url: 'https://webseite.hamburg/wissen/website-umzug-hosting-deutschland',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Muss meine Website in Deutschland gehostet werden?',
        a: 'Die DSGVO schreibt keinen Serverstandort vor. Sie regelt in Art. 44 und folgenden die Übermittlung in Drittländer und verlangt in Art. 28 einen Vertrag zur Auftragsverarbeitung mit jedem Dienstleister. Ein Standort in Deutschland oder der EU macht die Prüfung deutlich einfacher, weil die Drittlandfrage entfällt. Rechtlich zwingend ist er nicht.',
    },
    {
        q: 'Ist ein US-Anbieter nach dem Data Privacy Framework unproblematisch?',
        a: 'Er ist zulässig, wenn das Unternehmen unter dem EU-US Data Privacy Framework zertifiziert ist. Die EU-Kommission hat den Angemessenheitsbeschluss im Juli 2023 gefasst. Das Gericht der Europäischen Union hat die Klage dagegen am 3. September 2025 in der Sache Latombe, T-553/23, abgewiesen; ein Rechtsmittel beim Europäischen Gerichtshof ist anhängig. Der Rahmen gilt also, steht aber unter höchstrichterlicher Prüfung. Wer diese Unsicherheit nicht möchte, wählt EU-Hosting.',
    },
    {
        q: 'Beeinflusst der Serverstandort das Google-Ranking?',
        a: 'Nicht als eigenständiger Faktor. Wirksam ist die Antwortzeit, und die hängt von der Entfernung zum Nutzer ab, aber auch von Serverleistung, Caching und Auslieferung über ein Content Delivery Network. Ein gut ausgeliefertes Angebot aus dem Ausland kann schneller sein als ein überlastetes Paket in Frankfurt.',
    },
    {
        q: 'Wie ziehe ich eine Website um, ohne Rankings zu verlieren?',
        a: 'Solange Domain und URLs unverändert bleiben, ist ein Serverumzug für Suchmaschinen unauffällig: Sie kopieren die Seite, testen sie unter einer Testadresse, setzen dann den DNS-Eintrag um und lassen den alten Server noch mindestens 48 Stunden laufen. Kritisch wird es nur, wenn sich Adressen ändern. Dann braucht jede alte URL eine 301-Weiterleitung auf ihr neues Ziel, und Google empfiehlt dafür ein eigenes Vorgehen für Umzüge mit URL-Änderungen.',
    },
    {
        q: 'Was kostet gutes Hosting für eine Firmenwebsite?',
        a: 'Für eine kleine bis mittlere Firmenwebsite ist die sinnvolle Spanne etwa 10 bis 30 Euro im Monat. Darunter fehlen typischerweise Testumgebung, brauchbare Backups oder ausreichend Leistung. Bei WordPress mit vielen Plugins liegt der Bedarf höher als bei einer statisch ausgelieferten Seite, die auch auf sehr einfacher Infrastruktur schnell ist.',
    },
    {
        q: 'Wie lange sollte der alte Server nach dem Umzug laufen?',
        a: 'Mindestens 48 Stunden, besser eine Woche. DNS-Änderungen verbreiten sich nicht überall gleich schnell, und ein Teil der Besucher landet in dieser Zeit noch auf dem alten Server. Wer ihn zu früh abschaltet, produziert Ausfälle, die er selbst nicht sieht, weil sein eigener Rechner längst die neue Adresse kennt.',
    },
];

export default function WebsiteUmzugHostingPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Hosting in Deutschland und Website umziehen: worauf es wirklich ankommt',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/website-umzug-hosting-deutschland',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/website-umzug-hosting-deutschland' },
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
            { '@type': 'ListItem', position: 3, name: 'Hosting und Website-Umzug', item: 'https://webseite.hamburg/wissen/website-umzug-hosting-deutschland' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-umzug-hosting-deutschland"
                category="TECHNIK"
                title="Hosting in Deutschland und Website umziehen: worauf es wirklich ankommt"
                readTime="10 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-website-umzug.svg"
                heroAlt="Illustration: zwei Server-Schränke, dazwischen ein geschwungener Pfeil mit einem roten Schild mit der Aufschrift 301"
            >
                <p>
                    Zwei Fragen laufen bei diesem Thema durcheinander. Die erste ist rechtlich: Darf mein Server im
                    Ausland stehen? Die zweite ist handwerklich: Wie ziehe ich um, ohne dass die Sichtbarkeit
                    darunter leidet? Beide haben klare Antworten, und beide werden meist mit der falschen Begründung
                    beantwortet.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Die DSGVO verlangt keinen deutschen Serverstandort. Sie
                        verlangt einen Vertrag zur Auftragsverarbeitung nach Art. 28 und, bei Übermittlung in
                        Drittländer, eine Grundlage nach Art. 44 und folgenden. Für US-Anbieter ist das derzeit
                        das EU-US Data Privacy Framework, gegen dessen Angemessenheitsbeschluss ein Rechtsmittel
                        beim Europäischen Gerichtshof anhängig ist. EU-Hosting erspart Ihnen diese Prüfung.
                    </p>
                    <p>
                        Beim Umzug entscheidet eine einzige Frage über das Risiko: Ändern sich die URLs? Wenn
                        nein, ist ein Serverwechsel unspektakulär. Wenn ja, braucht jede alte Adresse eine
                        301-Weiterleitung, und das ist der Posten, an dem Umzüge scheitern.
                    </p>
                </div>

                <h2>Der Serverstandort ist die falsche erste Frage</h2>
                <p>
                    Die richtige lautet: Wer verarbeitet in meinem Auftrag welche Daten, auf welcher Grundlage?
                    Ein Hoster verarbeitet in jedem Fall personenbezogene Daten, mindestens IP-Adressen in
                    Server-Protokollen. Damit brauchen Sie nach Art. 28 DSGVO einen Vertrag zur
                    Auftragsverarbeitung. Diesen Vertrag stellen alle seriösen Anbieter bereit, meist als Download
                    oder als Vereinbarung im Kundenkonto.
                </p>
                <p>
                    Erst danach kommt die Standortfrage, und die betrifft die Drittlandübermittlung nach Art. 44
                    und folgenden DSGVO. Innerhalb der EU stellt sich diese Frage nicht. Bei einem US-Anbieter
                    hängt die Zulässigkeit an dessen Zertifizierung unter dem EU-US Data Privacy Framework, für das
                    die EU-Kommission im Juli 2023 einen Angemessenheitsbeschluss erlassen hat.
                </p>
                <p>
                    Der Stand dazu, mit Datum: Das Gericht der Europäischen Union hat am 3. September 2025 in der
                    Sache Latombe, T-553/23, die Klage gegen den Beschluss abgewiesen. Ende Oktober 2025 wurde
                    Rechtsmittel beim Europäischen Gerichtshof eingelegt. Der Rahmen gilt also, und er ist nicht
                    endgültig geklärt. Wer diese Unsicherheit aus seinem Betrieb heraushalten will, wählt EU-Hosting
                    und muss die Frage nie wieder stellen. Das ist der praktische Grund für deutsches Hosting,
                    nicht ein Gebot im Gesetz.
                </p>

                <div className="rule-cols">
                    <div className="rule-col">
                        <h3>Spricht für Hosting in Deutschland oder der EU</h3>
                        <ul>
                            <li>Keine Drittlandprüfung, keine Zertifizierungsrecherche</li>
                            <li>Vertragsunterlagen und Support auf Deutsch</li>
                            <li>Kurze Wege zu Ihren Besuchern, wenn Ihr Markt lokal ist</li>
                            <li>Einfacher zu erklären, wenn ein Kunde oder Auftraggeber fragt</li>
                            <li>Gerichtsstand und Rechtsweg vertraut</li>
                        </ul>
                    </div>
                    <div className="rule-col rule-no">
                        <h3>Falsche Begründungen, die ich oft höre</h3>
                        <ul>
                            <li>Die DSGVO verbietet Server im Ausland. Tut sie nicht.</li>
                            <li>Deutsches Hosting ist automatisch DSGVO-konform. Ohne AV-Vertrag ist es das nicht.</li>
                            <li>Serverstandort ist ein Rankingfaktor. Er ist es nicht, die Antwortzeit zählt.</li>
                            <li>Ein Content Delivery Network umgeht die Standortfrage. Es verlagert sie nur.</li>
                            <li>Hauptsache günstig. Der Preisunterschied entscheidet über Backups und Testumgebung.</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Was oft übersehen wird: Der Hoster ist nur einer von vielen Verarbeitern. Newsletter-Werkzeug,
                    Analytik, Formulardienst, Chat, Buchungssystem und Backup-Anbieter gehören genauso auf die
                    Liste. Die vollständige Übersicht dazu steht in
                    {' '}<Link href="/wissen/impressum-datenschutzerklaerung-pflicht">Impressum und Datenschutzerklärung</Link>.
                </p>

                <h2>Woran man Hosting mit Substanz erkennt</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Merkmal</th>
                                <th>Warum es zählt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Aktuelle PHP-Version wählbar</th>
                                <td>alte Versionen bekommen keine Sicherheitsupdates mehr</td>
                            </tr>
                            <tr>
                                <th>Tägliche Backups mit Wiederherstellung im Selbstbedienungsbereich</th>
                                <td>im Schadensfall entscheidet, wie schnell Sie zurückkönnen</td>
                            </tr>
                            <tr>
                                <th>Testumgebung auf Knopfdruck</th>
                                <td>Updates prüfen, ohne die laufende Seite zu riskieren</td>
                            </tr>
                            <tr>
                                <th>HTTPS mit automatischer Verlängerung</th>
                                <td>abgelaufene Zertifikate sind der häufigste selbstverschuldete Ausfall</td>
                            </tr>
                            <tr>
                                <th>Serverseitiges Caching oder Objektcache</th>
                                <td>entscheidet bei WordPress mehr als die Prozessorleistung</td>
                            </tr>
                            <tr>
                                <th>Auftragsverarbeitungsvertrag verfügbar</th>
                                <td>Pflicht nach Art. 28 DSGVO</td>
                            </tr>
                            <tr>
                                <th>Erreichbarer Support mit Fachkenntnis</th>
                                <td>am Abend eines Ausfalls die einzige Kennzahl, die zählt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Für eine kleine bis mittlere Firmenwebsite liegt die sinnvolle Spanne bei etwa 10 bis 30 Euro
                    im Monat. Bei WordPress mit vielen Erweiterungen eher am oberen Rand, weil Rechenlast entsteht,
                    siehe <Link href="/wissen/wordpress-sicherheit-wartung">WordPress absichern und warten</Link>.
                    Eine statisch ausgelieferte Seite ist bei Hosting anspruchslos, weil bei jedem Aufruf nur eine
                    fertige Datei ausgeliefert wird, siehe
                    {' '}<Link href="/wissen/wordpress-alternativen">WordPress-Alternativen</Link>.
                </p>

                <h2>Der Umzug: eine Frage entscheidet alles</h2>
                <p>
                    Ändern sich die URLs? Danach richtet sich der ganze Aufwand.
                </p>

                <h3>Fall 1: gleiche Domain, gleiche Adressen, nur neuer Server</h3>
                <p>
                    Für Suchmaschinen praktisch unsichtbar. Die Reihenfolge:
                </p>
                <ol>
                    <li><strong>Vollständige Kopie anlegen.</strong> Dateien und Datenbank, auf den neuen Server.</li>
                    <li><strong>Unter einer Testadresse prüfen.</strong> Formulare abschicken, Bilder laden, Suchfunktion, Anmeldung, HTTPS. Die Testadresse für Suchmaschinen sperren, damit sie nicht in den Index gerät.</li>
                    <li><strong>Gültigkeitsdauer im DNS senken.</strong> Ein oder zwei Tage vorher auf einen kurzen Wert, damit die Umstellung schnell greift.</li>
                    <li><strong>DNS umstellen.</strong> Am besten früh in der Woche, nicht Freitagabend.</li>
                    <li><strong>Alten Server weiterlaufen lassen.</strong> Mindestens 48 Stunden, besser eine Woche. Ein Teil der Besucher landet in dieser Zeit noch dort.</li>
                    <li><strong>Danach kontrollieren.</strong> Search Console auf Crawling-Fehler, Serverprotokoll auf Fehlercodes, Formulare noch einmal testen.</li>
                </ol>
                <p>
                    Der häufigste Fehler in diesem Fall betrifft nicht die Website, sondern die E-Mail. Wer den
                    MX-Eintrag mitverschiebt, ohne die Postfächer vorher zu übertragen, verliert Nachrichten. Wer
                    Website und E-Mail trennen kann, sollte es tun.
                </p>

                <h3>Fall 2: die Adressen ändern sich</h3>
                <p>
                    Das ist kein Umzug mehr, das ist ein Relaunch. Hier entscheidet die Vollständigkeit der
                    Weiterleitungen über Ihre Sichtbarkeit. Google beschreibt das Vorgehen für Umzüge mit
                    URL-Änderungen ausdrücklich in der eigenen Dokumentation, und der Kern ist immer derselbe:
                    Jede alte Adresse braucht eine dauerhafte Weiterleitung, per 301, auf die inhaltlich passende
                    neue Adresse.
                </p>
                <p>
                    Zwei Fehler kosten dabei am meisten. Erstens: alles auf die Startseite weiterleiten. Google
                    behandelt solche Weiterleitungen als weiche Fehlerseiten, die Signale kommen nicht an.
                    Zweitens: die Liste der alten URLs nach dem Abschalten rekonstruieren zu wollen. Ziehen Sie
                    sie vorher, aus Search Console, Sitemap und Serverprotokoll. Die vollständige Reihenfolge mit
                    allen Fallen steht in der
                    {' '}<Link href="/wissen/website-relaunch-checkliste">Relaunch-Checkliste</Link>.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Ein Betrieb hatte den Umzug selbst gemacht, technisch sauber, Seite lief. Vier Wochen später
                        kamen deutlich weniger Anfragen. Ursache war nicht der Server, sondern eine Zeile: In der
                        kopierten Konfiguration stand noch der Ausschluss für Suchmaschinen, der auf der
                        Testumgebung richtig gewesen war.
                    </p>
                    <p>
                        Seither steht bei mir eine Prüfung direkt nach jedem Umzug auf der Liste, die 30 Sekunden
                        dauert: robots.txt aufrufen, im Seitenquelltext nach einer noindex-Angabe suchen, in der
                        Search Console eine URL prüfen. Die Fehler, die vier Wochen unentdeckt bleiben, sind die
                        teuersten. Was sonst noch Indexierung verhindert, steht in
                        {' '}<Link href="/wissen/website-nicht-bei-google-gefunden">Website nicht bei Google gefunden</Link>.
                    </p>
                </div>

                <h2>Was der Standort für die Ladezeit bedeutet</h2>
                <p>
                    Die Entfernung zwischen Server und Besucher kostet Zeit, das ist Physik. Für ein Hamburger
                    Unternehmen mit Hamburger Kunden ist ein Server in Europa spürbar besser als einer in
                    Nordamerika. Nur ist die Entfernung selten der begrenzende Faktor. Vor ihr liegen meist
                    unkomprimierte Bilder, blockierendes JavaScript, fehlendes Caching und Fremdskripte.
                </p>
                <p>
                    Google zählt die Core Web Vitals zu den Page-Experience-Signalen und bewertet das ausgelieferte
                    Ergebnis, nicht die Infrastruktur dahinter. Was Verzögerung konkret kostet, steht in
                    {' '}<Link href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Kunden kosten</Link>,
                    eine Messung an einem echten Projekt in der
                    {' '}<Link href="/wissen/case-study-fotogalerie-performance">Fallstudie zur Fotogalerie</Link>.
                </p>

                <h2>Wenn Sie umziehen wollen</h2>
                <p>
                    Sagen Sie mir, wo die Seite heute liegt, wie viele URLs sie hat und ob sich beim Umzug etwas an
                    den Adressen ändert. Daraus ergibt sich, ob das ein Nachmittag oder ein Projekt ist. Der
                    {' '}<Link href="/leistungen/website-audit">Website-Audit</Link> ist kostenlos und enthält
                    diese Einschätzung. Sie arbeiten direkt mit mir. Braucht ein Projekt zusätzliche Expertise,
                    etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu. Ansprechpartner
                    und Verantwortlicher für das Ergebnis bleibe ich. Zu den Leistungen unter
                    {' '}<Link href="/leistungen/webdesign">Webdesign</Link>.
                </p>
                <p>
                    Zur Rechtslage gilt das Übliche: Ich gebe wieder, was in den genannten Vorschriften und
                    Entscheidungen steht, mit Fundstelle. Rechtsberatung ist das nicht, und bei einer heiklen
                    Drittlandkonstellation lohnt eine fachliche Einschätzung.
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
                        <li>DSGVO Art. 28: Auftragsverarbeiter, Pflicht zum Vertrag über die Auftragsverarbeitung. <a href="https://dsgvo-gesetz.de/art-28-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                        <li>DSGVO Art. 44: allgemeine Grundsätze der Übermittlung personenbezogener Daten an Drittländer. <a href="https://dsgvo-gesetz.de/art-44-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                        <li>Gericht der Europäischen Union, Urteil vom 3. September 2025, Latombe gegen Kommission, T-553/23: Abweisung der Nichtigkeitsklage gegen den Angemessenheitsbeschluss zum EU-US Data Privacy Framework; Rechtsmittel beim Europäischen Gerichtshof anhängig (C-703/25 P). Zusammenfassung bei den Datenschutz-Notizen. <a href="https://www.datenschutz-notizen.de/eug-weist-klage-zum-data-privacy-framework-ab-4356023/" rel="nofollow noopener" target="_blank">datenschutz-notizen.de</a></li>
                        <li>Google Search Central, Site moves with URL changes: Vorgehen bei Umzügen mit geänderten Adressen, dauerhafte Weiterleitungen. <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Central, Redirects and Google Search: Wirkung von 301-Weiterleitungen und Behandlung irrelevanter Weiterleitungsziele. <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Central, Page Experience: Core Web Vitals als Teil der Page-Experience-Signale. <a href="https://developers.google.com/search/docs/appearance/page-experience" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
