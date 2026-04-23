# SEO Audit Report v2: webseite.hamburg
## Date: 2026-03-19 (Post Next.js Migration)
## Previous Score: 52/100 | Current Score: 84/100

---

## Executive Summary

Following the migration from a React SPA (Vite) to Next.js 15 App Router with server-side rendering, webseite.hamburg has dramatically improved its SEO health from **52/100 to 84/100** -- a **+32 point improvement**.

**Business Type:** Local Digital Agency / Professional Service (Hamburg, Germany)
**Technology:** Next.js 15, Vercel, Server-Side Rendered / Prerendered
**Pages:** 19 (all in sitemap, all server-rendered)

### Score Breakdown

| Category | Weight | v1 Score | v2 Score | Change |
|----------|--------|----------|----------|--------|
| Technical SEO | 25% | 38/100 | 93/100 | +55 |
| Content Quality | 25% | 78/100 | 82/100 | +4 |
| On-Page SEO | 20% | 35/100 | 95/100 | +60 |
| Schema / Structured Data | 10% | 40/100 | 70/100 | +30 |
| Performance (CWV) | 10% | 65/100 | 90/100 | +25 |
| Images | 5% | 45/100 | 80/100 | +35 |
| AI Search Readiness | 5% | 44/100 | 82/100 | +38 |
| **Weighted Total** | **100%** | **52/100** | **84/100** | **+32** |

### Top 5 Achievements Since v1

1. **Server-side rendering** -- All 19 pages render complete HTML without JavaScript. Search engines and AI crawlers receive full content immediately.
2. **Unique metadata per page** -- Every page has its own title, meta description, canonical URL, and OG tags. No more duplicate canonicals.
3. **Comprehensive structured data** -- 10 schema types deployed (WebSite, Organization, ProfessionalService, Service, Article, FAQPage, ProfilePage, ContactPage, Person, BreadcrumbList).
4. **Image optimization** -- Logos compressed from 1.9MB to 34KB (WebP). Explicit width/height attributes prevent CLS.
5. **Security headers** -- HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy all present.

### Top 5 Remaining Issues

1. **[Medium] Article schema missing `image` property** -- Blocks Article rich results eligibility in Google
2. **[Medium] www redirect uses 307** instead of 301/308 permanent redirect
3. **[Medium] No Content-Security-Policy header** -- Security gap
4. **[Medium] Duplicate BreadcrumbList JSON-LD** on some pages (layout + page level)
5. **[Low] No YouTube/Reddit presence** -- Highest-correlation signals for AI citation probability

---

## Detailed Category Scores

### 1. Technical SEO: 93/100 (was 38/100)

**Major improvements:**
- SSR/prerendered pages (was client-side only)
- Proper 404 status codes (was soft-404 SPA fallback)
- Clean sitemap with 19 URLs and lastmod dates
- Trailing slash 308 redirects
- HTTP to HTTPS 308 redirect
- Full security header suite
- Fonts self-hosted via next/font (WOFF2, preloaded)

**Remaining issues:**
- [Medium] No Content-Security-Policy header
- [Medium] www redirect uses 307 (temporary) instead of permanent
- [Low] /favicon.ico returns 404
- [Low] No apple-touch-icon or web app manifest
- [Low] HSTS missing includeSubDomains; preload

Full details: [technical-seo-audit-v2.md](technical-seo-audit-v2.md)

### 2. Content Quality: 82/100 (was 78/100)

**E-E-A-T scores:**
- Experience: 78/100 -- Real case studies, practitioner insights
- Expertise: 85/100 -- Deep technical knowledge, specific tool proficiency
- Authoritativeness: 72/100 -- Limited external validation
- Trustworthiness: 88/100 -- Transparent pricing, honest communication, full contact info

**Improvements:**
- Author bylines with publication dates on all articles
- FAQ hub with 24 Q&As across 5 categories
- Related articles sections with cross-links

**Remaining gaps:**
- No client testimonials with attributed quotes
- 2-3 articles slightly below 1,500-word content floor
- No formal certifications displayed
- No industry-specific landing pages

Full details: [content-quality-v2.md](content-quality-v2.md)

### 3. On-Page SEO: 95/100 (was 35/100)

**All 19 pages now have:**
- Unique, keyword-rich title tags (proper length)
- Unique meta descriptions
- Self-referencing canonical URLs
- Unique H1 headings
- Proper heading hierarchy (H1 > H2 > H3)
- Open Graph tags (title, description, url, type)
- Twitter Card tags
- BreadcrumbList navigation

