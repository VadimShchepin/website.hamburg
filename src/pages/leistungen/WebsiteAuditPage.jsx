import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../../hooks/usePageMeta';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqSection from '../../components/FaqSection';
import RelatedServices from '../../components/RelatedServices';
import ServiceCta from '../../components/ServiceCta';
import { BUSINESS } from '../../lib/schema';

const faqItems = [
    { q: 'Was kostet das Website-Audit?', a: 'Nichts. Das Audit ist kostenlos und unverbindlich. Sie erhalten eine ehrliche Analyse und entscheiden selbst, ob und wie Sie weiter vorgehen wollen. Kein Haken, kein Kleingedrucktes.' },
    { q: 'Wie lange dauert das Audit?', a: 'Die Analyse selbst erstelle ich innerhalb von 2-3 Werktagen nach Ihrer Anfrage. Das anschliessende Besprechungsgesprach dauert ca. 30 Minuten, in denen wir die Ergebnisse gemeinsam durchgehen.' },
    { q: 'Was passiert nach dem Audit?', a: 'Sie erhalten konkrete Handlungsempfehlungen mit Prioritaten. Einige davon konnen Sie selbst umsetzen. Fur andere kann ich Ihnen ein Angebot machen. Es gibt keinen Druck — die Entscheidung liegt bei Ihnen.' },
    { q: 'Muss ich danach etwas bei Ihnen buchen?', a: 'Nein. Das Audit ist wirklich kostenlos — nicht als Verkaufstrick, sondern weil ich glaube, dass gute Beratung Vertrauen schafft. Viele meiner Kunden kommen uber diesen Weg, aber es gibt keinerlei Verpflichtung.' },
    { q: 'Fur wen ist das Audit geeignet?', a: 'Fur jedes Unternehmen mit einer bestehenden Website, das wissen mochte, ob sie optimal arbeitet. Egal ob Handwerker, Dienstleister, E-Commerce oder Berater — die Analyse deckt universelle Faktoren ab, die fur jeden gelten.' },
];

export default function WebsiteAuditPage() {
    usePageMeta('Website-Audit Hamburg | Kostenlose Analyse');
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kostenlose Website-Analyse Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/website-audit',
        description: 'Kostenlose Website-Analyse: Performance, SEO, Struktur und Conversion-Potenzial. Ehrliche Einschatzung mit konkreten Handlungsempfehlungen.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'Website-Audit' }]} />
                    <p className="section-kicker animate-up">Website-Audit</p>
                    <h1 className="subpage-title animate-up">Kostenlose Website-Analyse fur Ihr Unternehmen.</h1>
                    <p className="subpage-intro animate-up">
                        Wissen Sie, wie viele Kunden Ihre Website jeden Tag verliert? Die meisten Unternehmer nicht. Mein Website-Audit zeigt Ihnen genau, wo Ihre Website steht, was sie kostet — und was moglich ware. Kostenlos, ehrlich, konkret.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was das Audit umfasst</h2>
                    <p className="animate-up">Kein oberflachlicher Schnellcheck, sondern eine fundierte Analyse der wichtigsten Faktoren, die uber den Erfolg Ihrer Website entscheiden.</p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Performance & Geschwindigkeit</h3>
                            <p>Ladezeiten, Core Web Vitals, Mobile-Performance. Wie schnell ist Ihre Seite wirklich? Wo sind die Engpasse? Was kostet Sie die Langsamkeit an Kunden und Rankings?</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>SEO-Status</h3>
                            <p>Technische SEO-Fehler, Keyword-Rankings, Indexierungsprobleme. Wie sichtbar sind Sie bei Google? Welche schnellen Gewinne gibt es? Welche Chancen werden verpasst?</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Analyse</h3>
                            <p>Ist der Weg von Besucher zu Anfrage klar? Gibt es Hindernisse? Wo springen Besucher ab? Die Struktur Ihrer Website entscheidet, ob Besucher zu Kunden werden.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Wettbewerber-Vergleich</h3>
                            <p>Wie stehen Sie im Vergleich zu Ihren direkten Wettbewerbern? Wer rankt fur Ihre wichtigsten Keywords? Wo haben Sie Vorsprung, wo Nachholbedarf?</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Was Sie erhalten</h2>
                    <ul className="check-list animate-up">
                        <li>Detaillierte Analyse aller vier Bereiche mit Screenshots und Daten</li>
                        <li>Priorisierte Handlungsempfehlungen — was bringt am meisten, was ist dringend</li>
                        <li>Personliches Gesprach (ca. 30 Min.) zur Besprechung der Ergebnisse</li>
                        <li>Empfehlungen, die Sie auch ohne mich umsetzen konnen</li>
                        <li>Ehrliche Einschatzung, ob und wo professionelle Hilfe sinnvoll ware</li>
                    </ul>

                    <h2 className="animate-up">Warum kostenlos?</h2>
                    <p className="animate-up">Weil ich uberzeugt bin, dass gute Beratung sich von selbst tragt. Wenn Sie sehen, was moglich ist, und meine Arbeitsweise kennenlernen, entscheiden Sie selbst, ob eine Zusammenarbeit sinnvoll ist. Kein Druck, keine Tricks — nur Fakten.</p>
                    <p className="animate-up">Viele meiner langfristigen Kundenbeziehungen haben mit genau diesem Audit begonnen. Nicht weil ich uberredet habe — sondern weil die Daten fur sich gesprochen haben.</p>

                    <h2 className="animate-up">So lauft es ab</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Anfrage</strong><p>Schicken Sie mir Ihre Website-URL und kurze Info zu Ihrem Unternehmen. Das geht in 2 Minuten.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Analyse</strong><p>Ich analysiere Ihre Website innerhalb von 2-3 Werktagen. Performance, SEO, Struktur, Wettbewerber.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Besprechung</strong><p>In einem 30-minutigen Gesprach gehen wir die Ergebnisse gemeinsam durch. Sie stellen Fragen, ich gebe ehrliche Antworten.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Ihre Entscheidung</strong><p>Sie erhalten die Analyse und Empfehlungen. Was Sie damit machen, ist Ihre Entscheidung. Kein Druck.</p></div></div>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zum Website-Audit" items={faqItems} />
            <RelatedServices exclude="website-audit" />
            <ServiceCta title="Ihre kostenlose Website-Analyse wartet." text="Schicken Sie mir Ihre URL — ich sage Ihnen innerhalb von 3 Werktagen, wo Ihre Website steht und was moglich ist." />
        </>
    );
}
