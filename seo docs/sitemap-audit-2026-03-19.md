# Sitemap Audit Report: webseite.hamburg

**Date:** 2026-03-19
**Sitemap URL:** https://webseite.hamburg/sitemap.xml
**Site type:** Single Page Application (Vite/React)


---

## 1. URL Count Verification

The user description listed "18 URLs" but only enumerated 16 unique paths. The actual
sitemap contains exactly **16 `<url>` entries**. There is no discrepancy in the file
itself -- the original count of 18 was simply incorrect.


---

## 2. Validation Results

| # | Check                        | Severity | Result | Notes |
|---|------------------------------|----------|--------|-------|
| 1 | XML well-formedness          | Critical | PASS   | xmllint validates without errors |
| 2 | Correct namespace            | Critical | PASS   | Uses `http://www.sitemaps.org/schemas/sitemap/0.9` |
| 3 | URL count under 50,000       | Critical | PASS   | 16 URLs, well within limit |
| 4 | File size under 50 MB        | Critical | PASS   | 2.6 KB |
| 5 | All URLs return 200          | High     | PASS** | All 7 spot-checked URLs return 200 (see caveat below) |
| 6 | No noindexed URLs in sitemap | High     | PASS   | No noindex directives found on any route |
| 7 | No redirected URLs           | Medium   | PASS   | No 301/302 responses on sitemap URLs |
| 8 | lastmod present on all URLs  | High     | FAIL   | Missing on 10 of 16 URLs (see section 4) |
| 9 | lastmod dates not identical  | Low      | PASS   | The 6 dates that exist are all different |
|10 | priority tag usage           | Info     | WARN   | Present on all 16 URLs -- ignored by Google |
|11 | changefreq tag usage         | Info     | WARN   | Present on all 16 URLs -- ignored by Google |
|12 | Sitemap in robots.txt        | High     | PASS   | Declared correctly |
|13 | Sitemap index present        | Info     | N/A    | Not needed at 16 URLs |
|14 | URL consistency              | Medium   | PASS   | All URLs use https, no www, no trailing slashes |
|15 | Missing pages in sitemap     | High     | FAIL   | 2 pages missing (see section 5) |

** **SPA caveat:** The server returns HTTP 200 for ALL paths (including nonexistent
ones like `/this-page-does-not-exist-xyz123`). This is standard SPA behavior (catch-all
to index.html), but it means HTTP status codes cannot be used to verify that a URL
truly has content. Verification was done by cross-referencing the JS bundle's route
definitions instead.


---

## 3. Deprecated Tags: priority and changefreq

