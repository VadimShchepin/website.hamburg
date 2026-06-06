import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Website erstellen lassen Hamburg | Professionell ab 2.000 €',
    description: 'Website erstellen lassen in Hamburg: individuell programmiert, Lighthouse 90–100, Festpreis ab 2.000 €. Keine Baukästen, keine versteckten Kosten — fertig in 2–6 Wochen.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/website-erstellen-lassen',
    },
    openGraph: {
        title: 'Website erstellen lassen Hamburg | Professionell ab 2.000 €',
        description: 'Website erstellen lassen in Hamburg: individuell programmiert, Lighthouse 90–100, Festpreis ab 2.000 €. Keine Baukästen, keine versteckten Kosten.',
        url: 'https://webseite.hamburg/leistungen/website-erstellen-lassen',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet es, eine Website erstellen zu lassen?', a: 'Ein One-Pager startet ab 2.000 €, eine mehrseitige Website ab 3.000 €. Der finale Preis hängt vom Umfang ab — aber Sie erhalten vor Projektstart ein verbindliches Festpreis-Angebot. Keine versteckten Kosten, keine Überraschungen.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Ein One-Pager ist in 2–3 Wochen fertig, eine mehrseitige Website in 4–6 Wochen. Der genaue Zeitrahmen hängt vom Umfang und Ihrem Feedback-Tempo ab. Den konkreten Zeitplan besprechen wir im Erstgespräch.' },
    { q: 'Baukasten, WordPress oder individuell programmiert — was ist besser?', a: 'Baukästen wie Wix oder Squarespace sind günstig im Start, aber durch Templates begrenzt und oft langsam. WordPress-Themes sind flexibler, brauchen aber Pflege und Plugins. Individuell programmierter Code liefert die beste Performance (Lighthouse 90–100), volle Gestaltungsfreiheit und keine Plattform-Abhängigkeit — die richtige Wahl für Unternehmen mit Anspruch. Genau das baue ich.' },
    { q: 'Nutzen Sie WordPress oder Baukastensysteme?', a: 'Standardmäßig nein — jede Website wird individuell programmiert. Das garantiert maximale Performance, volle Flexibilität und Unabhängigkeit von Plattform-Einschränkungen. Wenn Sie Inhalte selbst pflegen wollen, binde ich ein CMS ein.' },
    { q: 'Ist die Website SEO-optimiert?', a: 'Ja. Jede Website enthält eine SEO-Grundoptimierung: saubere URL-Struktur, Meta-Tags, strukturierte Daten (Schema.org), semantisches HTML, Bildoptimierung und Mobile-First-Entwicklung. Für laufende SEO-Betreuung gibt es separate Pakete.' },
    { q: 'Kann ich die Website selbst bearbeiten?', a: 'Ja, wenn Sie das wünschen. Ich richte ein CMS ein und schule Sie in der Bedienung. Sie können Texte, Bilder und Seiten eigenständig anpassen, ohne technische Kenntnisse.' },
    { q: 'Was ist im Preis enthalten?', a: 'Konzeption, individuelles Design, Entwicklung, SEO-Grundoptimierung, SSL-Zertifikat, DSGVO-konforme Umsetzung, Kontaktformular, Tracking-Setup (GA4), Testing auf allen Geräten und eine Einweisung nach Launch. Hosting und Domain sind nicht enthalten.' },
];

export default function WebsiteErstellenLassenPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Website erstellen lassen Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/website-erstellen-lassen',
        description: 'Professionelle Website erstellen lassen in Hamburg. Individuell programmiert, Lighthouse 90–100, Festpreis ab 2.000 €.',
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
                        Die Auswahl ist unübersichtlich: Agenturen mit unklaren Preisen, Freelancer mit wochenlanger Funkstille, Baukästen ohne Individualität. Bei mir bekommen Sie eine individuell programmierte Website mit Festpreis, klarem Zeitplan und messbaren Ergebnissen.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet es, eine Website erstellen zu lassen?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Website erstellen zu lassen kostet bei mir <strong>ab 2.000 €</strong> (One-Pager) bzw. <strong>ab 3.000 €</strong> (mehrseitig), jeweils als verbindlicher Festpreis vor Projektstart. Sie wird individuell programmiert — kein Baukasten, kein gekauftes Theme — und erreicht Lighthouse-Werte von 90–100. Ein One-Pager ist in 2–3 Wochen fertig, eine mehrseitige Website in 4–6 Wochen.</p>
                    </div>

                    <p className="animate-up">Transparente Preise statt vager Schätzungen. Sie wissen vor Projektstart genau, was Sie investieren und was Sie dafür bekommen.</p>
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
                                <li>Lighthouse 90–100</li>
                                <li>Fertig in 2–3 Wochen</li>
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
                                <li>Conversion-Tracking & Analytics (GA4)</li>
                                <li>Lighthouse 90–100</li>
                                <li>Schulung zur Bedienung</li>
                                <li>Fertig in 4–6 Wochen</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Baukasten, WordPress oder individuell programmiert?</h2>
                    <p className="animate-up">Drei Wege führen zu einer Website. Sie unterscheiden sich vor allem in Performance, Freiheit und langfristigen Kosten:</p>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Option</th><th>Performance</th><th>Individualität</th><th>Geeignet für</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Baukasten (Wix, Squarespace)</th><td>mittel</td><td>durch Templates begrenzt</td><td>Hobby, schneller Start</td></tr>
                                <tr><th>WordPress-Theme</th><td>mittel, pflegeabhängig</td><td>Theme-abhängig</td><td>Standard-Websites</td></tr>
                                <tr><th>Individuell programmiert</th><td>sehr hoch (Lighthouse 90–100)</td><td>unbegrenzt</td><td>Unternehmen mit Anspruch</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="animate-up">Was eine gute Website ausmacht</h2>
                    <p className="animate-up">Eine Website, die Kunden bringt, braucht mehr als hübsches Design. Vier Prinzipien machen den Unterschied:</p>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Performance-First</h3>
                            <p>Lighthouse 90–100 und grüne Core Web Vitals (LCP unter 2,5 s, INP unter 200 ms, CLS unter 0,1) sind kein Versprechen, sondern messbarer Standard. Schnelle Seiten bedeuten weniger Absprünge und bessere Rankings.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Architektur</h3>
                            <p>Jedes Element hat eine Aufgabe. Vom ersten Blick bis zum Kontaktformular führe ich Besucher gezielt zur Anfrage — mit bewährten Conversion-Prinzipien statt Bauchgefühl.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Individueller Code (kein Baukasten)</h3>
                            <p>Kein WordPress-Theme, kein Wix, kein Squarespace. Individuell programmierter Code gibt volle Kontrolle über Performance, Design und Funktionalität, ohne Plattform-Abhängigkeit.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO-Fundament</h3>
                            <p>Semantisches HTML, strukturierte Daten (Schema.org), optimierte Meta-Tags, saubere URLs und schnelle Ladezeiten. Ihre Website ist ab Tag 1 für Google optimiert und bereit, gefunden zu werden.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Ablauf: von der Anfrage zur fertigen Website</h2>
                    <p className="animate-up">Klarer Prozess, keine Überraschungen. In vier Schritten von der ersten Anfrage zur fertigen, performanten Website:</p>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch & Analyse</strong><p>Wir besprechen Ihre Ziele, Zielgruppe und den Wettbewerb. Ich analysiere Ihre aktuelle Situation und zeige konkret, was möglich ist. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept & Struktur</strong><p>Auf Basis der Analyse erstelle ich Seitenstruktur, Conversion-Pfad und ein Wireframe. Sie sehen den Aufbau, bevor das Design beginnt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design & Entwicklung</strong><p>Pixel-genaue Umsetzung mit Fokus auf Performance und Nutzererlebnis. Regelmäßige Updates und Feedback-Runden — Sie sind jederzeit eingebunden.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Testing & Launch</strong><p>Tests auf allen Geräten und Browsern. Tracking-Setup, Performance-Optimierung, Go-live und Übergabe mit Einweisung.</p></div></div>
                    </div>

                    <h2 className="animate-up">Warum Unternehmen in Hamburg mir vertrauen</h2>
                    <p className="animate-up">Ich arbeite seit über 10 Jahren mit Unternehmen in Hamburg und liefere Ergebnisse, die messbar sind. Kein Agentur-Overhead, klare Ansprache, nachvollziehbare Resultate.</p>
                    <ul className="check-list animate-up">
                        <li>Lighthouse 90–100 — nachweisbar bei jedem Projekt</li>
                        <li>Über 10 Jahre Erfahrung in Webentwicklung und Conversion-Optimierung</li>
                        <li>Transparente Festpreise — Sie wissen vorher, was es kostet</li>
                        <li>Referenzprojekt <Link href="/referenzen/blitz-hamburg">Blitz Hamburg</Link>: komplette Website mit messbaren Conversion-Steigerungen</li>
                    </ul>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Google, „The Need for Mobile Speed" (2016): 53 % Abbruch bei Ladezeit über 3 s. <a href="https://www.thinkwithgoogle.com/" rel="nofollow noopener" target="_blank">thinkwithgoogle.com</a></li>
                            <li>Google, Core Web Vitals — Schwellenwerte für LCP, INP, CLS. <a href="https://web.dev/articles/vitals" rel="nofollow noopener" target="_blank">web.dev/articles/vitals</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zum Website erstellen lassen" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Lassen Sie uns über Ihre neue Website sprechen. Kostenloses Erstgespräch — ich analysiere Ihre aktuelle Situation und zeige Ihnen, was möglich ist." />
        </>
    );
}
