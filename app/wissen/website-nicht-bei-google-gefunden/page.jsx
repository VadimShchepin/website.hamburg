import ArticleLayout from '../../../src/components/ArticleLayout';
import FaqSection from '../../../src/components/FaqSection';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Website nicht bei Google gefunden? 12 Gründe + Lösungen',
    description: '12 Ursachen, warum Seiten nicht im Index landen, in der Reihenfolge zum Prüfen. Mit Google-Originalquellen und dem Fall meiner eigenen Website.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/website-nicht-bei-google-gefunden',
    },
    openGraph: {
        title: 'Website nicht bei Google gefunden? 12 Gründe + Lösungen',
        description: '12 Ursachen, warum Seiten nicht im Index landen, in der Reihenfolge zum Prüfen. Mit Google-Originalquellen.',
        url: 'https://webseite.hamburg/wissen/website-nicht-bei-google-gefunden',
        type: 'article',
        images: [{ url: 'https://webseite.hamburg/wissen/fotos/indexierung-hero.webp', width: 1200, height: 900 }],
    },
};

const faqItems = [
    { q: "Warum wird meine Website nicht bei Google gefunden?", a: "Bevor Sie etwas ändern, brauchen Sie eine Diagnose, und die dauert zwanzig Minuten: Markensuche nach dem exakten Firmennamen, eine Stichprobe über site:ihredomain.de, das URL-Prüftool der Search Console für eine konkrete Adresse und der Seitenindexierungsbericht. Wichtig zur Einordnung, und zwar von Google selbst: Google crawlt nicht alle Seiten des Webs und indexiert nicht alle, die gecrawlt werden. Dass nicht jede Seite im Index ist, ist normal. Kritisch wird es, wenn wichtige Seiten fehlen." },
    { q: "Was bedeutet „Gefunden, zurzeit nicht indexiert“?", a: "Google kennt die Adresse, hat sie aber noch nicht gecrawlt. Google nennt als typischen Grund, dass das Crawlen verschoben wurde, um die Website nicht zu überlasten. In der Praxis steckt dahinter meistens Priorisierung: Die URL ist Google nicht wichtig genug, um sie jetzt abzurufen. Das ist fast immer ein Verlinkungsproblem." },
    { q: "Was bedeutet „Gecrawlt, zurzeit nicht indexiert“?", a: "Der Googlebot war da, hat den Inhalt gelesen und sich entschieden, ihn nicht aufzunehmen. Das ist in der Regel kein technisches Problem, sondern ein Qualitäts- oder Redundanzsignal. Wenn dieser Status bei vielen Seiten auftritt, deutet das auf ein Muster hin: austauschbare Texte, sehr ähnliche Seiten oder dünne Inhalte, die es online schon hundertfach gibt." },
    { q: "Muss ich mein Crawl-Budget optimieren?", a: "Für kleine und mittelgroße Websites ist das Crawl-Budget laut Google kein Thema. Relevant wird es erst bei Websites mit mehr als einer Million Adressen, deren Inhalte sich moderat ändern, oder bei mehr als 10.000 Adressen mit sehr häufigen Änderungen, etwa Nachrichtenportalen und Marktplätzen. Wenn Ihre Website 40 Seiten hat, hat sie kein Crawl-Budget-Problem, sondern ein Verlinkungs- oder Qualitätsproblem." },
    { q: "Wie bekomme ich meine Seiten schneller in den Index?", a: "Der 48-Stunden-Plan: Search Console einrichten, noindex und robots.txt inklusive HTTP-Header prüfen, Canonical-Tags auf Startseite, einer Leistungsseite und einem Artikel prüfen, Sitemap mit ausschließlich kanonischen 200er-Adressen einreichen, die interne Verlinkung reparieren, sodass jede wichtige Seite mindestens zwei interne Links aus thematisch passenden Seiten hat, die wichtigsten Seiten manuell zur Indexierung anfordern, neue Adressen über die Bing Webmaster Tools und IndexNow melden, dann zwei Wochen warten und den Bericht erneut vergleichen." },
];

export default function NichtBeiGoogleGefundenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Website nicht bei Google zu finden? Die 12 häufigsten Ursachen',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
        url: 'https://webseite.hamburg/wissen/website-nicht-bei-google-gefunden',
        image: 'https://webseite.hamburg/wissen/fotos/indexierung-hero.webp',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/website-nicht-bei-google-gefunden' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Website nicht bei Google gefunden', item: 'https://webseite.hamburg/wissen/website-nicht-bei-google-gefunden' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-nicht-bei-google-gefunden"
                category="SEO"
                title="Website nicht bei Google zu finden? Die 12 häufigsten Ursachen"
                readTime="12 Min."
                publishDate="2026-08-20"
                heroImage="/wissen/fotos/indexierung-hero.webp"
                heroAlt="Mann sitzt abends vor einem Monitor und sucht nach der Ursache eines Problems"
                heroFramed
            >
                <p>
                    Ich fange mit einem Eigentor an. Im Mai 2026 habe ich die Search Console dieser Website
                    gründlich durchgesehen. Ergebnis: 34 Seiten waren vorhanden, etwa 10 davon im Google-Index.
                    Der Rest war unsichtbar. Auf einer Website, die Suchmaschinenoptimierung verkauft. Das ist so,
                    als würde ein Malerbetrieb mit abgeblätterter Fassade werben.
                </p>
                <p>
                    Der Grund war kein technischer Defekt. Es gab kein falsches noindex, keine gesperrte robots.txt,
                    keine kaputte Sitemap. Die Seiten waren nur schlecht verlinkt: Leistungsseiten und Referenzen
                    standen isoliert da, teils vier Klicks von der Startseite entfernt, ohne Querverweise. Google
                    hatte sie gefunden und für unwichtig gehalten. Genau dafür gibt es in der Search Console eine
                    eigene Statusmeldung, und die verstehen die meisten falsch.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/fotos/indexierung-pruefen.webp" alt="Blick von oben auf einen Schreibtisch mit Laptop, Notizbuch und einem Bericht, jemand tippt auf der Tastatur" width="1600" height="900" loading="lazy" decoding="async" />
                    <figcaption>Gefunden, gecrawlt, indexiert: drei Stufen, an denen Seiten verloren gehen können.</figcaption>
                </figure>

                <h2>Wie stelle ich fest, ob meine Seiten indexiert sind?</h2>
                <p>
                    Bevor Sie irgendetwas ändern, brauchen Sie eine Diagnose. Vier Schritte, zwanzig Minuten:
                </p>
                <ol>
                    <li><strong>Markensuche.</strong> Suchen Sie Ihren Firmennamen. Erscheint die Website nicht bei einer Suche nach dem exakten Namen, ist das ein anderes und größeres Problem als fehlende Rankings.</li>
                    <li><strong>Index-Stichprobe.</strong> Suchen Sie nach <code>site:ihredomain.de</code>. Die Trefferzahl ist eine Schätzung, aber Sie sehen, ob überhaupt und welche Seiten im Index sind.</li>
                    <li><strong>URL-Prüfung.</strong> In der Search Console eine konkrete Adresse ins URL-Prüftool eingeben. Dort steht, ob die Seite indexiert ist, wann sie zuletzt gecrawlt wurde und was Google beim Rendern gesehen hat.</li>
                    <li><strong>Seitenindexierungsbericht.</strong> Der Bericht listet alle nicht indexierten Seiten nach Grund. Diese Gründe sind Ihre Arbeitsliste, nicht Ihr Todesurteil.</li>
                </ol>
                <p>
                    Wichtig zur Einordnung, und zwar von Google selbst: Google crawlt nicht alle Seiten des Webs und
                    indexiert nicht alle Seiten, die gecrawlt werden. Dass nicht jede Seite einer Website im Index
                    ist, ist normal. Panik ist also erst angebracht, wenn wichtige Seiten fehlen.
                </p>

                <h2>Die zwei Statusmeldungen, die alle verwirren</h2>
                <p>
                    <strong>„Gefunden, zurzeit nicht indexiert"</strong> heißt: Google kennt die Adresse, hat sie aber
                    noch nicht gecrawlt. Google nennt als typischen Grund, dass das Crawlen verschoben wurde, um die
                    Website nicht zu überlasten. In der Praxis steckt dahinter meistens Priorisierung: Die URL ist
                    Google nicht wichtig genug, um sie jetzt abzurufen.
                </p>
                <p>
                    <strong>„Gecrawlt, zurzeit nicht indexiert"</strong> heißt: Der Googlebot war da, hat den Inhalt
                    gelesen und sich entschieden, ihn nicht aufzunehmen. Das ist in der Regel kein technisches
                    Problem, sondern ein Qualitäts- oder Redundanzsignal. Wenn dieser Status bei vielen Seiten
                    auftritt, ist das ein Hinweis auf ein Muster: austauschbare Texte, sehr ähnliche Seiten,
                    dünne Inhalte, die es online schon hundertfach gibt.
                </p>

                <h2>Die 12 Ursachen, in der Reihenfolge zum Prüfen</h2>

                <h3>1. Die Seite ist neu und niemand verlinkt sie</h3>
                <p>
                    Neue Domains brauchen Zeit. Ohne interne Verlinkung, ohne Sitemap-Eintrag und ohne externe
                    Verweise hat Google keinen Anlass, eine Adresse zu priorisieren. Reichen Sie eine Sitemap ein,
                    verlinken Sie die Seite aus der Navigation oder aus einem relevanten Artikel, und geben Sie ihr
                    zwei bis vier Wochen.
                </p>

                <h3>2. Ein noindex aus der Entwicklungsphase</h3>
                <p>
                    Der Klassiker nach Relaunches: <code>&lt;meta name="robots" content="noindex"&gt;</code> bleibt im
                    Template stehen, weil es die Testumgebung so brauchte. Prüfen Sie zusätzlich den HTTP-Header, denn
                    ein <code>X-Robots-Tag: noindex</code> ist im Quelltext nicht zu sehen. Ich prüfe das bei jedem
                    Audit als Erstes, weil es der Fehler mit dem besten Verhältnis von Aufwand zu Wirkung ist.
                </p>

                <h3>3. Sperre in der robots.txt</h3>
                <p>
                    Ein <code>Disallow</code> verhindert das Crawlen. Achtung, das ist nicht dasselbe wie das
                    Verhindern der Indexierung: Eine per robots.txt gesperrte Seite kann trotzdem als reiner Link im
                    Index landen, wenn andere darauf verweisen.
                </p>

                <h3>4. Der Widerspruch aus noindex und robots.txt</h3>
                <p>
                    Der subtilste Fehler auf dieser Liste. Wenn eine Seite ein noindex trägt und gleichzeitig in der
                    robots.txt gesperrt ist, kann Google das noindex nicht lesen, weil es die Seite nicht abrufen
                    darf. Ergebnis: Die Seite bleibt möglicherweise im Index, obwohl Sie das Gegenteil wollten.
                    Entweder noindex und Crawlen erlauben, oder robots.txt, aber nicht beides.
                </p>

                <h3>5. Falsches Canonical-Tag</h3>
                <p>
                    Zeigt das Canonical auf eine andere URL, sagen Sie Google, dass die eigentliche Fassung woanders
                    liegt. Häufige Varianten: Canonical auf die HTTP-Version, auf die Startseite, auf eine
                    404-Seite oder auf eine Seite mit noindex. Nach CMS-Umzügen und bei Baukästen mit
                    Mehrsprachigkeit sehe ich das regelmäßig.
                </p>

                <h3>6. Verwaiste Seiten ohne interne Links</h3>
                <p>
                    Eine Seite, die nur in der Sitemap steht und von nirgendwo verlinkt ist, sagt Google: unwichtig.
                    Das war der Hauptgrund für meine eigene Indexierungslücke. Die Reparatur bestand nicht aus
                    Technik, sondern aus Verlinkung: Leistungsseiten verweisen jetzt auf passende Referenzen, Artikel
                    auf passende Leistungsseiten, Referenzen zurück auf beide. Nach dieser Umstellung ging es
                    innerhalb weniger Wochen aufwärts.
                </p>

                <h3>7. Zu große Klicktiefe</h3>
                <p>
                    Alles, was mehr als drei bis vier Klicks von der Startseite entfernt liegt, wird seltener
                    gecrawlt. Bei kleinen Websites ist das leicht zu lösen: Übersichtsseiten, sinnvolle
                    Querverlinkung, keine Inhalte, die nur über eine Filterkombination erreichbar sind.
                </p>

                <h3>8. Dünne oder doppelte Inhalte</h3>
                <p>
                    Wenn viele Seiten mit „Gecrawlt, zurzeit nicht indexiert" markiert sind, liegt es meist hier.
                    Typische Auslöser: fünf fast identische Leistungsseiten für fünf Stadtteile, Texte aus einem
                    Generator, Produktbeschreibungen des Herstellers, Filterseiten in beliebigen Kombinationen.
                    Weniger Seiten mit mehr Substanz schlagen viele Seiten mit Textbausteinen. Das ist auch der
                    Grund, warum ich Branchenseiten mit echten Fakten und Rechtsgrundlagen baue statt mit
                    ausgetauschten Ortsnamen.
                </p>

                <h3>9. Inhalte nur per JavaScript</h3>
                <p>
                    Google kann JavaScript rendern, aber es kostet Zeit und Ressourcen. Wenn Hauptinhalte und interne
                    Links erst nach dem Rendern existieren, verzögert das Crawling und Indexierung. Prüfen Sie im
                    URL-Prüftool den gerenderten HTML-Code. Server-seitiges Rendern löst das Problem grundsätzlich,
                    deshalb baue ich mit Next.js und liefere Inhalte im HTML aus.
                </p>

                <h3>10. Server, Statuscodes und Firewalls</h3>
                <p>
                    Langsame Antwortzeiten, sporadische 500er und 503er oder eine Firewall, die den Googlebot
                    aussperrt, führen dazu, dass Google das Crawlen zurückfährt. Ebenfalls tückisch: Soft 404, also
                    eine Fehlerseite, die mit Status 200 ausgeliefert wird. Google sieht dann eine leere Seite, die
                    behauptet, in Ordnung zu sein.
                </p>

                <h3>11. Eine Sitemap, die Müll enthält</h3>
                <p>
                    Eine Sitemap ist ein Hinweis, keine Garantie. Sie sollte ausschließlich kanonische Adressen mit
                    Status 200 enthalten. Weiterleitungen, 404er und noindex-Seiten in der Sitemap sind
                    widersprüchliche Signale. Und wenn die Sitemap in der Search Console nie eingereicht wurde,
                    kann sie ihre Aufgabe nicht erfüllen.
                </p>

                <h3>12. Vorgeschichte der Domain oder manuelle Maßnahme</h3>
                <p>
                    Bei gekauften Domains kann eine Vergangenheit als Spam-Projekt nachwirken. Prüfen Sie im Bericht
                    zu manuellen Maßnahmen, ob eine Maßnahme vorliegt. Das ist selten, aber wenn es zutrifft, sind
                    alle anderen Punkte irrelevant, bis es geklärt ist.
                </p>

                <h2>Muss ich mein Crawl-Budget optimieren?</h2>
                <p>
                    Fast jeder zweite Ratgeber empfiehlt „Crawl-Budget-Optimierung". Google selbst schreibt dazu:
                    Für kleine und mittelgroße Websites ist das Crawl-Budget kein Thema. Relevant wird es erst bei
                    Websites mit mehr als einer Million Adressen, deren Inhalte sich moderat ändern, oder bei mehr als
                    10.000 Adressen mit sehr häufigen Änderungen, etwa Nachrichtenportalen und Marktplätzen.
                </p>
                <p>
                    Wenn Ihre Website 40 Seiten hat, hat sie kein Crawl-Budget-Problem. Sie hat ein Verlinkungs-
                    oder ein Qualitätsproblem. Diese Unterscheidung spart viel Geld für die falschen Maßnahmen.
                </p>

                <h2>Wie bekomme ich meine Seiten schneller in den Index?</h2>
                <ol>
                    <li><strong>Search Console einrichten</strong>, falls nicht vorhanden. Ohne sie raten Sie.</li>
                    <li><strong>noindex und robots.txt prüfen</strong>, inklusive HTTP-Header. Zwei Minuten pro Seitentyp.</li>
                    <li><strong>Canonical-Tags prüfen</strong> auf Startseite, einer Leistungsseite, einem Artikel.</li>
                    <li><strong>Sitemap prüfen und einreichen</strong>, nur kanonische 200er-Adressen.</li>
                    <li><strong>Interne Verlinkung reparieren.</strong> Jede wichtige Seite braucht mindestens zwei interne Links aus thematisch passenden Seiten.</li>
                    <li><strong>Wichtigste Seiten manuell zur Indexierung anfordern.</strong> Das erzwingt nichts, beschleunigt aber die Entdeckung.</li>
                    <li><strong>Bing nicht vergessen.</strong> Über die Bing Webmaster Tools und das IndexNow-Protokoll lassen sich neue Adressen sofort melden. Das ist auch für KI-Antworten relevant, weil einige Systeme auf den Bing-Index zugreifen.</li>
                    <li><strong>Zwei Wochen warten.</strong> Danach denselben Bericht erneut ansehen und vergleichen.</li>
                </ol>

                <h2>Alles indexiert und trotzdem kein Besucher: warum?</h2>
                <p>
                    Dann haben Sie kein Indexierungsproblem, sondern ein Ranking- oder ein Nachfrageproblem. Drei
                    Möglichkeiten:
                </p>
                <ul>
                    <li><strong>Die Suchen, die Sie treffen, haben kein Volumen.</strong> Ihre Seite rankt, aber niemand sucht so. Andere Begriffe, andere Fragen.</li>
                    <li><strong>Der Wettbewerb ist stärker.</strong> Bei „Webdesign Hamburg" gegen zwanzig Agenturen mit jahrelanger Historie hilft eine neue Seite allein nicht. Nische statt Kopfbegriff.</li>
                    <li><strong>Die Seite passt nicht zur Absicht.</strong> Wer nach Preisen sucht, will Preise sehen. Wer nach Ablauf sucht, will den Ablauf. Ein Text, der beides andeutet, gewinnt keine der beiden Suchen.</li>
                </ul>
                <p>
                    Was das für Budget und Zeitrahmen bedeutet, steht im Artikel
                    {' '}<Link href="/wissen/seo-kosten-hamburg">Was kostet SEO in Hamburg</Link>. Für lokale Betriebe
                    lohnt es sich außerdem, parallel das
                    {' '}<Link href="/wissen/google-business-profile-optimieren">Google-Unternehmensprofil</Link> zu
                    pflegen, weil es schneller wirkt als jede organische Optimierung.
                </p>

                <h2>Und wenn der Einbruch nach einem Relaunch kam?</h2>
                <p>
                    Dann ist die Ursache mit hoher Wahrscheinlichkeit eine fehlende Weiterleitung. Alte Adressen
                    müssen per 301 auf die neuen zeigen, sonst verlieren Sie alles, was diese Adressen an
                    Sichtbarkeit hatten. Die vollständige Liste steht in der
                    {' '}<Link href="/wissen/website-relaunch-checkliste">Relaunch-Checkliste</Link>. Wer von einem
                    Baukasten umzieht, sollte zusätzlich den Abschnitt zum Umzug im Artikel
                    {' '}<Link href="/wissen/website-baukasten-oder-eigene-website">Baukasten oder eigene Website</Link> lesen.
                </p>

                <h2>Fazit</h2>
                <p>
                    Indexierungsprobleme sind unangenehm, aber selten mysteriös. In den meisten Fällen sind es
                    Verlinkung, Qualität oder ein vergessenes Tag aus der Entwicklungsphase. Und manchmal trifft es
                    die eigene Website, obwohl man es besser weiß. Genau deshalb gehört dieser Bericht hierher: Der
                    Fehler war nicht exotisch, er war banal, und die Reparatur war Arbeit an der Struktur, nicht an
                    einem Trick.
                </p>
                <p>
                    Wenn Sie wissen wollen, welche Ihrer Seiten fehlen und warum: Ich mache das im
                    {' '}<Link href="/leistungen/website-audit">kostenlosen Website-Audit</Link> und schicke Ihnen eine
                    priorisierte Liste. Oder schreiben Sie mir direkt über die
                    {' '}<Link href="/kontakt">Kontaktseite</Link>.
                </p>

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>Google Search Central, Wie die Google Suche funktioniert: Google crawlt nicht alle Seiten und indexiert nicht alle gecrawlten Seiten. <a href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=de" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Console-Hilfe, Seitenindexierungsbericht mit den Statusmeldungen „Gefunden, zurzeit nicht indexiert" und „Gecrawlt, zurzeit nicht indexiert". <a href="https://support.google.com/webmasters/answer/7440203?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Search Central, Indexierung mit noindex blockieren, inklusive X-Robots-Tag im HTTP-Header. <a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=de" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Central, Crawl-Budget-Verwaltung für große Websites: relevant ab etwa einer Million Adressen oder ab 10.000 sich häufig ändernden Adressen. <a href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=de" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Central, Sitemaps: Hinweis für die Entdeckung, keine Garantie für Indexierung. <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=de" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Google Search Central, Hilfreiche und zuverlässige Inhalte erstellen, als Maßstab für die Frage, warum Seiten nach dem Crawlen verworfen werden. <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=de" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                    </ol>
                </div>
            </ArticleLayout>
            <FaqSection title="Häufige Fragen zur Indexierung bei Google" items={faqItems} />
        </>
    );
}
