import Link from 'next/link';
import Hero from '../src/components/Hero';
import TrustStrip from '../src/components/TrustStrip';
import CaseStudiesGrid from '../src/components/CaseStudiesGrid';
import ProblemSolution from '../src/components/ProblemSolution';
import WebsiteCheck from '../src/components/WebsiteCheck';
import Services from '../src/components/Services';
import Proof from '../src/components/Proof';
import Cases from '../src/components/Cases';
import Founder from '../src/components/Founder';
import FaqSection from '../src/components/FaqSection';
import Cta from '../src/components/Cta';

const faqItems = [
    {
        q: 'Was kostet eine professionelle Website?',
        a: 'Der Website-Start beginnt ab 1.500 Euro, eine individuell gestaltete Conversion Landingpage ab 2.900 Euro, eine mehrseitige Unternehmenswebsite ab 4.500 Euro. Den finalen Preis erhalten Sie nach dem kostenlosen Erstgespräch, schriftlich und ohne versteckte Kosten.',
    },
    {
        q: 'Wie lange dauert die Erstellung einer Website?',
        a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online, eine individuell gestaltete Landingpage in 2 bis 3 Wochen, eine mehrseitige Website in 4 bis 6 Wochen. Abhängig von Umfang und Ihrem Feedback-Tempo.',
    },
    {
        q: 'Was passiert in der kostenlosen Website-Analyse?',
        a: 'Ich prüfe Ladezeit, SEO, Struktur und Conversion-Potenzial Ihrer aktuellen Website und sende Ihnen innerhalb von 48 Stunden drei konkrete Verbesserungsvorschläge. Unverbindlich und ohne Verkaufsgespräch.',
    },
    {
        q: 'Wie schnell sehe ich SEO-Ergebnisse?',
        a: 'Erste messbare Verbesserungen typischerweise nach 4 bis 8 Wochen. Volle Wirkung nach 3 bis 6 Monaten. Sie erhalten monatliche Reports mit echten Zahlen.',
    },
    {
        q: 'Gibt es lange Vertragslaufzeiten?',
        a: 'Nein. Websites sind Festpreisprojekte, SEO- und Ads-Betreuung ist monatlich kündbar. Ihre Daten, Zugänge und Ihre Website gehören Ihnen. Immer.',
    },
    {
        q: 'Arbeiten Sie nur mit Unternehmen aus Hamburg?',
        a: 'Der Schwerpunkt liegt auf Hamburg und Umgebung, dort kenne ich den Markt am besten. Projekte in ganz Deutschland setze ich remote um, mit denselben Standards.',
    },
];

export const metadata = {
    title: 'Webdesign & SEO Hamburg | Mehr Kunden über Google',
    description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert. Kostenlose Erstanalyse.',
    alternates: {
        canonical: 'https://webseite.hamburg',
    },
    openGraph: {
        title: 'Webdesign & SEO Hamburg | Mehr Kunden über Google',
        description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
        url: 'https://webseite.hamburg',
        type: 'website',
    },
};

export default function HomePage() {
    const professionalServiceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'AISEO',
        url: 'https://webseite.hamburg',
        telephone: '+4917632194754',
        email: 'hallo@webseite.hamburg',
        founder: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: 'https://www.linkedin.com/in/vadim-shchepin/',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hamburg',
            addressCountry: 'DE',
        },
        areaServed: { '@type': 'City', name: 'Hamburg' },
        sameAs: [
            'https://aiseo.hamburg/',
            'https://www.linkedin.com/in/vadim-shchepin/',
            'https://www.instagram.com/aiseo.hamburg/',
            'https://www.tiktok.com/@aiseo.hamburg/',
        ],
        serviceType: ['Webdesign', 'SEO', 'AI SEO', 'Google Ads'],
        description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Hero />
            <TrustStrip />
            <CaseStudiesGrid />
            <ProblemSolution />
            <WebsiteCheck />
            <Services />
            <Founder />
            <Proof />
            <Cases />
            <FaqSection title="Was Unternehmer mich am häufigsten fragen" items={faqItems} />
            <section className="section light-bg">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                        <p className="section-kicker animate-up">Wissen</p>
                        <h2 className="section-title animate-up">Guides für Unternehmer in Hamburg.</h2>
                    </div>
                    <div className="wissen-grid">
                        <Link href="/wissen/warum-langsame-websites-kunden-kosten" className="wissen-card animate-up delay-1">
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/warum-langsame-websites-kunden-kosten.webp" alt="Illustration: Browserfenster mit halb gefuelltem Ladebalken, daneben eine Stoppuhr und ein wegfuehrender Pfeil" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">WEBDESIGN</span></div>
                            <h3 className="wissen-card-title"><span>Warum langsame Websites Sie jeden Tag Kunden kosten</span></h3>
                            <p className="wissen-card-excerpt">Jede Sekunde Ladezeit kostet 7 % Conversion-Rate. Wie Sie die Geschwindigkeit messen und konkret verbessern.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/lokales-seo-hamburg-guide" className="wissen-card animate-up delay-2">
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/lokales-seo-hamburg-guide.webp" alt="Illustration: Stadtkarte eines Hafenviertels mit zentralem Standort-Pin und schwebenden Suchergebnissen" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">SEO</span></div>
                            <h3 className="wissen-card-title"><span>Lokales SEO in Hamburg: Der komplette Leitfaden für 2026</span></h3>
                            <p className="wissen-card-excerpt">Google Business Profile, lokale Keywords und NAP-Konsistenz: alles, was Sie brauchen, um in Hamburg gefunden zu werden.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/website-conversion-optimierung" className="wissen-card animate-up delay-3">
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/website-conversion-optimierung.webp" alt="Illustration: Trichter, in den wenige Pfeile eintreten und aus dem viele in ein Formular mit Button austreten" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">CONVERSION</span></div>
                            <h3 className="wissen-card-title"><span>Mehr Anfragen ohne mehr Traffic: Conversion-Optimierung erklärt</span></h3>
                            <p className="wissen-card-excerpt">Warum mehr Besucher selten die Lösung sind und wie Sie mit gleicher Besucherzahl doppelt so viele Anfragen bekommen.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
                        <Link href="/wissen" className="button">Alle Artikel ansehen</Link>
                    </div>
                </div>
            </section>
            <Cta />
        </>
    );
}
