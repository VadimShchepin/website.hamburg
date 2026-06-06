import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'AI SEO Hamburg | Sichtbar in ChatGPT, Perplexity & Copilot',
    description: 'AI SEO (GEO) für Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot. Ihr Unternehmen als zitierte Quelle in KI-Antworten. Ab 1.200 €/Monat.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/ai-seo',
    },
    openGraph: {
        title: 'AI SEO Hamburg | Sichtbar in ChatGPT, Perplexity & Copilot',
        description: 'AI SEO (GEO) für Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot. Ihr Unternehmen als zitierte Quelle in KI-Antworten.',
        url: 'https://webseite.hamburg/leistungen/ai-seo',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was ist AI SEO bzw. GEO?', a: 'AI SEO — auch GEO (Generative Engine Optimization) oder AEO (Answer Engine Optimization) — optimiert Ihre Inhalte so, dass KI-Systeme wie ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot Ihr Unternehmen als Quelle zitieren. Statt um Platz 1 in der Linkliste geht es darum, in der generierten Antwort genannt zu werden.' },
    { q: 'Ersetzt AI SEO klassisches SEO?', a: 'Nein, es baut darauf auf. Eine technisch saubere, indexierte Website ist die Voraussetzung — Google AI Overviews ziehen Quellen direkt aus den organischen Rankings. AI SEO ergänzt zwei Ebenen: zitierfähige Inhalte (klare Definitionen, belegte Zahlen) und die Erreichbarkeit für KI-Crawler.' },
    { q: 'Welche Crawler muss ich für KI-Sichtbarkeit erlauben?', a: 'In der robots.txt sollten GPTBot und ChatGPT-User (OpenAI), PerplexityBot (Perplexity), ClaudeBot (Anthropic), Google-Extended (Gemini, AI Overviews) und Bingbot (Copilot) zugelassen sein. Ist ein Bot blockiert, kann die jeweilige Plattform Sie nicht zitieren. Auf webseite.hamburg sind alle erlaubt.' },
    { q: 'Wie messe ich KI-Sichtbarkeit?', a: 'Über drei Wege: die Bing Webmaster Tools zeigen unter „AI Search Queries" die Grounding-Queries und Zitationen für Copilot; Tools wie Peec AI oder Otterly tracken Erwähnungen in ChatGPT, Perplexity und Gemini; und manuelle Test-Prompts in den Engines zeigen, ob und wie Sie genannt werden. Dazu kommen klassische Metriken aus der Google Search Console.' },
    { q: 'Welche Inhalte werden von KI am häufigsten zitiert?', a: 'Vergleichsartikel (rund ein Drittel aller Zitationen), umfassende Ratgeber und eigene Daten oder Statistiken. Die Princeton-GEO-Studie (KDD 2024) zeigt: Quellenangaben erhöhen die Zitationswahrscheinlichkeit um rund 40 %, konkrete Statistiken um rund 37 % — Keyword-Überfüllung senkt sie um rund 10 %.' },
    { q: 'Für wen lohnt sich AI SEO?', a: 'Für jedes Unternehmen, das in seinem Bereich als Experte wahrgenommen werden will — besonders für Dienstleister, Berater, spezialisierte Handwerker und erklärungsbedürftige Leistungen. Der AI-Suchmarkt ist noch jung: frühe Investition bedeutet frühen Vorsprung.' },
];

