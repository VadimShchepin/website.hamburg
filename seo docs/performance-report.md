# Performance & Core Web Vitals Analysis: webseite.hamburg

**Date:** 2026-03-19
**Analyst tool:** curl-based network analysis, HTML/CSS/JS source inspection
**Site architecture:** React SPA (client-side rendered), hosted on Vercel (Frankfurt edge, fra1)

---

## 1. Executive Summary

webseite.hamburg is a client-side rendered React single-page application served from Vercel's CDN. Server response times are excellent (sub-100ms typical TTFB from Europe), and Brotli compression is enabled. However, several significant issues threaten Core Web Vitals performance:

- **Two PNG logo files totaling 1.9 MB** are the single largest performance problem
- **No server-side rendering (SSR) or static pre-rendering** -- the HTML shell is empty (`<div id="root"></div>`), meaning all content is rendered by JavaScript after the 458 KB bundle downloads and executes
- **Six Google Font files (1.42 MB total, TTF format)** downloaded from fonts.gstatic.com
- **No code splitting** -- the entire application is in a single JS bundle
- **Hashed assets have no immutable caching** -- `Cache-Control: public, max-age=0, must-revalidate`

**Estimated total page weight: ~3.8 MB** (uncompressed) / ~1.6 MB (compressed transfer size)

---

## 2. Server & Infrastructure

### TTFB (Time to First Byte)

| Page | Run 1 | Run 2 | Run 3 | Notes |
|------|-------|-------|-------|-------|
| `/` (homepage) | 155ms | 92ms | 1082ms | Occasional cold start |
| `/leistungen/webdesign` | 92ms | -- | -- | Same HTML shell |
| `/wissen/lokales-seo-hamburg-guide` | 99ms | -- | -- | Same HTML shell |
| `/kontakt` | 1203ms | 112ms | 95ms | Cold start on first hit |

All routes serve the **identical HTML shell** (6,663 bytes uncompressed). The SPA router handles navigation client-side. Occasional ~1s spikes are likely Vercel serverless cold starts, though for a static HTML file this is unexpected and may indicate a misconfigured rewrites rule that invokes a serverless function.

**Verdict:** TTFB is typically good (<200ms) when cached. The occasional 1s+ spikes are a concern for p75 field data.

### Protocol & Compression

| Feature | Status |
|---------|--------|
| HTTP/2 | Yes |
| HTTP/3 (QUIC) | Not tested (curl limitation) |
| Brotli compression | Yes (content-encoding: br) |
| HSTS | Yes (max-age=63072000, ~2 years) |
| CDN | Vercel Edge Network (Frankfurt POP) |

### Caching Headers

| Resource | Cache-Control | Issue |
|----------|--------------|-------|
| HTML (`/`) | `public, max-age=0, must-revalidate` | Correct for HTML |
| JS (`index-CLgbmDEF.js`) | `public, max-age=0, must-revalidate` | PROBLEM: hashed file should be immutable |
| CSS (`index-CrXLzetl.css`) | `public, max-age=0, must-revalidate` | PROBLEM: hashed file should be immutable |
| Vercel Speed Insights | `public, max-age=2678400` (~31 days) | Good |

**Critical issue:** Content-hashed assets (JS/CSS with fingerprinted filenames like `index-CLgbmDEF.js`) should be served with `Cache-Control: public, max-age=31536000, immutable`. The current `max-age=0` forces revalidation on every visit, wasting bandwidth and increasing load time on repeat visits.

---

## 3. Resource Inventory

### HTML Shell
- **Size:** 6,663 bytes (2,142 bytes Brotli)
- **Content:** Empty `<div id="root"></div>` body -- no pre-rendered content
- **External resources loaded from HTML:**
  - 1 CSS bundle (render-blocking)
  - 1 JS bundle (`type="module"`, deferred)
  - 2 Google Fonts preconnect hints
  - 1 Google Fonts CSS stylesheet (render-blocking)
  - 2 JSON-LD structured data blocks (non-blocking)

### JavaScript
- **Single bundle:** `index-CLgbmDEF.js`
- **Uncompressed:** 458 KB
- **Brotli transfer:** 147 KB
- **Libraries identified:** React, React DOM, React Router, GSAP (animation)
- **Code splitting:** Minimal -- 6 `Suspense` boundaries found, 1 dynamic `import()`, but effectively a monolithic bundle
- **No tree-shaking evidence for GSAP** -- entire library likely included

### CSS
- **Single bundle:** `index-CrXLzetl.css`
- **Uncompressed:** 36 KB
- **Brotli transfer:** 7 KB
- **No inline critical CSS** in the HTML
- **No background images** in CSS

### Images

| File | Size | Format | Issue |
|------|------|--------|-------|
| `logo_red.png` | 937 KB | PNG | Massively oversized for a logo |
| `logo_blue.png` | 963 KB | PNG | Massively oversized for a logo |

