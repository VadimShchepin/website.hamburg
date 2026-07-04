import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/solovei-beauty`;

export const metadata = {
    title: 'Solovei Beauty Case Study | Dreisprachige Coworking-Plattform mit CMS',
    description: 'Next.js 16 + Payload CMS + PostgreSQL: Dreisprachige Website fur Beauty-Coworking in Hamburg. Deutsch, Englisch, Russisch, mit CI/CD und Docker-Deployment.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Solovei Beauty | Dreisprachige Coworking-Plattform',
        description: 'Beauty-Coworking Hamburg: Next.js + Payload CMS, 3 Sprachen, Docker-Deployment. Case Study.',
        url: PAGE_URL,
        type: 'article',
    },
};

function MetricCard({ value, label, detail }) {
    return (
        <div className="cs-metric">
            <span className="cs-metric-value">{value}</span>
            <span className="cs-metric-label">{label}</span>
            {detail && <span className="cs-metric-detail">{detail}</span>}
        </div>
    );
}

export default function SoloveiCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Solovei Beauty: Dreisprachige Coworking-Plattform mit Payload CMS',
        description: 'Case Study: Beauty-Coworking-Website mit Next.js 16, Payload CMS, PostgreSQL und dreisprachigem Content.',
        url: PAGE_URL,
        datePublished: '2026-04-03',
        dateModified: '2026-04-03',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: `${SITE_URL}/ueber-uns` },
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'Solovei Beauty', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Referenzen', href: '/referenzen' },
                        { label: 'Solovei Beauty' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">Webdesign + CMS</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        Solovei Beauty: Eine Website, drei Sprachen, null Abhangigkeit vom Entwickler.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein Beauty-Coworking-Space in Hamburg brauchte eine Website, die auf Deutsch, Englisch und Russisch funktioniert, und die die Inhaberin selbst pflegen kann, ohne jedes Mal anzurufen. Also haben wir Payload CMS eingebaut. Jetzt ruft sie trotzdem an. Aber aus Freude, nicht aus Verzweiflung.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="3" label="Sprachen" detail="DE / EN / RU" />
                        <MetricCard value="5.000" label="Impressionen" detail="in 8 Wochen" />
                        <MetricCard value="CMS" label="Payload CMS 3" detail="Inhaberin pflegt selbst" />
                        <MetricCard value="CI/CD" label="GitLab Pipeline" detail="Auto-Deploy auf Push" />
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        Solovei Beauty ist ein Coworking-Space fur Kosmetikerinnen, Friseurinnen und Beauty-Profis in Hamburg. Die Zielgruppe ist international: deutsche Kundinnen, englischsprachige Expats und die russischsprachige Community. Eine Website nur auf Deutsch? Das ware so, als wurde man in einem russischen Restaurant nur die Speisekarte auf Deutsch anbieten. Technisch moglich, aber man verliert die Halfte der Gaste.
                    </p>
                    <p className="animate-up">
                        Die Anforderung war klar: Eine professionelle Website in drei Sprachen, mit der Moglichkeit, Raume, Preise und Inhalte selbst zu verwalten, ohne fur jede Textanderung einen Entwickler zu brauchen. Und naturlich sollte sie schnell sein, auf dem Handy gut aussehen und bei Google gefunden werden.
                    </p>

                    <h2 className="animate-up">Die Losung: Next.js + Payload CMS</h2>
                    <p className="animate-up">
                        Warum Payload CMS und nicht WordPress? Weil WordPress ein Schweizer Taschenmesser ist: es kann alles ein bisschen, aber nichts richtig gut. Payload CMS ist direkt in die Next.js-Anwendung integriert. Kein separater Server, keine REST-API-Umwege, keine Plugin-Holle. Die Inhaberin offnet das Admin-Panel, andert einen Text, und er ist live. In drei Sprachen gleichzeitig.
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Dreisprachig ab Tag 1</h3>
                            <p>next-intl mit Locale-Prefix-Routing. Deutsch als Standard, Englisch und Russisch per Sprachumschalter. Alle Inhalte im CMS verwaltbar, pro Sprache.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>CMS-verwaltete Raume</h3>
                            <p>Jeder Raum mit Beschreibung, Fotos, Preiskarten, Verfugbarkeit und Buchungsmethode. Neue Raume anlegen? Zwei Minuten im Admin-Panel.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>CI/CD Pipeline</h3>
                            <p>GitLab CI baut Multi-Arch Docker Images (ARM64 + AMD64) und deployt automatisch auf Produktion. Push auf main = live in Minuten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO mit Schema.org</h3>
                            <p>JSON-LD Structured Data, optimierte Meta-Tags, Sitemap. Die Website wird nicht nur gefunden, sie wird von Google verstanden.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Die Ergebnisse</h2>
                    <p className="animate-up">
                        5.000 Impressionen in den ersten 8 Wochen: fur ein lokales Beauty-Coworking in Hamburg ein starker Start. Die Website lauft stabil, die Inhaberin verwaltet ihre Inhalte selbst, und die dreisprachige Zielgruppe wird endlich vollstandig angesprochen.
                    </p>
                    <p className="animate-up">
                        Das Beste daran: Wenn sie nachts um 2 Uhr einen neuen Raum hinzufugen will, kann sie das tun. Ohne Ticket, ohne Wartezeit, ohne mich. Das ist Freiheit. Oder wie wir auf Russisch sagen: &laquo;Сделай и забудь&raquo;, bau es einmal richtig, und vergiss es.
                    </p>

                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Ein gutes CMS macht den Entwickler nicht uberflussig, es macht den Kunden unabhangig. Payload CMS in Next.js bedeutet: null Kompromisse bei Performance, volle Kontrolle uber Content, und ein System, das mit dem Geschaft wachst. Drei Sprachen, ein Admin-Panel, keine Kopfschmerzen.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Ahnliches Projekt geplant?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites mit CMS-Integration. Ab 2.000 &euro;.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO fur lokale Unternehmen</h3>
                            <p>Organische Sichtbarkeit fur Ihr lokales Business.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Mehrsprachige Website mit CMS? Ich baue Systeme, die Sie selbst pflegen konnen, ohne standig den Entwickler anrufen zu mussen. Obwohl ich mich uber Anrufe naturlich immer freue." />
        </>
    );
}