export default function AiSeoPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI SEO / GEO — Sichtbarkeit in ChatGPT, Perplexity & Copilot',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/ai-seo',
        description: 'AI SEO (Generative Engine Optimization) für Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot.',
        offers: { '@type': 'Offer', price: '1200', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'AI SEO', item: 'https://webseite.hamburg/leistungen/ai-seo' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'AI SEO' }]} />
                    <p className="section-kicker animate-up">AI SEO / GEO</p>
                    <h1 className="subpage-title animate-up">Sichtbar in ChatGPT, Perplexity und Google AI Overviews.</h1>
                    <p className="subpage-intro animate-up">
                        Immer mehr Menschen suchen mit ChatGPT, Perplexity oder Google AI Overviews statt mit der klassischen Linkliste. Wenn diese Systeme nach Experten in Ihrem Bereich gefragt werden — taucht dann Ihr Unternehmen in der Antwort auf?
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was ist AI SEO (GEO)?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p><strong>AI SEO</strong> — auch <strong>GEO</strong> (Generative Engine Optimization) oder <strong>AEO</strong> (Answer Engine Optimization) — optimiert Inhalte so, dass KI-Systeme wie ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot ein Unternehmen als Quelle zitieren. Anders als klassisches SEO zielt es nicht auf Platz 1, sondern auf die Nennung in der generierten Antwort. Die wichtigsten Hebel sind klare Definitionen, belegte Statistiken, strukturierte Daten (Schema.org) und für KI-Crawler zugängliche Inhalte.</p>
                    </div>

                    <h2 className="animate-up">Die Suche verändert sich gerade grundlegend</h2>
                    <p className="animate-up">Google ist nicht mehr der einzige Weg zur Antwort. ChatGPT erreichte im Oktober 2025 über 800 Millionen wöchentliche Nutzer. Perplexity zitiert in jeder Antwort seine Quellen. Und Google selbst blendet zunehmend AI Overviews über den klassischen Treffern ein.</p>
                    <p className="animate-up">Diese Systeme arbeiten anders als eine klassische Suchmaschine. Sie lesen das Web, fassen es zusammen und präsentieren eine direkte Antwort mit Quellenverweisen. Wird Ihre Website dabei nicht als vertrauenswürdige Quelle erkannt, fallen Sie aus diesem Kanal heraus — egal wie gut Ihre Leistung ist.</p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">800 Mio.</span>
                            <span className="subpage-stat-label">wöchentliche ChatGPT-Nutzer (OpenAI, Oktober 2025)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">16–20%</span>
                            <span className="subpage-stat-label">der Google-Suchen zeigen AI Overviews (Semrush, Ahrefs, 2025)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">+40%</span>
                            <span className="subpage-stat-label">höhere Zitationswahrscheinlichkeit durch Quellenangaben (Princeton GEO, 2024)</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Wie KI-Systeme ihre Quellen auswählen</h2>
                    <p className="animate-up">Jede Engine grounded ihre Antworten anders. Wer zitiert werden will, muss wissen, wo die jeweilige Engine sucht:</p>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>KI-System</th><th>Quellengrundlage</th><th>Was zählt</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>ChatGPT (mit Suche)</th><td>Web-Suche + Bing-Index</td><td>klare, strukturierte, aktuelle Inhalte</td></tr>
                                <tr><th>Perplexity</th><td>eigene Suche, zitiert immer</td><td>Autorität, Aktualität, Struktur</td></tr>
                                <tr><th>Google AI Overviews</th><td>Google-Index (RAG, Query-Fan-out)</td><td>starke organische Rankings</td></tr>
                                <tr><th>Microsoft Copilot</th><td>Bing-Index (Grounding-Queries)</td><td>definierte Fachbegriffe, benannte Tools, Zahlen</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="animate-up">Wie AI SEO funktioniert</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Strukturierte Daten</h3>
                            <p>Schema.org-Markup als JSON-LD hilft KI-Systemen, Inhalte einzuordnen: wer Sie sind, was Sie anbieten, wo Sie tätig sind. Organisation, Service, FAQPage und Breadcrumbs machen Aussagen maschinenlesbar.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Zitierfähige Inhalte</h3>
                            <p>Klare Definitionen, eigenständige Antwortblöcke und belegte Zahlen mit Quelle. Die Princeton-GEO-Studie zeigt: Quellenangaben (+40 %) und Statistiken (+37 %) erhöhen die Zitationsrate am stärksten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Crawler-Zugang</h3>
                            <p>GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended und Bingbot müssen in der robots.txt erlaubt sein. Ein blockierter Crawler bedeutet: keine Zitation auf der jeweiligen Plattform.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Monitoring & Anpassung</h3>
                            <p>Laufendes Tracking über Bing Webmaster Tools (AI Search Queries), Tools wie Peec AI oder Otterly und manuelle Test-Prompts. Die Modelle ändern sich — die Strategie wird kontinuierlich nachgeschärft.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise und Umfang</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 1.200 &euro;/Monat</div>
                        <p>Enthält alle Leistungen aus dem <Link href="/leistungen/seo">SEO-Paket</Link> plus gezielte KI-Sichtbarkeits-Optimierung. Als Upgrade zum bestehenden SEO oder eigenständig buchbar.</p>
                        <ul className="sp-price-includes">
                            <li>Alle klassischen SEO-Leistungen inklusive</li>
                            <li>KI-Sichtbarkeits-Audit (ChatGPT, Perplexity, AI Overviews, Copilot)</li>
                            <li>Schema-Markup & strukturierte Daten</li>
                            <li>Zitierfähige Content-Strategie (Definitionen, Statistiken, FAQ)</li>
                            <li>Crawler-Konfiguration (robots.txt, llms.txt)</li>
                            <li>Autoritäts- und Vertrauensaufbau</li>
                            <li>KI-Antwort-Monitoring inkl. Bing Grounding-Queries</li>
                            <li>Monatlicher Report inkl. KI-Metriken</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">Warum jetzt der richtige Zeitpunkt ist</h2>
                    <p className="animate-up">AI-Suche ist noch ein junger Markt. Die meisten Wettbewerber optimieren noch nicht dafür. Wer jetzt investiert, baut einen Vorsprung auf, den man später schwer einholt. In zwei bis drei Jahren wird AI SEO so selbstverständlich sein wie klassisches SEO heute — aber die zitierten Plätze sind dann längst vergeben.</p>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>OpenAI / Sam Altman, DevDay 2025: 800 Mio. wöchentliche ChatGPT-Nutzer (Oktober 2025). <a href="https://techcrunch.com/2025/10/06/sam-altman-says-chatgpt-has-hit-800m-weekly-active-users/" rel="nofollow noopener" target="_blank">techcrunch.com</a></li>
                            <li>Semrush AI Overviews Study 2025; Ahrefs — Anteil der Suchen mit AI Overviews (~16–20 %). <a href="https://www.semrush.com/blog/semrush-ai-overviews-study/" rel="nofollow noopener" target="_blank">semrush.com</a></li>
                            <li>Aggarwal et al., „GEO: Generative Engine Optimization", KDD 2024. <a href="https://arxiv.org/abs/2311.09735" rel="nofollow noopener" target="_blank">arxiv.org/abs/2311.09735</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zu AI SEO" items={faqItems} />
            <RelatedServices exclude="ai-seo" />
            <ServiceCta text="Lassen Sie mich prüfen, wie sichtbar Ihr Unternehmen in KI-Antworten ist. Kostenlose Erstanalyse — unverbindlich und konkret." />
        </>
    );
}
