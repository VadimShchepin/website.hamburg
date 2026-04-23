# SEO Action Plan: webseite.hamburg
## Date: 2026-03-19
## Current Score: 52/100 | Target Score: 85+/100

---

## CRITICAL (Fix Immediately -- Blocks Indexing)

### 1. Migrate from React SPA to SSR/SSG (Next.js or Astro)
**Impact:** +25-35 points across all categories
**Effort:** 2-4 weeks
**Why:** This single change resolves the majority of critical issues:
- Unique HTML per page (titles, meta descriptions, canonicals, OG tags)
- Content visible to all crawlers without JavaScript
- Proper 404 status codes for non-existent routes
- Page-specific JSON-LD structured data
- Faster LCP (server-rendered content paints immediately)
- Code splitting per route (automatic in Next.js)

The site is already on Vercel and built with React -- Next.js is the natural migration path. Alternatively, Astro offers even better performance for a mostly-static site.

**Resolves issues:** C1 (CSR), C2 (identical canonicals), C3 (no 404s), H1 (JS-only schema), H2 (monolithic bundle), plus enables all page-specific meta/schema recommendations below.

### 2. Fix Canonical Tags (Interim if SSR migration is not immediate)
**Impact:** Prevents Google from treating all pages as duplicates
**Effort:** 2-4 hours
**Why:** Currently all pages canonical to `/`. Each page must canonical to itself.
**Action:** Use `react-helmet-async` or a custom hook to update `<link rel="canonical">` per route. Also update `<title>`, `<meta name="description">`, and OG tags per route.

### 3. Implement Proper 404 Handling
**Impact:** Prevents crawl budget waste and soft-404 issues
**Effort:** 1-2 hours (with SSR) or via Vercel rewrites config
**Action:** Configure Vercel to return 404 status for URLs not matching defined routes. With SSR, this happens naturally. With the current SPA, add explicit route matching in `vercel.json` rewrites.

---

## HIGH PRIORITY (Fix Within 1-2 Weeks)

### 4. Compress Logo Images
**Impact:** Saves 1.85 MB per page load, directly improves LCP
**Effort:** 30 minutes
**Action:**
- Convert `logo_red.png` (937 KB) and `logo_blue.png` (963 KB) to SVG (ideal, ~5-10 KB each) or WebP (~15-25 KB each)
- Add explicit `width` and `height` attributes
- If logo is LCP element, add `<link rel="preload" as="image">`

### 5. Add Immutable Caching for Hashed Assets
**Impact:** Eliminates re-downloads on repeat visits
**Effort:** 5 minutes
**Action:** Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 6. Add Page-Specific Structured Data
**Impact:** Enables rich results, improves AI citability
**Effort:** 1-2 days (after SSR migration)
**Action per page type:**

