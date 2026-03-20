import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Website erstellen lassen Hamburg | Professionell ab 2.000 Euro',
    description: 'Website erstellen lassen in Hamburg: individuelles Design, PageSpeed 100/100, transparente Preise ab 2.000 Euro. Keine Baukästen, keine versteckten Kosten — fertig in 2-6 Wochen.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/website-erstellen-lassen',
    },
    openGraph: {
        title: 'Website erstellen lassen Hamburg | Professionell ab 2.000 Euro',
        description: 'Website erstellen lassen in Hamburg: individuelles Design, PageSpeed 100/100, transparente Preise ab 2.000 Euro. Keine Baukästen, keine versteckten Kosten.',
        url: 'https://webseite.hamburg/leistungen/website-erstellen-lassen',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine professionelle Website?', a: 'Ein One-Pager startet ab 2.000 Euro, eine mehrseitige Website ab 3.000 Euro. Der finale Preis hängt vom Umfang ab — aber Sie erhalten vor Projektstart ein verbindliches Festpreis-Angebot. Keine versteckten Kosten, keine Überraschungen.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Ein One-Pager ist in 2-3 Wochen fertig, eine mehrseitige Website in 4-6 Wochen. Der genaue Zeitrahmen hängt vom Umfang und Ihrem Feedback-Tempo ab. Den konkreten Zeitplan besprechen wir im Erstgespräch.' },
    { q: 'Nutzen Sie WordPress oder Baukastensysteme?', a: 'Nein. Jede Website wird individuell mit Code entwickelt — das garantiert maximale Performance, volle Flexibilität und Unabhängigkeit von Plattform-Einschränkungen. Bei Bedarf setze ich ein CMS ein, damit Sie Inhalte selbst pflegen können.' },
    { q: 'Ist die Website SEO-optimiert?', a: 'Ja. Jede Website enthält eine SEO-Grundoptimierung: saubere URL-Struktur, Meta-Tags, strukturierte Daten, semantisches HTML, Bildoptimierung und Mobile-First-Entwicklung. Für laufende SEO-Betreuung biete ich separate Pakete an.' },
    { q: 'Kann ich die Website selbst bearbeiten?', a: 'Ja, wenn Sie das wünschen. Ich richte ein CMS ein und schule Sie in der Bedienung. Sie können Texte, Bilder und Seiten eigenständig anpassen — ohne technische Kenntnisse.' },
    { q: 'Was ist im Preis enthalten?', a: 'Konzeption, individuelles Design, Entwicklung, SEO-Grundoptimierung, SSL-Zertifikat, DSGVO-konforme Umsetzung, Kontaktformular, Tracking-Setup, Testing auf allen Geräten und eine Einweisung nach Launch. Hosting und Domain sind nicht enthalten.' },
];

export default function WebsiteErstellenLassenPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Website erstellen lassen Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/website-erstellen-lassen',
        description: 'Professionelle Website erstellen lassen in Hamburg. Individuelles Design, PageSpeed 100/100, transparente Preise ab 2.000 Euro.',
        offers: [
            { '@type': 'Offer', name: 'One-Pager', price: '2000', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Mehrseitige Website', price: '3000', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Website erstellen lassen', item: 'https://webseite.hamburg/leistungen/website-erstellen-lassen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Leistungen', href: '/leistungen' },
                        { label: 'Website erstellen lassen' },
                    ]} />
                    <p className="section-kicker animate-up">Website erstellen lassen</p>
                    <h1 className="subpage-title animate-up">Website erstellen lassen in Hamburg — professionell, schnell, messbar.</h1>
                    <p className="subpage-intro animate-up">
                        Sie suchen jemanden, der Ihre Website professionell umsetzt — aber die Auswahl ist unübersichtlich. Agenturen mit unklaren Preisen, Freelancer mit wochenlanger Funkstille, Baukästen ohne Individualität. Bei mir bekommen Sie eine individuell entwickelte Website mit transparentem Festpreis, klarem Zeitplan und messbaren Ergebnissen. Keine Templates, keine versteckten Kosten.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet es, eine Website erstellen zu lassen?</h2>
                    <p className="animate-up">Transparente Preise statt vager Schätzungen. Sie wissen vor Projektstart genau, was Sie investieren — und was Sie dafür bekommen.</p>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>One-Pager</h3>
                            <div className="sp-price-value">ab 2.000 &euro;</div>
                            <p>Kompakte Landingpage mit einem klaren Ziel. Ideal für Dienstleister, Kampagnen oder als Einstieg.</p>
                            <ul className="sp-price-includes">
                                <li>1 Seite, vollständig responsiv</li>
                                <li>Individuelles Design</li>
                                <li>Kontaktformular & Tracking</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>SSL & DSGVO-konform</li>
                                <li>PageSpeed 90-100</li>
                                <li>Fertig in 2-3 Wochen</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Mehrseitige Website</h3>
                            <div className="sp-price-value">ab 3.000 &euro;</div>
                            <p>Vollständige Unternehmenswebsite mit Struktur für Wachstum. CMS optional.</p>
                            <ul className="sp-price-includes">
                                <li>5+ Seiten</li>
                                <li>Individuelles Design & Konzept</li>
                                <li>CMS für eigene Inhaltspflege</li>
                                <li>Blog / News optional</li>
                                <li>Erweiterte SEO-Optimierung</li>
                                <li>Conversion Tracking & Analytics</li>
                                <li>PageSpeed 90-100</li>
                                <li>Schulung zur Bedienung</li>
                                <li>Fertig in 4-6 Wochen</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Was macht eine gute Website aus?</h2>
                    <p className="animate-up">Eine Website, die Kunden bringt, braucht mehr als hübsches Design. Diese vier Prinzipien machen den Unterschied:</p>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Performance-First</h3>
                            <p>PageSpeed 100/100 ist kein Marketing-Versprechen, sondern messbarer Standard. Schnelle Ladezeiten bedeuten weniger Absprünge, bessere Rankings und mehr Anfragen. Jede Millisekunde zählt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Architektur</h3>
                            <p>Jedes Element auf Ihrer Website hat eine Aufgabe. Vom ersten Blick bis zum Kontaktformular führe ich Besucher gezielt zur Anfrage — mit bewiesenen Conversion-Prinzipien statt Bauchgefühl.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Individueller Code (kein Baukasten)</h3>
                            <p>Kein WordPress-Theme, kein Wix, kein Squarespace. Individuell geschriebener Code gibt volle Kontrolle über Performance, Design und Funktionalität. Keine Kompromisse, keine Plattform-Abhängigkeit.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO-Fundament</h3>
                            <p>Semantisches HTML, strukturierte Daten, optimierte Meta-Tags, saubere URLs und schnelle Ladezeiten — Ihre Website ist ab Tag 1 für Google optimiert und bereit, gefunden zu werden.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Ablauf: Von der Anfrage zur fertigen Website</h2>
                    <p className="animate-up">Klarer Prozess, keine Überraschungen. In vier Schritten von der ersten Anfrage zur fertigen, performanten Website:</p>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch & Analyse</strong><p>Wir besprechen Ihre Ziele, Zielgruppe und den Wettbewerb. Ich analysiere Ihre aktuelle Situation und zeige Ihnen konkret, was möglich ist. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept & Struktur</strong><p>Basierend auf der Analyse erstelle ich die Seitenstruktur, den Conversion-Pfad und ein Wireframe. Sie sehen genau, wie die Website aufgebaut wird, bevor das Design beginnt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design & Entwicklung</strong><p>Pixel-genaue Umsetzung mit Fokus auf Performance und Nutzererlebnis. Regelmäßige Updates und Feedback-Runden — Sie sind jederzeit eingebunden.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Testing & Launch</strong><p>Tests auf allen Geräten und Browsern. Tracking-Setup, PageSpeed-Optimierung, Go-live und Übergabe mit Einweisung. Ihre Website ist startklar.</p></div></div>
                    </div>

                    <h2 className="animate-up">Warum Unternehmen in Hamburg mir vertrauen</h2>
                    <p className="animate-up">Ich arbeite seit über 10 Jahren mit Unternehmen in Hamburg zusammen — und liefere Ergebnisse, die messbar sind. Kein Agentur-Overhead, kein Bullshit, nur Resultate.</p>
                    <ul className="check-list animate-up">
                        <li>PageSpeed 100/100 — nachweisbar bei jedem Projekt</li>
                        <li>Über 10 Jahre Erfahrung in Webentwicklung und Conversion-Optimierung</li>
                        <li>Transparente Festpreise — Sie wissen vorher, was es kostet</li>
                        <li>Referenzprojekt <Link href="/referenzen/blitz-hamburg">Blitz Hamburg</Link>: komplette Website mit messbaren Conversion-Steigerungen</li>
                    </ul>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zum Website erstellen lassen" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Lassen Sie uns über Ihre neue Website sprechen. Kostenloses Erstgespräch — ich analysiere Ihre aktuelle Situation und zeige Ihnen, was möglich ist." />
        </>
    );
}
