import Script from 'next/script';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import AnimateOnScroll from '../src/components/AnimateOnScroll';
import CookieConsent from '../src/components/CookieConsent';
import { vxFontVars } from '../src/lib/fonts';
import '../src/index.css';
import '../src/styles/site-vx.css';
import '../src/styles/vx.css';
import '../src/styles/subpage-vx.css';

const SITE_URL = 'https://webseite.hamburg';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Webdesign Hamburg, SEO & Google Ads | webseite.hamburg',
        // Page titles carry the brand themselves where it fits (no suffix)
        template: '%s',
    },
    description: 'Professionelle Websites, SEO und Google Ads für Handwerker und lokale Unternehmen in Hamburg. Schnell, strukturiert, messbar. Kostenlose Website-Analyse.',
    authors: [{ name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' }],
    creator: 'webseite.hamburg',
    publisher: 'webseite.hamburg',
    robots: { index: true, follow: true },
    alternates: {
        types: { 'text/plain': '/llms.txt' },
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: SITE_URL,
        siteName: 'webseite.hamburg',
        title: 'Webdesign Hamburg, SEO & Google Ads | webseite.hamburg',
        description: 'Professionelle Websites, SEO und Google Ads für lokale Unternehmen. Schnell, strukturiert, messbar.',
    },
    twitter: {
        card: 'summary_large_image',
    },
};

// Global JSON-LD: WebSite + Organization
const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'webseite.hamburg',
    alternateName: 'Webseite Hamburg',
    url: `${SITE_URL}/`,
    description: 'Professionelle Websites, SEO und Google Ads für lokale Unternehmen in Hamburg',
    inLanguage: 'de',
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'webseite.hamburg',
    alternateName: 'Webseite Hamburg',
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
        jobTitle: 'Gründer & Webentwickler',
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
        <html lang="de" className={vxFontVars}>
            <head>
                <Script
                    defer
                    src="https://umami.dsgvoschulfotos.de/script.js"
                    data-website-id="b7fd00a9-d5d0-4d51-86dc-996730ad670d"
                    strategy="afterInteractive"
                />
            </head>
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
                <Header />
                <main>{children}</main>
                <Footer />
                <CookieConsent />
            </body>
        </html>
    );
}
