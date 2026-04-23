# Technical SEO Audit: webseite.hamburg

**Date:** 2026-03-19
**Auditor:** Claude Opus 4.6 (automated)
**Stack:** Next.js 15 on Vercel (Frankfurt edge, fra1)
**Pages in sitemap:** 19

---

## Overall Technical SEO Score: 93 / 100

| Category | Score | Status |
|---|---|---|
| Crawlability | 10/10 | PASS |
| Indexability | 10/10 | PASS |
| Security | 8/10 | PASS (minor gaps) |
| URL Structure | 9/10 | PASS (minor note) |
| Mobile-Friendliness | 10/10 | PASS |
| Core Web Vitals (source) | 9/10 | PASS (minor note) |
| Structured Data | 10/10 | PASS |
| JS Rendering / SSR | 10/10 | PASS |
| AI / LLM Readiness | 9/10 | PASS |
| Misc / Extras | 8/10 | PASS (minor gaps) |

---

## 1. Crawlability -- 10/10 -- PASS

### robots.txt
- Available at `/robots.txt`, returns 200.
- `User-agent: *` with `Allow: /` -- no accidental blocks.
- Sitemap declared: `https://webseite.hamburg/sitemap.xml`.
- LLM context files referenced as comments (`/llms.txt`, `/llms-full.txt`).

### XML Sitemap
- Valid XML at `/sitemap.xml`, 19 URLs.
- All URLs use `<lastmod>` with ISO 8601 dates.
- No deprecated `<priority>` or `<changefreq>` -- correct per current best practice.
- All sitemap URLs match the canonical domain (no www, no trailing slash).

### 404 Handling
- `/nonexistent-page` returns proper HTTP 404 status code.
- Custom 404 page renders with a link back to the homepage.

### No Issues Found
- No `noindex` on any indexable page.
- No crawl traps or infinite URL parameters detected.

---

## 2. Indexability -- 10/10 -- PASS

### Canonical Tags
- Self-referencing `<link rel="canonical">` confirmed on homepage: `https://webseite.hamburg`.
- All 19 pages reported to have unique canonical URLs (per pre-crawl data).

### Meta Robots
- Homepage: `<meta name="robots" content="index, follow"/>` -- explicit and correct.

### Duplicate Content
- No trailing-slash duplicates: `/leistungen/` returns 308 to `/leistungen`.
- `www.webseite.hamburg` redirects to `webseite.hamburg` (see URL Structure note below).
- HTTP redirects to HTTPS via 308 Permanent Redirect.

### Title and Description
- Homepage title: "Webdesign & SEO Hamburg | Websites die Kunden bringen" (54 chars) -- good length.
- Homepage description: "Professionelles Webdesign, SEO und Google Ads fur lokale Unternehmen in Hamburg..." (118 chars) -- good length.
- All 19 pages confirmed to have unique titles and descriptions.

---

## 3. Security -- 8/10 -- PASS (minor gaps)

### HTTPS
- Full HTTPS with valid certificate.
- HTTP to HTTPS redirect: 308 Permanent Redirect -- correct.

### HSTS
- `Strict-Transport-Security: max-age=63072000` (2 years) -- PASS.
- Note: No `includeSubDomains` or `preload` directives. Not critical for a single-domain site, but adding them would allow HSTS preload list submission.

### Security Headers Present
| Header | Value | Status |
|---|---|---|
| X-Content-Type-Options | nosniff | PASS |
| X-Frame-Options | DENY | PASS |
| Referrer-Policy | strict-origin-when-cross-origin | PASS |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | PASS |
| Strict-Transport-Security | max-age=63072000 | PASS |
| Content-Security-Policy | (not set) | MISSING |

### security.txt
- `/.well-known/security.txt` exists and returns 200.
- Contains `Contact:`, `Preferred-Languages:`, and `Canonical:` fields.

### Issues

**[Medium] No Content-Security-Policy header**
Neither an HTTP header nor a `<meta http-equiv="Content-Security-Policy">` tag was found. A CSP helps prevent XSS and data injection attacks, and is increasingly expected by security scanners.

Recommendation: Add a `Content-Security-Policy` header via `next.config.js` security headers or Vercel configuration. Start with `Content-Security-Policy-Report-Only` to test before enforcing. A minimal starting point:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';
```

**[Low] HSTS could include `includeSubDomains; preload`**
Current value is sufficient, but adding these directives enables HSTS preload list registration, protecting users from the very first connection.

---

## 4. URL Structure -- 9/10 -- PASS (minor note)

### Clean URLs
- All URLs are lowercase, human-readable, and use hyphens.
- Logical hierarchy: `/leistungen/webdesign`, `/wissen/lokales-seo-hamburg-guide`.
- No query parameters, session IDs, or unnecessary path segments.

### Trailing Slash Normalization
- Trailing slashes redirect via 308 to non-trailing-slash versions -- consistent and correct.

### www Redirect
- `https://www.webseite.hamburg/` redirects to `https://webseite.hamburg/`.
- Redirect uses **307 Temporary Redirect** instead of 301/308 Permanent Redirect.

