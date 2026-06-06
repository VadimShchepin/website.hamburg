import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Website-Audit Hamburg | Kostenlose Analyse',
    description: 'Kostenlose Website-Analyse: Performance (Core Web Vitals), SEO, Conversion und Wettbewerb. Bericht in 2–3 Werktagen mit priorisierten Empfehlungen. Unverbindlich.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/website-audit',
    },
    openGraph: {
        title: 'Website-Audit Hamburg | Kostenlose Analyse',
        description: 'Kostenlose Website-Analyse: Performance (Core Web Vitals), SEO, Conversion und Wettbewerb. Bericht in 2–3 Werktagen mit priorisierten Empfehlungen.',
        url: 'https://webseite.hamburg/leistungen/website-audit',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet das Website-Audit?', a: 'Nichts. Das Audit ist kostenlos und unverbindlich. Sie erhalten eine ehrliche Analyse und entscheiden selbst, ob und wie Sie weiter vorgehen. Kein Haken, kein Kleingedrucktes.' },
    { q: 'Wie lange dauert das Audit?', a: 'Die Analyse erstelle ich innerhalb von 2–3 Werktagen nach Ihrer Anfrage. Das anschließende Besprechungsgespräch dauert rund 30 Minuten, in denen wir die Ergebnisse gemeinsam durchgehen.' },
    { q: 'Welche Tools nutzen Sie für das Audit?', a: 'Für die Performance Google Lighthouse und PageSpeed Insights inklusive der Core Web Vitals (LCP, INP, CLS). Für SEO die Google Search Console und Keyword-Tools, für das Nutzerverhalten GA4. So basiert die Analyse auf belegbaren Daten statt auf Bauchgefühl.' },
    { q: 'Was passiert nach dem Audit?', a: 'Sie erhalten konkrete Handlungsempfehlungen mit Prioritäten. Einige können Sie selbst umsetzen, für andere kann ich ein Angebot machen. Es gibt keinen Druck — die Entscheidung liegt bei Ihnen.' },
    { q: 'Muss ich danach etwas bei Ihnen buchen?', a: 'Nein. Das Audit ist wirklich kostenlos — nicht als Verkaufstrick, sondern weil gute Beratung Vertrauen schafft. Viele meiner Kunden kommen über diesen Weg, aber es gibt keinerlei Verpflichtung.' },
    { q: 'Für wen ist das Audit geeignet?', a: 'Für jedes Unternehmen mit einer bestehenden Website, das wissen möchte, ob sie optimal arbeitet. Ob Handwerker, Dienstleister, E-Commerce oder Berater — die Analyse deckt Faktoren ab, die für jeden gelten.' },
];

