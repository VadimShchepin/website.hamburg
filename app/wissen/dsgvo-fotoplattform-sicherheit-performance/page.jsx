import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet | Case Study',
    description: 'Architektur-Case-Study von dsgvoschulfotos.de: QR-Code + PIN statt Accounts, Row Level Security, signierte URLs. Der Performance-Preis: 723 imgproxy-Fehler in 72 Stunden, bis vorgenerierte WebP-Varianten kamen.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/dsgvo-fotoplattform-sicherheit-performance',
    },
    openGraph: {
        title: 'DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet',
        description: 'QR-Code + PIN statt Accounts, Row Level Security, signierte URLs. Der Performance-Preis: 723 imgproxy-Fehler in 72 Stunden, bis vorgenerierte WebP-Varianten kamen.',
        url: 'https://webseite.hamburg/wissen/dsgvo-fotoplattform-sicherheit-performance',
        type: 'article',
        images: ['https://webseite.hamburg/wissen/hero-dsgvo-fotoplattform.jpg'],
    },
};

const faqItems = [
    {
        q: 'Wie funktioniert eine DSGVO-konforme Fotoplattform ohne Eltern-Accounts?',
        a: 'Über zugriffsbeschränkte Token: Eltern erhalten einen QR-Code plus PIN, der nur die Fotos des eigenen Kindes freischaltet (kindbezogener Token mit Session). Es gibt keine Accounts, keine Passwörter und keine E-Mail-Adressen der Eltern im System. Die Fotos liegen in einem privaten Bucket, jede Bild-URL ist signiert und läuft nach 24 Stunden ab.',
    },
    {
        q: 'Warum sind On-the-fly-Bildtransformationen bei großen Alben riskant?',
        a: 'Weil jede Thumbnail-Anfrage ein Original dekodieren, skalieren und neu enkodieren muss. Auf einem 2-vCPU-Server führte das bei einem 1.246-Foto-Album zu 723 imgproxy-Fehlern in 72 Stunden (10-s-Timeouts und abgebrochene S3-Downloads). Vorgenerierte WebP-Varianten lieferten dasselbe Thumbnail danach in 82 ms.',
    },
    {
        q: 'Welche Bildvarianten sollte man vorgenerieren?',
        a: 'In diesem Projekt drei WebP-Varianten pro Foto: thumb (300 px, Qualität 80, ~32–47 KB) für Grids, cover (800 px, ~100–200 KB) für Karten und Vorschauen, full (1920 px, Qualität 85, ~300–500 KB) für die Lightbox. Der Backfill für 3.101 Bestandsfotos erzeugte 9.180 WebP-Objekte mit 1,668 GiB.',
    },
    {
        q: 'Machen signierte URLs eine Website langsamer?',
        a: 'Indirekt ja, auf zwei Wegen: Erstens kostet jede Signierung einen internen HTTP-Request, und bei Einzelsignierung pro Foto entsteht ein N+1-Problem. Zweitens wird das Ablauf-Token bei jedem Seitenaufruf neu generiert, wodurch Browser- und CDN-Cache strukturell leerlaufen: identisches Bild, anderer URL-String, erneuter Download.',
    },
];

