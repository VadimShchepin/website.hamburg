// Keyword map for automatic internal links (used by src/components/AutoLinks.jsx).
//
// Each page that should rank for a search term owns the phrases readers actually
// write in running text. Where one of these phrases appears in body copy on another
// page, its first occurrence links to the owner. Derived from the keyword assignment
// of the SEO revision of 07.10.2026 (one main term per page, see
// redesign-sources/webseite-seo-2026-10/final/bericht.md).
//
// Order matters: more specific phrases first, so "Website erstellen lassen" wins over
// a generic "Website". Matching is case-insensitive on whole words. Keep phrases
// specific enough that a link always makes sense in context; generic words
// ("Website", "Preise", "Google") never go in here.
//
// Tuning after the first build (07.10.2026), checked in the server HTML:
// - removed "Steuerberater", "Gastronomie", "Rechtsanwälte", "Arztpraxis",
//   "Zahnarztpraxis": as single words they show up in unrelated sentences
//   ("fragen Sie Ihren Steuerberater", "Hotels und Gastronomie" in the pest control
//   case, "Abmahnung durch Rechtsanwälte") and would link to a web design offer.
// - removed "Handwerksbetrieb(e)": mostly appears in anecdotes ("Ein Handwerksbetrieb
//   rief mich an ...") and in quoted search examples, not as an offer.
// - removed bare "Relaunch": linked case-study result sentences ("nach dem Relaunch
//   von 24 auf 374 Klicks") to the checklist; kept "Website-Relaunch".
// - added "Onlineshop", "WordPress", "Hosting", "lokale SEO": frequent in body copy,
//   and the target answers exactly that topic (pages averaged 0.9 links before).
// - tried and removed again: "Search Console" (mostly data-source notes in the case
//   studies, "Quelle: Google Search Console"), "Google Maps" ("ein Klick öffnet Google
//   Maps" in an app description), "Barrierefreiheit" ("Barrierefreiheit ihrer Kinder").
// AutoLinks also skips matches inside "quotes" and all-lowercase keyword spellings.

