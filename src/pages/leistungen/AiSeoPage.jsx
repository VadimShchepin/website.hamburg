import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqSection from '../../components/FaqSection';
import RelatedServices from '../../components/RelatedServices';
import ServiceCta from '../../components/ServiceCta';
import { BUSINESS } from '../../lib/schema';

const faqItems = [
    { q: 'Was genau ist AI SEO?', a: 'AI SEO optimiert Ihre Online-Prasenz fur KI-gestutzte Suchsysteme: ChatGPT, Perplexity, Google AI Overviews und andere. Diese Systeme ziehen Informationen aus dem Web und prasentieren sie direkt als Antworten. AI SEO sorgt dafur, dass Ihre Inhalte als vertrauenswurdige Quelle zitiert werden.' },
    { q: 'Ersetzt AI SEO klassisches SEO?', a: 'Nein. AI SEO baut auf klassischem SEO auf und erweitert es. Eine technisch saubere, gut rankende Website ist die Voraussetzung. AI SEO fugt eine weitere Ebene hinzu: Optimierung fur die Art, wie KI-Systeme Informationen verstehen und auswahlen.' },
    { q: 'Wie messe ich AI-SEO-Ergebnisse?', a: 'Ich tracke, ob und wie oft Ihr Unternehmen in AI-Antworten erwahnt wird. Dazu kommen klassische SEO-Metriken wie Rankings und Traffic. Der AI-Suchmarkt ist noch jung — fruhe Investition bedeutet fruhen Vorsprung.' },
    { q: 'Fur wen lohnt sich AI SEO?', a: 'Fur jedes Unternehmen, das in seinem Bereich als Experte wahrgenommen werden will. Besonders relevant fur Dienstleister, Berater, spezialisierte Handwerker und Unternehmen mit erklarungsbedurftigen Leistungen.' },
    { q: 'Wie schnell sehe ich Ergebnisse?', a: 'AI-Suchsysteme aktualisieren ihre Quellen laufend. Erste Veranderungen sind oft schneller sichtbar als bei klassischem SEO — teilweise innerhalb von Wochen. Nachhaltige Prasenz erfordert jedoch kontinuierliche Optimierung.' },
];

export default function AiSeoPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI SEO - Sichtbarkeit in ChatGPT & Perplexity',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://website.hamburg/leistungen/ai-seo',
        description: 'AI SEO Optimierung fur Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews. Ihr Unternehmen als vertrauenswurdige Quelle in KI-Antworten.',
        offers: { '@type': 'Offer', price: '1200', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'AI SEO' }]} />
                    <p className="section-kicker animate-up">AI SEO</p>
                    <h1 className="subpage-title animate-up">Sichtbar in ChatGPT, Perplexity und Google AI Overviews.</h1>
                    <p className="subpage-intro animate-up">
                        Die Art, wie Menschen nach Informationen suchen, verandert sich grundlegend. Millionen nutzen heute ChatGPT und Perplexity statt Google. Wenn KI-Systeme nach Experten in Ihrem Bereich gefragt werden — erscheint dann Ihr Unternehmen?
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Suche verandert sich — jetzt</h2>
                    <p className="animate-up">Google ist nicht mehr der einzige Weg, wie Kunden Sie finden. ChatGPT hat uber 200 Millionen wochentliche Nutzer. Perplexity wird fur geschaftliche Recherchen genutzt. Google selbst zeigt zunehmend AI Overviews statt klassischer Links.</p>
                    <p className="animate-up">Diese Systeme funktionieren fundamental anders als klassische Suchmaschinen. Sie lesen das Web, verstehen Zusammenhange und prasentieren direkte Antworten — mit Quellenverweisen. Wenn Ihre Website nicht als vertrauenswurdige Quelle erkannt wird, fallen Sie aus diesem neuen Okosystem heraus.</p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">200M+</span>
                            <span className="subpage-stat-label">wochentliche ChatGPT-Nutzer weltweit</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">40%</span>
                            <span className="subpage-stat-label">der Gen-Z nutzt AI statt Google fur Suchen</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">Jetzt</span>
                            <span className="subpage-stat-label">ist der Zeitpunkt fur First-Mover-Vorteil</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Wie AI SEO funktioniert</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Strukturierte Daten</h3>
                            <p>Schema Markup hilft KI-Systemen, Ihre Inhalte zu verstehen: Wer Sie sind, was Sie anbieten, wo Sie tatigsind. Je klarer die Daten, desto wahrscheinlicher die Zitation.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Autoritats-Signale</h3>
                            <p>KI-Modelle bevorzugen Quellen mit nachweisbarer Expertise. Ich baue digitale Autoritat auf: konsistente Informationen, Erwahnungen, Fachcontent, Vertrauenssignale.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>AI-optimierter Content</h3>
                            <p>Inhalte, die von KI-Systemen leicht extrahiert und zitiert werden konnen. Klare Antworten auf relevante Fragen, logisch strukturiert, faktisch belegt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Monitoring & Anpassung</h3>
                            <p>Laufendes Tracking Ihrer Sichtbarkeit in AI-Antworten. Die Algorithmen verandern sich — ich passe die Strategie kontinuierlich an.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise und Umfang</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 1.200 &euro;/Monat</div>
                        <p>Enthalt alle Leistungen aus dem SEO-Paket plus gezielte AI-Sichtbarkeits-Optimierung. Kann als Upgrade zum bestehenden SEO oder eigenstehend gebucht werden.</p>
                        <ul className="sp-price-includes">
                            <li>Alle klassischen SEO-Leistungen inklusive</li>
                            <li>AI-Sichtbarkeits-Audit</li>
                            <li>Schema Markup & strukturierte Daten</li>
                            <li>AI-optimierte Content-Strategie</li>
                            <li>Autoritats- und Vertrauensaufbau</li>
                            <li>AI-Antwort-Monitoring</li>
                            <li>Google AI Overviews Optimierung</li>
                            <li>Monatlicher Report inkl. AI-Metriken</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">Warum jetzt der richtige Zeitpunkt ist</h2>
                    <p className="animate-up">AI-Suche ist noch ein junger Markt. Die meisten Ihrer Wettbewerber optimieren noch nicht dafur. Das bedeutet: Wer jetzt investiert, baut einen Vorsprung auf, der spater schwer einzuholen ist. In 2-3 Jahren wird AI SEO so selbstverstandlich sein wie klassisches SEO heute — aber die Platze an der Spitze werden dann bereits vergeben sein.</p>
                </div>
            </section>

            <FaqSection title="Fragen zu AI SEO" items={faqItems} />
            <RelatedServices exclude="ai-seo" />
            <ServiceCta text="Lassen Sie mich prufen, wie sichtbar Ihr Unternehmen in AI-Antworten ist. Kostenlose Erstanalyse — unverbindlich und konkret." />
        </>
    );
}