export default function DsgvoFotoplattformArticlePage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet, und welche Entscheidungen wir korrigieren mussten',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-06-12',
        dateModified: '2026-06-12',
        url: 'https://webseite.hamburg/wissen/dsgvo-fotoplattform-sicherheit-performance',
        inLanguage: 'de',
        image: 'https://webseite.hamburg/wissen/hero-dsgvo-fotoplattform.jpg',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/dsgvo-fotoplattform-sicherheit-performance' },
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
            { '@type': 'ListItem', position: 3, name: 'DSGVO-Fotoplattform: Sicherheit & Performance', item: 'https://webseite.hamburg/wissen/dsgvo-fotoplattform-sicherheit-performance' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="dsgvo-fotoplattform-sicherheit-performance"
                category="SICHERHEIT"
                title="DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet, und welche Entscheidungen wir korrigieren mussten"
                readTime="8 Min."
                publishDate="2026-06-12"
            >
                <div className="subpage-takeaway">
                    <p>
                        <strong>Worum es geht:</strong> <a href="https://dsgvoschulfotos.de/" target="_blank" rel="noopener noreferrer">dsgvoschulfotos.de</a> ist
                        ein soziales Projekt: DSGVO-konformes Foto-Sharing für Schulen und Kitas. Eltern greifen
                        per QR-Code und PIN zu, ganz ohne Account. Die Sicherheitsarchitektur (private Buckets,
                        Row Level Security, signierte URLs) ist solide. Aber jede dieser Entscheidungen hat einen
                        Performance-Preis, und nicht jede unserer Entscheidungen war gut. Dieser Artikel zeigt
                        beides, mit echten Produktionszahlen.
                    </p>
                </div>

                <figure className="article-figure">
                    <img src="/wissen/hero-dsgvo-fotoplattform.webp" alt="Illustration: Schulfoto-Karten hinter einem Sicherheitsschild mit QR-Code und PIN-Tastatur" width="1600" height="900" />
                </figure>

                <h2>Die Architektur: bewusst klein, bewusst geschlossen</h2>
                <p>
                    Die Plattform läuft komplett auf <strong>einem Hetzner-Server mit 2 vCPU und 8 GB RAM</strong>:
                    Next.js 16 mit React 19, ein selbst gehostetes Supabase mit 16–20 Docker-Containern (darunter
                    Kong als API-Gateway, die Storage-API und imgproxy), PostgreSQL mit Row Level Security, die
                    Fotos in einem privaten Hetzner-S3-Bucket. Kein externes SaaS, keine US-Cloud: bei
                    Kinderfotos ist das kein Nice-to-have, sondern die Geschäftsgrundlage.
                </p>
                <ul>
                    <li><strong>Kein Eltern-Account.</strong> Zugriff über einen QR-Code plus PIN, der einen kindbezogenen Token freischaltet. Keine Passwörter, keine E-Mail-Verteiler, kein Identitäts-Datenbestand, der leaken könnte.</li>
                    <li><strong>Row Level Security (RLS) in PostgreSQL.</strong> Die Datenbank selbst erzwingt, wer welche Zeilen sehen darf, nicht nur der Anwendungscode.</li>
                    <li><strong>Privater Storage, signierte URLs.</strong> Kein Foto ist öffentlich erreichbar. Jede Bild-URL wird von der Storage-API kryptografisch signiert und läuft nach 24 Stunden ab.</li>
                    <li><strong>Audit-Log.</strong> Sicherheitsrelevante Aktionen werden protokolliert und sind für Administratoren mit serverseitiger Pagination, Filtern und Volltextsuche einsehbar.</li>
                </ul>

                <figure className="article-figure">
                    <img src="/wissen/diagramm-architektur.svg" alt="Architekturdiagramm: Eltern gelangen über QR-Code und PIN zur Token-Galerie; auf dem 2-vCPU-Server laufen Next.js 16, Kong API-Gateway, PostgreSQL mit RLS, Storage-API und imgproxy als Fallback; Hetzner S3 speichert WebP-Varianten" width="1200" height="675" loading="lazy" />
                    <figcaption>Die gesamte Plattform auf einem 2-vCPU-Server: Zugriff nur über Token, Gateway und signierte Pfade.</figcaption>
                </figure>

                <h2>Der Preis der Sicherheit, Teil 1: Thumbnails, die sich zu Tode rechnen</h2>
                <p>
                    Privater Storage heißt: kein simples CDN davor, keine öffentlichen Bild-URLs. Der ältere
                    Schul-Workflow generierte deshalb Thumbnails beim Upload vor. Der neuere Fotografen-Workflow
                    tat das nicht: er speicherte <strong>nur Originale</strong>, und jede Thumbnail-Anfrage war eine
                    On-the-fly-Transformation eines Full-Resolution-Originals durch imgproxy. Auf 2 CPU-Kernen.
                </p>
                <p>
                    Das erste echte Fotografen-Album (<strong>1.246 Fotos, 944 MB</strong>) machte daraus einen
                    messbaren Ausfall. Kundenmeldung, wörtliche Kategorie: „Thumbnails nicht geladen&quot;. Die
                    Produktions-Logs zeigten <strong>723 imgproxy-Fehler in 72 Stunden</strong> in zwei Varianten:
                </p>
                <ul>
                    <li><code>Request was timed out after 10s</code>: die Worker-Queue von imgproxy war gesättigt (HTTP 503)</li>
                    <li><code>Can&apos;t download source image</code>: der 5-Sekunden-Timeout beim S3-Download eines Multi-MB-Originals (HTTP 500)</li>
                </ul>
                <p>
                    Eine Grid-Ansicht feuert Dutzende solcher Anfragen gleichzeitig. Jede dekodiert ein JPEG
                    von über 1 MB, skaliert es und enkodiert neu. Zwei Kerne. Diese Rechnung konnte nie aufgehen,
                    sie ist nur bei 50-Foto-Testalben nie fällig geworden.
                </p>

                <h2>Der Fix: drei WebP-Varianten pro Foto, vorgeneriert</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th scope="col">Variante</th>
                                <th scope="col">Breite</th>
                                <th scope="col">Qualität</th>
                                <th scope="col">Typische Größe</th>
                                <th scope="col">Einsatz</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">thumb</th>
                                <td>300 px</td>
                                <td>80</td>
                                <td>~32–47 KB (gemessen)</td>
                                <td>Galerie-Grid</td>
                            </tr>
                            <tr>
                                <th scope="row">cover</th>
                                <td>800 px</td>
                                <td>80</td>
                                <td>~100–200 KB</td>
                                <td>Karten, Vorschau</td>
                            </tr>
                            <tr>
                                <th scope="row">full</th>
                                <td>1.920 px</td>
                                <td>85</td>
                                <td>~300–500 KB</td>
                                <td>Lightbox</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Der Backfill für den Bestand, gemessen auf Produktion: <strong>3.101 Fotos</strong> verarbeitet,{' '}
                    <strong>9.180 WebP-Objekte mit 1,668 GiB</strong> nach S3 geschrieben. 9 dauerhafte Fehler, alle
                    waren verwaiste Test-Datensätze, deren S3-Objekte längst gelöscht waren. Die Fehlerliste fand
                    also Datenleichen, keine Code-Bugs.
                </p>
                <p>
                    Das Ergebnis: Eine signierte Thumbnail-URL lieferte nach dem Backfill <strong>HTTP 200 mit
                    32 KB WebP in 82 ms</strong>. Vorher liefen dieselben Anfragen in 10-Sekunden-Timeouts.
                    Die imgproxy-Fehlerrate in den 30 Minuten nach dem Backfill: <strong>0</strong>. imgproxy
                    bleibt nur noch als Fallback für Fotos, deren Varianten der 15-Minuten-Cron noch nicht
                    erzeugt hat.
                </p>

                <h2>Der Preis der Sicherheit, Teil 2: signierte URLs gegen den Browser-Cache</h2>
                <p>
                    Die zweite versteckte Rechnung: Signierte URLs enthalten ein Ablauf-Token, das bei jedem
                    Seitenaufruf <strong>neu generiert</strong> wird. Identisches Bild, anderer URL-String: für den
                    Browser-Cache sind das zwei verschiedene Ressourcen. Jeder Reload lädt jedes Thumbnail
                    erneut herunter, und ein CDN könnte ebenfalls nichts wiederverwenden.
                </p>
                <p>
                    Wir haben das bewusst noch nicht gefixt und dokumentieren es als offene Schuld: Der geplante
                    Fix ist ein serverseitiger URL-Cache (In-Memory-Map, Schlüssel <code>photoId:variant</code>,
                    TTL kürzer als die 24-h-Gültigkeit), damit wiederholte Seitenaufrufe byte-identische URLs
                    erhalten und der HTTP-Cache wieder greift. Wer eine Signed-URL-Architektur plant, sollte
                    diesen Posten von Anfang an einkalkulieren.
                </p>

                <h2>Nicht jede Entscheidung war gut: drei ehrliche Befunde</h2>
                <ul>
                    <li>
                        <strong>Der neue Workflow vergaß die Lektion des alten.</strong> Der Schul-Flow hatte
                        vorgenerierte Thumbnails, der später gebaute Fotografen-Flow nicht. Dieselbe Firma,
                        dieselbe Codebasis, dieselbe Falle, und das zweimal.
                    </li>
                    <li>
                        <strong>Die Admin-Tür führte am Fix vorbei.</strong> Die Superadmin-Ansicht forderte
                        weiterhin Echtzeit-Transformationen der Originale an (800 px und 1.600 px) und umging
                        die Varianten komplett, also dasselbe Problem, durch die Hintertür wieder eingebaut.
                    </li>
                    <li>
                        <strong>Farbpunkte als einziges UI-Signal skalieren nicht.</strong> Die Foto-Zuordnung
                        markierte Kinder mit farbigen Punkten: 12 Farben in der Palette, 13+ Kinder in einer
                        Kita-Gruppe. Ab Foto Nummer 400 einer Abend-Session erinnert sich niemand an eine
                        13-Farben-Legende. Der Fix, Namens-Pills mit eigenem ✕ pro Kind statt Farbcodes,
                        brauchte <strong>null Änderungen am Datenmodell</strong>. UX-Schulden und Schema-Schulden
                        sind verschiedene Schulden.
                    </li>
                </ul>

                <h2>Verifikation auf Produktion statt Bauchgefühl</h2>
                <p>
                    Jede Zahl in diesem Artikel stammt aus Messungen vom 10.–12. Juni 2026: PostgreSQL-Abfragen
                    direkt auf der Produktionsdatenbank, curl-Timings inklusive TLS von einem externen Client,
                    Container-Logs für die imgproxy-Fehlerraten. Für den Volltest wurde ein temporäres
                    Album-Token eingesetzt und nach der Messung gelöscht; der PIN-Flow der Eltern wurde
                    separat durchgemessen (26 Fotos in 0,31 s). Details und alle Vorher-nachher-Werte stehen
                    im ersten Teil der Serie:{' '}
                    <a href="/wissen/case-study-fotogalerie-performance">Case Study: 1.200 Fotos pro Album, wie 2.408 versteckte Requests eine Galerie ausbremsten</a>.
                </p>

                <h2>Die Checkliste: Sicherheit planen heißt Performance mitplanen</h2>
                <ul>
                    <li><strong>Privater Storage?</strong> Dann Bildvarianten beim Upload vorgenerieren, denn Echtzeit-Transformationen sind ein Ausfall mit Ansage.</li>
                    <li><strong>Signierte URLs?</strong> Batch-Signierung nutzen und URL-Erzeugung pro TTL-Fenster deterministisch machen, sonst stirbt das Caching.</li>
                    <li><strong>Token statt Accounts?</strong> Gut für den Datenschutz, aber jeden Zugriffspfad (auch Admin-Ansichten!) auf dieselben optimierten Pfade zwingen.</li>
                    <li><strong>Kleiner Server?</strong> Völlig legitim. Aber dann mit realistischen Datenmengen testen: 50-Foto-Testalben verstecken jedes Skalierungsproblem.</li>
                    <li><strong>Ehrlich dokumentieren, was offen ist.</strong> Eine bekannte, dokumentierte Schwäche ist handhabbar, eine unbekannte meldet sich als Kundenbeschwerde.</li>
                </ul>
                <p>
                    Wie sich Ladezeit direkt auf Anfragen und Umsatz auswirkt, zeigt unser Grundlagen-Artikel{' '}
                    <a href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Sie jeden Tag Kunden kosten</a>.
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
                        <li>Produktions-Logs und -Messungen dsgvoschulfotos.de, 10.–12. Juni 2026 (imgproxy-/Logflare-Logs, PostgreSQL, curl-Timings)</li>
                        <li><a href="https://supabase.com/docs/guides/database/postgres/row-level-security" target="_blank" rel="noopener noreferrer">Supabase: Row Level Security in PostgreSQL</a></li>
                        <li><a href="https://imgproxy.net/" target="_blank" rel="noopener noreferrer">imgproxy: On-the-fly-Bildtransformation</a></li>
                        <li><a href="https://developers.google.com/speed/webp" target="_blank" rel="noopener noreferrer">Google Developers: WebP-Bildformat</a></li>
                        <li><a href="https://dsgvoschulfotos.de/" target="_blank" rel="noopener noreferrer">dsgvoschulfotos.de: DSGVO-konforme Schulfotos</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
