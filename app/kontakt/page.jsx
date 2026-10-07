import ContactPageClient from '../../src/components/ContactPageClient';

export const metadata = {
    title: 'Kontakt: Website-Analyse anfragen | webseite.hamburg',
    description: 'Rufen Sie an unter 0176 321 94 754 oder schreiben Sie mir. Antwort innerhalb von 24 Stunden mit einer ersten Einschätzung zu Ihrer Website.',
    alternates: {
        canonical: 'https://webseite.hamburg/kontakt',
    },
    openGraph: {
        title: 'Kontakt: Website-Analyse anfragen | webseite.hamburg',
        description: 'Kostenlose Website-Analyse anfordern. Ich melde mich innerhalb von 24 Stunden mit einer ersten Einschätzung.',
        url: 'https://webseite.hamburg/kontakt',
        type: 'website',
    },
};

export default function ContactPage() {
    const contactJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Kontakt: webseite.hamburg',
        description: 'Kostenlose Website-Analyse anfordern. Kontaktformular, Telefon und E-Mail.',
        url: 'https://webseite.hamburg/kontakt',
        mainEntity: {
            '@type': 'ProfessionalService',
            name: 'webseite.hamburg',
            telephone: '+4917632194754',
            email: 'hallo@webseite.hamburg',
            url: 'https://webseite.hamburg',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hamburg',
                addressCountry: 'DE',
            },
        },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://webseite.hamburg/kontakt' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ContactPageClient />
        </>
    );
}