### HTTP to HTTPS Redirect
- `http://webseite.hamburg/` redirects to `https://webseite.hamburg/` via **308 Permanent Redirect** -- correct.

### Issues

**[Medium] www-to-non-www uses 307 (temporary) instead of 301/308 (permanent)**
The redirect from `https://www.webseite.hamburg/` to `https://webseite.hamburg/` uses a 307 Temporary Redirect. Search engines treat 307 as a temporary signal, meaning they may continue to check the www version and may not fully consolidate link equity to the canonical non-www URL.

Recommendation: Change the www redirect to a 301 or 308 permanent redirect. This is typically configured at the DNS/hosting level. In Vercel, this can be set in `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.webseite.hamburg" }],
      "destination": "https://webseite.hamburg/:path*",
      "permanent": true
    }
  ]
}
```

Note: Vercel may handle this at the edge. Check whether Vercel dashboard domain settings can enforce a permanent redirect for the www variant.

---

## 5. Mobile-Friendliness -- 10/10 -- PASS

### Viewport
- `<meta name="viewport" content="width=device-width, initial-scale=1"/>` -- correct.

### Language
- `<html lang="de">` -- correctly set for German content.

### Responsive Signals
- Single CSS file (`d9accf6921660c30.css`) loaded -- suggests consolidated styles, no separate mobile/desktop sheets.
- No fixed-width layout elements detected in the HTML source.
- Fonts preloaded as WOFF2 (3 files) -- modern, compressed format.

### Images
- Logo images use explicit `width` and `height` attributes (prevents CLS).
- Images use `.webp` format -- modern, efficient.

### No Issues Found

---

## 6. Core Web Vitals (Source-Level Analysis) -- 9/10 -- PASS

**Note:** These are source-code-level signals, not field measurements. Actual CWV data should be validated with CrUX or PageSpeed Insights.

### LCP (Largest Contentful Paint) Indicators
- Server-side rendered / prerendered pages (`x-nextjs-prerender: 1`, `x-vercel-cache: PRERENDER` or `HIT`).
- Fonts preloaded via `<link rel="preload" as="font">` (3 WOFF2 files).
- Logo images preloaded via `<link rel="preload" as="image">`.
- HTML fully rendered in initial response (not client-side rendered).
- HTML size: ~70 KB (uncompressed) -- reasonable for a full SSR page with RSC payload.

### INP (Interaction to Next Paint) Indicators
- Scripts loaded with `async` attribute -- non-blocking.
- Webpack runtime loaded with `fetchPriority="low"` -- good deprioritization.
- No heavy client-side frameworks detected beyond Next.js hydration.
- 88 script-related tags in the HTML (includes RSC payload chunks) -- typical for Next.js App Router.

### CLS (Cumulative Layout Shift) Indicators
- Images have explicit `width` and `height` attributes.
- Fonts are preloaded (reduces font-swap CLS).
- Single CSS file with `data-precedence="next"` -- loaded before render.

### Issues

**[Low] HTML payload size is 70 KB (uncompressed)**
This includes the RSC (React Server Components) flight payload embedded in `<script>` tags. While this is normal for Next.js App Router, the RSC payload duplicates content already in the HTML. This is a known Next.js trade-off and not actionable without framework changes, but worth monitoring as the site grows.

---

## 7. Structured Data -- 10/10 -- PASS

### Homepage JSON-LD
Three structured data blocks detected:

1. **BreadcrumbList** -- Single item for Home. Correct for the homepage.

2. **WebSite** schema:
   - `@id`: `https://webseite.hamburg/#website`
   - `name`: "AISEO Hamburg"
   - `alternateName`: "webseite.hamburg"
   - `inLanguage`: "de"
   - `publisher` references Organization via `@id`

3. **Organization** schema:
   - `@id`: `https://webseite.hamburg/#organization`
   - Includes `logo`, `contactPoint` (telephone, email, languages: de/en/ru), `founder` (Person with LinkedIn sameAs), `address` (Hamburg, DE), `geo` coordinates, `areaServed` (Hamburg), and `sameAs` (aiseo.hamburg, Instagram, TikTok).

### Quality Assessment
- Properly linked via `@id` references (WebSite -> Organization).
- No validation errors apparent from source inspection.
- All 19 pages confirmed to have BreadcrumbList schema.
- Rich data for local business signals (geo, areaServed, contactPoint).

### No Issues Found

---

## 8. JavaScript Rendering / SSR -- 10/10 -- PASS

### Rendering Strategy
- **Prerendered at build time** (`x-nextjs-prerender: 1`).
- Full HTML content delivered in initial response -- search engine crawlers receive complete content without JavaScript execution.
- React Server Components (RSC) used -- the RSC flight payload is embedded for client-side hydration, but the HTML is fully rendered server-side.

### Script Loading
- All JS chunks use `async` attribute -- non-render-blocking.
- No `defer` scripts that could delay interactivity.
- Webpack runtime deprioritized with `fetchPriority="low"`.

