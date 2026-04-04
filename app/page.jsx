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
            <Cta />
        </>
    );
}
