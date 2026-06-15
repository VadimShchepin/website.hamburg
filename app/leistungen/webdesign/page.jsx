import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Webdesign Hamburg | Schnelle Websites ab 2.000 €',
    description: 'Individuelles Webdesign für Unternehmen in Hamburg: programmiert statt Baukasten, Lighthouse 90–100, gute Core Web Vitals, Conversion-Optimierung. One-Pager ab 2.000 €.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign',
    },
    openGraph: {
        title: 'Webdesign Hamburg | Schnelle Websites ab 2.000 €',
        description: 'Individuelles Webdesign für Unternehmen in Hamburg: programmiert statt Baukasten, Lighthouse 90–100, gute Core Web Vitals, Conversion-Optimierung.',
        url: 'https://webseite.hamburg/leistungen/webdesign',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine professionelle Website?', a: 'Ein One-Pager startet ab 2.000 €, eine mehrseitige Website ab 3.000 €. Sie erhalten vor Projektstart ein verbindliches Festpreis-Angebot — keine versteckten Kosten. Der finale Preis hängt vom Umfang ab (Seitenzahl, CMS, Shop, Sonderfunktionen).' },
    { q: 'Wie lange dauert die Erstellung einer Website?', a: 'Ein One-Pager ist in 2–3 Wochen fertig, eine mehrseitige Website in 4–6 Wochen. Komplexere Projekte mit Shop oder Mitgliederbereich dauern 6–10 Wochen. Der genaue Zeitrahmen hängt vom Umfang und Ihrem Feedback-Tempo ab.' },
    { q: 'Nutzen Sie Baukastensysteme wie Wix oder Squarespace?', a: 'Nein. Jede Website wird individuell programmiert. Das garantiert maximale Performance, volle gestalterische Freiheit und Unabhängigkeit von Plattform-Einschränkungen. Wenn Sie Inhalte selbst pflegen wollen, binde ich ein CMS wie WordPress oder einen Headless-Ansatz ein.' },
    { q: 'Was bedeutet ein Lighthouse-Score von 90–100?', a: 'Lighthouse ist Googles Werkzeug zur Bewertung von Performance, SEO und Zugänglichkeit, auf einer Skala von 0–100 (sichtbar in den Chrome DevTools und in PageSpeed Insights). Viele Agentur-Websites erreichen nur 30–60 Punkte. Meine Seiten liegen regelmäßig bei 90–100 — das bedeutet schnelles Laden, bessere Rankings und höhere Conversion.' },
    { q: 'Was sind Core Web Vitals?', a: 'Core Web Vitals sind Googles offizielle Kennzahlen für Nutzererlebnis: LCP (Ladezeit des größten Elements, gut: unter 2,5 s), INP (Reaktionszeit auf Eingaben, gut: unter 200 ms) und CLS (Layout-Stabilität, gut: unter 0,1). Sie fließen in das Google-Ranking ein. Jede Website baue ich so, dass sie alle drei Werte im grünen Bereich erreicht.' },
    { q: 'Ist die Website SEO-optimiert?', a: 'Ja. Jede Website enthält eine SEO-Grundoptimierung: saubere URL-Struktur, Meta-Tags, strukturierte Daten (Schema.org), semantisches HTML, Bildoptimierung und Mobile-First-Entwicklung. Für laufende Betreuung gibt es das separate SEO-Paket.' },
    { q: 'Kann ich die Website später selbst bearbeiten?', a: 'Ja, wenn Sie das wünschen. Ich richte ein CMS ein und schule Sie in der Bedienung. Sie können Texte, Bilder und Seiten eigenständig anpassen, ohne technische Kenntnisse.' },
];