Only two static images are referenced in the bundled JSX. No WebP or AVIF formats are used. No `<picture>` elements with format fallbacks. These logos appear to be high-resolution PNGs that should be 5-20 KB as optimized SVGs or compressed WebP.

### Fonts (Google Fonts, TTF format)

| Font | Weight | Size |
|------|--------|------|
| Goldman 400 | Regular | 74 KB |
| Goldman 700 | Bold | 74 KB |
| Inter 400 | Regular | 317 KB |
| Inter 500 | Medium | 318 KB |
| Inter 600 | Semi-bold | 318 KB |
| Inter 700 | Bold | 319 KB |
| **Total** | | **1,420 KB (1.39 MB)** |

The fonts are served in TTF format (not WOFF2). This is because the `curl` user-agent does not advertise WOFF2 support. In a real browser, Google Fonts would serve WOFF2 (typically 40-60% smaller). However, loading 6 font files (4 Inter weights + 2 Goldman weights) is still excessive.

**`font-display: swap`** is correctly set in the Google Fonts CSS response, which prevents invisible text (FOIT).

### Third-Party Scripts

| Script | Type | Impact |
|--------|------|--------|
| Google Fonts CSS | Render-blocking stylesheet | Blocks first paint |
| Vercel Speed Insights | Analytics (4.7 KB) | Low impact, appears deferred |
| No analytics/tracking scripts found | -- | Good for performance |

---

## 4. Core Web Vitals Impact Assessment

### LCP (Largest Contentful Paint) -- LIKELY POOR (>4.0s on slow connections)

The critical rendering path is:

1. Download HTML (2 KB compressed) -- fast
2. Parse HTML, discover CSS + JS + Google Fonts CSS
3. **Download and parse CSS bundle** (render-blocking, 7 KB compressed) -- fast
4. **Download Google Fonts CSS** (render-blocking, second origin) -- adds latency
5. **Download and parse JS bundle** (147 KB compressed, deferred) -- moderate
6. **Execute JS, create React DOM, render components** -- CPU-bound
7. **Download font files** for visible text -- fonts.gstatic.com
8. **Download 937 KB logo PNG** -- if this is the LCP element, it loads very late

**Key problem:** Because this is a client-side rendered SPA with an empty HTML shell, NO content appears until the full JS bundle downloads, parses, and executes. The LCP element (likely a heading or hero section) cannot be painted until React hydrates the entire page.

**Estimated LCP breakdown (3G/slow 4G):**
- TTFB: ~100-300ms
- HTML download: ~50ms
- CSS + Google Fonts CSS (render-blocking): ~200-400ms
- JS download (147 KB): ~500-1500ms
- JS parse + execute + React render: ~500-1500ms
- Font download for LCP text: ~200-500ms
- **Estimated LCP: 2.0-4.5s** (varies by connection)

### INP (Interaction to Next Paint) -- LIKELY NEEDS IMPROVEMENT

- GSAP animation library in the bundle adds main-thread work during scrolling and interactions
- Single monolithic JS bundle (458 KB uncompressed) means all code parses at startup
- React client-side routing means route transitions involve component creation
- No evidence of heavy event handlers or synchronous operations

**Risk:** Medium. The bundle size is moderate and GSAP can be efficient, but the lack of code splitting means initial parse time is higher than necessary.

### CLS (Cumulative Layout Shift) -- LIKELY GOOD with caveats

**Positive indicators:**
- `font-display: swap` prevents FOIT but **will cause FOUT** (Flash of Unstyled Text), which contributes to CLS when Goldman/Inter replace the system-ui fallback
- CSS custom properties define consistent spacing
- `img { max-width: 100%; height: auto; display: block }` is set globally

**Risk factors:**
- Client-side rendering means ALL content appears at once after JS executes -- this itself does not cause CLS (since there is nothing to shift from), but any lazy-loaded content or async data fetching after initial render would cause shifts
- No explicit `width` and `height` on image elements in the HTML (they are set in JSX: `width:"80"` on footer logo)
- Font swap from system-ui to Goldman (display font) could cause significant layout shifts due to very different metrics

---

## 5. Prioritized Recommendations

### P0 -- Critical (Expected impact: significant LCP improvement)

#### 1. Implement Server-Side Rendering or Static Site Generation
The single most impactful change. Every page is a known, static route. Pre-rendering the HTML on the server (using Next.js, Astro, or Vite SSG plugin) would:
- Eliminate the JS-dependency for first paint
- Allow the browser to start rendering content immediately
- Enable streaming HTML for even faster first paint
- Improve SEO (crawlers see content without JS execution)

**Expected LCP improvement: 1-3 seconds on slow connections.**

#### 2. Optimize Logo Images
`logo_red.png` (937 KB) and `logo_blue.png` (963 KB) are absurdly large for logos.

Actions:
- Convert to SVG if possible (logos are typically vector graphics) -- expected size: 2-10 KB
- If raster is required, convert to WebP at appropriate dimensions -- expected size: 10-30 KB
- Add explicit `width` and `height` attributes
- If the logo is the LCP element, add `<link rel="preload" as="image">` in the HTML head