export default function WebsiteAuditPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kostenlose Website-Analyse Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/website-audit',
        description: 'Kostenlose Website-Analyse: Performance (Core Web Vitals), SEO, Conversion und Wettbewerb mit priorisierten Handlungsempfehlungen.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Website-Audit', item: 'https://webseite.hamburg/leistungen/website-audit' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'Website-Audit' }]} />
                    <p className="section-kicker animate-up">Website-Audit</p>
                    <h1 className="subpage-title animate-up">Kostenlose Website-Analyse für Ihr Unternehmen.</h1>
                    <p className="subpage-intro animate-up">
                        Wissen Sie, wie viele Kunden Ihre Website jeden Tag verliert? Die meisten Unternehmer nicht. Mein Website-Audit zeigt Ihnen, wo Ihre Website steht, was sie kostet und was möglich wäre. Kostenlos, ehrlich, konkret.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was ist das Website-Audit?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Das <strong>Website-Audit</strong> ist eine kostenlose, unverbindliche Analyse Ihrer Website in vier Bereichen: Performance (Core Web Vitals), SEO, Conversion und Wettbewerb. Sie erhalten innerhalb von <strong>2–3 Werktagen</strong> einen Bericht mit Screenshots, Daten und priorisierten Handlungsempfehlungen, dazu ein 30-minütiges Gespräch. Kein Haken, keine Verpflichtung.</p>
                    </div>

                    <h2 className="animate-up">Was das Audit umfasst</h2>
                    <p className="animate-up">Kein oberflächlicher Schnellcheck, sondern eine fundierte Analyse der Faktoren, die über den Erfolg Ihrer Website entscheiden — jeweils mit dem passenden Werkzeug:</p>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Bereich</th><th>Was ich prüfe</th><th>Werkzeug</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Performance</th><td>LCP, INP, CLS, Ladezeit, Mobile-Speed</td><td>Lighthouse, PageSpeed Insights</td></tr>
                                <tr><th>SEO</th><td>Indexierung, Rankings, Meta-Tags, Schema</td><td>Google Search Console</td></tr>
                                <tr><th>Conversion</th><td>Nutzerpfad, Absprungpunkte, Handlungsaufforderungen</td><td>GA4</td></tr>
                                <tr><th>Wettbewerb</th><td>Rankings und Sichtbarkeit der Konkurrenz</td><td>Keyword-Tools</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Performance & Geschwindigkeit</h3>
                            <p>Ladezeiten, Core Web Vitals (LCP, INP, CLS), Mobile-Performance. Wie schnell ist Ihre Seite wirklich, wo sind die Engpässe, und was kostet die Langsamkeit an Kunden und Rankings?</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO-Status</h3>
                            <p>Technische Fehler, Keyword-Rankings, Indexierungsprobleme. Wie sichtbar sind Sie bei Google, welche schnellen Gewinne gibt es, welche Chancen bleiben ungenutzt?</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Analyse</h3>
                            <p>Ist der Weg von Besucher zu Anfrage klar? Wo springen Besucher ab? Die Struktur Ihrer Website entscheidet, ob Besucher zu Kunden werden.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Wettbewerber-Vergleich</h3>
                            <p>Wie stehen Sie gegenüber Ihren direkten Wettbewerbern? Wer rankt für Ihre wichtigsten Keywords? Wo haben Sie Vorsprung, wo Nachholbedarf?</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was Sie erhalten</h2>
                    <ul className="check-list animate-up">
                        <li>Detaillierte Analyse aller vier Bereiche mit Screenshots und Daten</li>
                        <li>Priorisierte Handlungsempfehlungen — was bringt am meisten, was ist dringend</li>
                        <li>Persönliches Gespräch (rund 30 Min.) zur Besprechung der Ergebnisse</li>
                        <li>Empfehlungen, die Sie auch ohne mich umsetzen können</li>
                        <li>Ehrliche Einschätzung, ob und wo professionelle Hilfe sinnvoll wäre</li>
                    </ul>

                    <h2 className="animate-up">Warum kostenlos?</h2>
                    <p className="animate-up">Weil gute Beratung sich von selbst trägt. Wenn Sie sehen, was möglich ist, und meine Arbeitsweise kennenlernen, entscheiden Sie selbst, ob eine Zusammenarbeit sinnvoll ist. Kein Druck, keine Tricks, nur Fakten.</p>
                    <p className="animate-up">Viele meiner langfristigen Kundenbeziehungen haben mit genau diesem Audit begonnen — nicht weil ich überredet habe, sondern weil die Daten für sich gesprochen haben.</p>

                    <h2 className="animate-up">So läuft es ab</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Anfrage</strong><p>Schicken Sie mir Ihre Website-URL und kurz Infos zu Ihrem Unternehmen. Das geht in 2 Minuten.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Analyse</strong><p>Ich analysiere Ihre Website innerhalb von 2–3 Werktagen: Performance, SEO, Struktur, Wettbewerber.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Besprechung</strong><p>In einem 30-minütigen Gespräch gehen wir die Ergebnisse durch. Sie stellen Fragen, ich gebe ehrliche Antworten.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Ihre Entscheidung</strong><p>Sie erhalten Analyse und Empfehlungen. Was Sie damit machen, ist Ihre Entscheidung. Kein Druck.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Google, Core Web Vitals — Schwellenwerte für LCP, INP, CLS. <a href="https://web.dev/articles/vitals" rel="nofollow noopener" target="_blank">web.dev/articles/vitals</a></li>
                            <li>Google PageSpeed Insights & Lighthouse — Performance-Messung. <a href="https://pagespeed.web.dev/" rel="nofollow noopener" target="_blank">pagespeed.web.dev</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zum Website-Audit" items={faqItems} />
            <RelatedServices exclude="website-audit" />
            <ServiceCta title="Ihre kostenlose Website-Analyse wartet." text="Schicken Sie mir Ihre URL — ich sage Ihnen innerhalb von 3 Werktagen, wo Ihre Website steht und was möglich ist." />
        </>
    );
}
