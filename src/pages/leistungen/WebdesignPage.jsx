import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqSection from '../../components/FaqSection';
import RelatedServices from '../../components/RelatedServices';
import ServiceCta from '../../components/ServiceCta';
import { BUSINESS } from '../../lib/schema';

const faqItems = [
    { q: 'Wie lange dauert die Erstellung einer Website?', a: 'Ein One-Pager ist in 2-3 Wochen fertig, eine mehrseitige Website in 4-6 Wochen. Komplexere Projekte mit E-Commerce oder Mitgliederbereich dauern 6-10 Wochen. Der genaue Zeitrahmen hangt vom Umfang und Ihrem Feedback-Tempo ab.' },
    { q: 'Nutzen Sie Baukastensysteme wie Wix oder Squarespace?', a: 'Nein. Jede Website wird individuell entwickelt — das garantiert maximale Performance, volle Flexibilitat und unabhangigkeit von Plattform-Einschrankungen. Bei Bedarf setze ich ein CMS wie WordPress ein, damit Sie Inhalte selbst pflegen konnen.' },
    { q: 'Was bedeutet PageSpeed 100/100?', a: 'Google bewertet die Ladegeschwindigkeit jeder Website auf einer Skala von 0-100. Die meisten Agentur-Websites erreichen 30-60 Punkte. Meine Websites erreichen regelmassig 90-100 Punkte — das bedeutet sofortiges Laden, bessere Google-Rankings und hohere Conversion-Raten.' },
    { q: 'Ist die Website SEO-optimiert?', a: 'Ja. Jede Website enthalt eine SEO-Grundoptimierung: saubere URL-Struktur, Meta-Tags, strukturierte Daten, semantisches HTML, Bildoptimierung und Mobile-First-Entwicklung. Fur laufende SEO-Betreuung empfehle ich unser SEO-Paket.' },
    { q: 'Was passiert nach dem Launch?', a: 'Nach dem Go-live richte ich Conversion-Tracking und Analytics ein. Sie sehen sofort, wie Besucher Ihre Website nutzen. Auf Wunsch betreue ich Ihre Website langfristig mit Updates, Optimierungen und Content-Anderungen.' },
    { q: 'Kann ich die Website spater selbst bearbeiten?', a: 'Ja, wenn Sie das wunschen. Ich richte ein CMS ein und schule Sie in der Bedienung. Sie konnen Texte, Bilder und Seiten eigenstandig anpassen — ohne technische Kenntnisse.' },
];