**Expected savings: ~1.85 MB total, or 99% reduction.**

#### 3. Add Immutable Caching for Hashed Assets
Configure Vercel to serve content-hashed files with long-lived cache:

```
# vercel.json
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

**Expected impact: eliminates re-downloads on repeat visits.**

### P1 -- High Priority

#### 4. Reduce Font Loading Overhead
- **Drop Inter weights to 2 (400 + 700)**. The visual difference between 500/600/700 is negligible. This removes 2 font file downloads (~40 KB WOFF2 each).
- **Consider self-hosting fonts** with WOFF2 format to eliminate the extra DNS lookup and connection to fonts.googleapis.com and fonts.gstatic.com.
- **Add `<link rel="preload">` for critical font files** (Inter 400 at minimum) to start downloading earlier.
- **Use `font-display: optional`** for Goldman (heading font) if Goldman is decorative -- this prevents layout shift entirely by not swapping if the font arrives late.

#### 5. Implement Code Splitting
Split the bundle by route. The current 458 KB monolithic bundle contains code for all pages. With React Router lazy routes:
- Homepage bundle: ~200 KB estimated
- Each sub-page: ~50-100 KB loaded on demand
- GSAP should be loaded only on pages that use animations

#### 6. Inline Critical CSS
Extract the CSS needed for above-the-fold content and inline it in the `<head>`. The full CSS bundle (36 KB) is render-blocking. Inlining critical CSS (~5-10 KB) and deferring the rest eliminates one render-blocking request.

### P2 -- Medium Priority

#### 7. Self-Host Google Fonts
Loading fonts from Google Fonts requires:
1. DNS lookup for `fonts.googleapis.com`
2. TCP + TLS handshake
3. Download CSS file (discovers font URLs)
4. DNS lookup for `fonts.gstatic.com`
5. TCP + TLS handshake
6. Download font files

Self-hosting collapses this to a single origin request. The `preconnect` hints help but do not eliminate the latency chain.

#### 8. Add Resource Hints
```html
<!-- Preload the LCP image if it's a logo/hero -->
<link rel="preload" as="image" href="/logo_red.png" type="image/png">

<!-- Preload the critical font -->
<link rel="preload" as="font" href="/fonts/inter-400.woff2" type="font/woff2" crossorigin>

<!-- DNS-prefetch for any third-party origins -->
<link rel="dns-prefetch" href="https://vitals.vercel-insights.com">
```

#### 9. Consider Removing GSAP
If animations are simple (fade-in on scroll, slide-in), CSS animations with `IntersectionObserver` are lighter than GSAP. This would reduce bundle size by an estimated 30-60 KB compressed.

### P3 -- Low Priority (Nice to Have)

#### 10. Add a Service Worker for Offline/Cache Strategy
No valid service worker exists (the `/sw.js` URL returns the SPA fallback HTML). A service worker with a cache-first strategy for hashed assets and stale-while-revalidate for HTML would improve repeat-visit performance.

#### 11. Implement `fetchpriority="high"` on LCP Element
The JS bundle already references `fetchPriority` in 7 places, suggesting some usage. Ensure the LCP element (likely the hero heading or image) has `fetchpriority="high"`.

---

## 6. Summary Scorecard

| Category | Current State | Risk Level |
|----------|--------------|------------|
| **TTFB** | 75-155ms (good), occasional 1s+ spikes | Low-Medium |
| **LCP** | Blocked by CSR + 1.9 MB images + font chain | HIGH |
| **INP** | Moderate JS bundle, GSAP on main thread | Medium |
| **CLS** | font-display:swap FOUT risk, CSR mitigates shift | Low-Medium |
| **Compression** | Brotli enabled | Good |
| **Caching** | No immutable caching on hashed assets | HIGH |
| **Protocol** | HTTP/2 | Good |
| **CDN** | Vercel Edge (Frankfurt) | Good |
| **Total page weight** | ~3.8 MB uncompressed / ~1.6 MB transfer | HIGH |
| **Render-blocking resources** | 2 (app CSS + Google Fonts CSS) | Medium |
| **Third-party scripts** | Minimal (Vercel Speed Insights only) | Good |

### Estimated Performance Score

Based on the analysis, a Lighthouse lab test would likely score in the **55-75 range** on mobile, primarily penalized by:
- Large LCP due to client-side rendering
- Render-blocking Google Fonts CSS
- Oversized images
- No immutable caching

With all P0 + P1 recommendations implemented, the score could reach **90-100**.

---

## 7. Quick Wins (Implementable in < 1 hour)

1. **Compress logos** -- convert to WebP or SVG (saves 1.85 MB)
2. **Add immutable caching** in `vercel.json` (one config change)
3. **Remove Inter 500 and 600 weights** from the Google Fonts URL (saves 2 font downloads)
4. **Add `<link rel="preload">` for the main font and LCP image** (2 lines of HTML)
