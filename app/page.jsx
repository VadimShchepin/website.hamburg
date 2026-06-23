import Link from 'next/link';
import Hero from '../src/components/Hero';
import TrustStrip from '../src/components/TrustStrip';
import CaseStudiesGrid from '../src/components/CaseStudiesGrid';
import Problem from '../src/components/Problem';
import Services from '../src/components/Services';
import Approach from '../src/components/Approach';
import Proof from '../src/components/Proof';
import QualityTransparency from '../src/components/QualityTransparency';
import Cases from '../src/components/Cases';
import Cta from '../src/components/Cta';

export const metadata = {
    title: 'Webdesign & SEO Hamburg | Websites die Kunden bringen',
    description: 'Professionelles Webdesign, SEO und Google Ads fur lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert. Kostenlose Erstanalyse.',
    alternates: {
        canonical: 'https://webseite.hamburg',
    },
    openGraph: {
        title: 'Webdesign & SEO Hamburg | Websites die Kunden bringen',
        description: 'Professionelles Webdesign, SEO und Google Ads fur lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
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
        description: 'Professionelles Webdesign, SEO und Google Ads fur lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Wie lange dauert die Erstellung einer Website?',
                acceptedAnswer: { '@type': 'Answer', text: 'Ein One-Pager ist typischerweise in 2-3 Wochen fertig. Eine mehrseitige Website in 4-6 Wochen. Abhangig von Umfang und Ihrem Feedback-Tempo.' },
            },
            {
                '@type': 'Question',
                name: 'Was kostet eine professionelle Website?',
                acceptedAnswer: { '@type': 'Answer', text: 'Ein One-Pager beginnt ab 2.000 Euro, eine mehrseitige Website ab 3.000 Euro. Finale Preise nach kostenlosem Erstgesprach.' },
            },
            {
                '@type': 'Question',
                name: 'Wie schnell sehe ich SEO-Ergebnisse?',
                acceptedAnswer: { '@type': 'Answer', text: 'Erste messbare Verbesserungen typischerweise nach 4-8 Wochen. Volle Wirkung nach 3-6 Monaten.' },
            },
        ],
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Hero />
            <TrustStrip />
            <CaseStudiesGrid />
            <Problem />
            <Services />
            <Approach />
            <Proof />
            <QualityTransparency />
            <Cases />
            <section className="section light-bg">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                        <p className="section-kicker animate-up">Wissen</p>
                        <h2 className="section-title animate-up">Guides fur Unternehmer in Hamburg.</h2>
                    </div>
                    <div className="wissen-grid">
                        <Link href="/wissen/warum-langsame-websites-kunden-kosten" className="wissen-card animate-up delay-1">
                            <div className="wissen-card-meta"><span className="wissen-card-category">WEBDESIGN</span></div>
                            <h3 className="wissen-card-title"><span>Warum langsame Websites Sie jeden Tag Kunden kosten</span></h3>
                            <p className="wissen-card-excerpt">Jede Sekunde Ladezeit kostet 7 % Conversion-Rate. Wie Sie die Geschwindigkeit messen und konkret verbessern.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/lokales-seo-hamburg-guide" className="wissen-card animate-up delay-2">
                            <div className="wissen-card-meta"><span className="wissen-card-category">SEO</span></div>
                            <h3 className="wissen-card-title"><span>Lokales SEO in Hamburg: Der komplette Leitfaden fur 2026</span></h3>
                            <p className="wissen-card-excerpt">Google Business Profile, lokale Keywords und NAP-Konsistenz: alles, was Sie brauchen, um in Hamburg gefunden zu werden.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/website-conversion-optimierung" className="wissen-card animate-up delay-3">
                            <div className="wissen-card-meta"><span className="wissen-card-category">CONVERSION</span></div>
                            <h3 className="wissen-card-title"><span>Mehr Anfragen ohne mehr Traffic: Conversion-Optimierung erklart</span></h3>
                            <p className="wissen-card-excerpt">Warum mehr Besucher selten die Losung sind und wie Sie mit gleicher Besucherzahl doppelt so viele Anfragen bekommen.</p>
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