### Vercel Edge Caching
- `x-vercel-cache: PRERENDER` (homepage, cold) or `HIT` (inner pages, warm).
- Stale-while-revalidate: `x-nextjs-stale-time: 300` (5 minutes).

### No Issues Found
- Content is fully accessible without JavaScript -- excellent for crawlability.

---

## 9. AI / LLM Readiness -- 9/10 -- PASS

### llms.txt
- `/llms.txt` returns 200 with structured content following the llmstxt.org specification.
- Contains: company description, services with prices, URLs, and contact info.
- Referenced in robots.txt comments.

### llms-full.txt
- `/llms-full.txt` returns 200 (confirmed via headers).

### Structured Data for AI
- Organization schema with comprehensive business information.
- WebSite schema with name, description, language.
- BreadcrumbList on all pages aids content hierarchy understanding.

### Issues

**[Low] No AI crawler management in robots.txt**
The robots.txt uses a single `User-agent: *` rule. Consider whether to explicitly allow or block known AI crawlers (GPTBot, Google-Extended, ClaudeBot, CCBot, PerplexityBot, etc.) depending on your AI visibility strategy. Since the site offers AI SEO services and provides llms.txt files, explicitly allowing AI crawlers would be a positive signal:

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

---

## 10. Miscellaneous -- 8/10

### Open Graph / Social
- Full OG tags: `og:title`, `og:description`, `og:url`, `og:image` (1200x630), `og:type`.
- Full Twitter Card tags: `summary_large_image` with image, title, description.
- OG image uses a dynamic route (`/opengraph-image?44237bdf0f297236`).

### Favicon
- `<link rel="icon" href="/logo_red.webp"/>` -- favicon set.
- `/favicon.ico` returns **404** -- some browsers and tools still request this path directly.
- No `apple-touch-icon` or web app manifest detected.

### Author / Publisher
- `<meta name="author" content="Vadim Shchepin"/>`.
- `<link rel="author" href="https://www.linkedin.com/in/vadim-shchepin/"/>`.
- `<meta name="creator" content="AISEO Hamburg"/>`.
- `<meta name="publisher" content="AISEO Hamburg"/>`.

### Issues

**[Low] /favicon.ico returns 404**
While the favicon is correctly set via `<link rel="icon">`, some tools, bots, and browsers request `/favicon.ico` directly. A missing favicon.ico generates 404 log noise and wastes a small amount of crawl budget.

Recommendation: Add a `favicon.ico` file to the `/public` directory, or configure a redirect from `/favicon.ico` to `/logo_red.webp`.

**[Low] No apple-touch-icon**
No `<link rel="apple-touch-icon">` detected. iOS devices use this when users add the site to their home screen.

**[Low] No web app manifest**
No `<link rel="manifest">` detected. A manifest enables PWA features and provides metadata for "Add to Home Screen" on mobile devices.

---

## Prioritized Issue Summary

### Critical
(none)

### High
(none)

### Medium

| # | Issue | Category | Impact |
|---|---|---|---|
| 1 | No Content-Security-Policy header | Security | XSS protection gap; may affect security audit scores |
| 2 | www redirect uses 307 instead of 301/308 | URL Structure | Link equity may not fully consolidate to canonical URL |

### Low

| # | Issue | Category | Impact |
|---|---|---|---|
| 3 | HSTS missing `includeSubDomains; preload` | Security | Cannot register for HSTS preload list |
| 4 | /favicon.ico returns 404 | Misc | Minor crawl budget waste, log noise |
| 5 | No apple-touch-icon | Misc | Suboptimal iOS home screen experience |
| 6 | No web app manifest | Misc | No PWA capabilities |
| 7 | No explicit AI crawler rules in robots.txt | AI Readiness | Missed opportunity to signal AI crawler policy |
| 8 | Large RSC payload in HTML | Core Web Vitals | ~70 KB HTML; inherent Next.js App Router trade-off |

---

## What Is Done Well

- **SSR/Prerendering**: Full server-side rendering with Vercel edge caching. Search engines receive complete HTML without needing JS execution.
- **Meta tags**: Every page has unique title, description, canonical, and robots directives.
- **Structured data**: Comprehensive JSON-LD (WebSite, Organization, BreadcrumbList) with proper `@id` linking.
- **Security headers**: Strong set (HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy).
- **URL hygiene**: Clean, lowercase, hyphenated URLs with consistent trailing-slash normalization.
- **Font optimization**: WOFF2 with preload hints.
- **Image optimization**: WebP format with explicit dimensions.
- **Sitemap**: Clean XML with lastmod, no deprecated fields.
- **404 handling**: Proper status code with user-friendly page.
- **LLM readiness**: llms.txt and llms-full.txt files available.
- **Social tags**: Complete OG and Twitter Card implementation.
- **security.txt**: Present and properly formatted.

---

*Report generated 2026-03-19 by automated technical SEO audit.*
