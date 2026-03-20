import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Webdesign fur Arztpraxen Hamburg | DSGVO-konforme Praxis-Websites',
    description: 'Professionelle Websites fur Arztpraxen und Zahnarzte in Hamburg. DSGVO-konform, schnell, mobiloptimiert. Mehr Patienten durch Google-Sichtbarkeit. Ab 2.000 Euro.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-aerzte',
    },
    openGraph: {
        title: 'Webdesign fur Arztpraxen Hamburg | DSGVO-konforme Praxis-Websites',
        description: 'Professionelle Websites fur Arztpraxen und Zahnarzte in Hamburg. DSGVO-konform, schnell, mobiloptimiert. Mehr Patienten durch Google-Sichtbarkeit.',
        url: 'https://webseite.hamburg/leistungen/webdesign-aerzte',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Ist die Website DSGVO-konform?', a: 'Ja, selbstverstandlich. Gerade fur Arztpraxen ist DSGVO-Konformitat Pflicht. Ich setze datenschutzkonforme Kontaktformulare, sicheres Cookie-Management und eine rechtssichere Datenschutzerklarung um. Alle Patientendaten werden verschlusselt ubertragen. Auf Wunsch binde ich einen externen Datenschutzbeauftragten ein.' },
    { q: 'Kann ich eine Online-Terminbuchung integrieren?', a: 'Ja. Ich integriere gangige Terminbuchungssysteme wie Doctolib, Jameda oder individuelle Losungen direkt in Ihre Website. Patienten konnen rund um die Uhr Termine buchen — das entlastet Ihr Praxisteam und reduziert Telefonanfragen.' },
    { q: 'Wie finden Patienten meine Praxis bei Google?', a: 'Durch lokale SEO-Optimierung, Google Maps Integration und strukturierte Daten erscheint Ihre Praxis bei Suchanfragen wie "Zahnarzt Hamburg Eimsbuttel" oder "Hausarzt in der Nahe". Ich optimiere Ihr Google Unternehmensprofil und sorge fur konsistente NAP-Daten (Name, Adresse, Telefon).' },
    { q: 'Was kostet eine Praxis-Website?', a: 'Eine kompakte Praxis-Website mit den wichtigsten Informationen beginnt ab 2.000 Euro. Eine umfangreiche Website mit Online-Terminbuchung, Team-Vorstellung und Blog liegt bei ab 3.500 Euro. Den genauen Preis besprechen wir im kostenlosen Erstgesprach.' },
    { q: 'Kann ich Sprechzeiten und Team-Infos selbst aktualisieren?', a: 'Ja. Ich richte ein benutzerfreundliches CMS ein, mit dem Sie Sprechzeiten, Urlaubszeiten, Team-Mitglieder und Leistungen eigenstandig anpassen konnen — ohne technische Kenntnisse. Ich schule Sie und Ihr Praxisteam in der Bedienung.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Eine Praxis-Website ist in der Regel in 3-5 Wochen fertig. Der genaue Zeitrahmen hangt vom Umfang ab — ob Sie z.B. eine Online-Terminbuchung, Teamfotos oder einen Blog benotigen. Nach dem Erstgesprach erhalten Sie einen konkreten Zeitplan.' },
];

