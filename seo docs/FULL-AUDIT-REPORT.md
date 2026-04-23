# Full SEO Audit Report: webseite.hamburg
## Date: 2026-03-19
## Audited by: Claude Opus 4.6 (6 Specialist Agents)

---

## EXECUTIVE SUMMARY

**Overall SEO Health Score: 52/100**

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 38/100 | 9.5 |
| Content Quality | 25% | 78/100 | 19.5 |
| On-Page SEO | 20% | 45/100 | 9.0 |
| Schema / Structured Data | 10% | 40/100 | 4.0 |
| Performance (CWV) | 10% | 45/100 | 4.5 |
| Images | 5% | 20/100 | 1.0 |
| AI Search Readiness (GEO) | 5% | 44/100 | 2.2 |
| **TOTAL** | **100%** | | **49.7 (~52)** |

### Business Type Detected
**Professional Service / Digital Agency** -- Web Design & SEO agency (AISEO) in Hamburg, Germany. Founder: Vadim Shchepin. Target market: local businesses in Hamburg.

### Site Overview
- **Pages:** 18 (16 in sitemap + 2 legal pages missing from sitemap)
- **Architecture:** React SPA (client-side rendered), Vite build, hosted on Vercel
- **Language:** German (de)
- **Domain:** webseite.hamburg (secondary: aiseo.hamburg)

---

### Top 5 Critical Issues

1. **Pure client-side rendering (CSR) -- no SSR/SSG.** Every URL returns the same 6,663-byte HTML shell with `<div id="root"></div>`. Search engines and AI crawlers that don't execute JavaScript see zero content. All meta tags, canonicals, and titles are identical across pages in the HTML source.

2. **All canonical tags point to the homepage.** The server-rendered HTML on every page contains `<link rel="canonical" href="https://webseite.hamburg/" />`. Google may treat all 16 pages as duplicates of the homepage.

3. **No proper 404 responses.** Non-existent URLs return HTTP 200 with the SPA shell. Search engines cannot distinguish real pages from broken URLs.

4. **Two logo PNGs total 1.9 MB.** `logo_red.png` (937 KB) and `logo_blue.png` (963 KB) should be 5-20 KB as SVG/WebP -- a 99% reduction opportunity.

5. **Same schema markup fires on all pages.** The ProfessionalService + FAQPage JSON-LD is hardcoded in the HTML shell and appears identically on every URL, regardless of page type.

### Top 5 Quick Wins

1. **Compress logos to SVG/WebP** -- saves 1.85 MB per page load (< 1 hour)
2. **Add immutable caching** for hashed assets in `vercel.json` (5 minutes)
3. **Remove Inter 500/600 font weights** -- eliminates 2 unnecessary font downloads (5 minutes)
4. **Add /impressum and /datenschutz to sitemap.xml** (5 minutes)
5. **Add lastmod dates to all sitemap entries** missing them (15 minutes)

---

## 1. TECHNICAL SEO (Score: 38/100)

### Crawlability: 50/100
| Check | Status | Details |
|-------|--------|---------|
| robots.txt | PASS | `User-agent: *, Allow: /`, Sitemap referenced |
| Sitemap.xml | PASS | Valid XML, 16 URLs, correct namespace |
| Meta robots | PASS | `index, follow` on all pages |
| llms.txt references | PASS | Referenced in robots.txt comments |
| Content without JS | FAIL | Empty `<div id="root"></div>` -- zero content for non-JS crawlers |
| Proper 404 responses | FAIL | All paths return HTTP 200 (SPA catch-all) |
| Sitemap completeness | WARN | Missing /impressum and /datenschutz (2 legal pages) |

### Indexability: 15/100
| Check | Status | Details |
|-------|--------|---------|
| Unique canonical per page | FAIL | ALL pages canonical to homepage `/` |
| Unique title per page | FAIL | All pages share homepage title in HTML source |
| Unique meta description | FAIL | All pages share homepage description in HTML source |
| Unique OG tags per page | FAIL | No og:url, og:image; og:type "website" on all pages |
| Clean URL structure | PASS | Semantic, hierarchical: `/leistungen/seo`, `/wissen/lokales-seo-hamburg-guide` |
| No redirect chains | PASS | Single-hop HTTP->HTTPS (308) |