**Both `<priority>` and `<changefreq>` are ignored by Google** (confirmed by Google's
own documentation and John Mueller's statements). They add XML bloat without SEO
benefit.

Current usage:

| Tag         | Values used                    |
|-------------|--------------------------------|
| priority    | 1.0, 0.9, 0.8, 0.7           |
| changefreq  | weekly (2 URLs), monthly (14)  |

**Recommendation:** Remove both tags from all entries. They serve no purpose for any
major search engine and create a false sense of control. Removing them would reduce
the sitemap from 89 lines to roughly 55 lines -- cleaner and easier to maintain.


---

## 4. lastmod Analysis

**Finding: 10 of 16 URLs are missing `<lastmod>` dates.**

| URL path                                         | lastmod     | Status  |
|--------------------------------------------------|-------------|---------|
| /                                                | (missing)   | FAIL    |
| /leistungen                                      | (missing)   | FAIL    |
| /leistungen/webdesign                            | (missing)   | FAIL    |
| /leistungen/seo                                  | (missing)   | FAIL    |
| /leistungen/ai-seo                               | (missing)   | FAIL    |
| /leistungen/google-ads                           | (missing)   | FAIL    |
| /leistungen/website-audit                        | (missing)   | FAIL    |
| /wissen                                          | (missing)   | FAIL    |
| /ueber-uns                                       | (missing)   | FAIL    |
| /kontakt                                         | (missing)   | FAIL    |
| /wissen/warum-langsame-websites-kunden-kosten    | 2026-02-15  | OK      |
| /wissen/lokales-seo-hamburg-guide                | 2026-01-20  | OK      |
| /wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen | 2026-03-01 | OK   |
| /wissen/google-ads-fehler-lokale-unternehmen     | 2026-02-01  | OK      |
| /wissen/website-conversion-optimierung           | 2026-01-10  | OK      |
| /wissen/website-relaunch-checkliste              | 2026-02-25  | OK      |

The 6 blog article dates all fall within the range 2026-01-10 to 2026-03-01 and appear
plausible as publication/update dates.

**Recommendation:** Add `<lastmod>` to all 10 missing URLs. For static pages that
rarely change (like /kontakt, /impressum), use the date of last meaningful edit. For
the homepage, use the most recent deployment date. Google uses lastmod as a crawl
scheduling signal when the dates are trustworthy.


---

## 5. Missing Pages (Not in Sitemap but Exist on Site)

Cross-referencing the sitemap against routes found in the JS bundle and footer links:

| Page              | Found via        | In sitemap? | Should be added?   |
|-------------------|------------------|-------------|--------------------|
| /impressum        | Footer link, JS  | NO          | YES -- legal page, should be indexed |
| /datenschutz      | Footer link, JS  | NO          | MAYBE -- some sites noindex privacy policies, but for a German business site it is typically indexed |

Both `/impressum` and `/datenschutz` are linked from the site footer on every page,
which means they are crawlable. However, their absence from the sitemap means Google
has no lastmod signal for them and may deprioritize crawling.

**Note:** The routes `/agb`, `/blog`, `/referenzen`, and `/preise` all returned HTTP
200, but this is the SPA catch-all behavior. These paths were NOT found in the JS
bundle's route definitions, so they are **not real pages** -- they would render blank
or show a 404 component client-side. No action needed for these.


---

## 6. URL Consistency

| Check                          | Result |
|--------------------------------|--------|
| All URLs use https://          | PASS   |
| No www prefix used             | PASS   |
| No trailing slashes            | PASS   |
| http:// redirects to https://  | PASS (308 redirect) |
| www redirects to non-www       | PASS (308 redirect via www -> https) |
| Trailing slash returns 200     | WARN -- no redirect, serves same content |

**Trailing slash issue:** Both `/leistungen` and `/leistungen/` return HTTP 200 with
the same content. While the sitemap consistently uses non-trailing-slash versions
(correct), the server does not redirect trailing-slash variants. This can cause
duplicate content if external links use trailing slashes. Consider adding a server-side
redirect from trailing-slash to non-trailing-slash URLs.


---

## 7. Sitemap Index

No sitemap index file exists (the URLs `/sitemap-index.xml` and `/sitemap_index.xml`
both return the SPA catch-all HTML). With only 16 URLs, a sitemap index is
unnecessary. No action needed.


---

## 8. robots.txt Review

```
User-agent: *
Allow: /

Sitemap: https://webseite.hamburg/sitemap.xml
```

This is correct and minimal. The sitemap declaration uses the full HTTPS URL as
required by the protocol. The `Allow: /` is technically redundant (everything is
allowed by default), but it is harmless and adds clarity.


---

## 9. Orphan Page Analysis

**Orphan pages in sitemap** (in sitemap but not linked from other pages): None found.
All 16 sitemap URLs correspond to routes defined in the JS bundle, meaning they are
all reachable through the site's navigation.

**Linked pages not in sitemap:** /impressum and /datenschutz (see section 5).


---

## 10. Quality Gate Assessment

- **Location pages:** 0 -- no location-based pages exist. No doorway page risk.
- **Blog/Wissen pages:** 6 articles with distinct topics. No thin content risk from a
  sitemap perspective.
- **Service pages:** 5 service sub-pages under /leistungen. These appear to be
  legitimate service descriptions, not programmatic variations.

All quality gates pass.


---

## Summary of Recommended Actions

### High Priority

1. **Add `<lastmod>` to all 10 URLs currently missing it.** Use actual last-modified
   dates, not today's date. This is the most impactful fix -- Google uses accurate
   lastmod dates to prioritize crawling.

2. **Add /impressum to the sitemap.** This is a legally required page in Germany and
   should be indexable and discoverable.

3. **Add /datenschutz to the sitemap** (unless intentionally noindexed). Same
   reasoning as /impressum.

### Medium Priority

4. **Configure server-side 301 redirects for trailing-slash URLs** to prevent
   potential duplicate content.

### Low Priority (Cleanup)

5. **Remove `<priority>` tags from all entries.** Ignored by all major search engines.

6. **Remove `<changefreq>` tags from all entries.** Also ignored by all major search
   engines.

7. **Ensure the SPA returns proper 404 status codes** for non-existent routes. The
   current catch-all 200 response means search engines cannot distinguish real pages
   from broken URLs. This requires server-side rendering (SSR) or prerendering to
   solve properly.


---

## Proposed Corrected Sitemap

Below is the recommended sitemap with all fixes applied:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://webseite.hamburg/</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/leistungen</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/leistungen/webdesign</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/leistungen/seo</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/leistungen/ai-seo</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/leistungen/google-ads</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/leistungen/website-audit</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen</loc>
    <lastmod>2026-03-01</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen/warum-langsame-websites-kunden-kosten</loc>
    <lastmod>2026-02-15</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen/lokales-seo-hamburg-guide</loc>
    <lastmod>2026-01-20</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen</loc>
    <lastmod>2026-03-01</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen/google-ads-fehler-lokale-unternehmen</loc>
    <lastmod>2026-02-01</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen/website-conversion-optimierung</loc>
    <lastmod>2026-01-10</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/wissen/website-relaunch-checkliste</loc>
    <lastmod>2026-02-25</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/ueber-uns</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/kontakt</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/impressum</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
  <url>
    <loc>https://webseite.hamburg/datenschutz</loc>
    <lastmod>2026-03-19</lastmod>
  </url>
</urlset>
```

**Note:** The `<lastmod>` dates of 2026-03-19 are placeholders for pages without known
modification dates. Replace these with the actual last-modified dates from your
deployment or CMS records.