export default function WebdesignAerztePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign fur Arztpraxen Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-aerzte',
        description: 'Professionelle Websites fur Arztpraxen und Zahnarzte in Hamburg. DSGVO-konform, schnell, mobiloptimiert. Mehr Patienten durch Google-Sichtbarkeit.',
        offers: [
            { '@type': 'Offer', name: 'Praxis-Website Kompakt', price: '2000', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Praxis-Website Premium', price: '3500', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign fur Arztpraxen', item: 'https://webseite.hamburg/leistungen/webdesign-aerzte' },
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
                        { label: 'Webdesign fur Arztpraxen' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign fur Arztpraxen</p>
                    <h1 className="subpage-title animate-up">Praxis-Websites fur Arzte und Zahnarzte in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Patienten suchen &bdquo;Zahnarzt Hamburg Eimsbuttel&ldquo; oder &bdquo;Hausarzt in der Nahe&ldquo; — wenn Ihre Praxis nicht gefunden wird oder die Website veraltet wirkt, buchen sie woanders. Gleichzeitig ist DSGVO-Konformitat fur medizinische Einrichtungen keine Option, sondern Pflicht.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Warum Arztpraxen eine moderne Website brauchen</h2>
                    <p className="animate-up">Das Patientenverhalten hat sich grundlegend verandert: 77% aller Patienten suchen online nach einem Arzt, bevor sie einen Termin vereinbaren. Der erste Eindruck zahlt — eine veraltete Website signalisiert eine veraltete Praxis. Und die Konkurrenz schlaft nicht: Plattformen wie Doctolib und Jameda werden immer dominanter in den Suchergebnissen.</p>
                    <p className="animate-up">Die haufigsten Probleme, die ich bei Praxis-Websites in Hamburg sehe:</p>
                    <ul className="check-list animate-up">
                        <li>Keine oder schlechte Google-Sichtbarkeit — Patienten finden die Praxis nicht</li>
                        <li>Veraltetes Design, das kein Vertrauen aufbaut</li>
                        <li>Keine Online-Terminbuchung — Patienten wechseln zu Praxen mit Doctolib</li>
                        <li>DSGVO-Verstossse durch unsichere Formulare oder fehlende Cookie-Einwilligung</li>
                        <li>Nicht mobiloptimiert — obwohl die meisten Patienten mit dem Smartphone suchen</li>
                    </ul>

                    <h2 className="animate-up">Was eine Praxis-Website leisten muss</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>DSGVO-Konformitat</h3>
                            <p>Datenschutz ist fur Arztpraxen besonders kritisch. Sichere Kontaktformulare, rechtskonformes Cookie-Management und verschlusselte Datenubertragung sind Pflicht — und bei mir Standard.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Online-Terminbuchung</h3>
                            <p>Integration von Doctolib, Jameda oder individuellen Buchungssystemen direkt auf Ihrer Website. Patienten buchen rund um die Uhr — Ihr Praxisteam wird entlastet.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Sprechzeiten & Notfallinfos</h3>
                            <p>Offnungszeiten, Urlaubszeiten und Notfallinformationen prominent und sofort sichtbar. Patienten finden auf einen Blick, was sie brauchen — ohne langes Suchen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mobiloptimierung</h3>
                            <p>Uber 70% der Patienten suchen unterwegs nach einem Arzt. Ihre Praxis-Website muss auf dem Smartphone genauso perfekt funktionieren wie am Desktop — mit schnellen Ladezeiten und einfacher Navigation.</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Google Maps Sichtbarkeit</h3>
                            <p>Lokale SEO-Optimierung und Google Maps Integration, damit Ihre Praxis bei Suchanfragen in Ihrer Umgebung ganz oben erscheint. Inklusive Optimierung Ihres Google Unternehmensprofils.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Barrierefreies Design</h3>
                            <p>Patienten aller Altersgruppen und mit unterschiedlichen Einschrankungen mussen Ihre Website problemlos nutzen konnen. Barrierefreiheit ist nicht nur ethisch richtig, sondern auch gut fur SEO.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Schnelle Ladezeiten</h3>
                            <p>PageSpeed-Scores von 90-100 sind Standard. Eine schnelle Website bedeutet bessere Google-Rankings, weniger Absprunge und zufriedenere Patienten, die nicht warten mussen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Arztbewertungen Integration</h3>
                            <p>Positive Bewertungen von Jameda, Google und anderen Plattformen direkt auf Ihrer Website einbinden. Vertrauen aufbauen, bevor der Patient die Praxis betritt.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was im Preis enthalten ist</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Praxis-Website Kompakt</h3>
                            <div className="sp-price-value">ab 2.000 &euro;</div>
                            <p>Professionelle Praxis-Website mit allen wichtigen Informationen. Ideal fur Einzelpraxen und den Einstieg.</p>
                            <ul className="sp-price-includes">
                                <li>Responsives Praxis-Design</li>
                                <li>Sprechzeiten & Kontaktinfos</li>
                                <li>Leistungsubersicht</li>
                                <li>Kontaktformular (DSGVO-konform)</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>Google Maps Integration</li>
                                <li>SSL & Cookie-Management</li>
                                <li>PageSpeed 90-100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Praxis-Website Premium</h3>
                            <div className="sp-price-value">ab 3.500 &euro;</div>
                            <p>Umfangreiche Praxis-Website mit Terminbuchung und Team-Vorstellung. Fur Gemeinschaftspraxen und Facharztzentren.</p>
                            <ul className="sp-price-includes">
                                <li>Mehrseitige Website (5+ Seiten)</li>
                                <li>Online-Terminbuchung Integration</li>
                                <li>Team-Vorstellung mit Fotos</li>
                                <li>Leistungsseiten fur jede Behandlung</li>
                                <li>CMS fur eigene Inhaltspflege</li>
                                <li>Erweiterte lokale SEO-Optimierung</li>
                                <li>Bewertungen-Integration</li>
                                <li>Barrierefreies Design</li>
                                <li>Conversion Tracking & Analytics</li>
                                <li>Schulung fur Ihr Praxisteam</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Prozess: Von der Idee zur fertigen Praxis-Website</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgesprach & Praxis-Analyse</strong><p>Wir besprechen Ihre Praxis, Ihre Fachrichtung, Ihre Zielgruppe und Ihren Wettbewerb. Ich analysiere Ihre aktuelle Online-Prasenz und identifiziere Potenziale. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept & Struktur</strong><p>Basierend auf der Analyse erstelle ich die Seitenstruktur, definiere den Patientenpfad und plane die Integration von Terminbuchung und Bewertungen. Sie sehen den Aufbau, bevor das Design beginnt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design & Entwicklung</strong><p>Professionelle Umsetzung mit Fokus auf Vertrauen, DSGVO-Konformitat und Patientenfreundlichkeit. Regelmasige Updates und Feedback-Runden sind selbstverstandlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Testing, Launch & Schulung</strong><p>Umfangreiche Tests auf allen Geraten, DSGVO-Check, Tracking-Setup und Go-live. Anschliessend schule ich Sie und Ihr Team in der Bedienung des CMS.</p></div></div>
                    </div>
                </div>
            </section>

            <FaqSection title="Haufige Fragen zu Praxis-Websites" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Lassen Sie uns uber Ihre Praxis-Website sprechen. Kostenloses Erstgesprach — ich analysiere Ihre aktuelle Online-Prasenz und zeige Ihnen, wie Sie mehr Patienten uber Google gewinnen. DSGVO-konform und professionell." />
        </>
    );
}