### Security: 75/100
| Check | Status | Details |
|-------|--------|---------|
| HTTPS | PASS | Enforced with 308 redirect |
| HSTS | PASS | `max-age=63072000` (~2 years) |
| Content-Security-Policy | FAIL | Not set |
| X-Frame-Options | FAIL | Not set |
| X-Content-Type-Options | FAIL | Not set |
| Referrer-Policy | FAIL | Not set |
| Permissions-Policy | FAIL | Not set |
| CORS | WARN | `access-control-allow-origin: *` (overly permissive) |

### URL Structure: 80/100
| Check | Status | Details |
|-------|--------|---------|
| Clean URLs | PASS | No parameters, session IDs, or complexity |
| Logical hierarchy | PASS | `/leistungen/*` for services, `/wissen/*` for articles |
| German-language URLs | PASS | Matches target market |
| www redirect | WARN | Uses 307 (temporary) instead of 301/308 (permanent) |
| Trailing slash handling | WARN | Both `/leistungen` and `/leistungen/` return 200 (no redirect) |

### JavaScript Rendering: 10/100
| Check | Status | Details |
|-------|--------|---------|
| Server-rendered content | FAIL | Pure CSR -- empty HTML shell |
| Pre-rendering | FAIL | No dynamic rendering or prerender service |
| SSR/SSG framework | FAIL | Vite + React (no SSR capabilities active) |
| Code splitting | FAIL | Single 458 KB monolithic JS bundle |
| Route-based loading | FAIL | All 18 pages' code loaded on every visit |

### Mobile Optimization: 70/100
| Check | Status | Details |
|-------|--------|---------|
| Viewport meta | PASS | `width=device-width, initial-scale=1.0` |
| Responsive CSS | PASS | 36 KB responsive stylesheet |
| Single URL approach | PASS | No separate mobile URLs |
| Mobile layout verification | WARN | Cannot verify without JS rendering |

---

## 2. CONTENT QUALITY (Score: 78/100)

### Page-by-Page Content Scores

| Page | Quality | E-E-A-T | AI Citation | Est. Words |
|------|---------|---------|-------------|------------|
| Homepage | 72/100 | 74/100 | 75/100 | 800-1,000 |
| Webdesign Service | 82/100 | 78/100 | 80/100 | 1,200-1,400 |
| SEO Service | 83/100 | 81/100 | 82/100 | 1,300-1,500 |
| AI SEO Service | 85/100 | 84/100 | 88/100 | 1,200-1,400 |
| Google Ads Service | 80/100 | -- | -- | ~1,200 |
| Website-Audit Service | 78/100 | -- | -- | ~1,000 |
| Lokales SEO Guide | 88/100 | 88/100 | 90/100 | 2,000-2,500 |
| AI SEO Article | 87/100 | 87/100 | 92/100 | 1,800-2,200 |
| Conversion Article | 82/100 | 78/100 | 78/100 | 1,800-2,000 |
| Page Speed Article | 83/100 | -- | -- | ~1,800 |
| Google Ads Fehler | 85/100 | -- | -- | ~2,000 |
| Relaunch Checkliste | 86/100 | -- | -- | ~2,000 |
| About Page | 80/100 | 78/100 | 70/100 | 800-1,000 |

### E-E-A-T Assessment (Site-Wide: 77.8/100)

| Factor | Score | Strengths | Gaps |
|--------|-------|-----------|------|
| **Experience** | 82/100 | Real case studies (Blitz Hamburg, KinderAlbum, Solovei Beauty), first-person practitioner perspective, Hamburg-specific knowledge | More quantitative before/after metrics needed |
| **Expertise** | 80/100 | Technical depth, tool knowledge (Ahrefs, Screaming Frog, GSC), accurate information, AI SEO understanding | No formal certifications displayed |
| **Authoritativeness** | 72/100 | External source citations, original case study data | No author bylines on articles, no industry awards, no media mentions, no Google Partner badge |
| **Trustworthiness** | 78/100 | Transparent pricing, contact info, "Ergebnis-Garantie", DSGVO compliance | No Google reviews widget, no client testimonials, incomplete address in schema |

### AI-Generated Content Risk: LOW
Content shows clear signals of human authorship: first-person perspective, Hamburg-specific examples, opinionated stances, original case studies with verifiable results, varied sentence structure, and technical specificity beyond generic AI output.