export const KEYWORD_LINKS = [
    // Leistungen (commercial pages first: they carry the money terms)
    { href: '/leistungen/website-erstellen-lassen', phrases: ['Website erstellen lassen', 'Webseite erstellen lassen', 'Homepage erstellen lassen', 'Website erstellen zu lassen', 'Homepage erstellen zu lassen'] },
    { href: '/leistungen/webdesign', phrases: ['Webdesigner in Hamburg', 'Webdesigner aus Hamburg', 'Webentwicklung in Hamburg', 'Webentwickler in Hamburg'] },
    { href: '/', phrases: ['Webdesign in Hamburg', 'Webdesign aus Hamburg', 'Webdesign Hamburg'] },
    { href: '/leistungen/seo', phrases: ['SEO in Hamburg', 'SEO Hamburg', 'SEO-Betreuung', 'Suchmaschinenoptimierung in Hamburg', 'Suchmaschinenoptimierung'] },
    { href: '/leistungen/google-ads', phrases: ['Google-Ads-Betreuung', 'Google Ads Betreuung', 'Google-Ads-Kampagnen', 'Google-Ads-Kampagne', 'Google Ads in Hamburg', 'Google Ads'] },
    { href: '/leistungen/website-audit', phrases: ['Website-Audit', 'Webseiten-Audit', 'Website-Analyse', 'Website Audit'] },
    { href: '/leistungen/conversion-optimierung', phrases: ['Conversion-Optimierung', 'Conversion Optimierung', 'Conversion-Rate'] },
    { href: '/leistungen/e-commerce-entwicklung', phrases: ['Onlineshop erstellen lassen', 'Online-Shop erstellen lassen', 'Shopify-Shop', 'Shopify-Agentur', 'E-Commerce-Entwicklung', 'Onlineshop', 'Online-Shop'] },
    { href: '/leistungen/ai-seo', phrases: ['AI SEO', 'AI-SEO', 'Generative Engine Optimization'] },
    { href: '/leistungen/chatgpt-ads', phrases: ['ChatGPT Ads', 'ChatGPT-Ads', 'Anzeigen in ChatGPT', 'Werbung in ChatGPT'] },
    { href: '/leistungen/webdesign-handwerker', phrases: ['Website für Handwerker', 'Websites für Handwerker', 'Handwerker-Website', 'Handwerker-Websites'] },
    { href: '/leistungen/webdesign-aerzte', phrases: ['Praxis-Website', 'Praxiswebsite', 'Arztpraxen'] },
    { href: '/leistungen/webdesign-anwaelte', phrases: ['Kanzlei-Website für Anwälte', 'Anwaltskanzleien', 'Anwaltskanzlei'] },
    { href: '/leistungen/webdesign-steuerberater', phrases: ['Website für Steuerberater', 'Steuerberater-Website', 'Steuerkanzleien'] },
    { href: '/leistungen/webdesign-gastronomie', phrases: ['Restaurant-Website', 'Restaurant-Websites'] },
    { href: '/leistungen/webdesign-hotels', phrases: ['Hotel-Website', 'Hotel-Websites', 'Direktbuchungen', 'Direktbuchung'] },
    { href: '/leistungen/webdesign-immobilienmakler', phrases: ['Makler-Website', 'Immobilienmakler'] },

    // Wissen (informational terms; each article owns its question)
    { href: '/wissen/webdesign-kosten', phrases: ['Was kostet eine Website', 'Kosten einer Website', 'Website-Kosten', 'Webdesign-Kosten', 'Webdesign Kosten'] },
    { href: '/wissen/seo-kosten-hamburg', phrases: ['Was kostet SEO', 'SEO-Kosten', 'Kosten für SEO'] },
    { href: '/wissen/google-ads-kosten', phrases: ['Google-Ads-Kosten', 'Google Ads Kosten', 'Kosten für Google Ads', 'Klickpreise'] },
    { href: '/wissen/onlineshop-kosten', phrases: ['Was kostet ein Onlineshop', 'Onlineshop-Kosten', 'Onlineshop Kosten', 'Kosten eines Onlineshops'] },
    { href: '/wissen/google-business-profile-optimieren', phrases: ['Google-Unternehmensprofil', 'Google Unternehmensprofil', 'Google Business Profile', 'Google-Business-Profil', 'Unternehmensprofil'] },
    { href: '/wissen/lokales-seo-hamburg-guide', phrases: ['lokale Suchmaschinenoptimierung', 'lokales SEO', 'lokale SEO', 'Local SEO'] },
    { href: '/wissen/website-relaunch-checkliste', phrases: ['Website-Relaunch', 'Relaunch-Checkliste', 'Relaunch planen'] },
    { href: '/wissen/barrierefreie-website-pflicht', phrases: ['Barrierefreiheitsstärkungsgesetz', 'BFSG', 'barrierefreie Website'] },
    { href: '/wissen/website-barrierefrei-machen', phrases: ['WCAG 2.2', 'WCAG', 'barrierefrei machen'] },
    { href: '/wissen/impressum-datenschutzerklaerung-pflicht', phrases: ['Impressumspflicht', 'Datenschutzerklärung', 'Impressum'] },
    { href: '/wissen/website-abmahnung-vermeiden', phrases: ['Abmahnungen', 'Abmahnung'] },
    { href: '/wissen/wordpress-alternativen', phrases: ['WordPress-Alternativen', 'WordPress-Alternative', 'Alternative zu WordPress', 'WordPress'] },
    { href: '/wissen/webflow-oder-wordpress', phrases: ['Webflow oder WordPress', 'Webflow'] },
    { href: '/wissen/wordpress-sicherheit-wartung', phrases: ['WordPress-Sicherheit', 'WordPress absichern', 'WordPress-Wartung', 'Plugin-Updates'] },
    { href: '/wissen/website-umzug-hosting-deutschland', phrases: ['Hosting in Deutschland', 'Website umziehen', 'Hosting-Umzug', 'Serverstandort', 'Hosting'] },
    { href: '/wissen/webdesign-agentur-oder-freelancer', phrases: ['Agentur oder Freelancer', 'Freelancer oder Agentur'] },
    { href: '/wissen/website-baukasten-oder-eigene-website', phrases: ['Website-Baukasten', 'Homepage-Baukasten', 'Baukasten', 'Baukästen', 'Jimdo', 'Wix'] },
    { href: '/wissen/website-nicht-bei-google-gefunden', phrases: ['nicht bei Google gefunden', 'nicht bei Google zu finden', 'nicht indexiert'] },
    { href: '/wissen/warum-langsame-websites-kunden-kosten', phrases: ['Ladezeit', 'Ladezeiten', 'Core Web Vitals', 'PageSpeed'] },
    { href: '/wissen/google-ads-fehler-lokale-unternehmen', phrases: ['Google-Ads-Fehler', 'Google Ads Fehler'] },

    // Referenzen (brand names of the case studies)
    { href: '/referenzen/blitz-hamburg', phrases: ['Blitz Hamburg'] },
    { href: '/referenzen/gl-sommer', phrases: ['GL Sommer'] },
    { href: '/referenzen/dybeauty', phrases: ['DYBeauty'] },
    { href: '/referenzen/kinderalbum', phrases: ['KinderAlbum'] },
];

// Links added automatically per page, on top of the hand-placed ones.
export const MAX_AUTO_LINKS = 8;
