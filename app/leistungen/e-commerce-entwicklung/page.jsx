import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import EcomServices from '../../../src/components/EcomServices';
import { BUSINESS } from '../../../src/lib/schema';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/leistungen/e-commerce-entwicklung`;

export const metadata = {
    title: 'E-Commerce Entwicklung Hamburg | Shop-Entwicklung & Beratung',
    description: 'E-Commerce Agentur aus Hamburg: ein kleines, erfahrenes Team aus Entwicklern, Designern, Textern und Marketing. Shop-Entwicklung, Erweiterung, Automatisierung und Beratung für Shopify, Shopware, WooCommerce und Custom-Shops. 11 Jahre Erfahrung.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'E-Commerce Entwicklung Hamburg | Shop-Entwicklung & Beratung',
        description: 'E-Commerce aus einer Hand: Strategie, Design, Entwicklung, Content, Marketing und Automatisierung. Shopify, Shopware, WooCommerce und Custom. 11 Jahre Erfahrung.',
        url: PAGE_URL,
        type: 'website',
    },
};

const Icon = {
    check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>,
    x: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
    code: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    design: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>,
    pen: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    megaphone: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>,
    sync: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>,
    mail: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>,
    feed: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>,
    tag: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
    phone: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
};

const platforms = [
    { logo: '/leistungen/ecommerce/logos/shopify.svg', name: 'Shopify', tag: 'Schneller Marktstart', desc: 'Für DTC-Marken und einen schnellen, wartungsarmen Start. Wir bauen individuelle Themes und Headless-Storefronts.' },
    { logo: '/leistungen/ecommerce/logos/shopware.svg', name: 'Shopware 6', tag: 'Stark im B2B', desc: 'Für anspruchsvolle B2B- und Mittelstands-Shops mit komplexen Preis- und Sortimentslogiken. Made in Germany.' },
    { logo: '/leistungen/ecommerce/logos/woocommerce.svg', name: 'WooCommerce', tag: 'Content trifft Shop', desc: 'Wenn Inhalt und Shop zusammengehören. Voll anpassbar, und wir kümmern uns um Performance und Sicherheit.' },
    { logo: '/leistungen/ecommerce/logos/nextdotjs.svg', name: 'Custom & Headless', tag: 'Maximale Freiheit', desc: 'Für besondere Geschäftsmodelle: Headless mit Next.js oder Medusa, wenn ein Standardsystem nicht mehr ausreicht.' },
];

const team = [
    { icon: Icon.code, role: 'Entwickler', desc: 'Sauberer, schneller Code für Shopify, Shopware, WooCommerce und Headless. Schnittstellen und Sicherheit gehören für uns dazu.' },
    { icon: Icon.design, role: 'Designer', desc: 'UX/UI, das verkauft: klare Produktseiten und ein Checkout, durch den Käufer ohne Umwege kommen. Mobile zuerst.' },
    { icon: Icon.pen, role: 'Texter', desc: 'Produkttexte, die Menschen überzeugen und bei Google funktionieren, über das ganze Sortiment hinweg.' },
    { icon: Icon.megaphone, role: 'Marketing', desc: 'SEO, Google Ads und Feed-Management, damit der Shop gefunden und gekauft wird.' },
];

const automations = [
    { icon: Icon.feed, title: 'Produktdaten-Feeds', desc: 'Gehen automatisch an Google Merchant Center, Meta und Marktplätze und bleiben aktuell.' },
    { icon: Icon.sync, title: 'Lager- & Bestandssync', desc: 'Bestände bleiben über Shop, ERP und Marktplätze synchron. Schluss mit Überverkäufen.' },
    { icon: Icon.mail, title: 'E-Mail-Automatisierung', desc: 'Warenkorbabbruch-, Willkommens- und Reaktivierungs-Flows holen Umsatz zurück.' },
    { icon: Icon.tag, title: 'Preis- & Bestell-Workflows', desc: 'B2B-Staffelpreise, automatische Rechnungen, Versandlabels und der Export in die Buchhaltung.' },
];

const process = [
    { title: 'Erstgespräch', desc: 'Wir verstehen Ihr Geschäft und empfehlen das passende System. Kostenlos.' },
    { title: 'Konzept & Festpreis', desc: 'Wir legen Umfang, Schnittstellen und Design fest. Sie bekommen ein verbindliches Angebot.' },
    { title: 'Design & Entwicklung', desc: 'Das Team setzt Design, Shop, Texte und Integrationen parallel um.' },
    { title: 'Testing & Launch', desc: 'Alles geprüft, Tracking und Feeds aktiv, sauberer Go-live mit Übergabe.' },
    { title: 'Wachstum', desc: 'Laufende Optimierung, neue Funktionen, Marketing und Wartung.' },
];

const faqItems = [
    { q: 'Welches Shopsystem ist das richtige für mein Unternehmen?', a: 'Das hängt von Sortiment, Zielmarkt und Wachstumsplänen ab. Shopify eignet sich für einen schnellen, wartungsarmen Start und für DTC-Marken. Shopware 6 ist stark im B2B und bei komplexen deutschen Sortiments- und Steuerlogiken. WooCommerce passt, wenn Content und Shop eng zusammengehören. Custom oder Headless lohnt sich bei besonderen Geschäftsmodellen oder sehr hohen Performance-Anforderungen. Im kostenlosen Erstgespräch empfehlen wir herstellerneutral, denn an Lizenzen verdienen wir nichts.' },
    { q: 'Macht ihr nur die Technik oder auch Design, Texte und Marketing?', a: 'Wir liefern den vollen Zyklus aus einer Hand: Strategie und Beratung, UX/UI-Design, Entwicklung, Produkttexte und Copywriting sowie Marketing wie SEO, Google Ads und Feed-Management. Sie müssen keine drei Dienstleister koordinieren. Ein kleines, eingespieltes Team verantwortet das Ergebnis von Anfang bis Ende.' },
    { q: 'Könnt ihr unseren bestehenden Shop erweitern statt neu zu bauen?', a: 'Ja. Ein großer Teil unserer Arbeit ist die Erweiterung und Optimierung bestehender Shops: neue Funktionen, mehr Performance und Conversion, Schnittstellen zu ERP und Warenwirtschaft, Zahlungs- und Versanddienstleistern sowie Automatisierungen. Wir starten mit einem Blick auf den Ist-Zustand und sagen Ihnen ehrlich, ob sich eine Erweiterung lohnt oder ein Relaunch sinnvoller ist.' },
    { q: 'Welche Automatisierungen sind im E-Commerce sinnvoll?', a: 'Häufig sind das: ein automatischer Produktdaten-Feed an Google Merchant Center und Marktplätze, die Synchronisation von Lagerbeständen zwischen Shop und Warenwirtschaft, automatische Rechnungen und Versandlabels sowie E-Mail-Automatisierung für Warenkorbabbrüche, Begrüßung und Reaktivierung. Solche Abläufe sparen täglich Handarbeit und holen Umsatz zurück, der sonst liegen bleibt.' },
    { q: 'Wie viel Erfahrung steckt im Team?', a: 'Über 11 Jahre, aus Projekten in ganz unterschiedlichen Branchen, von DTC-Beauty über B2B-Industrie bis zu SaaS und lokalen Händlern. Diese Erfahrung fließt direkt in Ihr Projekt ein. Wir kennen die teuren Fehler, bevor sie passieren.' },
    { q: 'Was kostet ein E-Commerce-Projekt?', a: 'Das hängt stark vom Umfang ab, also vom System, der Sortimentsgröße, den Schnittstellen und dem Designaufwand. Einen Einstieg mit Standardsystem realisieren wir im niedrigen vierstelligen Bereich, komplexe B2B- oder Custom-Lösungen liegen höher. Vor Projektstart erhalten Sie ein verbindliches Festpreis-Angebot ohne versteckte Kosten. Schreiben Sie uns Ihr Vorhaben, dann nennen wir Ihnen einen realistischen Rahmen.' },
];

export default function EcommerceEntwicklungPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'E-Commerce Entwicklung & Beratung Hamburg',
        serviceType: 'E-Commerce-Entwicklung',
        provider: BUSINESS,
        areaServed: { '@type': 'Country', name: 'Deutschland' },
        url: PAGE_URL,
        description: 'E-Commerce aus einer Hand: Strategie, Design, Entwicklung, Content, Marketing und Automatisierung für Shopify, Shopware, WooCommerce und Custom-Shops von einem kleinen, erfahrenen Team aus Hamburg.',
    };
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${SITE_URL}/leistungen` },
            { '@type': 'ListItem', position: 3, name: 'E-Commerce Entwicklung', item: PAGE_URL },
        ],
    };
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* HERO */}
            <section className="ecx-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Leistungen', href: '/leistungen' },
                        { label: 'E-Commerce Entwicklung' },
                    ]} />
                    <div className="ecx-hero-grid">
                        <div>
                            <p className="section-kicker animate-up">E-Commerce Entwicklung aus Hamburg</p>
                            <h1 className="subpage-title animate-up">Online-Shops, die verkaufen.</h1>
                            <p className="ecx-hero-lead animate-up">
                                Wir sind ein kleines, eingespieltes Team aus Entwicklung, Design, Text und Marketing. Wir bauen Ihren Shop, erweitern ihn und kümmern uns danach weiter darum. Alles aus einer Hand, für Shopify, Shopware, WooCommerce oder eine eigene Lösung.
                            </p>
                            <div className="ecx-hero-actions animate-up">
                                <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="ecom-hero">Kostenloses Erstgespräch</Link>
                                <a href="tel:+4917632194754" className="ecx-hero-phone" data-umami-event="phone-call" data-umami-event-location="ecom-hero">
                                    {Icon.phone} 0176 / 321 94 754
                                </a>
                            </div>
                            <div className="ecx-trust animate-up">
                                <span className="ecx-trust-item">{Icon.check} Über 11 Jahre Erfahrung</span>
                                <span className="ecx-trust-item">{Icon.check} Alles aus einer Hand</span>
                                <span className="ecx-trust-item">{Icon.check} Herstellerneutrale Beratung</span>
                                <span className="ecx-trust-item">{Icon.check} Festpreis vor Projektstart</span>
                            </div>
                        </div>
                        <div className="ecx-hero-media animate-up">
                            <img
                                src="/leistungen/ecommerce/hero-ecommerce.svg"
                                alt="E-Commerce-Ökosystem: Online-Shop verbunden mit Zahlung, Versand, Analytics, Automatisierung und SEO"
                                width={1200}
                                height={720}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* LOGO STRIP */}
            <section className="ecx-logostrip light-bg">
                <div className="container">
                    <p className="ecx-logostrip-label">Wir entwickeln auf der Plattform, die zu Ihrem Geschäft passt</p>
                    <div className="ecx-logos animate-up">
                        {platforms.map((p) => (
                            <span key={p.name} className="ecx-logo">
                                <img src={p.logo} alt={`${p.name} Logo`} width={30} height={30} loading="lazy" />
                                <span>{p.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES (Full-Cycle) — promoted, with detail lightboxes */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Was wir übernehmen</p>
                        <h2 className="section-title animate-up">Full-Cycle: von der Idee bis zum Umsatz.</h2>
                        <p className="section-desc animate-up">Von der Strategie bis zum laufenden Marketing. Ob neuer Shop, Umzug oder Ausbau Ihres bestehenden. Tippen Sie auf einen Bereich für die Details.</p>
                    </div>
                    <EcomServices />
                </div>
            </section>

            {/* DARK: TEAM */}
            <section className="ecx-dark section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Ein Team statt vieler Schnittstellen</p>
                        <h2 className="section-title animate-up">Vier Disziplinen, ein eingespieltes Team.</h2>
                        <p className="section-desc animate-up">Klein, erfahren und aufeinander eingespielt. Über 11 Jahre Projekterfahrung aus ganz unterschiedlichen Branchen fließen direkt in Ihren Shop.</p>
                    </div>
                    <div className="ecx-team-grid">
                        {team.map((t, i) => (
                            <div key={t.role} className={`ecx-team-card animate-up delay-${(i % 4) + 1}`}>
                                <div className="ecx-team-icon">{t.icon}</div>
                                <h3>{t.role}</h3>
                                <p>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUTOMATIONS */}
            <section className="section light-bg">
                <div className="container">
                    <div className="two-col-layout items-center">
                        <div className="text-col">
                            <p className="section-kicker animate-up">Automatisierung</p>
                            <h2 className="section-title animate-up">Ihr Shop arbeitet, auch wenn Sie es nicht tun.</h2>
                            <p className="large-text animate-up">Wir richten die Abläufe ein, die den größten Unterschied machen. Sie nehmen Ihnen täglich Handarbeit ab und holen Umsatz zurück, der sonst liegen bleibt.</p>
                        </div>
                        <div className="visual-col">
                            <div className="ecx-auto-grid" style={{ marginTop: 0 }}>
                                {automations.map((a, i) => (
                                    <div key={a.title} className={`ecx-auto-item animate-up delay-${(i % 2) + 1}`}>
                                        <div className="ecx-auto-icon">{a.icon}</div>
                                        <div>
                                            <h3>{a.title}</h3>
                                            <p>{a.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLATFORMS */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Plattformen</p>
                        <h2 className="section-title animate-up">Das richtige System für Ihr Geschäft.</h2>
                        <p className="section-desc animate-up">Wir sind an kein System gebunden und verdienen nichts an Lizenzen. Wir empfehlen das, was zu Ihnen passt.</p>
                    </div>
                    <div className="ecx-platforms">
                        {platforms.map((p, i) => (
                            <div key={p.name} className={`ecx-platform-card animate-up delay-${(i % 4) + 1}`}>
                                <div className="ecx-platform-logo">
                                    <img src={p.logo} alt={`${p.name} Logo`} width={34} height={34} loading="lazy" />
                                </div>
                                <h3>{p.name}</h3>
                                <span className="ecx-platform-tag">{p.tag}</span>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="ecx-platform-note animate-up">Für jede Plattform folgt eine eigene Detailseite mit Beispielen und Leistungen.</p>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section light-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">So läuft es ab</p>
                        <h2 className="section-title animate-up">Klarer Weg, verbindlicher Festpreis.</h2>
                    </div>
                    <div className="ecx-timeline">
                        {process.map((p, i) => (
                            <div key={p.title} className={`ecx-tl-step animate-up delay-${(i % 3) + 1}`}>
                                <div className="ecx-tl-num">{i + 1}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STAT BAND */}
            <section className="ecx-statband section">
                <div className="container">
                    <div className="ecx-statband-grid">
                        <div className="animate-up">
                            <span className="ecx-stat-value">+8,4%</span>
                            <span className="ecx-stat-label">mehr Conversion je 0,1 s schnellerer mobiler Ladezeit (Deloitte, 2020)</span>
                        </div>
                        <div className="animate-up delay-1">
                            <span className="ecx-stat-value">~70%</span>
                            <span className="ecx-stat-label">der Warenkörbe werden im Handel im Schnitt abgebrochen. Optimierung lohnt sich (Baymard)</span>
                        </div>
                        <div className="animate-up delay-2">
                            <span className="ecx-stat-value">~60%</span>
                            <span className="ecx-stat-label">des E-Commerce-Umsatzes entstehen mobil. Mobile zuerst ist Pflicht (Statista, 2023)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAIN vs GAIN — moved to the bottom as reinforcement */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Der Unterschied</p>
                        <h2 className="section-title animate-up">Ein Shop ist nur dann gut, wenn er verkauft.</h2>
                        <p className="section-desc animate-up">Die meisten Shop-Probleme kosten täglich Umsatz, ohne dass es jemand merkt. Genau da setzen wir an.</p>
                    </div>
                    <div className="ecx-compare">
                        <div className="ecx-compare-card ecx-compare-pain animate-up">
                            <h3>Ohne das richtige Team</h3>
                            <ul className="ecx-compare-list">
                                <li><span className="ecx-compare-icon">{Icon.x}</span> Der Shop lädt langsam, und Besucher springen ab, bevor sie kaufen</li>
                                <li><span className="ecx-compare-icon">{Icon.x}</span> Drei Dienstleister, und am Ende verantwortet niemand das Ergebnis</li>
                                <li><span className="ecx-compare-icon">{Icon.x}</span> Produkttexte, die weder verkaufen noch bei Google auftauchen</li>
                                <li><span className="ecx-compare-icon">{Icon.x}</span> Bestände, Feeds und Rechnungen müssen von Hand gepflegt werden</li>
                                <li><span className="ecx-compare-icon">{Icon.x}</span> Einmal gebaut, dann vergessen, ohne Marketing und ohne Wachstum</li>
                            </ul>
                        </div>
                        <div className="ecx-compare-card ecx-compare-gain animate-up delay-1">
                            <h3>Mit uns</h3>
                            <ul className="ecx-compare-list">
                                <li><span className="ecx-compare-icon">{Icon.check}</span> Schnelle Ladezeiten und grüne Core Web Vitals, also mehr Conversion</li>
                                <li><span className="ecx-compare-icon">{Icon.check}</span> Ein Team und ein Ansprechpartner, von Anfang bis Ende</li>
                                <li><span className="ecx-compare-icon">{Icon.check}</span> Texte, die verkaufen und bei Google gefunden werden, über das ganze Sortiment</li>
                                <li><span className="ecx-compare-icon">{Icon.check}</span> Automatisierungen, die Ihnen täglich Arbeit abnehmen</li>
                                <li><span className="ecx-compare-icon">{Icon.check}</span> Marketing, das weiterläuft und den Umsatz wachsen lässt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* GEO answer + sources */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was bedeutet Full-Cycle E-Commerce-Entwicklung?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Full-Cycle E-Commerce-Entwicklung heißt, dass ein einziges Team <strong>alle Phasen eines Online-Shops</strong> übernimmt: Strategie und Beratung, Design, Entwicklung, Texte, Marketing, Automatisierung und die laufende Betreuung. Bei uns ist dieses Team klein und erfahren, mit <strong>Entwicklern, Designern, Textern und Marketing-Spezialisten und über 11 Jahren Projekterfahrung</strong>. Wir arbeiten herstellerneutral mit Shopify, Shopware 6, WooCommerce und Custom- oder Headless-Plattformen und betreuen neue Shops genauso wie die Erweiterung bestehender.</p>
                    </div>
                    <ServiceMeta />
                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Deloitte und Google, „Milliseconds Make Millions" (2020): 0,1 s schnellere mobile Ladezeit führten zu 8,4 % mehr Conversion und 9,2 % höherem durchschnittlichen Bestellwert im Handel. <a href="https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf" rel="nofollow noopener" target="_blank">deloitte.com</a></li>
                            <li>Baymard Institute, Cart Abandonment Rate Statistics: im Schnitt 70,22 % über 50 Studien. <a href="https://baymard.com/lists/cart-abandonment-rate" rel="nofollow noopener" target="_blank">baymard.com/lists/cart-abandonment-rate</a></li>
                            <li>Handelsverband Deutschland (HDE), Online-Monitor 2025: deutscher B2C-E-Commerce-Umsatz rund 88,8 Mrd. € im Jahr 2024. <a href="https://www.einzelhandel.de/online-monitor" rel="nofollow noopener" target="_blank">einzelhandel.de/online-monitor</a></li>
                            <li>Statista (2023): Mobile Commerce macht rund 60 % des weltweiten E-Commerce-Umsatzes aus. <a href="https://www.statista.com/chart/30588/share-of-mobile-e-commerce-in-all-e-commerce/" rel="nofollow noopener" target="_blank">statista.com</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zur E-Commerce-Entwicklung" items={faqItems} />
            <RelatedServices exclude="e-commerce-entwicklung" />
            <ServiceCta
                title="Lassen Sie uns über Ihren Shop sprechen."
                text="Kostenloses Erstgespräch. Wir schauen uns Ihr Vorhaben an, empfehlen das passende System und nennen Ihnen einen realistischen Rahmen. Ob Neubau, Umzug oder Erweiterung."
            />
        </>
    );
}