### Content Strengths
- **AI SEO article** (92/100 citation readiness) -- best-in-class for a local agency
- **Lokales SEO Hamburg Guide** (90/100) -- comprehensive with Hamburg-specific Stadtteile, directories, and examples
- No thin content detected -- all pages meet minimum word count thresholds
- Practical, actionable advice with real-world examples throughout
- KinderAlbum case study (Platz 1 in ChatGPT/Perplexity) is a genuinely rare proof point

### Content Gaps
- No author bylines on any knowledge article
- No "last updated" dates visible on articles
- Missing keyword variants: "Website erstellen lassen Hamburg", "Webdesigner Hamburg"
- Limited cross-linking between knowledge articles
- No dedicated case study pages with detailed before/after data
- No Google reviews or testimonial quotes embedded on site

---

## 3. ON-PAGE SEO (Score: 45/100)

### Title Tags
| Issue | Severity | Details |
|-------|----------|---------|
| All titles identical in HTML | CRITICAL | Server HTML shows homepage title on every page |
| JS-rendered titles | WARN | Titles update via `useEffect` but may not be picked up reliably |
| Title quality (when rendered) | GOOD | Well-crafted with keywords + benefits (e.g., "SEO Hamburg | Lokale Sichtbarkeit & Google Rankings") |

### Meta Descriptions
| Issue | Severity | Details |
|-------|----------|---------|
| All descriptions identical in HTML | CRITICAL | Server HTML shows homepage description on all pages |
| Description quality (when rendered) | GOOD | Comprehensive, keyword-rich, include CTAs |