| Page Type | Schema to Add |
|-----------|---------------|
| Homepage | WebSite, Organization (with @id) |
| All pages | BreadcrumbList (per route) |
| /wissen/* articles | Article with headline, author, datePublished, dateModified, publisher |
| /leistungen/* services | Service with Offer, provider, areaServed |
| /ueber-uns | ProfilePage + Person (founder) |
| /kontakt | ContactPage |

### 7. Fix Existing Schema Validation Issues
**Impact:** Correct semantic markup, better rich result eligibility
**Effort:** 2-3 hours
**Action:**
- Add `@id: "https://webseite.hamburg/#organization"` to ProfessionalService
- Add `logo` and `image` properties
- Fix `url` trailing slash (match canonical)
- Remove `hasCredential` misuse (or replace with proper type)
- Move personal LinkedIn from business `sameAs` to Person entity only
- Add `geo` coordinates
- Remove deprecated `priceRange`
- Scope FAQPage to homepage only
- Add `url` to each OfferCatalog item linking to service pages

### 8. Add Author Bylines to Knowledge Articles
**Impact:** Core E-E-A-T signal per Sept 2025 QRG
**Effort:** 1-2 hours
**Action:**
- Add visible "Von Vadim Shchepin" byline to each /wissen/* article
- Link byline to /ueber-uns
- Add Person schema with author credentials on each article
- Add visible publication/update dates

### 9. Add OG Image and Social Meta Tags
**Impact:** Social sharing click-through rates
**Effort:** 1 day
**Action:**
- Create branded OG images (1200x630px) per page category
- Add per page: `og:image`, `og:url`, `og:type` (use "article" for /wissen/*)
- Add: `twitter:card="summary_large_image"`, `twitter:image`, `twitter:title`

---

## MEDIUM PRIORITY (Fix Within 1 Month)

### 10. Add Security Headers
**Impact:** Security posture, potential ranking signal
**Effort:** 30 minutes
**Action:** Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

### 11. Fix Sitemap Issues
**Impact:** Better crawl scheduling, completeness
**Effort:** 30 minutes
**Action:**
- Add `<lastmod>` dates to all 10 URLs currently missing them
- Add `/impressum` and `/datenschutz` to sitemap
- Remove deprecated `<priority>` and `<changefreq>` tags
- Result: 18 URLs, all with lastmod, clean XML

### 12. Optimize Font Loading
**Impact:** Faster LCP, reduced CLS from font swap
**Effort:** 1-2 hours
**Action:**
- Remove Inter 500 and 600 weights (keep 400 + 700 only)
- Self-host fonts in WOFF2 format (eliminates 2 external DNS lookups)
- Add `<link rel="preload">` for primary font file (Inter 400)
- Consider `font-display: optional` for Goldman (heading font)

### 13. Strengthen Internal Linking
**Impact:** Better crawl depth, topical authority
**Effort:** 2-3 hours
**Action:**
- Add 3-5 contextual internal links per knowledge article
- Cross-link between articles (e.g., SEO guide -> page speed article, conversion article -> Google Ads article)
- Add "Related articles" section at the bottom of each /wissen/* page

### 14. Add Trailing Slash Redirects
**Impact:** Prevents duplicate content from trailing-slash variants
**Effort:** 15 minutes
**Action:** Configure server-side 301 redirects from `/leistungen/` to `/leistungen` (and all other routes).

### 15. Fix www Redirect
**Impact:** Proper permanent redirect signal
**Effort:** 5 minutes
**Action:** Change www-to-non-www redirect from 307 (temporary) to 301 or 308 (permanent).

### 16. Expand llms.txt Files
**Impact:** Better AI citation quality
**Effort:** 1-2 hours
**Action:**
- Add preferred citation format: `Preferred-Citation: "AISEO Hamburg (webseite.hamburg)"`
- Add `Last-Updated` date
- Include summaries of knowledge article content in llms-full.txt
- Add usage terms/license declaration

---

## LOW PRIORITY (Fix Within 3 Months)

### 17. Create YouTube Content
**Impact:** Strongest correlation (~0.737) with AI citation probability
**Effort:** Ongoing
**Action:** Produce 5-10 short videos (3-8 min) on topics covered in /wissen/ articles:
- "Was ist AI SEO? Erklaerung fuer Unternehmen"
- "Lokales SEO in Hamburg: Der komplette Guide"
- "Website-Geschwindigkeit und Umsatz"

### 18. Build External Brand Signals
**Impact:** Entity recognition by AI systems
**Effort:** Ongoing
**Action:**
- Participate in Reddit (r/SEO, r/webdev, r/hamburg)
- Create/claim Google Business Profile with full optimization
- Seek industry directory listings
- Consider brand name strategy to disambiguate from AISEO.ai

### 19. Create Dedicated Case Study Pages
**Impact:** E-E-A-T proof, link-building assets
**Effort:** 1-2 weeks
**Action:** Create detailed pages for Blitz Hamburg, KinderAlbum, and Solovei Beauty with:
- Before/after metrics and screenshots
- Timeline and methodology
- Client quotes/testimonials
- Verifiable results data

### 20. Target Missing Keyword Variants
**Impact:** Capture additional search volume
**Effort:** 1-2 weeks
**Action:**
- Create or optimize content for "Website erstellen lassen Hamburg"
- Create or optimize content for "Webdesigner Hamburg"
- These are high-volume searcher intent variants not currently covered

### 21. Implement Code Splitting
**Impact:** Faster initial load per page
**Effort:** 2-4 hours (or automatic with Next.js migration)
**Action:** Split the monolithic 458 KB bundle by route using React.lazy():
- Homepage: ~200 KB
- Each sub-page: ~50-100 KB loaded on demand
- Lazy-load GSAP only on pages with animations

### 22. Add IndexNow Protocol
**Impact:** Faster indexing on Bing/Yandex
**Effort:** 1 hour
**Action:** Implement IndexNow key file and API integration for content updates.

### 23. Create Comprehensive FAQ Hub
**Impact:** AI citation readiness, featured snippet potential
**Effort:** 1-2 weeks
**Action:** Create /faq page with 20-30 questions organized by category, 134-167 word answers each, with FAQPage schema.

### 24. Embed Google Reviews / Testimonials
**Impact:** Trust signals, social proof
**Effort:** 2-4 hours
**Action:** Add Google reviews widget or named client testimonial quotes to homepage and service pages.

---

## IMPLEMENTATION ROADMAP

### Week 1-2: Foundation
- [ ] Compress logo images (item 4)
- [ ] Add immutable caching in vercel.json (item 5)
- [ ] Reduce font weights (item 12, partial)
- [ ] Fix sitemap issues (item 11)
- [ ] Fix existing schema validation issues (item 7)
- [ ] Add security headers (item 10)
- [ ] Fix www redirect (item 15)

### Week 2-4: SSR Migration
- [ ] Migrate to Next.js or Astro (item 1)
- [ ] Implement per-page meta tags, canonicals, OG tags (items 2, 9)
- [ ] Add proper 404 handling (item 3)
- [ ] Add page-specific structured data (item 6)
- [ ] Add author bylines to articles (item 8)
- [ ] Implement code splitting (item 21, automatic with Next.js)

### Month 2: Content & Optimization
- [ ] Strengthen internal linking (item 13)
- [ ] Add trailing slash redirects (item 14)
- [ ] Expand llms.txt files (item 16)
- [ ] Create case study pages (item 19)
- [ ] Target missing keywords (item 20)
- [ ] Implement IndexNow (item 22)

### Month 3+: Authority Building
- [ ] Start YouTube content (item 17)
- [ ] Build external brand signals (item 18)
- [ ] Create FAQ hub (item 23)
- [ ] Add reviews/testimonials (item 24)

---

## EXPECTED SCORE PROGRESSION

| Milestone | Expected Score | Key Changes |
|-----------|---------------|-------------|
| Current state | 52/100 | -- |
| After quick wins (Week 1) | 58/100 | Images, caching, sitemap, security headers |
| After SSR migration (Week 4) | 78/100 | Unique meta/canonical/OG, proper 404s, page-specific schema, code splitting |
| After content optimization (Month 2) | 85/100 | Internal linking, author attribution, case studies |
| After authority building (Month 3+) | 90+/100 | YouTube, reviews, external signals |

---

*The single highest-impact action is migrating from the React SPA to Next.js/Astro with server-side rendering. This one change addresses 60%+ of all findings across every audit category.*
