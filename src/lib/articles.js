export const ARTICLES = [
    {
        slug: 'case-study-fotogalerie-performance',
        title: 'Case Study: 1.200 Fotos pro Album und wie 2.408 versteckte Requests eine Galerie ausbremsten',
        category: 'PERFORMANCE',
        readTime: '9 Min.',
    },
    {
        slug: 'dsgvo-fotoplattform-sicherheit-performance',
        title: 'DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet',
        category: 'SICHERHEIT',
        readTime: '8 Min.',
    },
    {
        slug: 'warum-langsame-websites-kunden-kosten',
        title: 'Warum langsame Websites Sie jeden Tag Kunden kosten',
        category: 'WEBDESIGN',
        readTime: '6 Min.',
    },
    {
        slug: 'lokales-seo-hamburg-guide',
        title: 'Lokales SEO in Hamburg: Der komplette Leitfaden',
        category: 'SEO',
        readTime: '8 Min.',
    },
    {
        slug: 'ai-seo-was-unternehmen-jetzt-wissen-muessen',
        title: 'AI SEO: Was Unternehmen jetzt wissen müssen',
        category: 'AI SEO',
        readTime: '7 Min.',
    },
    {
        slug: 'website-nicht-bei-google-gefunden',
        title: 'Website nicht bei Google zu finden? Die 12 häufigsten Ursachen',
        category: 'SEO',
        readTime: '12 Min.',
    },
    {
        slug: 'google-business-profile-optimieren',
        title: 'Google-Unternehmensprofil optimieren: der Hamburg-Leitfaden',
        category: 'SEO',
        readTime: '12 Min.',
    },
    {
        slug: 'seo-kosten-hamburg',
        title: 'Was kostet SEO in Hamburg? Preise, Modelle und was Sie dafür bekommen',
        category: 'SEO',
        readTime: '11 Min.',
    },
    {
        slug: 'webdesign-agentur-oder-freelancer',
        title: 'Agentur, Freelancer oder Baukasten: Wer soll Ihre Website bauen?',
        category: 'WEBDESIGN',
        readTime: '11 Min.',
    },
    {
        slug: 'website-baukasten-oder-eigene-website',
        title: 'Wix, Jimdo oder eigene Website: Was der Baukasten wirklich kostet',
        category: 'WEBDESIGN',
        readTime: '10 Min.',
    },
    {
        slug: 'google-ads-fehler-lokale-unternehmen',
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        category: 'GOOGLE ADS',
        readTime: '7 Min.',
    },
    {
        slug: 'website-conversion-optimierung',
        title: 'Mehr Anfragen ohne mehr Traffic: Conversion-Optimierung',
        category: 'CONVERSION',
        readTime: '6 Min.',
    },
    {
        slug: 'website-relaunch-checkliste',
        title: 'Website-Relaunch Checkliste',
        category: 'WEBDESIGN',
        readTime: '5 Min.',
    },
    {
        slug: 'webdesign-kosten',
        title: 'Webdesign Kosten 2026: Was eine professionelle Website wirklich kostet',
        category: 'WEBDESIGN',
        readTime: '10 Min.',
    },
];

// Related articles: same category first, then the following articles in list order.
// Deterministic (no randomness, so server and client render the same markup) and
// rotating per slug, damit nicht jeder Artikel auf dieselben drei verweist.
export function getRelatedArticles(currentSlug, count = 3) {
    const current = ARTICLES.find(a => a.slug === currentSlug);
    const others = ARTICLES.filter(a => a.slug !== currentSlug);
    const startIndex = Math.max(0, ARTICLES.findIndex(a => a.slug === currentSlug));
    const rotated = [...others.slice(startIndex), ...others.slice(0, startIndex)];
    const sameCategory = current ? rotated.filter(a => a.category === current.category) : [];
    const rest = rotated.filter(a => !sameCategory.includes(a));
    return [...sameCategory, ...rest].slice(0, count);
}