**Internal linking:**
- 12 contextual cross-links added across 6 articles
- Related articles section on every article page (3 links each)
- Service pages cross-link to other services
- Navigation + footer provide site-wide coverage

**Minor gaps:**
- Some article headings could use question-based phrasing for AI query matching

### 4. Schema / Structured Data: 70/100 (was 40/100)

**10 schema types deployed** (was 2):
WebSite, Organization, ProfessionalService, Service, Article, FAQPage, ProfilePage, ContactPage, Person, BreadcrumbList

**@id cross-references implemented:**
- #website -> #organization (publisher)
- #organization -> #founder (founder)

**Issues to fix:**
- [Medium] Article schema missing `image` -- blocks rich results
- [Medium] Duplicate BreadcrumbList on some pages
- [Low] Article.publisher should use @id reference
- [Low] ProfessionalService missing @id and logo
- [Low] LinkedIn URL in ProfessionalService sameAs (should be Person only)

Full details: [schema-audit-v2.md](schema-audit-v2.md)

### 5. Performance (CWV): 90/100 (was 65/100)

**Server-side rendering eliminates the SPA performance penalty:**
- Prerendered HTML delivered from Vercel edge cache
- Fonts preloaded as WOFF2
- Scripts loaded with async attribute
- Single consolidated CSS file
- React Server Components with efficient hydration

**Positive signals:**
- x-vercel-cache: PRERENDER / HIT
- x-nextjs-prerender: 1
- Fonts preloaded (3 WOFF2 files)
- Logo images preloaded

**Minor note:**
- RSC payload adds ~70KB to HTML (inherent Next.js trade-off, not actionable)

### 6. Images: 80/100 (was 45/100)

**Improvements:**
- Logos compressed from 963KB + 937KB to 16KB + 18KB (WebP)
- Explicit width/height attributes on all images (prevents CLS)
- Modern WebP format

**Remaining gaps:**
- No article-specific images, infographics, or diagrams
- No image alt text issues (only 2 logo images exist)
- Old PNG logos still present in /public (could be removed)

### 7. AI Search Readiness: 82/100 (was 44/100)

**Major improvements:**
- Full SSR -- AI crawlers receive complete content
- /llms.txt and /llms-full.txt with citation preferences
- All AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot)
- Comprehensive structured data for entity resolution
- Author attribution on all articles
- FAQPage schema with 24 Q&As

**Remaining gaps:**
- No YouTube presence (0.737 correlation with AI citations)
- No Reddit presence
- Article headings mostly declarative (not question-based)
- Limited statistical density in articles
- Brand disambiguation risk ("AISEO" vs aiseo.ai)

Full details: [geo-audit-v2.md](geo-audit-v2.md)

---

## Score Progression

| Milestone | Score | Key Changes |
|-----------|-------|-------------|
| Pre-migration (v1) | 52/100 | React SPA, no SSR, duplicate canonicals |
| **Post-migration (v2)** | **84/100** | **Next.js SSR, per-page meta/schema, security headers, image optimization** |
| After schema fixes | ~88/100 | Article image, dedup breadcrumbs, @id cleanup |
| After content expansion | ~92/100 | YouTube, more articles, client testimonials |

---

## Comparison: Before vs After

| Metric | Before (SPA) | After (Next.js SSR) |
|--------|-------------|-------------------|
| Rendering | Client-side only | Server-side prerendered |
| Unique title tags | 1 (shared) | 19 (unique per page) |
| Unique meta descriptions | 1 (shared) | 19 (unique per page) |
| Unique canonicals | 1 (all pointed to /) | 19 (self-referencing) |
| 404 handling | Soft-404 (200 status) | Proper 404 status code |
| Schema types | 2 | 10 |
| JSON-LD blocks | 2 (same on all pages) | 45+ (page-specific) |
| Logo file size | 1.9 MB | 34 KB |
| Security headers | 0 | 5 (HSTS, X-Frame, nosniff, Referrer, Permissions) |
| Font loading | External Google Fonts | Self-hosted WOFF2 with preload |
| Sitemap URLs | 16 (missing lastmod) | 19 (all with lastmod) |
| Author bylines | None | All articles |
| FAQ page | None | 24 Q&As with FAQPage schema |
| Internal cross-links | Minimal | 12 article links + related sections |
| AI crawler access | Blocked by CSR | Full SSR + llms.txt |

---

*Report generated 2026-03-19. Specialist reports: technical-seo-audit-v2.md, content-quality-v2.md, schema-audit-v2.md, geo-audit-v2.md*