export default function WebdesignPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign & Website-Entwicklung Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign',
        description: 'Individuelles Webdesign für Unternehmen in Hamburg: programmiert statt Baukasten, Lighthouse 90–100, gute Core Web Vitals, Conversion-Optimierung.',
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
            { '@type': 'ListItem', position: 3, name: 'Webdesign', item: 'https://webseite.hamburg/leistungen/webdesign' },
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
                        { label: 'Webdesign' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign & Entwicklung</p>
                    <h1 className="subpage-title animate-up">Professionelle Websites für Unternehmen in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Ihre Website ist oft der erste Eindruck, den ein potenzieller Kunde von Ihrem Unternehmen bekommt. Wenige Sekunden entscheiden, ob er bleibt oder abspringt. Ich sorge dafür, dass er bleibt und anfragt.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet professionelles Webdesign?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine professionelle Website kostet bei mir <strong>ab 2.000 €</strong> (One-Pager) bzw. <strong>ab 3.000 €</strong> (mehrseitig), jeweils zum Festpreis. Sie wird individuell programmiert — kein Baukasten, kein gekauftes WordPress-Theme — und erreicht Lighthouse-Werte von 90–100 sowie gute Core Web Vitals. Ein One-Pager ist in 2–3 Wochen fertig, eine mehrseitige Website in 4–6 Wochen.</p>
                    </div>

                    <h2 className="animate-up">Warum viele Firmenwebsites Kunden verlieren</h2>
                    <p className="animate-up">Eine <a href="/wissen/warum-langsame-websites-kunden-kosten">langsame, unstrukturierte Website kostet täglich Anfragen</a>, ohne dass Sie es merken. Google fand bereits 2016: 53 % der mobilen Nutzer verlassen eine Seite, die länger als 3 Sekunden lädt. Gleichzeitig entscheidet das Design in Millisekunden über Vertrauen oder Absprung.</p>
                    <p className="animate-up">Die häufigsten Probleme, die ich bei Unternehmen in Hamburg sehe:</p>
                    <ul className="check-list animate-up">
                        <li>Ladezeiten von 5–10 Sekunden statt unter 1 Sekunde</li>
                        <li>Keine klare Handlungsaufforderung — Besucher wissen nicht, was sie tun sollen</li>
                        <li>Nicht mobiloptimiert, obwohl ein Großteil der Zugriffe über Smartphones kommt</li>
                        <li>Veraltetes Design, das Vertrauen zerstört statt aufbaut</li>
                        <li>Kein Tracking — niemand weiß, ob die Website überhaupt funktioniert</li>
                    </ul>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">53%</span>
                            <span className="subpage-stat-label">verlassen mobile Seiten, die länger als 3 s laden (Google, 2016)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">90–100</span>
                            <span className="subpage-stat-label">Lighthouse-Score meiner Websites — viele Agentur-Seiten liegen bei 30–60</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">&lt; 2,5 s</span>
                            <span className="subpage-stat-label">LCP-Zielwert für gute Core Web Vitals (Google)</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Was hinter jeder Designentscheidung steckt</h2>
                    <p className="animate-up">Jede Designentscheidung folgt Daten und bewährten <a href="/wissen/website-conversion-optimierung">Conversion-Prinzipien</a> — nicht Geschmack. Wer einen Online-Shop braucht, findet das passende Angebot unter <a href="/leistungen/e-commerce-entwicklung">E-Commerce-Entwicklung</a>, für laufende Sichtbarkeit gibt es die <a href="/leistungen/seo">SEO-Betreuung</a>.</p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Performance-First</h3>
                            <p>Jede Website wird auf Geschwindigkeit gebaut. Lighthouse-Werte von 90–100 und grüne Core Web Vitals (LCP, INP, CLS) sind Standard, nicht Ausnahme — das senkt Absprünge und verbessert das Ranking.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Architektur</h3>
                            <p>Vor der ersten Codezeile plane ich den Conversion-Pfad: Wo kommt der Besucher an? Was sieht er zuerst? Wie führe ich ihn zur Anfrage? Jedes Element hat eine Aufgabe.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Individueller Code</h3>
                            <p>Kein WordPress-Theme, kein Baukasten. Individuell programmierter Code gibt volle Kontrolle über Performance, Design und Funktionalität — ohne Plattform-Abhängigkeit.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO-Fundament</h3>
                            <p>Semantisches HTML, strukturierte Daten (Schema.org), optimierte Meta-Tags, saubere URLs und schnelle Ladezeiten. Ihre Website ist ab Tag 1 für Google und KI-Suche aufbereitet.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was im Preis enthalten ist</h2>
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
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Prozess: von der Idee zur fertigen Website</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch & Analyse</strong><p>Wir besprechen Ziele, Zielgruppe und Wettbewerber. Ich analysiere Ihren Markt und zeige Chancen auf. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept & Wireframe</strong><p>Auf Basis der Analyse erstelle ich Seitenstruktur und Conversion-Pfad. Sie sehen den Aufbau, bevor das Design beginnt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design & Entwicklung</strong><p>Saubere Umsetzung mit Fokus auf Performance und Nutzererlebnis. Sie erhalten regelmäßige Updates und geben jederzeit Feedback.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Testing & Launch</strong><p>Tests auf allen Geräten und Browsern, Tracking-Setup, Go-live und Übergabe mit Dokumentation.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Google, „The Need for Mobile Speed" (2016): 53 % Abbruch bei Ladezeit über 3 s. <a href="https://www.thinkwithgoogle.com/" rel="nofollow noopener" target="_blank">thinkwithgoogle.com</a></li>
                            <li>Google, Core Web Vitals — Schwellenwerte für LCP, INP, CLS. <a href="https://web.dev/articles/vitals" rel="nofollow noopener" target="_blank">web.dev/articles/vitals</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zu Webdesign & Entwicklung" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Lassen Sie uns über Ihre neue Website sprechen. Kostenloses Erstgespräch — ich analysiere Ihre aktuelle Situation und zeige Ihnen konkret, was möglich ist." />
        </>
    );
}
