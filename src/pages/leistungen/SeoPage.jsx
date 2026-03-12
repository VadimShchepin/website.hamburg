import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqSection from '../../components/FaqSection';
import RelatedServices from '../../components/RelatedServices';
import ServiceCta from '../../components/ServiceCta';
import { BUSINESS } from '../../lib/schema';

const faqItems = [
    { q: 'Wie schnell sehe ich SEO-Ergebnisse?', a: 'Erste messbare Verbesserungen typischerweise nach 4-8 Wochen. Signifikante Ranking-Veranderungen nach 3-6 Monaten. SEO ist eine Investition in nachhaltigen, kostenlosen Traffic — im Gegensatz zu Ads hort der Traffic nicht auf, wenn das Budget stoppt.' },
    { q: 'Was kostet SEO fur ein lokales Unternehmen?', a: 'Ab 1.000 Euro pro Monat. Die Investition hangt vom Wettbewerb in Ihrer Branche und Region ab. Im Erstgesprach analysiere ich Ihren Markt und sage Ihnen ehrlich, ob SEO fur Ihre Situation sinnvoll ist und welches Budget realistisch ist.' },
    { q: 'Garantieren Sie Platz 1 bei Google?', a: 'Nein — und seien Sie vorsichtig bei jedem, der das tut. Google-Rankings hangen von uber 200 Faktoren ab. Was ich garantiere: transparente, datenbasierte Arbeit, regelmasige Reports und Optimierung bis die Ergebnisse stimmen.' },
    { q: 'Brauche ich eine neue Website fur SEO?', a: 'Nicht unbedingt. Oft lassen sich bestehende Websites technisch und inhaltlich optimieren. Wenn die Basis allerdings schlecht ist (langsam, nicht mobiloptimiert, veraltete Technik), kann ein Relaunch langfristig effektiver sein. Das klaren wir in der Analyse.' },
    { q: 'Was ist der Unterschied zwischen lokalem SEO und normalem SEO?', a: 'Lokales SEO fokussiert auf Sichtbarkeit in Ihrer Region: Google Maps, lokale Suchergebnisse, Google Business Profile. Wenn Ihre Kunden in Hamburg oder Umgebung nach Ihren Dienstleistungen suchen, ist lokales SEO der effektivste Kanal.' },
    { q: 'Bekomme ich Zugang zu den Daten?', a: 'Ja. Sie erhalten Zugang zu einem Live-Dashboard mit allen Rankings, Traffic-Daten und Leads. Dazu monatliche Reports mit Zusammenfassung und konkreten nachsten Schritten. Volle Transparenz — keine Blackbox.' },
];

