import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Website-Relaunch Checkliste: Was Sie vorher wissen mussen | Hamburg',
    description: 'Ein Relaunch kann Ihre Online-Prasenz transformieren — oder Ihre Rankings zerstoren. Die wichtigsten Punkte, die Sie vor, wahrend und nach dem Relaunch beachten mussen.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/website-relaunch-checkliste',
    },
    openGraph: {
        title: 'Website-Relaunch Checkliste: Was Sie vorher wissen mussen',
        description: 'Ein Relaunch kann Ihre Online-Prasenz transformieren — oder Ihre Rankings zerstoren. Die wichtigsten Punkte fur einen erfolgreichen Relaunch.',
        url: 'https://webseite.hamburg/wissen/website-relaunch-checkliste',
        type: 'article',
    },
};

export default function WebsiteRelaunchArticlePage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Website-Relaunch Checkliste: Was Sie vorher wissen mussen',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-02-25',
        dateModified: '2026-02-25',
        url: 'https://webseite.hamburg/wissen/website-relaunch-checkliste',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/website-relaunch-checkliste' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Website-Relaunch Checkliste', item: 'https://webseite.hamburg/wissen/website-relaunch-checkliste' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-relaunch-checkliste"
                category="WEBDESIGN"
                title="Website-Relaunch Checkliste: Was Sie vorher wissen mussen"
                readTime="10 Min."
                publishDate="2026-02-25"
            >
                <p>
                    Ein Website-Relaunch ist kein Redesign-Projekt. Es ist ein technisches Migrationsprojekt mit
                    Designkomponente. Wer das verwechselt, verliert Rankings, Traffic und im schlimmsten Fall Umsatz.
                    Diese Checkliste deckt die kritischen Schritte ab — chronologisch, ohne Ausschmueckungen.
                </p>

                <h2>Phase 1: Vor dem Relaunch</h2>

                <h3>Analytics auswerten, bevor irgendetwas angefasst wird</h3>
                <p>
                    Der haeufigste Fehler: Man startet mit dem Design, ohne vorher in die Daten zu schauen.
                    Oeffnen Sie Google Analytics und Search Console. Identifizieren Sie die Seiten, die den meisten
                    organischen Traffic bringen. Schauen Sie sich an, welche Seiten konvertieren. Diese Seiten
                    sind heilig — sie duerfen nicht einfach geloescht oder umstrukturiert werden, ohne dass ein
                    klarer Plan existiert.
                </p>
                <p>
                    Exportieren Sie aus der Search Console die Liste aller indexierten URLs mit Klicks, Impressionen
                    und durchschnittlicher Position. Das ist Ihre Baseline. Ohne diese Daten koennen Sie nach dem
                    Relaunch nicht beurteilen, ob etwas schiefgelaufen ist.
                </p>

                <h3>SEO-Audit: Bewahren, was funktioniert</h3>
                <p>
                    Ein gruendliches <a href="/wissen/lokales-seo-hamburg-guide">SEO-Audit</a> ist Pflicht. Crawlen Sie die bestehende Website vollstaendig — mit Screaming Frog, Sitebulb oder einem
                    vergleichbaren Tool. Dokumentieren Sie saemtliche URLs, Title-Tags, Meta-Descriptions,
                    H1-Strukturen, interne Links und Canonical-Tags. Sichern Sie auch die XML-Sitemap und
                    die robots.txt.
                </p>
                <ul>
                    <li>Alle URLs der aktuellen Website erfassen (inkl. Parameter-URLs und Paginierung)</li>
                    <li>Backlink-Profil exportieren — welche externen Links zeigen auf welche Seiten?</li>
                    <li>Top-rankende Keywords pro Seite dokumentieren</li>
                    <li>Bestehende strukturierte Daten (Schema.org) sichern</li>
                    <li>Core Web Vitals als Benchmark festhalten</li>
                </ul>

                <h3>301-Redirects planen — der kritischste Schritt</h3>
                <p>
                    Ich habe Relaunches gesehen, bei denen 60% des organischen Traffics uber Nacht verschwand
                    — weil niemand an 301-Redirects gedacht hat. URLs andern ist wie umziehen ohne
                    Nachsendeauftrag.
                </p>
                <p>
                    Jede alte URL, die sich aendert, braucht einen permanenten 301-Redirect auf die neue
                    Entsprechung. Nicht auf die Startseite. Nicht auf eine Kategorieseite. Auf die
                    inhaltlich passende neue Seite. Alles andere wertet Google als Soft-404, und Ihre
                    Rankings verschwinden.
                </p>
                <p>
                    Erstellen Sie eine vollstaendige Redirect-Map als Tabelle: alte URL in Spalte A,
                    neue URL in Spalte B. Pruefen Sie jede Zeile manuell. Automatisierte Mappings
                    auf Basis von URL-Aehnlichkeiten sind fehleranfaellig.{' '}
                    <a href="https://ahrefs.com/blog/301-redirects/" target="_blank" rel="noopener noreferrer">
                        Ahrefs erklaert ausfuehrlich, wie Redirect-Mapping korrekt umgesetzt wird
                    </a>.
                </p>
                <ul>
                    <li>Keine Redirect-Ketten: A leitet auf B, B leitet auf C — das kostet Crawl-Budget und verduennt Link-Equity</li>
                    <li>Keine 302-Redirects verwenden — nur 301 (permanent)</li>
                    <li>Redirects serverseitig implementieren (htaccess, nginx.conf, Edge-Functions), nicht per JavaScript</li>
                    <li>Nach der Implementierung jeden einzelnen Redirect testen — manuell oder per Skript</li>
                    <li>Alte Sitemap nach dem Launch einreichen, damit Google die Redirects schneller entdeckt</li>
                </ul>
                <p>
                    Google beschreibt den Prozess fuer Website-Umzuege mit URL-Aenderungen in der{' '}
                    <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">
                        offiziellen Dokumentation
                    </a>. Lesen Sie das vor dem Relaunch, nicht danach.
                </p>

                <h2>Phase 2: Waehrend des Relaunchs</h2>

                <h3>Content-Migration</h3>
                <p>
                    Inhalte werden nicht einfach kopiert. Sie werden geprueft, aktualisiert und bewusst
                    uebernommen oder gestrichen. Jede Seite, die organischen Traffic bringt, muss
                    inhaltlich mindestens gleichwertig sein. Kuerzen Sie nicht an Stellen, die fuer
                    Rankings relevant sind.
                </p>
                <p>
                    Pruefen Sie bei der Migration, ob interne Links noch funktionieren. Neue
                    URL-Strukturen bedeuten neue interne Verlinkung. Broken Links nach dem Relaunch
                    sind ein Zeichen mangelhafter Planung.
                </p>

                <h3>Tracking und Analytics einrichten</h3>
                <p>
                    Stellen Sie sicher, dass Google Analytics, Search Console, Tag Manager und
                    alle Conversion-Trackings auf der neuen Seite korrekt implementiert sind —
                    bevor der Launch stattfindet. Testen Sie jedes Event, jedes Ziel, jeden
                    E-Commerce-Tracker in der Staging-Umgebung.
                </p>
                <ul>
                    <li>Google Analytics 4 Property verifizieren</li>
                    <li>Search Console fuer neue URL-Struktur einrichten (falls Domain oder Pfade sich aendern)</li>
                    <li>Alle Conversion-Events pruefen: Formulare, Klicks, Downloads</li>
                    <li>Consent-Management (Cookie-Banner) testen — blockierte Skripte fuehren zu Datenverlust</li>
                </ul>

                <h3>Performance und Mobile testen</h3>
                <p>
                    Messen Sie die Core Web Vitals auf der Staging-Umgebung. Vergleichen Sie LCP,
                    FID (bzw. INP) und CLS mit den Werten der alten Seite. Ein Relaunch, der
                    die Ladezeit verschlechtert, ist ein Rueckschritt — egal wie gut das Design
                    aussieht. Warum Performance so entscheidend ist, zeigen wir im Detail in unserem Artikel <a href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Kunden kosten</a>.
                </p>
                <p>
                    Testen Sie auf echten Geraeten, nicht nur im Chrome DevTools Device Mode.
                    Nutzen Sie{' '}
                    <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
                        PageSpeed Insights
                    </a>{' '}
                    und{' '}
                    <a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">
                        WebPageTest
                    </a>{' '}
                    fuer realistische Messungen unter verschiedenen Netzwerkbedingungen.
                </p>

                <h3>Strukturierte Daten</h3>
                <p>
                    Wenn die alte Website Schema.org-Markup hatte, muss die neue Seite
                    mindestens den gleichen Umfang abdecken. Pruefen Sie mit dem Google Rich
                    Results Test, ob die strukturierten Daten fehlerfrei sind. Fehlende
                    strukturierte Daten bedeuten verlorene Rich Snippets in den Suchergebnissen.
                </p>

                <h2>Phase 3: Launch-Tag</h2>

                <ul>
                    <li>Redirects live schalten und testen (komplette Redirect-Map durchgehen)</li>
                    <li>Neue XML-Sitemap in der Search Console einreichen</li>
                    <li>Alte XML-Sitemap ebenfalls einreichen — Google folgt den URLs und findet die Redirects</li>
                    <li>robots.txt pruefen: Wird nichts versehentlich blockiert?</li>
                    <li>noindex-Tags pruefen: Sind Staging-Tags entfernt worden?</li>
                    <li>Canonical-Tags auf allen Seiten pruefen</li>
                    <li>SSL-Zertifikat und HTTPS-Weiterleitung testen</li>
                    <li>404-Fehlerseite vorhanden und sinnvoll gestaltet?</li>
                    <li>Alle Formulare und interaktiven Elemente testen</li>
                </ul>

                <blockquote>
                    Ein haeufiger Launch-Fehler: Die Staging-Umgebung hatte eine globale
                    noindex-Anweisung, die beim Deployment auf die Live-Seite uebernommen wurde.
                    Ergebnis: Google deindexiert die gesamte Website innerhalb weniger Tage.
                    Pruefen Sie das doppelt.
                </blockquote>

                <h2>Phase 4: Nach dem Relaunch</h2>

                <h3>Die ersten 48 Stunden</h3>
                <p>
                    Ueberwachen Sie die Search Console stuendlich in den ersten zwei Tagen.
                    Achten Sie auf Crawl-Fehler, 404-Seiten und Indexierungsprobleme.
                    Pruefen Sie die Server-Logs auf Googlebot-Anfragen — crawlt Google die
                    neuen URLs? Werden Redirects korrekt aufgeloest?
                </p>

                <h3>Die ersten vier Wochen</h3>
                <p>
                    Vergleichen Sie woechentlich den organischen Traffic mit der Baseline.
                    Leichte Schwankungen sind normal — Google braucht Zeit, um die neue
                    Struktur zu verarbeiten. Ein Traffic-Einbruch von mehr als 20%, der
                    laenger als zwei Wochen anhaelt, deutet auf ein Problem hin. Typische
                    Ursachen: fehlende Redirects, veraenderte Inhalte auf Top-Seiten oder
                    technische Crawling-Hindernisse.
                </p>
                <ul>
                    <li>Search Console woechentlich auf neue 404-Fehler pruefen</li>
                    <li>Keyword-Rankings der Top-20-Seiten ueberwachen</li>
                    <li>Backlinks pruefen: Kommen die Verweise ueber Redirects korrekt an?</li>
                    <li>Core Web Vitals im Feld-Daten-Report vergleichen (CrUX)</li>
                    <li>Conversion-Raten vor und nach Relaunch gegenueberstellen</li>
                </ul>

                <h3>Langfristig</h3>
                <p>
                    Lassen Sie die 301-Redirects mindestens ein Jahr aktiv. Entfernen Sie sie
                    nicht voreilig. Externe Websites und Bookmarks verweisen moeglicherweise
                    noch jahrelang auf die alten URLs. Ein Redirect kostet nichts — ein
                    verlorener Backlink schon.
                </p>

                <p>
                    Ein Relaunch ist planbar. Die meisten Schaeden entstehen nicht durch
                    unvorhersehbare Probleme, sondern durch uebersprungene Schritte. Arbeiten
                    Sie diese Liste ab, bevor Sie live gehen.
                </p>
            </ArticleLayout>
        </>
    );
}
