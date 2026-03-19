import { Goldman, Inter } from 'next/font/google';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import AnimateOnScroll from '../src/components/AnimateOnScroll';
import CursorFollowerWrapper from '../src/components/CursorFollowerWrapper';
import '../src/index.css';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-goldman',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-inter',
});

const SITE_URL = 'https://webseite.hamburg';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Webdesign & SEO Hamburg | Websites die Kunden bringen',
        template: '%s | AISEO Hamburg',
    },
    description: 'Professionelle Websites, SEO und Google Ads fur Handwerker und lokale Unternehmen in Hamburg. Schnell, strukturiert, messbar. Kostenlose Website-Analyse.',
    authors: [{ name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' }],
    creator: 'AISEO Hamburg',
    publisher: 'AISEO Hamburg',
    robots: { index: true, follow: true },
    alternates: {
        types: { 'text/plain': '/llms.txt' },
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: SITE_URL,
        siteName: 'AISEO Hamburg',
        title: 'Webdesign & SEO Hamburg | Websites die Kunden bringen',
        description: 'Professionelle Websites, SEO und Google Ads fur lokale Unternehmen. Schnell, strukturiert, messbar.',
    },
    twitter: {
        card: 'summary_large_image',
    },
    icons: { icon: '/logo_red.webp' },
    other: {
        'google-site-verification': '',
    },
};

// Global JSON-LD: WebSite + Organization
const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'AISEO Hamburg',
    alternateName: 'webseite.hamburg',
    url: `${SITE_URL}/`,
    description: 'Professionelle Websites, SEO und Google Ads fur lokale Unternehmen in Hamburg',
    inLanguage: 'de',
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'AISEO',
    alternateName: 'AISEO Hamburg',
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo_red.webp` },
    image: `${SITE_URL}/logo_red.webp`,
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+4917632194754',
        email: 'hallo@webseite.hamburg',
        contactType: 'customer service',
        availableLanguage: ['de', 'en', 'ru'],
    },
    founder: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#founder`,
        name: 'Vadim Shchepin',
        jobTitle: 'Grunder & Webentwickler',
        url: `${SITE_URL}/ueber-uns`,
        sameAs: ['https://www.linkedin.com/in/vadim-shchepin/'],
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hamburg',
        addressCountry: 'DE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '53.5511',
        longitude: '9.9937',
    },
    areaServed: { '@type': 'City', name: 'Hamburg' },
    sameAs: [
        'https://aiseo.hamburg/',
        'https://www.instagram.com/aiseo.hamburg/',
        'https://www.tiktok.com/@aiseo.hamburg/',
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="de" className={`${goldman.variable} ${inter.variable}`}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <AnimateOnScroll />
                <CursorFollowerWrapper />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
