import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/mit-kinder`;

export const metadata = {
    title: 'mit-kinder.de Case Study | KI-Aktivitatsplattform fur Familien',
    description: 'NestJS + React + Gemini AI: Familien-Aktivitatsplattform mit Hexagonaler Architektur, KI-Empfehlungen und interaktiver Karte. Fur Eltern in Deutschland.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'mit-kinder.de | KI-Aktivitatsplattform fur Familien',
        description: 'NestJS + Gemini AI: Hexagonale Architektur, KI-Chatbot, interaktive Karte. Case Study.',
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

export default function MitKinderCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'mit-kinder.de: KI-Aktivitatsplattform fur Familien in Deutschland',
        description: 'Case Study: Familien-Plattform mit Hexagonaler Architektur, Gemini KI und interaktiver Karte.',
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
            { '@type': 'ListItem', position: 3, name: 'mit-kinder.de', item: PAGE_URL },
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
                        { label: 'mit-kinder.de' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">KI-Plattform</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        mit-kinder.de: Weil &bdquo;Was machen wir heute?&ldquo; die schwierigste Frage der Elternschaft ist.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Eine Plattform, die Eltern in Deutschland hilft, altersgerechte Aktivitaten fur ihre Kinder zu finden: mit KI-Empfehlungen, interaktiver Karte und dem Verstandnis, dass ein 3-Jahriger und ein 12-Jahriger fundamental unterschiedliche Bedurfnisse haben. Gebaut mit Hexagonaler Architektur, weil guter Code auch fur Kinder ein gutes Vorbild ist.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="Hexagonal" label="Architektur" detail="Ports & Adapters" />
                        <MetricCard value="Gemini" label="KI-Chatbot" detail="Standort- & zeitbewusst" />
                        <MetricCard value="75+" label="Unit Tests" detail="Domain-Layer" />
                        <MetricCard value="10" label="Kinderprofile" detail="Pro Nutzerkonto" />
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Das Problem</h2>
                    <p className="animate-up">
                        Samstagnachmittag, 14 Uhr, Hamburg. Es regnet. Zwei Kinder, 4 und 8 Jahre alt, sind gelangweilt. Google sagt &bdquo;Miniatur Wunderland&ldquo;, wie immer. Die Eltern brauchen keine generische Top-10-Liste. Sie brauchen etwas, das zum Alter, zu den Interessen und zur Barrierefreiheit ihrer Kinder passt. Und zwar jetzt.
                    </p>
                    <p className="animate-up">
                        Es gibt keine Plattform in Deutschland, die das gut lost. Also bauen wir eine.
                    </p>

                    <h2 className="animate-up">Die Plattform</h2>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>KI-Chatbot mit Kontext</h3>
                            <p>Nicht einfach &bdquo;frag die KI&ldquo;: der Chatbot kennt Standort, Uhrzeit, Alter der Kinder und ihre Interessen. Die Antworten sind auf Deutsch und konkret: &bdquo;Im Stadtpark gibt es heute um 15 Uhr ein Puppentheater, Eintritt frei.&ldquo;</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Kinderprofile</h3>
                            <p>Bis zu 10 Profile pro Konto. Altersgruppen, Interessen, Barrierefreiheitsbedarfe. Die Plattform versteht, dass &bdquo;Kinder&ldquo; keine homogene Gruppe ist: was fur einen Dreijahrigen perfekt ist, langweilt einen Zwolfjahrigen zu Tode.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Interaktive Karte</h3>
                            <p>Leaflet-basierte Karte mit Aktivitaten in der Nahe. Filtern nach Kategorie, Alter, Entfernung. Weil Eltern mit kleinen Kindern nicht 45 Minuten fahren wollen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Google-Echtzeitsuche</h3>
                            <p>Der KI-Bot sucht live im Web nach aktuellen Events und Veranstaltungen. Keine statische Datenbank, sondern aktuelle Ergebnisse, jedes Mal.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Die Architektur: Hexagonal, weil es sein muss</h2>
                    <p className="animate-up">
                        NestJS Backend mit strikter Hexagonaler Architektur. Der Domain-Layer hat null externe Abhangigkeiten: keine Datenbank, kein Framework, kein HTTP. Reine Geschaftslogik. Value Objects (Id, Email, Password), Domain Entities mit eingebauten Businessregeln, und Ports, die durch Adapter implementiert werden.
                    </p>
                    <p className="animate-up">
                        Warum? Weil eine Familien-Plattform wachsen muss. Events-Modul, Scraping-Modul, Artikel-Modul: alles geplant. Wenn die Architektur nicht sauber ist, wird jedes neue Feature ein Kampf. Mit Hexagonal ist jedes neue Modul ein neuer Ordner. Nicht mehr, nicht weniger.
                    </p>
                    <p className="animate-up">
                        75+ Unit Tests auf dem Domain-Layer. Die Geschaftslogik ist gepruft, bevor sie je eine Datenbank sieht. Das ist der russische Weg: Erst testen, dann vertrauen. &laquo;Доверяй, но проверяй&raquo;, vertraue, aber uberprufe.
                    </p>

                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Gute Software fur Familien braucht zwei Dinge: ein echtes Verstandnis fur das Problem (jeder Elternteil kennt die &bdquo;Was machen wir heute?&ldquo;-Panik) und eine Architektur, die mit dem Produkt wachst. mit-kinder.de hat beides: KI-gestutzte Empfehlungen, die wirklich helfen, und Clean Architecture, die nicht bei Feature Nr. 5 zusammenbricht.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Plattform oder SaaS geplant?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Plattformen und SaaS-Produkte, von der Architektur bis zum Deployment.</p>
                        </Link>
                        <Link href="/leistungen/ai-seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>AI SEO</h3>
                            <p>Sichtbarkeit in KI-Suchmaschinen fur Ihr Produkt.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Plattform mit KI-Integration geplant? Ich baue Produkte, die echte Probleme losen, mit sauberer Architektur und KI, die tatsachlich hilft. Nicht nur ein Chatbot-Widget oben rechts." />
        </>
    );
}
