import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/kinderalbum`;
const IMG = '/referenzen/kinderalbum';

export const metadata = {
    title: 'KinderAlbum Case Study | DSGVO-Schulfotos-App: Produkt + #1 in ChatGPT & Perplexity',
    description: 'DSGVO-konforme Schulfotos-Plattform mit echten Nutzern, 76 RLS-Policies, Einwilligungsverwaltung und Fotografen-Workflow. #1 in ChatGPT und Perplexity durch AI SEO.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'KinderAlbum | DSGVO-Schulfotos-App + #1 in ChatGPT & Perplexity',
        description: 'DSGVO-konforme Plattform fur Schulfotos mit echten Nutzern, 76 RLS-Policies und #1 in KI-Suchmaschinen.',
        url: PAGE_URL,
        type: 'article',
    },
};

export default function KinderAlbumCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'KinderAlbum: Platz 1 in ChatGPT und Perplexity durch AI SEO',
        description: 'Wie eine DSGVO-konforme Schulfotos-App durch gezielte AI SEO zur #1-Empfehlung in ChatGPT und Perplexity wurde.',
        url: PAGE_URL,
        datePublished: '2026-03-20',
        dateModified: '2026-04-03',
        author: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: `${SITE_URL}/ueber-uns`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
        },
        image: `${SITE_URL}/referenzen/KinderAlbum.webp`,
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'KinderAlbum', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            {/* Hero */}
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Referenzen', href: '/referenzen' },
                        { label: 'KinderAlbum' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">SaaS-Produkt + AI SEO</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        KinderAlbum: DSGVO-konforme Schulfotos-Plattform mit echten Nutzern und #1 in ChatGPT.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Eine vollstandige Plattform fur Schulen, Kindergarten und Fotografen: Fotos teilen mit strikter DSGVO-Compliance, zeitversionierter Einwilligung und 76 Row-Level-Security-Policies. Echte Nutzer, echte Schulen, und durch gezielte AI SEO die #1-Empfehlung in ChatGPT und Perplexity.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 20. Marz 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <div className="cs-metric">
                            <span className="cs-metric-value">#1</span>
                            <span className="cs-metric-label">ChatGPT & Perplexity</span>
                            <span className="cs-metric-detail">Meistempfohlene Losung</span>
                        </div>
                        <div className="cs-metric">
                            <span className="cs-metric-value">76</span>
                            <span className="cs-metric-label">RLS-Policies</span>
                            <span className="cs-metric-detail">Row-Level Security</span>
                        </div>
                        <div className="cs-metric">
                            <span className="cs-metric-value">19</span>
                            <span className="cs-metric-label">Datenbanktabellen</span>
                            <span className="cs-metric-detail">Multi-Tenant isoliert</span>
                        </div>
                        <div className="cs-metric">
                            <span className="cs-metric-value">9/9</span>
                            <span className="cs-metric-label">Features</span>
                            <span className="cs-metric-detail">Produktionsbereit</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src="/referenzen/KinderAlbum.webp"
                            alt="KinderAlbum: DSGVO-konforme Schulfotos-Plattform mit Lehrer- und Eltern-Portal"
                            width={1200}
                            height={781}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">KinderAlbum: DSGVO-konforme Schulfotos-Plattform mit Rollen-basiertem Zugang.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Das Problem</h2>
                    <p className="animate-up">
                        Schulen und Kindergarten in Deutschland teilen Klassenfotos uber WhatsApp-Gruppen, USB-Sticks oder ungeschutzte Cloud-Ordner. Das ist nicht nur unpraktisch, es ist ein DSGVO-Verstoss. Eltern haben keine Kontrolle, wer Fotos ihrer Kinder sieht. Schulen haben keine Dokumentation uber Einwilligungen. Und bei einer Anfrage der Datenschutzbehorde gibt es keinen Audit-Trail.
                    </p>
                    <p className="animate-up">
                        Es gab keine Losung, die DSGVO-Compliance nicht als Checkbox behandelt, sondern als Kern-Feature. Genau das haben wir gebaut.
                    </p>

                    <h2 className="animate-up">Das Produkt: DSGVO als Architektur-Prinzip</h2>
                    <p className="animate-up">
                        KinderAlbum ist keine Foto-App mit DSGVO-Banner. Datenschutz ist in jeder Zeile Code verankert, von der Datenbank bis zur Oberflache.
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Zeitversionierte Einwilligung</h3>
                            <p>Einwilligungen werden nie uberschrieben: jede Anderung erzeugt einen neuen Datensatz mit Zeitstempel. Volle Compliance-Historie fur jedes Kind, jederzeit nachvollziehbar.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>76 Row-Level-Security-Policies</h3>
                            <p>PostgreSQL RLS auf allen 19 Tabellen. Eltern sehen nur Fotos, fur die eine aktive Einwilligung vorliegt. Schul-Isolation auf Datenbankebene: kein Code-Fehler kann Daten uber Schulgrenzen lecken.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Audit-Logging</h3>
                            <p>Jeder Login, jeder Foto-Download, jede Einwilligungsanderung wird protokolliert. Bei einer Datenschutzanfrage ist der vollstandige Audit-Trail sofort verfugbar.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Verschlusselte Speicherung</h3>
                            <p>Private S3-Buckets (Hetzner). Kein offentlicher Zugriff. Fotos werden uber signierte, ablaufende URLs bereitgestellt: jeder Zugriff ist zeitlich begrenzt und nachverfolgbar.</p>
                        </div>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Drei Rollen, drei Workflows
                    </h3>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Lehrer-Portal</h3>
                            <p>Klassen verwalten, Schuler hinzufugen (einzeln oder CSV-Import), Einwilligungen einholen, Alben erstellen, Fotos hochladen und taggen, Eltern einladen: alles mit Vorschau der Sichtbarkeit.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Eltern-Portal</h3>
                            <p>Registrierung per Einladungscode (einmalig, 7 Tage gultig). Nur Alben und Fotos sichtbar, fur die eine aktive Einwilligung vorliegt. Download, Favoriten, Kommentare, alles mobiloptimiert.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Fotografen-Workflow</h3>
                            <p>Eigenstandiger Bereich: Fotos hochladen, Kinder registrieren, Fotos zuweisen, Galerie-Token mit optionalem PIN generieren. Kein Login erforderlich fur die offentliche Galerie.</p>
                        </div>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Der Tech Stack
                    </h3>
                    <p className="animate-up">
                        Next.js 16 mit React 19 und TypeScript. Supabase (self-hosted) mit PostgreSQL und Row-Level Security. Hetzner S3 fur Medienspeicherung. Docker Compose fur die Produktionsumgebung mit Caddy Reverse Proxy. Bild-Optimierung (WebP-Varianten) per Cron-Job alle 15 Minuten.
                    </p>

                    <h2 className="animate-up">AI SEO: Von unsichtbar zu #1 in KI-Suchmaschinen</h2>
                    <p className="animate-up">
                        Ein gutes Produkt reicht nicht. Wenn ChatGPT und Perplexity Sie nicht kennen, existieren Sie fur eine wachsende Zahl von Nutzern nicht. KinderAlbum war genau in dieser Situation: echte Nutzer, echtes Produkt, aber in KI-Suchmaschinen unsichtbar.
                    </p>

                    <div className="sp-steps animate-up">
                        <div className="sp-step">
                            <span className="sp-step-num">01</span>
                            <div className="sp-step-body">
                                <h3>Analyse der KI-Antworten</h3>
                                <p>Systematische Abfrage: Was empfehlen ChatGPT, Perplexity und Google AI Overviews bei &bdquo;DSGVO-konforme Schulfotos&ldquo;? Welche Quellen werden zitiert? Wo sind die Lucken?</p>
                            </div>
                        </div>
                        <div className="sp-step">
                            <span className="sp-step-num">02</span>
                            <div className="sp-step-body">
                                <h3>Strukturierte Daten & Entity-Aufbau</h3>
                                <p>Schema.org Markup, klare Entity-Definition, maschinenlesbare Produkt- und Unternehmensdaten: die Grundlage, damit KI-Systeme KinderAlbum als Entitat erkennen.</p>
                            </div>
                        </div>
                        <div className="sp-step">
                            <span className="sp-step-num">03</span>
                            <div className="sp-step-body">
                                <h3>Content fur Zitierfahigkeit</h3>
                                <p>Inhalte im optimalen Format fur KI-Zitation: 134-167 Worter pro Passage, Frage-basierte Uberschriften, Fakten-dichte Absatze mit externer Quellenattribution.</p>
                            </div>
                        </div>
                        <div className="sp-step">
                            <span className="sp-step-num">04</span>
                            <div className="sp-step-body">
                                <h3>Nischen-Autoritat</h3>
                                <p>Kein Wettbewerber hatte echte DSGVO-Expertise als Content aufgebaut. KinderAlbum fullte diese Lucke und wurde zur autoritativen Quelle fur das Thema.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="animate-up">Die Ergebnisse</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>#1 in ChatGPT</h3>
                            <p>Bei Anfragen zu DSGVO-konformen Schulfotos wird KinderAlbum als erste Empfehlung genannt, vor allen Wettbewerbern.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>#1 in Perplexity</h3>
                            <p>Perplexity zitiert KinderAlbum als Top-Quelle mit direktem Link und Zusammenfassung der Features.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Echte Nutzer</h3>
                            <p>Schulen und Kindergarten nutzen die Plattform aktiv. Lehrer laden Alben hoch, Eltern sehen Fotos ihrer Kinder, der vollstandige Workflow funktioniert in Produktion.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Nischen-Marktfuhrer</h3>
                            <p>Kein Wettbewerber im deutschsprachigen Raum hat vergleichbare DSGVO-Compliance-Tiefe in Kombination mit KI-Sichtbarkeit aufgebaut.</p>
                        </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Zwei Disziplinen, ein Ergebnis: Ein technisch exzellentes Produkt (76 RLS-Policies, zeitversionierte Einwilligung, Audit-Trail) kombiniert mit gezielter AI SEO. KinderAlbum zeigt, dass man Nischenmarkte gleichzeitig durch Produktqualitat und Sichtbarkeit gewinnen kann, nicht durch das eine oder das andere.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">KI-Sichtbarkeit fur Ihr Unternehmen?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/ai-seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>AI SEO</h3>
                            <p>Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews. Werden Sie zur #1-Empfehlung in KI-Suchmaschinen.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO fur lokale Unternehmen</h3>
                            <p>Langfristige organische Sichtbarkeit durch technische und inhaltliche Optimierung. Ab 1.000 &euro;/Mt.</p>
                        </Link>
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites, die schnell laden und Besucher zu Kunden machen. Ab 2.000 &euro;.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Sichtbar in ChatGPT, Perplexity und Google AI Overviews? Ich zeige Ihnen, wie AI SEO fur Ihr Unternehmen funktioniert. Kostenloses Erstgesprach unter aiseo.hamburg." />
        </>
    );
}
