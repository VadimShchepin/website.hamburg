import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Case Study: 1.200-Foto-Galerie von Sekunden auf 0,98 s | N+1 bei signierten URLs',
    description: 'Echte Produktionszahlen: Wie 2.408 versteckte HTTP-Requests eine Fotogalerie mit 1.204 Fotos ausbremsten, und wie Batch-Signierung, WebP-Thumbnails und content-visibility das Problem lösten.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/case-study-fotogalerie-performance',
    },
    openGraph: {
        title: 'Case Study: 1.200-Foto-Galerie von Sekunden auf 0,98 s',
        description: 'Wie 2.408 versteckte HTTP-Requests eine Fotogalerie ausbremsten, und wie Batch-Signierung, WebP-Thumbnails und content-visibility das Problem lösten. Mit echten Messwerten.',
        url: 'https://webseite.hamburg/wissen/case-study-fotogalerie-performance',
        type: 'article',
        images: ['https://webseite.hamburg/wissen/hero-galerie-performance.jpg'],
    },
};

const faqItems = [
    {
        q: 'Was ist ein N+1-Problem bei signierten URLs?',
        a: 'Ein N+1-Problem entsteht, wenn für jedes Element einer Liste ein eigener Request ausgeführt wird, statt alle auf einmal zu laden. Bei privaten Foto-Buckets heißt das: Jede signierte URL wird einzeln beim Storage-Service angefragt. Bei 1.204 Fotos mit je 2 Bildgrößen sind das 2.408 HTTP-Requests pro Seitenaufruf. Die Batch-API (createSignedUrls) erledigt dasselbe in ~12 Requests.',
    },
    {
        q: 'Warum ist eine Bildergalerie trotz Lazy Loading langsam?',
        a: 'Lazy Loading spart nur Bild-Bytes, nicht die Zeit, bis die Bild-URLs überhaupt beim Browser ankommen. Wenn der Server pro Foto einzelne Signierungs-Requests ausführt, sieht der Nutzer sekundenlang eine leere Seite, bevor das erste Bild geladen werden kann. Gemessen werden muss der Request, der die Liste liefert, nicht nur die Assets.',
    },
    {
        q: 'Welche Bildgröße gehört in ein Galerie-Grid?',
        a: 'Eine Grid-Zelle, die mit 200–400 px gerendert wird, braucht eine ~300-px-Variante (WebP, ~32–47 KB), keine 800-px- oder Original-Datei. In diesem Projekt senkte der Wechsel von 800 px auf 300 px die Bildbandbreite beim Scrollen um den Faktor 5–10: von ~150 MB auf ~25 MB für ein 1.204-Foto-Album.',
    },
    {
        q: 'Was bringt content-visibility: auto bei langen Listen?',
        a: 'content-visibility: auto lässt den Browser Layout- und Paint-Arbeit für Elemente außerhalb des Viewports überspringen. Zusammen mit contain-intrinsic-size liefert das geschätzt ~80 % des Nutzens einer virtualisierten Liste, und das mit einer CSS-Zeile statt einem Umbau auf Bibliotheken wie react-virtuoso.',
    },
];