export default function WebdesignPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign & Website-Entwicklung Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://website.hamburg/leistungen/webdesign',
        description: 'Professionelle Website-Entwicklung fur lokale Unternehmen in Hamburg. Individuelles Design, PageSpeed 100/100, Conversion-Optimierung.',
        offers: [
            { '@type': 'Offer', name: 'One-Pager', price: '2000', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Mehrseitige Website', price: '3000', priceCurrency: 'EUR' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Leistungen', href: '/leistungen' },
                        { label: 'Webdesign' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign & Entwicklung</p>
                    <h1 className="subpage-title animate-up">Professionelle Websites fur Unternehmen in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Ihre Website ist Ihr digitales Schaufenster — und oft der erste Eindruck, den potenzielle Kunden von Ihrem Unternehmen bekommen. In weniger als 3 Sekunden entscheidet ein Besucher, ob er bleibt oder geht. Ich sorge dafur, dass er bleibt — und anfragend.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Warum die meisten Firmenwebsites Kunden verlieren</h2>
                    <p className="animate-up">Eine langsame, unstrukturierte Website kostet Sie taglich potenzielle Kunden — ohne dass Sie es merken. Studien zeigen: 53% der mobilen Nutzer verlassen eine Seite, die langer als 3 Sekunden ladt. Gleichzeitig entscheiden Design und Struktur innerhalb von Millisekunden uber Vertrauen oder Absprung.</p>
                    <p className="animate-up">Die haufigsten Probleme, die ich bei Unternehmen in Hamburg sehe:</p>
                    <ul className="check-list animate-up">
                        <li>Ladezeiten von 5-10 Sekunden statt unter 1 Sekunde</li>
                        <li>Keine klare Handlungsaufforderung — Besucher wissen nicht, was sie tun sollen</li>
                        <li>Nicht mobiloptimiert — obwohl 60%+ der Zugriffe uber Smartphones kommen</li>
                        <li>Veraltetes Design, das Vertrauen zerstort statt aufzubauen</li>
                        <li>Kein Tracking — niemand weiss, ob die Website uberhaupt funktioniert</li>
                    </ul>

                    <h2 className="animate-up">Mein Ansatz: Website als Geschaftsinstrument</h2>
                    <p className="animate-up">Ich verkaufe kein hubsches Design. Ich baue ein Werkzeug, das messbar Kunden bringt. Jede Designentscheidung basiert auf Daten und bewiesenen Conversion-Prinzipien — nicht auf Geschmack.</p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Performance-First</h3>
                            <p>Jede Website wird fur maximale Geschwindigkeit gebaut. PageSpeed-Scores von 90-100 sind Standard, nicht Ausnahme. Das bedeutet bessere Rankings, niedrigere Absprungraten und mehr Conversions.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Architektur</h3>
                            <p>Bevor eine Zeile Code geschrieben wird, plane ich den Conversion-Pfad: Wo kommt der Besucher an? Was sieht er zuerst? Wie fuhre ich ihn zur Anfrage? Jedes Element hat eine Aufgabe.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Individueller Code</h3>
                            <p>Kein WordPress-Theme, kein Baukasten. Individuell entwickelter Code bedeutet volle Kontrolle uber Performance, Design und Funktionalitat. Keine Kompromisse.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO-Fundament</h3>
                            <p>Semantisches HTML, strukturierte Daten, optimierte Meta-Tags, schnelle Ladezeiten, saubere URLs — Ihre Website ist von Tag 1 fur Suchmaschinen optimiert.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was im Preis enthalten ist</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>One-Pager</h3>
                            <div className="sp-price-value">ab 2.000 &euro;</div>
                            <p>Kompakte Landingpage mit einem klaren Ziel. Ideal fur Dienstleister, Kampagnen oder als Einstieg.</p>
                            <ul className="sp-price-includes">
                                <li>1 Seite, vollstandig responsiv</li>
                                <li>Individuelles Design</li>
                                <li>Kontaktformular & Tracking</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>SSL & DSGVO-konform</li>
                                <li>PageSpeed 90-100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Mehrseitige Website</h3>
                            <div className="sp-price-value">ab 3.000 &euro;</div>
                            <p>Vollstandige Unternehmenswebsite mit Struktur fur Wachstum. CMS optional.</p>
                            <ul className="sp-price-includes">
                                <li>5+ Seiten</li>
                                <li>Individuelles Design & Konzept</li>
                                <li>CMS fur eigene Inhaltspflege</li>
                                <li>Blog / News optional</li>
                                <li>Erweiterte SEO-Optimierung</li>
                                <li>Conversion Tracking & Analytics</li>
                                <li>PageSpeed 90-100</li>
                                <li>Schulung zur Bedienung</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Prozess: Von der Idee zur fertigen Website</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgesprach & Analyse</strong><p>Wir besprechen Ihre Ziele, Zielgruppe und Wettbewerber. Ich analysiere Ihren Markt und identifiziere Chancen. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept & Wireframe</strong><p>Basierend auf der Analyse erstelle ich die Seitenstruktur und den Conversion-Pfad. Sie sehen genau, wie die Website aufgebaut sein wird, bevor das Design beginnt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design & Entwicklung</strong><p>Pixel-genaue Umsetzung mit Fokus auf Performance und Nutzererlebnis. Sie erhalten regelmasige Updates und konnen jederzeit Feedback geben.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Testing & Launch</strong><p>Umfangreiche Tests auf allen Geraten, Browsern und Geschwindigkeiten. Tracking-Setup, Go-live und Ubergabe mit Dokumentation.</p></div></div>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zu Webdesign & Entwicklung" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Lassen Sie uns uber Ihre neue Website sprechen. Kostenloses Erstgesprach — ich analysiere Ihre aktuelle Situation und zeige Ihnen konkret, was moglich ist." />
        </>
    );
}
