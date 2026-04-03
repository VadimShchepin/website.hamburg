import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/pest-control-saas`;

export const metadata = {
    title: 'Pest Control SaaS Case Study | Enterprise-Architektur fur Schadlingsbekampfung',
    description: 'Multi-Tenant SaaS fur Schadlingsbekampfer: Hexagonale Architektur, DDD, Offline-PWA, EU-Biozid-Verordnung-Compliance. Laravel 12 + Next.js 16 + PostgreSQL.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Pest Control SaaS | Enterprise-Architektur mit DDD & Offline-PWA',
        description: 'Multi-Tenant SaaS: Hexagonale Architektur, 6 Bounded Contexts, Offline-PWA fur Techniker, EU-Biozid-Compliance. Case Study.',
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

export default function PestControlCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Pest Control SaaS: Enterprise-Architektur fur die Schadlingsbekampfungsbranche',
        description: 'Case Study: Multi-Tenant SaaS mit Hexagonaler Architektur, DDD, Offline-PWA und EU-Biozid-Verordnung-Compliance.',
        url: PAGE_URL,
        datePublished: '2026-04-03',
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
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'Pest Control SaaS', item: PAGE_URL },
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
                        { label: 'Pest Control SaaS' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">SaaS-Produktentwicklung</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        Pest Control SaaS: Enterprise-Architektur fur die Schadlingsbekampfungsbranche.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein Multi-Tenant SaaS-System, das Kundenverwaltung, Einsatzplanung, Vor-Ort-Dokumentation und rechtskonforme Berichterstattung in einer Plattform vereint — gebaut mit Hexagonaler Architektur, Domain-Driven Design und einer Offline-fahigen PWA fur Techniker im Feld.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="6" label="Bounded Contexts" detail="Domain-Driven Design" />
                        <MetricCard value="27" label="API-Routen" detail="Vollstandige REST-API" />
                        <MetricCard value="0" label="Architektur-Verletzungen" detail="Deptrac-enforced" />
                        <MetricCard value="100%" label="Architektur-Compliance" detail="Hexagonal + DDD" />
                        <MetricCard value="PWA" label="Offline-fahig" detail="IndexedDB + Service Worker" />
                        <MetricCard value="EU" label="Biozid-Verordnung" detail="528/2012 konform" />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Das Problem</h2>
                    <p className="animate-up">
                        Schadlingsbekampfer in Deutschland arbeiten mit einem Flickwerk aus Tools: Kundendaten in Excel, Einsatzplane per WhatsApp, Fotos auf dem Handy, Berichte in Word-Vorlagen. Jeder Einsatz erzeugt Papierkram, der manuell zusammengefuhrt werden muss — zeitaufwandig, fehleranfallig und nicht rechtskonform.
                    </p>
                    <p className="animate-up">
                        Die EU-Biozid-Verordnung (528/2012) schreibt vor, dass bei jedem Einsatz detailliert dokumentiert wird: Auftraggeber, Einsatzort, Datum und Uhrzeit, Schadlingsart, Befallsgrad, Massnahmen, eingesetzte Mittel und Unterschrift. Ein vergessenes Feld kann rechtliche Konsequenzen haben.
                    </p>

                    <h2 className="animate-up">Die Losung: Ein System fur alles</h2>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Architektur: Hexagonal + Domain-Driven Design
                    </h3>
                    <p className="animate-up">
                        Die Plattform wurde von Grund auf als Enterprise-System entworfen — nicht als aufgeblahtes CRUD-Tool. Die Architektur folgt dem Hexagonalen Muster mit striktem Domain-Driven Design:
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Domain Layer</h3>
                            <p>Reines PHP ohne Framework-Abhangigkeiten. Entities, Value Objects, Domain Services, Events und Exceptions. Null Abhangigkeiten zu anderen Schichten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Application Layer</h3>
                            <p>Use Cases und Orchestrierung: Commands (CreateJob, CompleteJob), Queries (GetJobList, GetTodayJobs), DTOs. Darf nur auf Domain zugreifen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Infrastructure Layer</h3>
                            <p>Controller, Eloquent Models, Provider, Console Commands. Darf auf Application und Domain zugreifen — aber nie umgekehrt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Deptrac Enforcement</h3>
                            <p>Schichtgrenzen werden durch Deptrac automatisch gepruft. Eine Verletzung = Build bricht ab. 0 Verletzungen in der gesamten Codebasis.</p>
                        </div>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        6 Bounded Contexts
                    </h3>
                    <p className="animate-up">
                        Die Fachdomane ist in sechs klar getrennte Module aufgeteilt — jedes mit eigenem Verantwortungsbereich:
                    </p>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Identity & Access</h3>
                            <p>Benutzer, Rollen (Admin, Techniker), Authentifizierung. Session-basiert mit HTTP-only Cookies.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>CRM</h3>
                            <p>Kunden, Kontakte, Standorte. Soft Delete fur Audit-Trail. Vollstandiges CRUD mit Pagination.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Scheduling</h3>
                            <p>Einsatzplanung, Techniker-Zuweisung, Status-Lifecycle: geplant &rarr; in Bearbeitung &rarr; abgeschlossen &rarr; berichtet &rarr; fakturiert.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Field Operations</h3>
                            <p>Vor-Ort-Dokumentation: Fotos, Beobachtungen, Befallsgrad, digitale Unterschrift mit Geolocation.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Reporting</h3>
                            <p>PDF-Generierung mit allen Pflichtangaben nach EU-Biozid-Verordnung. Vorschau, Download, Archivierung.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Messaging</h3>
                            <p>E-Mail-Versand uber AWS SES. Queued, nie direkt vom Client. Vollstandiges E-Mail-Log.</p>
                        </div>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Multi-Tenancy & Datenisolierung
                    </h3>
                    <p className="animate-up">
                        Jede Entitat tragt eine <code>tenant_id</code>. Der Tenant wird aus der authentifizierten Benutzersitzung aufgelost. Alle Repository-Methoden filtern automatisch nach Tenant — mit globalen Eloquent Scopes als letzte Sicherheitsschicht. Tests prufen die Tenant-Isolierung explizit.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Offline-PWA fur Techniker
                    </h3>
                    <p className="animate-up">
                        Techniker arbeiten in Kellern, Lagerhallen und Aussenanlagen — oft ohne stabiles Internet. Die Progressive Web App speichert Einsatzdaten lokal in IndexedDB und synchronisiert automatisch, sobald die Verbindung wiederhergestellt wird. Ein Sync-Status-Indikator zeigt dem Techniker jederzeit den aktuellen Zustand.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Der Techniker-Workflow im Feld
                    </h3>
                    <p className="animate-up">
                        Der Techniker offnet die PWA, sieht seine heutigen Einsatze, navigiert zum Kunden (ein Klick auf die Adresse offnet Google Maps), dokumentiert den Einsatz — Befallsgrad, Beobachtungen, eingesetzte Mittel, Fotos — und unterschreibt digital auf dem Gerat. Geolocation wird mit der Unterschrift erfasst. Der Bericht wird automatisch generiert.
                    </p>

                    {/* Tech Stack */}
                    <h2 className="animate-up">Der Tech Stack</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Backend</h3>
                            <p>Laravel 12, PHP 8.5, PostgreSQL 18, Redis 8.4. 27 API-Routen, CQRS-Light Pattern, UUID v7 Primary Keys.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Frontend</h3>
                            <p>Next.js 16, React 19, TypeScript, Tailwind CSS. Admin-Dashboard + Techniker-PWA in einem Projekt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Infrastruktur</h3>
                            <p>Docker Compose, AWS SES (E-Mail-Queue), lokaler Speicher (MVP) mit S3-Option fur V1+.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Qualitat</h3>
                            <p>PHPUnit mit In-Memory SQLite. Deptrac fur Architektur-Compliance. 100% Schicht-Konformitat.</p>
                        </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Enterprise-Architektur ist kein Overhead — sie ist eine Investition. Hexagonales Design mit DDD bedeutet: klare Fachmodule, testbare Geschaftslogik, einfache Erweiterbarkeit. Der Beweis: 0 Architektur-Verletzungen in der gesamten Codebasis, automatisch gepruft vor jedem Commit. Dieses System wachst mit dem Geschaft — nicht dagegen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Ahnliches Projekt geplant?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Webanwendungen und SaaS-Plattformen — von der Architektur bis zum Deployment.</p>
                        </Link>
                        <Link href="/leistungen/website-audit" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website-Audit</h3>
                            <p>Kostenlose Erstanalyse: Performance, Architektur und Skalierbarkeit Ihrer bestehenden Anwendung.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Enterprise-Anwendung oder SaaS-Plattform geplant? Ich entwerfe und baue Systeme, die wachsen — technisch sauber, regulatorisch konform, zukunftsfahig." />
        </>
    );
}
