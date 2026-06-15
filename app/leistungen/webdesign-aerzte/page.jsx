import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Webdesign für Arztpraxen Hamburg | DSGVO-konforme Praxis-Websites',
    description: 'Websites für Arztpraxen und Zahnärzte in Hamburg: DSGVO-konform, Online-Terminbuchung (Doctolib, Jameda), Google-Maps-Sichtbarkeit. Mehr Patienten. Ab 2.000 €.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-aerzte',
    },
    openGraph: {
        title: 'Webdesign für Arztpraxen Hamburg | DSGVO-konforme Praxis-Websites',
        description: 'Websites für Arztpraxen und Zahnärzte in Hamburg: DSGVO-konform, Online-Terminbuchung, Google-Maps-Sichtbarkeit. Mehr Patienten.',
        url: 'https://webseite.hamburg/leistungen/webdesign-aerzte',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine Praxis-Website?', a: 'Eine kompakte Praxis-Website mit den wichtigsten Informationen beginnt ab 2.000 €. Eine umfangreiche Website mit Online-Terminbuchung, Team-Vorstellung und Leistungsseiten liegt ab 3.500 €. Den genauen Preis als Festpreis besprechen wir im kostenlosen Erstgespräch.' },
    { q: 'Ist die Website DSGVO-konform?', a: 'Ja. Gerade für Arztpraxen ist DSGVO-Konformität Pflicht. Ich setze datenschutzkonforme Kontaktformulare, ein rechtssicheres Cookie-Management und eine korrekte Datenschutzerklärung um. Alle übertragenen Daten werden per SSL verschlüsselt. Auf Wunsch binde ich Ihren Datenschutzbeauftragten ein.' },
    { q: 'Kann ich eine Online-Terminbuchung integrieren?', a: 'Ja. Ich integriere gängige Systeme wie Doctolib, Jameda oder Clickdoc direkt in Ihre Website. Patienten buchen rund um die Uhr — das entlastet Ihr Team und reduziert Telefonanfragen. Laut Bitkom hatte 2024 bereits jede zweite Person in Deutschland schon einmal online einen Arzttermin vereinbart.' },
    { q: 'Wie finden Patienten meine Praxis bei Google?', a: 'Durch lokale SEO, Google-Maps-Integration und strukturierte Daten erscheint Ihre Praxis bei Suchen wie „Zahnarzt Hamburg Eimsbüttel" oder „Hausarzt in der Nähe". Ich optimiere Ihr Google Business Profile und sorge für konsistente NAP-Daten (Name, Adresse, Telefon).' },
    { q: 'Kann ich Sprechzeiten und Team-Infos selbst aktualisieren?', a: 'Ja. Ich richte ein benutzerfreundliches CMS ein, mit dem Sie Sprechzeiten, Urlaubszeiten, Team-Mitglieder und Leistungen selbst anpassen — ohne technische Kenntnisse. Ich schule Sie und Ihr Praxisteam in der Bedienung.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Eine Praxis-Website ist in der Regel in 3–5 Wochen fertig. Der genaue Zeitrahmen hängt vom Umfang ab — etwa ob Sie Online-Terminbuchung, Teamfotos oder Leistungsseiten benötigen. Nach dem Erstgespräch erhalten Sie einen konkreten Zeitplan.' },
];