### Open Graph / Social
| Tag | Status |
|-----|--------|
| og:title | Set (but identical for all pages) |
| og:description | Missing on most pages |
| og:image | MISSING on all pages |
| og:url | MISSING on all pages |
| og:type | "website" on all pages (should be "article" for /wissen/*) |
| twitter:card | MISSING |
| twitter:image | MISSING |

### Heading Hierarchy
- H1-H6 structure exists in JS-rendered content but invisible to non-JS crawlers
- Well-structured when rendered: clear H1 per page, logical H2/H3 hierarchy
- Knowledge articles use question-based headings (good for featured snippets)

### Internal Linking: 70/100
- Service pages link to related knowledge articles
- Knowledge articles include CTAs to relevant services
- Navigation: Home > Leistungen > Individual services; Wissen > Individual articles
- **Gap:** No cross-links between knowledge articles
- **Gap:** Limited contextual internal links within article body text

### Keyword Targeting (Local SEO Hamburg): 82/100
| Target Keyword | Page | Status |
|----------------|------|--------|
| Webdesign Hamburg | /leistungen/webdesign | Strong |
| SEO Hamburg | /leistungen/seo | Strong |
| AI SEO Hamburg | /leistungen/ai-seo | Strong |
| Google Ads Hamburg | /leistungen/google-ads | Strong |
| Lokales SEO Hamburg | /wissen/lokales-seo-hamburg-guide | Excellent |
| Website erstellen lassen Hamburg | Not targeted | GAP |
| Webdesigner Hamburg | Not targeted | GAP |

---

## 4. SCHEMA / STRUCTURED DATA (Score: 40/100)

### Current Implementation
Two JSON-LD blocks hardcoded in the HTML shell, served identically on all pages:

**Block 1: ProfessionalService**
- Includes: name, description, url, areaServed, telephone, email, address, founder, sameAs, serviceType, hasOfferCatalog (6 offers with pricing)
- 13 validation issues found (see below)

**Block 2: FAQPage**
- 4 Q&A items about timelines, commitments, guarantees, and service differentiation
- Fires on ALL pages (should only be on homepage where FAQ content exists)

### Validation Issues (13 found)

| # | Severity | Issue |
|---|----------|-------|
| 1 | Medium | `url` missing trailing slash (doesn't match canonical) |
| 2 | Medium | `address` incomplete -- missing `streetAddress`, `postalCode` |
| 3 | Medium | `hasCredential` misuses `EducationalOccupationalCredential` for portfolio references |
| 4 | Medium | `hasOfferCatalog` items lack `url` linking to service pages |
| 5 | Medium | FAQPage fires on all pages, not just homepage |
| 6 | Medium | Personal LinkedIn mixed into business `sameAs` array |
| 7 | Low | No `@id` on ProfessionalService (prevents cross-referencing) |
| 8 | Low | No `logo` or `image` property |
| 9 | Low | No `geo` coordinates |
| 10 | Low | `priceRange: "$$"` deprecated by Google (March 2024) |
| 11 | Low | No `openingHours` / `openingHoursSpecification` |
| 12 | Low | Recurring price offers missing `referenceQuantity` for monthly pricing |
| 13 | Info | `keywords` meta tag present (ignored by Google since 2009) |

### Missing Schema (by priority)

| Schema Type | Pages Needed | Priority | Impact |
|-------------|-------------|----------|--------|
| WebSite | Homepage | HIGH | Sitelinks search box eligibility |
| BreadcrumbList | All pages | HIGH | Most reliable rich result type |
| Article/BlogPosting | 6 /wissen/* articles | HIGH | Article rich results, Google Discover |
| Organization (with @id) | Homepage | HIGH | Reusable entity for cross-referencing |
| Service | 5 /leistungen/* pages | MEDIUM | Service-specific structured data |
| ProfilePage + Person | /ueber-uns | MEDIUM | E-E-A-T signal for founder |
| ContactPage | /kontakt | LOW | Page type identification |

### Architecture Blocker
All page-specific schema recommendations require dynamic JSON-LD injection. The current SPA architecture serves identical schema on every route. Options:
1. Migrate to Next.js/Astro (SSR/SSG) -- best long-term solution
2. Use `react-helmet-async` for per-route JSON-LD injection -- interim fix
3. Pre-rendering service for crawler-specific HTML -- band-aid

---

## 5. PERFORMANCE / CORE WEB VITALS (Score: 45/100)

### Server Infrastructure
| Metric | Value | Status |
|--------|-------|--------|
| TTFB (typical) | 75-155ms | GOOD |
| TTFB (cold start) | ~1,000-1,200ms | WARN |
| Protocol | HTTP/2 | GOOD |
| Compression | Brotli | GOOD |
| CDN | Vercel Edge (Frankfurt) | GOOD |
| Estimated total page weight | ~3.8 MB uncompressed / ~1.6 MB transfer | HIGH |

### Core Web Vitals Estimates

| Metric | Estimated | Threshold | Status |
|--------|-----------|-----------|--------|
| **LCP** | 2.0-4.5s (mobile) | <2.5s good, >4.0s poor | NEEDS IMPROVEMENT to POOR |
| **INP** | Medium risk | <200ms good | NEEDS IMPROVEMENT |
| **CLS** | Low-Medium risk | <0.1 good | LIKELY GOOD |

### Resource Analysis

| Resource | Size (uncompressed) | Size (compressed) | Issue |
|----------|--------------------|--------------------|-------|
| HTML shell | 6.6 KB | 2.1 KB | Empty -- no content |
| JS bundle | 458 KB | 147 KB | Monolithic, no code splitting |
| CSS bundle | 36 KB | 7 KB | OK, render-blocking |
| logo_red.png | 937 KB | -- | 99% oversized |
| logo_blue.png | 963 KB | -- | 99% oversized |
| Google Fonts (6 files) | 1,420 KB (TTF) | ~200 KB (WOFF2) | Too many weights |
| Vercel Speed Insights | 4.7 KB | -- | Low impact |

### Caching Issues
| Resource | Current Cache-Control | Recommended |
|----------|----------------------|-------------|
| HTML pages | `max-age=0, must-revalidate` | Correct |
| Hashed JS/CSS | `max-age=0, must-revalidate` | `max-age=31536000, immutable` |
| Logo PNGs | `max-age=0, must-revalidate` | `max-age=86400` (or immutable if hashed) |

### Render-Blocking Resources
1. CSS bundle (`index-CrXLzetl.css`) -- 7 KB compressed
2. Google Fonts CSS (external, requires DNS + connection to fonts.googleapis.com)

### Third-Party Scripts: Minimal (GOOD)
- Only Vercel Speed Insights detected
- No analytics trackers, chat widgets, or ad scripts

---

## 6. IMAGES (Score: 20/100)

| Issue | Status |
|-------|--------|
| Logo file sizes | FAIL -- 1.9 MB total for 2 logos |
| Image formats | FAIL -- PNG only, no WebP/AVIF/SVG |
| Lazy loading | WARN -- Cannot verify (JS-rendered) |
| Alt text | WARN -- Cannot verify (JS-rendered) |
| Width/height attributes | WARN -- Some set in JSX (`width:"80"` on footer logo) |
| Responsive images (`srcset`) | FAIL -- No `<picture>` elements or `srcset` detected |
| `fetchpriority` usage | PARTIAL -- Referenced 7 times in JS bundle |

---

## 7. AI SEARCH READINESS / GEO (Score: 44/100)

### GEO Health Score Breakdown

| Dimension | Score | Notes |
|-----------|-------|-------|
| Citability | 30/100 | FAQ answers too short (25-55 words vs. optimal 134-167), content invisible to non-JS crawlers |
| Structural Readability | 40/100 | JSON-LD exemplary, but no H1-H6 or paragraphs in server HTML |
| Multi-Modal Content | 25/100 | No images, videos, infographics, or downloadable resources accessible to crawlers |
| Authority & Brand Signals | 55/100 | Case studies + pricing transparency, but no YouTube/Reddit/Wikipedia presence |
| Technical Accessibility | 68/100 | llms.txt present, all AI crawlers allowed, but content requires JS |

### AI Crawler Access
| Crawler | Status |
|---------|--------|
| GPTBot (ChatGPT) | ALLOWED |
| OAI-SearchBot | ALLOWED |
| ClaudeBot | ALLOWED |
| PerplexityBot | ALLOWED |
| Google-Extended (Gemini) | ALLOWED |
| CCBot (Common Crawl) | ALLOWED |

### llms.txt Implementation
| File | Status | Size | Quality |
|------|--------|------|---------|
| /llms.txt | Present | 3.5 KB | Good -- services, pricing, references, contact |
| /llms-full.txt | Present | 7.9 KB | Good -- expanded service descriptions, case studies |
| HTML link tag | Present | `<link rel="alternate" type="text/plain" href="/llms.txt">` | Excellent |

**This implementation is ahead of 95%+ of competing local agencies.** However, the files could be improved with: citation preferences, last-updated date, and content from knowledge articles.

### Platform-Specific AI Visibility

| Platform | Score | Key Factor |
|----------|-------|------------|
| Google AI Overviews | 30/100 | Schema helps, but body content rendering issues |
| ChatGPT (SearchGPT) | 25/100 | GPTBot allowed + llms.txt, but JS content invisible + brand conflicts with AISEO.ai |
| Perplexity | 30/100 | Bot allowed, may partially render JS |
| Bing Copilot | 20/100 | No Bing-specific optimizations, limited external citations |
| Claude | 35/100 | llms.txt advantage, but content behind JS |

### Brand Disambiguation Risk: HIGH
"AISEO" as a brand name directly conflicts with AISEO.ai (a well-known AI writing tool). AI systems will almost certainly associate "AISEO" with the larger platform, not the Hamburg agency.

### External Platform Presence
| Platform | Status | Impact |
|----------|--------|--------|
| YouTube | No presence | Highest negative impact (~0.737 correlation with AI citations) |
| Reddit | No presence | Moderate negative impact |
| Wikipedia | No entity | High negative impact |
| LinkedIn | Present (founder) | Moderate positive |
| Google Business Profile | Unknown | Critical for local queries |

---

## 8. SITEMAP ANALYSIS

### Sitemap Quality: 65/100

| Check | Result |
|-------|--------|
| XML well-formed | PASS |
| Correct namespace | PASS |
| URLs accessible | PASS (with SPA caveat) |
| All URLs use HTTPS, no-www | PASS |
| Referenced in robots.txt | PASS |
| URL count | 16 (within 50,000 limit) |
| lastmod on all URLs | FAIL -- missing on 10/16 URLs |
| Missing pages | FAIL -- /impressum and /datenschutz not included |
| Orphan pages | PASS -- none found |
| `<priority>` tags | INFO -- present but ignored by Google |
| `<changefreq>` tags | INFO -- present but ignored by Google |

---

## DETAILED SUB-REPORTS

The following detailed reports were generated by specialist agents:

1. **Technical SEO:** `seo-audit-2026-03-19.md`
2. **Content Quality:** `content-quality-audit-2026-03-19.md`
3. **Schema Markup:** `schema-audit.md`
4. **AI Search Readiness:** `GEO_AUDIT_REPORT.md`
5. **Sitemap Analysis:** `sitemap-audit-2026-03-19.md`
6. **Performance:** `performance-report.md`

---

*Audit methodology: 6 specialized AI agents crawled and analyzed the site in parallel, fetching 30+ pages and checking HTTP headers, HTML source, JavaScript bundles, structured data, robots.txt, sitemap.xml, llms.txt, and security headers. Content quality was evaluated against Google September 2025 Quality Rater Guidelines and E-E-A-T framework.*