export default function FotogaleriePerformanceArticlePage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Case Study: 1.200 Fotos pro Album, wie 2.408 versteckte Requests eine Galerie ausbremsten',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-06-12',
        dateModified: '2026-06-12',
        url: 'https://webseite.hamburg/wissen/case-study-fotogalerie-performance',
        inLanguage: 'de',
        image: 'https://webseite.hamburg/wissen/hero-galerie-performance.jpg',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/case-study-fotogalerie-performance' },
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
            { '@type': 'ListItem', position: 3, name: 'Case Study: Fotogalerie-Performance', item: 'https://webseite.hamburg/wissen/case-study-fotogalerie-performance' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="case-study-fotogalerie-performance"
                category="PERFORMANCE"
                title="Case Study: 1.200 Fotos pro Album, wie 2.408 versteckte Requests eine Galerie ausbremsten"
                readTime="9 Min."
                publishDate="2026-06-12"
            >
                <div className="subpage-takeaway">
                    <p>
                        <strong>Das Ergebnis vorab:</strong> Ein Foto-Album mit 1.204 Bildern brauchte mehrere Sekunden,
                        bis überhaupt etwas erschien. Die Ursache war ein N+1-Problem bei signierten URLs:
                        2.408 einzelne HTTP-Requests pro Seitenaufruf. Nach der Umstellung auf Batch-Signierung
                        sind es ~12 Requests, und die API antwortet in 0,98 s (kalt) bzw. 0,64 s (warm). Alle Zahlen
                        in diesem Artikel sind echte Produktionsmessungen vom 10.–12. Juni 2026.
                    </p>
                </div>

                <figure className="article-figure">
                    <img src="/wissen/hero-galerie-performance.webp" alt="Illustration: Raster aus hunderten Foto-Thumbnails, die mit hoher Geschwindigkeit laden" width="1600" height="900" />
                </figure>

                <h2>Das Setup: eine DSGVO-Fotoplattform auf 2 CPU-Kernen</h2>
                <p>
                    <a href="https://dsgvoschulfotos.de/" target="_blank" rel="noopener noreferrer">dsgvoschulfotos.de</a> ist
                    eine DSGVO-konforme Foto-Plattform für Schulen und Kitas, an der wir als Entwicklungsprojekt arbeiten:
                    Fotografen laden Event-Alben hoch, ordnen Fotos Kindern zu, Eltern greifen ohne Account per
                    QR-Code und PIN zu. Der Stack: Next.js 16 (App Router), React 19, selbst gehostetes Supabase
                    (16–20 Docker-Container inkl. Kong API-Gateway, Storage-API und imgproxy), PostgreSQL mit
                    Row Level Security, Fotos auf Hetzner S3.
                </p>
                <p>
                    Alles läuft auf <strong>einem einzigen Hetzner-Server mit 2 vCPU und 8 GB RAM</strong>.
                    Das ist bewusst so, denn ein soziales Projekt rechnet sich nicht mit einem Kubernetes-Cluster.
                    Aber es bedeutet: Jede ineffiziente Architekturentscheidung wird sichtbar, sobald echte Daten kommen.
                </p>
                <p>
                    Und sie kamen: Das erste echte Fotografen-Album hatte <strong>1.246 Fotos und 944 MB</strong>.
                    Unser Testalbum mit 1.204 Fotos zeigte dieselben Symptome. Bei 50 Fotos war alles unsichtbar gewesen.
                </p>

                <h2>Das Symptom: leerer Bildschirm trotz Lazy Loading</h2>
                <p>
                    Die Galerie nutzte bereits <code>loading=&quot;lazy&quot;</code> für alle Bilder und vorgenerierte
                    WebP-Thumbnails. Trotzdem: Beim Öffnen des 1.204-Foto-Albums blieb der Bildschirm mehrere
                    Sekunden leer. Die Bilder waren also nicht das Problem. Die Zeit verschwand, bevor der Browser
                    überhaupt eine einzige Bild-URL kannte.
                </p>

                <h2>Die Ursache: ein N+1-Problem, aber für URL-Signierung</h2>
                <p>
                    Die Fotos liegen in einem privaten Bucket. Jede Bild-URL ist eine <strong>signierte URL</strong>,
                    ein zeitlich begrenzter, kryptografisch signierter Link, den die Supabase Storage-API ausstellt.
                    Der Album-Endpoint tat dafür pro Foto Folgendes:
                </p>
                <pre><code>{`// Vorher: pro Foto zwei HTTP-Round-Trips zur Storage-API
const [url, fullUrl] = await Promise.all([
    getPhotoPreviewUrl(photo, 'cover', 86400),  // Grid-Größe
    getPhotoPreviewUrl(photo, 'full', 86400),   // Lightbox-Größe
])`}</code></pre>
                <p>
                    Jeder <code>createSignedUrl()</code>-Aufruf ist ein eigener HTTP-Request vom Next.js-Container
                    durch das Kong-Gateway zum Storage-Container. Für 1.204 Fotos sind das{' '}
                    <strong>2.408 HTTP-Requests in einem einzigen <code>Promise.all</code></strong>, gegen ein Gateway
                    und einen Storage-Service, die sich 2 CPU-Kerne mit allem anderen teilen. Der Browser bekommt
                    nichts, bis der letzte Request fertig ist.
                </p>
                <p>
                    Das ist das klassische N+1-Problem, nur nicht in der Datenbank, sondern auf HTTP-Ebene.
                    Dasselbe Muster steckte an drei Stellen: in der Album-Ansicht des Fotografen, in der
                    elternseitigen QR-Galerie und in der Superadmin-Ansicht. Letztere war sogar noch schlimmer:
                    Sie forderte Echtzeit-Transformationen der Originale über imgproxy an und umging die
                    vorgenerierten Varianten komplett.
                </p>

                <h2>Der Fix: Batch-Signierung mit createSignedUrls()</h2>
                <p>
                    Die Varianten-Pfade sind deterministisch (<code>variants/photographer/&#123;photoId&#125;_thumb.webp</code>),
                    also lassen sie sich gesammelt signieren. Die Storage-API hat dafür einen Batch-Endpoint:
                </p>
                <pre><code>{`// Nachher: ein HTTP-Request pro 200 Fotos, Chunks parallel
const { data } = await supabase.storage
    .from('albums')
    .createSignedUrls(paths, expiresIn)  // paths.length ≤ 200`}</code></pre>
                <p>
                    Für das 1.204-Foto-Album: 2.408 URLs in 7 Chunks à maximal 200 Pfade pro Bildgröße ={' '}
                    <strong>~12 HTTP-Requests statt 2.408</strong>, eine 200-fache Reduktion der Round-Trips.
                    Fotos ohne fertige Varianten fallen auf den alten Einzel-Pfad zurück, mit begrenzter
                    Parallelität (maximal 10 gleichzeitig), damit ein halb optimiertes Album kontrolliert
                    langsamer wird statt den Server zu überrennen.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/diagramm-n-plus-1.svg" alt="Diagramm: Vorher 2.408 einzelne HTTP-Requests durch Kong zur Storage-API, nachher ~12 Batch-Requests mit createSignedUrls" width="1200" height="675" loading="lazy" />
                    <figcaption>Vorher/Nachher: 2.408 Einzel-Requests gegen ~12 Batch-Requests für dasselbe Album.</figcaption>
                </figure>

                <h2>Die Messwerte: vorher gegen nachher</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th scope="col">Metrik</th>
                                <th scope="col">Vorher</th>
                                <th scope="col">Nachher</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Storage-API-Aufrufe pro Album-Load</th>
                                <td>2.408</td>
                                <td>~12</td>
                            </tr>
                            <tr>
                                <th scope="row">API-Antwort, 1.204 Fotos (kalt)</th>
                                <td>mehrere Sekunden</td>
                                <td>0,98 s</td>
                            </tr>
                            <tr>
                                <th scope="row">API-Antwort, 1.204 Fotos (warm)</th>
                                <td>—</td>
                                <td>0,64 s</td>
                            </tr>
                            <tr>
                                <th scope="row">Kindbezogene Galerie (26 Fotos)</th>
                                <td>—</td>
                                <td>0,31 s / 21.661 Bytes</td>
                            </tr>
                            <tr>
                                <th scope="row">Einzelnes Thumbnail</th>
                                <td>10-s-Timeouts</td>
                                <td>HTTP 200, 47.178 Bytes WebP</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die Nachher-Zeiten enthalten den kompletten TLS-Handshake und Transfer von einem externen
                    Client, nicht nur die Serverzeit.
                </p>

                <h2>Bonus-Fund 1: 800-px-Bilder in 250-px-Zellen</h2>
                <p>
                    Während der Analyse fiel auf: Das Grid lud die 800-px-<code>cover</code>-Variante in Zellen,
                    die mit 200–400 px gerendert werden. Der Wechsel auf die 300-px-<code>thumb</code>-Variante
                    (gemessen: 47 KB pro Bild) senkt die Bildbandbreite beim Scrollen um den{' '}
                    <strong>Faktor 5–10</strong>: beim kompletten Durchscrollen des Albums der Unterschied
                    zwischen ~150 MB und ~25 MB. Die 1.920-px-<code>full</code>-Variante bleibt der Lightbox vorbehalten.
                </p>

                <h2>Bonus-Fund 2: 1.204 gemountete DOM-Knoten</h2>
                <p>
                    <code>loading=&quot;lazy&quot;</code> spart Bytes, keine Layout-Arbeit: React mountet trotzdem jede
                    Grid-Zelle, und der Browser rechnet Style und Layout für alle 1.204 Zellen. Die Lösung war
                    eine CSS-Zeile pro Zelle:
                </p>
                <pre><code>{`content-visibility: auto;
contain-intrinsic-size: auto 250px;`}</code></pre>
                <p>
                    Der Browser überspringt damit die Render-Arbeit für Zellen außerhalb des Viewports und hält
                    die Scrollbar mit dem 250-px-Platzhalter stabil. Das sind geschätzt ~80 % des Nutzens einer
                    virtualisierten Liste (z.&nbsp;B. react-virtuoso) für ~1 % der Implementierungskosten: kein
                    Komponenten-Umbau, keine zusätzliche Bibliothek.
                </p>

                <h2>Was wir bewusst nicht gefixt haben</h2>
                <p>
                    Signierte URLs enthalten ein Ablauf-Token, das bei <strong>jedem Seitenaufruf neu generiert</strong> wird.
                    Identisches Bild, anderer URL-String: der Browser-Cache ist damit strukturell nutzlos, jeder
                    Reload lädt jedes Thumbnail neu herunter. Der geplante Fix: ein serverseitiger URL-Cache
                    (In-Memory-Map mit Schlüssel <code>photoId:variant</code>, TTL kürzer als die 24-h-Gültigkeit),
                    damit wiederholte Aufrufe byte-identische URLs bekommen und der HTTP-Cache greift.
                </p>
                <p>
                    Das ist der versteckte Preis von Signed-URL-Architekturen, über den kaum jemand spricht:
                    CDN- und Browser-Caching sterben leise, wenn die URL-Generierung nicht pro TTL-Fenster
                    deterministisch gemacht wird.
                </p>

                <h2>Wie die Zahlen verifiziert wurden</h2>
                <ul>
                    <li>Direkt in PostgreSQL bestätigt, dass alle 1.204/1.204 Fotos den Status <code>optimization_status = &apos;completed&apos;</code> hatten.</li>
                    <li>Den PIN-geschützten Eltern-Flow durchgemessen: PIN → Session-Token → Foto-Endpoint, 26 Fotos in 0,31 s, jede URL eine <code>_thumb.webp</code>-Variante.</li>
                    <li>Für den Volltest ein temporäres Album-Token eingefügt, die Galerie-API kalt und warm gecurlt (0,98 s / 0,64 s, 1.001.757 Bytes, 1.204/1.204 URLs vorhanden), und das Token danach gelöscht.</li>
                    <li>Unit-Tests pinnen das Batching-Verhalten fest: 250 Fotos → exakt 2 Batch-Aufrufe (200 + 50); fehlende Varianten fallen auf Transform-URLs zurück statt kaputte Bilder zu rendern.</li>
                </ul>

                <h2>Was davon auf jedes Projekt übertragbar ist</h2>
                <ul>
                    <li><strong>Lazy Loading versteckt, wo die Zeit wirklich hingeht.</strong> Die Bilder waren lazy; die 2.408 Signierungs-Round-Trips nicht. Profilen Sie den Request, der die Liste liefert, nicht nur die Assets.</li>
                    <li><strong>N+1 ist kein reines Datenbank-Problem.</strong> Jeder Pro-Element-Aufruf an einen internen HTTP-Service (URL-Signierung, Feature-Flags, Berechtigungs-Checks) ist derselbe Bug in anderem Gewand. Batch-Endpoints existieren fast immer, sie werden nur nicht standardmäßig genutzt.</li>
                    <li><strong>Signierte URLs deaktivieren stillschweigend das HTTP-Caching.</strong> Einplanen oder die URL-Erzeugung pro TTL-Fenster deterministisch machen.</li>
                    <li><strong>Bildgröße an Render-Größe koppeln.</strong> 300-px-WebP für 250-px-Zellen, nicht 800 px „zur Sicherheit&quot;.</li>
                    <li><strong>Vorberechnen, was Nutzer vorhersehbar anfragen.</strong> Echtzeit-Bildtransformationen auf einer 2-Kern-Maschine funktionierten genau bis zum ersten echten 1.246-Foto-Album.</li>
                </ul>
                <p>
                    Wie es zu den 10-Sekunden-Thumbnail-Timeouts kam, und welche Sicherheitsarchitektur dahintersteckt,
                    steht im zweiten Teil dieser Serie: <a href="/wissen/dsgvo-fotoplattform-sicherheit-performance">DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet</a>.
                    Warum Ladezeit generell über Anfragen entscheidet, erklärt unser Artikel{' '}
                    <a href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Kunden kosten</a>.
                </p>

                <h2>Häufige Fragen</h2>
                {faqItems.map((item) => (
                    <div key={item.q}>
                        <h3>{item.q}</h3>
                        <p>{item.a}</p>
                    </div>
                ))}

                <div className="subpage-sources">
                    <h2>Quellen &amp; Werkzeuge</h2>
                    <ol>
                        <li>Produktionsmessungen dsgvoschulfotos.de, 10.–12. Juni 2026 (curl-Timings inkl. TLS, PostgreSQL-Abfragen, Storage-Logs)</li>
                        <li><a href="https://supabase.com/docs/reference/javascript/storage-from-createsignedurls" target="_blank" rel="noopener noreferrer">Supabase Storage: createSignedUrls(), Batch-Signierung</a></li>
                        <li><a href="https://web.dev/articles/content-visibility" target="_blank" rel="noopener noreferrer">web.dev: content-visibility, Rendering-Performance für lange Listen</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility" target="_blank" rel="noopener noreferrer">MDN: CSS content-visibility</a></li>
                        <li><a href="https://imgproxy.net/" target="_blank" rel="noopener noreferrer">imgproxy: On-the-fly-Bildtransformation (hier nur noch als Fallback)</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