export default function WebdesignAerztePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Arztpraxen Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-aerzte',
        description: 'DSGVO-konforme Websites für Arztpraxen und Zahnärzte in Hamburg mit Online-Terminbuchung und Google-Maps-Sichtbarkeit.',
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
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Arztpraxen', item: 'https://webseite.hamburg/leistungen/webdesign-aerzte' },
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
                        { label: 'Webdesign für Arztpraxen' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign für Arztpraxen</p>
                    <h1 className="subpage-title animate-up">Praxis-Websites für Ärzte und Zahnärzte in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        Patienten suchen „Zahnarzt Hamburg Eimsbüttel" oder „Hausarzt in der Nähe". Wird Ihre Praxis nicht gefunden oder wirkt die Website veraltet, buchen sie woanders. Und DSGVO-Konformität ist für medizinische Einrichtungen keine Option, sondern Pflicht.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet eine Praxis-Website?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine professionelle Praxis-Website kostet bei mir <strong>ab 2.000 €</strong> (kompakt) bzw. <strong>ab 3.500 €</strong> (Premium mit Online-Terminbuchung). Sie ist DSGVO-konform, mobiloptimiert und lokal für Google sichtbar. Laut Bitkom hat 2024 bereits jede zweite Person in Deutschland (50 %) schon online einen Arzttermin gebucht — eine veraltete oder fehlende Website kostet Sie genau diese Patienten.</p>
                    </div>

                    <h2 className="animate-up">Warum Arztpraxen eine moderne Website brauchen</h2>
                    <p className="animate-up">Laut Bitkom (2024) hat die Hälfte der Deutschen schon mindestens einmal online einen Arzttermin vereinbart — 2019 waren es erst 26 %. 27 % wählen ihre Praxis gezielt danach aus, ob Online-Terminbuchung angeboten wird. Plattformen wie Doctolib und Jameda dominieren die Suchergebnisse zunehmend.</p>
                    <p className="animate-up">Die häufigsten Probleme, die ich bei Praxis-Websites in Hamburg sehe:</p>
                    <ul className="check-list animate-up">
                        <li>Keine oder schlechte Google-Sichtbarkeit — Patienten finden die Praxis nicht</li>
                        <li>Veraltetes Design, das kein Vertrauen aufbaut</li>
                        <li>Keine Online-Terminbuchung — Patienten wechseln zu Praxen mit Doctolib</li>
                        <li>DSGVO-Verstöße durch unsichere Formulare oder fehlende Cookie-Einwilligung</li>
                        <li>Nicht mobiloptimiert, obwohl die meisten Patienten mit dem Smartphone suchen</li>
                    </ul>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">50%</span>
                            <span className="subpage-stat-label">der Deutschen haben schon online einen Arzttermin gebucht (Bitkom 2024; 2019: 26 %)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">27%</span>
                            <span className="subpage-stat-label">wählen ihre Praxis gezielt nach Online-Terminbuchung aus (Bitkom 2024)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">57%</span>
                            <span className="subpage-stat-label">messen Online-Bewertungen große Bedeutung bei der Arztwahl bei (Bitkom)</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Was eine Praxis-Website leisten muss</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>DSGVO-Konformität</h3>
                            <p>Datenschutz ist für Arztpraxen besonders kritisch. Sichere Kontaktformulare, rechtskonformes Cookie-Management und SSL-verschlüsselte Datenübertragung sind Pflicht — und bei mir Standard.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Online-Terminbuchung</h3>
                            <p>Integration von Doctolib, Jameda, Clickdoc oder individuellen Buchungssystemen direkt auf Ihrer Website. Patienten buchen rund um die Uhr — Ihr Praxisteam wird spürbar entlastet.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Sprechzeiten & Notfallinfos</h3>
                            <p>Öffnungszeiten, Urlaubszeiten und Notfallinformationen prominent und sofort sichtbar. Patienten finden auf einen Blick, was sie brauchen, ohne langes Suchen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mobiloptimierung</h3>
                            <p>Die meisten Patienten suchen unterwegs mit dem Smartphone. Ihre Praxis-Website funktioniert auf dem Handy genauso wie am Desktop — mit schnellen Ladezeiten und einfacher Navigation.</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Google-Maps-Sichtbarkeit</h3>
                            <p>Lokale SEO und Google-Maps-Integration, damit Ihre Praxis bei Suchen in Ihrer Umgebung oben erscheint. Inklusive Optimierung Ihres Google Business Profile und konsistenter NAP-Daten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Barrierefreies Design</h3>
                            <p>Patienten aller Altersgruppen und mit unterschiedlichen Einschränkungen müssen Ihre Website problemlos nutzen können. Barrierefreiheit ist nicht nur ethisch richtig, sondern auch gut für SEO.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Schnelle Ladezeiten</h3>
                            <p>Lighthouse-Werte von 90–100 sind Standard. Eine schnelle Website bedeutet bessere Google-Rankings, weniger Absprünge und Patienten, die nicht warten müssen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Bewertungen-Integration</h3>
                            <p>Positive Bewertungen von Jameda, Google und anderen Plattformen direkt einbinden. 57 % der Patienten messen Bewertungen bei der Arztwahl große Bedeutung bei (Bitkom).</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was im Preis enthalten ist</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Praxis-Website Kompakt</h3>
                            <div className="sp-price-value">ab 2.000 &euro;</div>
                            <p>Professionelle Praxis-Website mit allen wichtigen Informationen. Ideal für Einzelpraxen und den Einstieg.</p>
                            <ul className="sp-price-includes">
                                <li>Responsives Praxis-Design</li>
                                <li>Sprechzeiten & Kontaktinfos</li>
                                <li>Leistungsübersicht</li>
                                <li>Kontaktformular (DSGVO-konform)</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>Google-Maps-Integration</li>
                                <li>SSL & Cookie-Management</li>
                                <li>Lighthouse 90–100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Praxis-Website Premium</h3>
                            <div className="sp-price-value">ab 3.500 &euro;</div>
                            <p>Umfangreiche Praxis-Website mit Terminbuchung und Team-Vorstellung. Für Gemeinschaftspraxen und Facharztzentren.</p>
                            <ul className="sp-price-includes">
                                <li>Mehrseitige Website (5+ Seiten)</li>
                                <li>Online-Terminbuchung (Doctolib, Jameda)</li>
                                <li>Team-Vorstellung mit Fotos</li>
                                <li>Leistungsseiten für jede Behandlung</li>
                                <li>CMS für eigene Inhaltspflege</li>
                                <li>Erweiterte lokale SEO-Optimierung</li>
                                <li>Bewertungen-Integration</li>
                                <li>Barrierefreies Design</li>
                                <li>Conversion-Tracking & Analytics (GA4)</li>
                                <li>Schulung für Ihr Praxisteam</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Prozess: von der Idee zur fertigen Praxis-Website</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch & Praxis-Analyse</strong><p>Wir besprechen Praxis, Fachrichtung, Zielgruppe und Wettbewerb. Ich analysiere Ihre aktuelle Online-Präsenz und identifiziere Potenziale. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept & Struktur</strong><p>Auf Basis der Analyse erstelle ich Seitenstruktur, definiere den Patientenpfad und plane Terminbuchung und Bewertungen. Sie sehen den Aufbau, bevor das Design beginnt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design & Entwicklung</strong><p>Umsetzung mit Fokus auf Vertrauen, DSGVO-Konformität und Patientenfreundlichkeit. Regelmäßige Updates und Feedback-Runden sind selbstverständlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Testing, Launch & Schulung</strong><p>Tests auf allen Geräten, DSGVO-Check, Tracking-Setup und Go-live. Anschließend schule ich Sie und Ihr Team in der Bedienung des CMS.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Bitkom e. V., „Die Hälfte der Deutschen vereinbart Arzttermine online" (2024) — 50 % (2019: 26 %), 27 % wählen Praxis nach Online-Buchung. <a href="https://www.bitkom.org/Presse/Presseinformation/Haelfte-vereinbart-Arzttermine-online" rel="nofollow noopener" target="_blank">bitkom.org</a></li>
                            <li>Bitkom e. V., „Mehr als die Hälfte liest Arzt-Bewertungen im Internet" — Bewertungen bei der Arztwahl. <a href="https://www.bitkom.org/Presse/Presseinformation/Haelfte-liest-Arzt-Bewertungen-Internet" rel="nofollow noopener" target="_blank">bitkom.org</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zu Praxis-Websites" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Lassen Sie uns über Ihre Praxis-Website sprechen. Kostenloses Erstgespräch — ich analysiere Ihre Online-Präsenz und zeige Ihnen, wie Sie mehr Patienten über Google gewinnen. DSGVO-konform und professionell." />
        </>
    );
}
