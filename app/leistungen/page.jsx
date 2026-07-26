import ServicesPageClient from '../../src/components/ServicesPageClient';

export const metadata = {
    title: 'Leistungen & Preise | Webdesign, SEO & Ads',
    description: 'Klare Leistungen, faire Preise: Webdesign ab 2.000 Euro, SEO ab 1.000 Euro/Mt., Google Ads ab 500 Euro/Mt. Ergebnis-Garantie und volle Transparenz.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen',
    },
    openGraph: {
        title: 'Leistungen & Preise | Webdesign, SEO & Ads',
        description: 'Klare Leistungen, faire Preise: Webdesign ab 2.000 Euro, SEO ab 1.000 Euro/Mt., Google Ads ab 500 Euro/Mt.',
        url: 'https://webseite.hamburg/leistungen',
        type: 'website',
    },
};

export default function ServicesPage() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ServicesPageClient />
        </>
    );
}
