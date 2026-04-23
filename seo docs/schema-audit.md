# Schema.org Structured Data Audit
## webseite.hamburg (AISEO Hamburg)
### Audit Date: 2026-03-19

---

## EXECUTIVE SUMMARY

The site has **2 JSON-LD blocks** hardcoded in `index.html` that are served identically on
every URL (it is a client-side-rendered React SPA). No page-specific structured data exists.
No Microdata or RDFa is used anywhere. The existing schema is well-structured but has
several validation issues and significant gaps in coverage.

**Current schema:** ProfessionalService + FAQPage (global, on all pages)
**Missing schema:** WebSite, BreadcrumbList, Article/BlogPosting (knowledge pages),
  WebPage (per page), Organization, Person (about page), ContactPage, Service (service pages)

**Overall Score: 4 / 10** -- Good foundation, but massive opportunities missed due to
SPA architecture serving identical schema on every route.

---

## CRITICAL ARCHITECTURAL ISSUE

All 8 pages audited return the **exact same HTML shell** including the same two JSON-LD
blocks, the same `<title>`, and the same `<meta>` tags. The React SPA renders content
client-side via `/assets/index-CLgbmDEF.js` into `<div id="root"></div>`.

**Impact:**
- Google can render JavaScript, but JSON-LD should ideally be in the initial HTML
  or injected into `<head>` per route