export default function SeoPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO & Lokale Suchmaschinenoptimierung Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://website.hamburg/leistungen/seo',
        description: 'Professionelle Suchmaschinenoptimierung fur lokale Unternehmen in Hamburg. Google Rankings, lokale Sichtbarkeit, Google Maps Optimierung.',
        offers: { '@type': 'Offer', price: '1000', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'SEO' }]} />
                    <p className="section-kicker animate-up">SEO & Lokale Sichtbarkeit</p>
                    <h1 className="subpage-title animate-up">Suchmaschinenoptimierung fur lokale Unternehmen in Hamburg.</h1>
                    <p className="subpage-intro animate-up">
                        93% aller Online-Erfahrungen beginnen mit einer Suchmaschine. Wenn ein potenzieller Kunde in Hamburg nach Ihrer Dienstleistung sucht und Sie nicht auf der ersten Seite erscheinen, existieren Sie fur ihn nicht. Lokale SEO andert das — nachhaltig und messbar.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Warum lokales SEO fur Ihr Unternehmen entscheidend ist</h2>
                    <p className="animate-up">Jeden Tag suchen tausende Menschen in Hamburg nach Dienstleistungen wie Ihrer. "Elektriker Hamburg", "Steuerberater in der Nahe", "Webdesigner Hamburg" — diese Suchanfragen haben eine extrem hohe Kaufabsicht. Der Suchende braucht genau jetzt eine Losung.</p>
                    <p className="animate-up">Wenn Sie fur diese Anfragen nicht sichtbar sind, gehen diese Kunden zu Ihren Wettbewerbern. Das ist kein theoretisches Problem — es passiert heute, jeden Tag.</p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">46%</span>
                            <span className="subpage-stat-label">aller Google-Suchen haben lokale Absicht</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">88%</span>
                            <span className="subpage-stat-label">der lokalen Suchen fuhren innerhalb von 24h zu einer Aktion</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">0%</span>
                            <span className="subpage-stat-label">der Nutzer schauen auf Seite 2 von Google</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Was lokales SEO konkret bedeutet</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Google Business Profile</h3>
                            <p>Optimierung Ihres Google-Unternehmensprofils fur maximale Sichtbarkeit in Google Maps und lokalen Suchergebnissen. Fotos, Offnungszeiten, Bewertungsmanagement, regelmasige Beitrage.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Technisches SEO</h3>
                            <p>Saubere Seitenstruktur, schnelle Ladezeiten, Mobile-Optimierung, saubere Indexierung. Die technische Basis, die Google braucht, um Ihre Seite korrekt zu bewerten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>On-Page-Optimierung</h3>
                            <p>Keyword-optimierte Inhalte, die sowohl fur Suchmaschinen als auch fur Ihre Besucher geschrieben sind. Meta-Tags, Uberschriftenstruktur, interne Verlinkung, strukturierte Daten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lokale Autoritat</h3>
                            <p>Aufbau lokaler Signale: Branchenverzeichnisse, Citations, lokale Backlinks. Google muss verstehen, dass Ihr Unternehmen in Hamburg relevant und vertrauenswurdig ist.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was im SEO-Paket enthalten ist</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 1.000 &euro;/Monat</div>
                        <p>Mindestlaufzeit 3 Monate — danach monatlich kundbar. Keine versteckten Kosten.</p>
                        <ul className="sp-price-includes">
                            <li>Initiales SEO-Audit und Strategie</li>
                            <li>Google Business Profile Optimierung</li>
                            <li>Technisches SEO (laufend)</li>
                            <li>On-Page-Optimierung aller relevanten Seiten</li>
                            <li>Keyword-Recherche und Content-Strategie</li>
                            <li>Lokaler Autoritatsaufbau</li>
                            <li>Monatliches Reporting mit allen KPIs</li>
                            <li>Live-Dashboard mit Ranking-Tracking</li>
                            <li>Wettbewerber-Monitoring</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">Transparenz: So messe ich Erfolg</h2>
                    <p className="animate-up">Kein Agentur-Sprech, keine vagen Versprechen. Sie erhalten jeden Monat einen klaren Report mit:</p>
                    <ul className="check-list animate-up">
                        <li><strong>Rankings:</strong> Wo stehen Sie fur Ihre wichtigsten Keywords? Wie hat sich das verandert?</li>
                        <li><strong>Organischer Traffic:</strong> Wie viele Besucher kommen uber Google? Welche Seiten performen?</li>
                        <li><strong>Anfragen:</strong> Wie viele Leads kommen uber die organische Suche?</li>
                        <li><strong>Nachste Schritte:</strong> Was wird im kommenden Monat optimiert und warum?</li>
                    </ul>
                    <p className="animate-up">Dazu haben Sie jederzeit Zugang zum Live-Dashboard. Sie konnen mich jederzeit fragen, wo wir stehen — und ich zeige es Ihnen in Echtzeit.</p>
                </div>
            </section>

            <FaqSection title="Fragen zu SEO" items={faqItems} />
            <RelatedServices exclude="seo" />
            <ServiceCta text="Lassen Sie mich Ihre aktuelle Sichtbarkeit analysieren. Ich sage Ihnen ehrlich, wo Sie stehen und was moglich ist — kostenlos und unverbindlich." />
        </>
    );
}
