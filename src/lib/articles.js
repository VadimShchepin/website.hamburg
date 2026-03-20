export const ARTICLES = [
    {
        slug: 'warum-langsame-websites-kunden-kosten',
        title: 'Warum langsame Websites Sie jeden Tag Kunden kosten',
        category: 'WEBDESIGN',
        readTime: '6 Min.',
    },
    {
        slug: 'lokales-seo-hamburg-guide',
        title: 'Lokales SEO in Hamburg — Der komplette Leitfaden',
        category: 'SEO',
        readTime: '8 Min.',
    },
    {
        slug: 'ai-seo-was-unternehmen-jetzt-wissen-muessen',
        title: 'AI SEO: Was Unternehmen jetzt wissen mussen',
        category: 'AI SEO',
        readTime: '7 Min.',
    },
    {
        slug: 'google-ads-fehler-lokale-unternehmen',
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        category: 'GOOGLE ADS',
        readTime: '7 Min.',
    },
    {
        slug: 'website-conversion-optimierung',
        title: 'Mehr Anfragen ohne mehr Traffic — Conversion-Optimierung',
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

export function getRelatedArticles(currentSlug, count = 3) {
    return ARTICLES.filter(a => a.slug !== currentSlug).slice(0, count);
}