- The same ProfessionalService + FAQPage schema fires on /kontakt, /wissen/*, /ueber-uns
  etc., which is semantically incorrect
- No page-specific schema (Article, Service, WebPage) can exist in this architecture
  without changes

**Recommendation:** Implement one of:
1. Server-side rendering (SSR) or static site generation (SSG) -- e.g., Next.js, Astro
2. Dynamic JSON-LD injection via React Helmet or a `<script>` element per route
3. Pre-rendering service (e.g., Rendertron, prerender.io) that injects page-specific schema

---

## PAGE-BY-PAGE ANALYSIS

### 1. Homepage: https://webseite.hamburg/

#### Block 1: ProfessionalService

**Detected Properties:**
- @context: "https://schema.org" -- PASS
- @type: "ProfessionalService" -- PASS (valid subtype of LocalBusiness)
- name: "AISEO" -- PASS
- description -- PASS
- url: "https://webseite.hamburg" -- WARNING: missing trailing slash (canonical uses slash)
- areaServed (City: Hamburg) -- PASS
- telephone, email -- PASS
- address (PostalAddress) -- PARTIAL (see issues)
- founder (Person) -- PARTIAL (see issues)
- sameAs (4 URLs) -- PASS
- serviceType (5 items) -- PASS
- priceRange: "$$" -- WARNING: deprecated by Google (March 2024)
- knowsAbout (7 items) -- PASS
- hasCredential (3 items) -- WARNING: misuse of type (see issues)
- hasOfferCatalog (6 offers) -- PASS with issues

**Validation Issues:**

| # | Severity | Property | Issue |
|---|----------|----------|-------|
| 1 | Medium | `url` | Missing trailing slash. Canonical is `https://webseite.hamburg/` but schema has `https://webseite.hamburg`. Should match canonical exactly. |
| 2 | Medium | `address` | Missing `streetAddress` and `postalCode`. Google recommends full address for LocalBusiness/ProfessionalService. If no physical office, consider removing address or using only addressRegion. |
| 3 | Low | `founder` | Person object is minimal. Missing `jobTitle`, `@id`, `sameAs`. The LinkedIn URL is used as both `founder.url` and in the top-level `sameAs` array (conflates business sameAs with personal sameAs). |
| 4 | Info | `priceRange` | Google deprecated `priceRange` for LocalBusiness rich results in March 2024. Not harmful, but provides no rich result benefit. |
| 5 | Medium | `hasCredential` | Using `EducationalOccupationalCredential` for client references/portfolio is a semantic misuse. This type is for degrees, certifications, licenses. Portfolio items should be separate entities or removed. |
| 6 | Medium | `hasOfferCatalog.itemListElement` | The Offer items lack `url` properties linking to the relevant service page. Also missing `availability` (e.g., "https://schema.org/OnlineOnly"). |
| 7 | Low | `hasOfferCatalog.itemListElement` | The recurring price offers (SEO, AI SEO, Google Ads) use `priceSpecification.unitText: "Monat"` but are missing `referenceQuantity` to formally declare this as a monthly price. |
| 8 | Missing | `@id` | No `@id` on the ProfessionalService. This prevents other schema blocks from referencing it (e.g., Article.publisher, WebPage.about). |
| 9 | Missing | `image` / `logo` | No logo or image property. Google recommends `logo` for Organization/LocalBusiness types. |
| 10 | Missing | `openingHours` / `openingHoursSpecification` | Recommended for ProfessionalService. |
| 11 | Missing | `geo` | No GeoCoordinates. Important for local SEO. |
| 12 | Missing | `aggregateRating` | The site references client results (5.0 stars, 24 reviews for Blitz Hamburg) but no AggregateRating on the business itself. |
| 13 | Missing | `paymentAccepted` | Optional but recommended for service businesses. |

#### Block 2: FAQPage

**Detected Properties:**
- @context: "https://schema.org" -- PASS
- @type: "FAQPage" -- PASS (valid type)
- mainEntity: 4 Question items -- PASS
- Each Question has name + acceptedAnswer (Answer with text) -- PASS

**Validation Issues:**

| # | Severity | Property | Issue |
|---|----------|----------|-------|
| 1 | Info | FAQPage | Since August 2023, Google restricts FAQ rich results to government and healthcare sites. This is a commercial site, so FAQ markup will NOT produce Google rich results. However, FAQPage markup still benefits AI/LLM citation and discoverability (GEO). **Keep it, but only on the homepage where FAQ content actually exists.** |
| 2 | Medium | Scope | This FAQ block fires on ALL pages (/kontakt, /wissen/*, etc.) where no FAQ content is visible. Structured data should match visible page content. |

---

### 2. Service Overview: https://webseite.hamburg/leistungen

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema:**
- **WebPage** with `@type: "CollectionPage"` or `"WebPage"` describing the services listing
- **BreadcrumbList**: Home > Leistungen
- **ItemList** of Service links (to individual service pages)

---

### 3. Webdesign Service: https://webseite.hamburg/leistungen/webdesign

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema:**
- **Service** schema specific to Webdesign (with provider referencing the ProfessionalService)
- **Offer** details specific to Webdesign packages
- **BreadcrumbList**: Home > Leistungen > Webdesign
- **WebPage** with description relevant to this service

---

### 4. SEO Service: https://webseite.hamburg/leistungen/seo

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema:**
- **Service** schema specific to SEO service
- **Offer** details specific to SEO packages
- **BreadcrumbList**: Home > Leistungen > SEO
- **WebPage** with description relevant to this service

---

### 5. Knowledge Article: https://webseite.hamburg/wissen/lokales-seo-hamburg-guide

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema (HIGH PRIORITY):**
- **Article** or **BlogPosting** with:
  - headline, description, datePublished, dateModified
  - author (Person: Vadim Shchepin)
  - publisher (referencing AISEO Organization)
  - image (article hero image if available)
  - mainEntityOfPage
  - inLanguage: "de"
  - articleSection: "Wissen" / "Lokales SEO"
- **BreadcrumbList**: Home > Wissen > Lokales SEO Hamburg Guide
- **WebPage** with `@type: "Article"` specialization

---

### 6. Knowledge Article: https://webseite.hamburg/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema (HIGH PRIORITY):**
- Same as article above: **Article/BlogPosting**, **BreadcrumbList**, **WebPage**
- This article about AI SEO is topically authoritative content that deserves full
  Article markup for Google Discover and article rich results

---

### 7. About Page: https://webseite.hamburg/ueber-uns

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema:**
- **ProfilePage** with mainEntity Person (Vadim Shchepin) -- strengthens E-E-A-T
- **Person** schema for the founder with:
  - name, jobTitle, description
  - url, sameAs (LinkedIn, etc.)
  - worksFor (referencing AISEO)
  - knowsAbout
  - image (headshot)
- **Organization** standalone block for AISEO
- **BreadcrumbList**: Home > Uber uns

---

### 8. Contact Page: https://webseite.hamburg/kontakt

**Existing Schema:** Same global ProfessionalService + FAQPage (not page-specific)

**Missing Schema:**
- **ContactPage** WebPage type
- **BreadcrumbList**: Home > Kontakt
- The FAQPage schema should NOT fire on this page (no FAQ content visible)

---

## SITE-WIDE MISSING SCHEMA

### A. WebSite Schema (HIGH PRIORITY)

Not present anywhere. Required for sitelinks search box eligibility.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AISEO Hamburg",
  "alternateName": "webseite.hamburg",
  "url": "https://webseite.hamburg/",
  "description": "Professionelle Websites, SEO und Google Ads fur lokale Unternehmen in Hamburg",
  "inLanguage": "de",
  "publisher": {
    "@type": "Organization",
    "@id": "https://webseite.hamburg/#organization",
    "name": "AISEO"
  }
}
```

### B. Organization Schema (HIGH PRIORITY)

The ProfessionalService acts as a de facto Organization, but a standalone
Organization with `@id` is needed as a reusable entity across pages.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://webseite.hamburg/#organization",
  "name": "AISEO",
  "alternateName": "AISEO Hamburg",
  "url": "https://webseite.hamburg/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://webseite.hamburg/logo_red.png"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+4917632194754",
    "email": "hallo@webseite.hamburg",
    "contactType": "customer service",
    "availableLanguage": ["de", "en", "ru"]
  },
  "founder": {
    "@type": "Person",
    "@id": "https://webseite.hamburg/#founder",
    "name": "Vadim Shchepin"
  },
  "sameAs": [
    "https://aiseo.hamburg/",
    "https://www.instagram.com/aiseo.hamburg/",
    "https://www.tiktok.com/@aiseo.hamburg/"
  ]
}
```

### C. BreadcrumbList Schema (HIGH PRIORITY)

Missing on ALL pages. This is one of the most reliable rich result types.
Should be injected per-route.

**Example for /leistungen/webdesign:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://webseite.hamburg/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Leistungen",
      "item": "https://webseite.hamburg/leistungen"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Webdesign",
      "item": "https://webseite.hamburg/leistungen/webdesign"
    }
  ]
}
```

**Example for /wissen/lokales-seo-hamburg-guide:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://webseite.hamburg/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Wissen",
      "item": "https://webseite.hamburg/wissen"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Lokales SEO Hamburg Guide",
      "item": "https://webseite.hamburg/wissen/lokales-seo-hamburg-guide"
    }
  ]
}
```

### D. Article / BlogPosting for Knowledge Pages (HIGH PRIORITY)

Six knowledge articles exist (per llms.txt) with zero Article schema.
These are the highest-value pages for organic discovery.

**Template for each /wissen/* article:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Meta description of the article]",
  "url": "https://webseite.hamburg/wissen/[slug]",
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "inLanguage": "de",
  "author": {
    "@type": "Person",
    "@id": "https://webseite.hamburg/#founder",
    "name": "Vadim Shchepin",
    "url": "https://www.linkedin.com/in/vadim-shchepin/"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://webseite.hamburg/#organization",
    "name": "AISEO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://webseite.hamburg/logo_red.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://webseite.hamburg/wissen/[slug]"
  },
  "image": "[Article hero image URL]"
}
```

**Required for each article:**
- headline (required)
- author (required -- currently missing everywhere)
- datePublished (required -- currently missing)
- image (recommended)
- publisher (recommended)

### E. Person Schema for Founder / About Page (MEDIUM PRIORITY)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://webseite.hamburg/#founder",
    "name": "Vadim Shchepin",
    "jobTitle": "Grunder & Web-Entwickler",
    "description": "Grunder von AISEO Hamburg. Spezialisiert auf Webdesign, SEO und AI SEO fur lokale Unternehmen.",
    "url": "https://webseite.hamburg/ueber-uns",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://webseite.hamburg/#organization",
      "name": "AISEO"
    },
    "sameAs": [
      "https://www.linkedin.com/in/vadim-shchepin/"
    ],
    "knowsAbout": [
      "Webdesign",
      "SEO",
      "AI SEO",
      "Google Ads",
      "Conversion-Optimierung"
    ]
  }
}
```

### F. Service Schema for Individual Service Pages (MEDIUM PRIORITY)

**Example for /leistungen/webdesign:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://webseite.hamburg/leistungen/webdesign#service",
  "name": "Webdesign Hamburg",
  "description": "Professionelle Website-Erstellung fur lokale Unternehmen in Hamburg. Individueller Code, PageSpeed 90-100, Conversion-optimiert.",
  "url": "https://webseite.hamburg/leistungen/webdesign",
  "serviceType": "Web Design",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://webseite.hamburg/#organization",
    "name": "AISEO"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hamburg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Webdesign Pakete",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "One-Pager Website",
        "description": "Kompakte Landingpage mit Conversion-Fokus",
        "price": "2000",
        "priceCurrency": "EUR",
        "url": "https://webseite.hamburg/leistungen/webdesign"
      },
      {
        "@type": "Offer",
        "name": "Mehrseitige Website",
        "description": "Vollstandige Unternehmenswebsite mit CMS",
        "price": "3000",
        "priceCurrency": "EUR",
        "url": "https://webseite.hamburg/leistungen/webdesign"
      }
    ]
  }
}
```

**Example for /leistungen/seo:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://webseite.hamburg/leistungen/seo#service",
  "name": "SEO Hamburg",
  "description": "Laufende Suchmaschinenoptimierung fur lokale Sichtbarkeit in Hamburg. Google Business Profile, technisches SEO, Content-Strategie.",
  "url": "https://webseite.hamburg/leistungen/seo",
  "serviceType": "SEO",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://webseite.hamburg/#organization",
    "name": "AISEO"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hamburg"
  },
  "offers": {
    "@type": "Offer",
    "name": "SEO Monatspauschale",
    "price": "1000",
    "priceCurrency": "EUR",
    "url": "https://webseite.hamburg/leistungen/seo",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "1000",
      "priceCurrency": "EUR",
      "unitText": "Monat",
      "referenceQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitCode": "MON"
      }
    }
  }
}
```

---

## EXISTING SCHEMA: FIXES NEEDED

### Fix 1: Add @id to ProfessionalService

Add `"@id": "https://webseite.hamburg/#organization"` to the ProfessionalService block
so other schema blocks can reference it via @id.

### Fix 2: Add logo/image

Add to ProfessionalService:
```json
"logo": {
  "@type": "ImageObject",
  "url": "https://webseite.hamburg/logo_red.png"
},
"image": "https://webseite.hamburg/logo_red.png"
```

### Fix 3: Fix URL trailing slash

Change `"url": "https://webseite.hamburg"` to `"url": "https://webseite.hamburg/"`.

### Fix 4: Remove or fix hasCredential misuse

The `hasCredential` array uses `EducationalOccupationalCredential` for portfolio
references. This is semantically incorrect. Options:
- Remove `hasCredential` entirely
- Replace with a custom property or move to `makesOffer` / separate Case Study schema

### Fix 5: Enrich founder Person object

Current:
```json
"founder": {
  "@type": "Person",
  "name": "Vadim Shchepin",
  "url": "https://www.linkedin.com/in/vadim-shchepin/"
}
```

Recommended:
```json
"founder": {
  "@type": "Person",
  "@id": "https://webseite.hamburg/#founder",
  "name": "Vadim Shchepin",
  "jobTitle": "Grunder",
  "url": "https://webseite.hamburg/ueber-uns",
  "sameAs": ["https://www.linkedin.com/in/vadim-shchepin/"]
}
```

### Fix 6: Remove personal LinkedIn from business sameAs

The `sameAs` array mixes business profiles (Instagram, TikTok, aiseo.hamburg) with
a personal LinkedIn URL. LinkedIn for Vadim Shchepin should only be on the Person
entity, not on the business sameAs.

### Fix 7: Add geo coordinates

```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "53.5511",
  "longitude": "9.9937"
}
```
(Use actual business coordinates if available.)

### Fix 8: Remove priceRange (deprecated)

Google deprecated `priceRange` for LocalBusiness rich results. Remove it or leave
as-is (not harmful, just provides no benefit).

### Fix 9: Scope FAQPage to homepage only

Currently fires on all pages. Should only appear on the homepage (or wherever the
FAQ section is visibly rendered).

---

## PRIORITY IMPLEMENTATION ROADMAP

### Phase 1: Quick Wins (fix existing schema)
1. Add `@id` to ProfessionalService
2. Add `logo` and `image`
3. Fix `url` trailing slash
4. Remove LinkedIn from business `sameAs`
5. Enrich `founder` Person object
6. Remove `hasCredential` misuse

### Phase 2: Site-Wide Additions (high impact)
7. Add **WebSite** schema (global, homepage)
8. Add **BreadcrumbList** per route (requires dynamic injection)
9. Add **Article** schema on all 6 /wissen/* pages (requires dynamic injection)

### Phase 3: Page-Specific Schema (medium impact)
10. Add **Service** schema on each /leistungen/* service page
11. Add **ProfilePage** + **Person** on /ueber-uns
12. Add **ContactPage** WebPage type on /kontakt
13. Add **Organization** standalone block

### Phase 4: Architecture Fix (enables everything above)
14. Implement per-route JSON-LD injection in the React SPA
    - Option A: Use `react-helmet-async` or `@tanstack/react-router` meta
    - Option B: Migrate to Next.js / Astro for SSR/SSG
    - Option C: Use a prerender service for search engine crawlers

---

## COMPLETE RECOMMENDED SCHEMA MAP

| Page | Schema Types to Include |
|------|------------------------|
| / (homepage) | ProfessionalService (fixed), FAQPage, WebSite, Organization |
| /leistungen | WebPage, BreadcrumbList, ItemList of Services |
| /leistungen/webdesign | Service, Offer, BreadcrumbList, WebPage |
| /leistungen/seo | Service, Offer, BreadcrumbList, WebPage |
| /leistungen/ai-seo | Service, Offer, BreadcrumbList, WebPage |
| /leistungen/google-ads | Service, Offer, BreadcrumbList, WebPage |
| /leistungen/website-audit | Service, Offer, BreadcrumbList, WebPage |
| /wissen/lokales-seo-hamburg-guide | Article, BreadcrumbList, WebPage |
| /wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen | Article, BreadcrumbList, WebPage |
| /wissen/warum-langsame-websites-kunden-kosten | Article, BreadcrumbList, WebPage |
| /wissen/google-ads-fehler-lokale-unternehmen | Article, BreadcrumbList, WebPage |
| /wissen/website-conversion-optimierung | Article, BreadcrumbList, WebPage |
| /wissen/website-relaunch-checkliste | Article, BreadcrumbList, WebPage |
| /ueber-uns | ProfilePage, Person, BreadcrumbList |
| /kontakt | ContactPage, BreadcrumbList |

---

## WHAT NOT TO ADD

- **HowTo**: Rich results removed by Google September 2023. Do not add.
- **SpecialAnnouncement**: Deprecated July 2025. Do not add.
- **FAQ on non-homepage pages**: Not recommended on commercial sites for Google benefit.
  Current FAQ on homepage is fine to keep for AI/LLM discoverability.
- **Review/AggregateRating on own business**: Only add if you have genuine third-party
  reviews with a source. Self-authored reviews violate Google guidelines.

---

## NOTES ON SPA ARCHITECTURE

The current `index.html` is a static shell:
```
<!DOCTYPE html>
<html lang="de">
<head>
  [static meta + static JSON-LD for ALL pages]
  <script type="module" src="/assets/index-CLgbmDEF.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

Google's JavaScript rendering service (WRS) can execute the SPA and see rendered
content, but:
- JSON-LD in `<head>` is parsed immediately -- no JS execution needed
- The **same** JSON-LD appears on every URL, which is incorrect
- Page-specific `<title>` and `<meta>` tags are also missing from the static HTML

This is the single biggest technical SEO issue on the site. Until per-route
meta/schema injection is implemented, all page-specific schema recommendations
above cannot be deployed.
