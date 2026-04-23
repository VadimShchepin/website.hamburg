# Schema.org Structured Data Audit v2
## webseite.hamburg (AISEO Hamburg)
### Audit Date: 2026-03-19

---

## EXECUTIVE SUMMARY

Since the previous audit (v1), the site has undergone a major architectural improvement.
The SPA shell has been replaced with server-rendered HTML (~72 KB per page) delivering
**page-specific JSON-LD** in the initial HTML response. This resolves the single biggest
blocker identified in v1.

The site now deploys **10 distinct schema types** across its pages:
WebSite, Organization, ProfessionalService, Service, Article, FAQPage,
ProfilePage, ContactPage, Person, and BreadcrumbList.

**Previous score: 4/10** (v1, SPA architecture with global-only schema)
**Current score: 7/10** (well-structured page-specific schema with fixable issues)

**What improved since v1:**
- Server-rendered JSON-LD on every page (architecture blocker resolved)
- WebSite schema with @id added globally
- Organization schema with @id, logo, geo, contactPoint added globally
- Per-page Service schema on /leistungen/* with Offer pricing
- Article schema on /wissen/* with author, dates, publisher
- ProfilePage + Person schema on /ueber-uns
- ContactPage schema on /kontakt
- BreadcrumbList on every page
- FAQPage scoped to relevant pages (homepage, /faq, service pages)
- Personal LinkedIn removed from Organization sameAs
- Founder Person enriched with jobTitle, @id, sameAs

**What still needs fixing:** 8 issues (2 Medium, 5 Low, 1 Info)

---

## GLOBAL SCHEMA (every page)

### Block 1: WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://webseite.hamburg/#website",
  "name": "AISEO Hamburg",
  "alternateName": "webseite.hamburg",
  "url": "https://webseite.hamburg/",
  "description": "Professionelle Websites, SEO und Google Ads fur lokale Unternehmen in Hamburg",
  "inLanguage": "de",
  "publisher": {
    "@type": "Organization",
    "@id": "https://webseite.hamburg/#organization"
  }
}
```

**Validation:**

| Check | Status | Notes |
|-------|--------|-------|
| @context | PASS | `https://schema.org` |
| @type | PASS | Valid type |
| @id | PASS | `#website` fragment identifier |
| name | PASS | |
| url | PASS | Absolute URL with trailing slash |
| inLanguage | PASS | |
| publisher @id reference | PASS | Points to Organization @id |

**Missing recommended properties:**

| Property | Priority | Notes |
|----------|----------|-------|
| potentialAction (SearchAction) | Low | Would enable sitelinks search box, but site has no search functionality, so not applicable |

**Verdict: PASS** -- No issues found. Clean implementation.

---

### Block 2: Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://webseite.hamburg/#organization",
  "name": "AISEO",
  "alternateName": "AISEO Hamburg",
  "url": "https://webseite.hamburg/",
  "logo": { "@type": "ImageObject", "url": "https://webseite.hamburg/logo_red.webp" },
  "image": "https://webseite.hamburg/logo_red.webp",
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
    "name": "Vadim Shchepin",
    "jobTitle": "Grunder & Webentwickler",
    "url": "https://webseite.hamburg/ueber-uns",
    "sameAs": ["https://www.linkedin.com/in/vadim-shchepin/"]
  },
  "address": { "@type": "PostalAddress", "addressLocality": "Hamburg", "addressCountry": "DE" },
  "geo": { "@type": "GeoCoordinates", "latitude": "53.5511", "longitude": "9.9937" },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "sameAs": [
    "https://aiseo.hamburg/",
    "https://www.instagram.com/aiseo.hamburg/",
    "https://www.tiktok.com/@aiseo.hamburg/"
  ]
}
```

**Validation:**

| Check | Status | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| @id | PASS | `#organization` -- used correctly in cross-references |
| name, url | PASS | |
| logo | PASS | ImageObject with absolute URL (.webp format) |
| contactPoint | PASS | Valid ContactPoint with all recommended fields |
| founder | PASS | Person with @id, jobTitle, sameAs -- much improved from v1 |
| geo | PASS | Added since v1 |
| sameAs | PASS | Personal LinkedIn correctly removed (was in v1) |
| address | PARTIAL | See Issue #1 below |

**Verdict: PASS with 1 Low issue**

---

## PAGE-SPECIFIC SCHEMA

### Homepage (/)

**Blocks:** WebSite + Organization (global) + ProfessionalService + FAQPage (3 Q&As) + BreadcrumbList

#### ProfessionalService

| Check | Status | Notes |
|-------|--------|-------|
| @context, @type | PASS | |
| name, description, url | PASS with issue | `url` missing trailing slash (see Issue #2) |
| telephone, email | PASS | |
| serviceType | PASS | 4 items: Webdesign, SEO, AI SEO, Google Ads |
| areaServed | PASS | |
| address | PARTIAL | Same as Organization -- minimal |
| founder | PARTIAL | Minimal Person -- not using @id reference (see Issue #3) |
| sameAs | FAIL | Personal LinkedIn still mixed in (see Issue #4) |
| @id | MISSING | See Issue #5 |
| logo/image | MISSING | See Issue #6 |

#### FAQPage (Homepage)

| Check | Status | Notes |
|-------|--------|-------|
| @type | PASS | |
| mainEntity | PASS | 3 Question items |
| Question format | PASS | Each has name + acceptedAnswer.text |
| Content match | PASS | FAQ content visible on homepage |
| Rich result eligibility | INFO | Commercial site -- no Google FAQ rich results (Aug 2023 restriction). Beneficial for AI/LLM citation. |

#### BreadcrumbList (Homepage)

| Check | Status | Notes |
|-------|--------|-------|
| Single item (Home) | PASS | Correct for homepage |

**Homepage verdict: 5 blocks, 4 issues to fix**

---

### Service Pages (/leistungen/*)

Audited: /leistungen/webdesign, /leistungen/seo, /leistungen/ai-seo

**Blocks per page:** WebSite + Organization (global) + Service + BreadcrumbList (x2) + FAQPage

#### Service Schema

Example from /leistungen/seo:
```json
{
  "@type": "Service",
  "name": "SEO & Lokale Suchmaschinenoptimierung Hamburg",
  "provider": { "@type": "ProfessionalService", "name": "AISEO", ... },
  "areaServed": { "@type": "City", "name": "Hamburg" },
  "url": "https://webseite.hamburg/leistungen/seo",
  "description": "...",
  "offers": {
    "@type": "Offer",
    "price": "1000",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "unitText": "Monat"
    }
  }
}
```

| Check | Status | Notes |
|-------|--------|-------|
| @type Service | PASS | |
| name, description, url | PASS | Unique per service |
| areaServed | PASS | |
| provider | PASS | Nested ProfessionalService |
| offers / price | PASS | Price and currency present |
| priceSpecification | PARTIAL | `unitText: "Monat"` present but `referenceQuantity` missing (see Issue #7) |
| provider nested vs @id | LOW | Full ProfessionalService nested instead of @id reference (see Issue #3) |

#### Webdesign Offers (array)

The Webdesign page correctly uses an Offer array for multiple pricing tiers:
```json
"offers": [
  { "@type": "Offer", "name": "One-Pager", "price": "2000", "priceCurrency": "EUR" },
  { "@type": "Offer", "name": "Mehrseitige Website", "price": "3000", "priceCurrency": "EUR" }
]
```
This is well done -- named offers with distinct pricing.

#### FAQPage (Service Pages)

| Check | Status | Notes |
|-------|--------|-------|
| Webdesign FAQ | PASS | 6 Q&As, content-specific |
| SEO FAQ | PASS | 6 Q&As, content-specific |
| AI SEO FAQ | PASS | 5 Q&As, content-specific |
| Rich result eligibility | INFO | Commercial site -- no Google FAQ rich results. Keeps AI/LLM value. |

#### Duplicate BreadcrumbList (Issue #8)

Every service page (and most other pages) has **two BreadcrumbList blocks**:

1. From layout: all items have `item` URL (correct)
2. From page component: last item missing `item` URL

Example from /leistungen/seo:
```json
// Block 1 (layout) -- CORRECT
{ "position": 3, "name": "SEO", "item": "https://webseite.hamburg/leistungen/seo" }

// Block 2 (page) -- last item missing "item"
{ "position": 3, "name": "SEO" }
```

Google's spec says the last item in a BreadcrumbList should omit `item` (it represents
the current page). So Block 2 is technically more correct per the spec, and Block 1
is acceptable. However, having **two BreadcrumbList blocks on the same page is
redundant** and may confuse parsers. Remove one.

**Service pages verdict: Good coverage, 2 issues (duplicate breadcrumb, nested provider)**

---

### Article Pages (/wissen/*)

Audited: /wissen/lokales-seo-hamburg-guide, /wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen

**Blocks per page:** WebSite + Organization (global) + Article + BreadcrumbList (x2)

#### Article Schema

Example from /wissen/lokales-seo-hamburg-guide:
```json
{
  "@type": "Article",
  "headline": "Lokales SEO in Hamburg: Der komplette Leitfaden fur 2026",
  "author": { "@type": "Person", "name": "Vadim Shchepin", "url": "..." },
  "publisher": { "@type": "ProfessionalService", "name": "AISEO", ... },
  "datePublished": "2026-01-20",
  "dateModified": "2026-01-20",
  "url": "https://webseite.hamburg/wissen/lokales-seo-hamburg-guide",
  "inLanguage": "de",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://webseite.hamburg/wissen/lokales-seo-hamburg-guide"
  }
}
```

| Check | Status | Notes |
|-------|--------|-------|
| @type Article | PASS | Valid type |
| headline | PASS | Present, descriptive |
| author | PASS | Person with name and URL |
| author @id | MISSING | Should reference `#founder` for entity consistency |
| publisher | PASS | But uses ProfessionalService instead of Organization (see below) |
| publisher.logo | MISSING | Google requires `logo` on publisher for Article rich results |
| datePublished | PASS | ISO 8601 format |
| dateModified | PASS | ISO 8601 format |
| url | PASS | Absolute URL |
| inLanguage | PASS | |
| mainEntityOfPage | PASS | WebPage with @id |
| image | MISSING | Google requires `image` for Article rich results |
| description | MISSING | Recommended for Article |

**Article rich result eligibility:**

Google requires these for Article rich results:
- headline: PRESENT
- image: **MISSING** (blocks rich result eligibility)
- datePublished: PRESENT
- author.name: PRESENT
- publisher.name: PRESENT
- publisher.logo: **MISSING** (blocks rich result eligibility)

Without `image` and `publisher.logo`, these articles are **not eligible for Article
rich results in Google Search**.

**Publisher type issue:** The `publisher` uses `@type: "ProfessionalService"` with the
full business entity nested inline. Google's Article documentation specifies publisher
should be `Organization` or `Person`. While ProfessionalService is a subtype of
Organization (via LocalBusiness), it is safer and cleaner to use an @id reference:

```json
"publisher": {
  "@type": "Organization",
  "@id": "https://webseite.hamburg/#organization"
}
```

This also eliminates ~300 bytes of redundant nested data per article.

#### Duplicate BreadcrumbList

Same issue as service pages -- two BreadcrumbList blocks per article.

**Article pages verdict: Good foundation, but missing `image` and `publisher.logo`
blocks Article rich result eligibility**

---

### About Page (/ueber-uns)

**Blocks:** WebSite + Organization (global) + ProfilePage + BreadcrumbList (x2)

#### ProfilePage + Person

```json
{
  "@type": "ProfilePage",
  "name": "Uber AISEO Hamburg",
  "description": "...",
  "url": "https://webseite.hamburg/ueber-uns",
  "mainEntity": {
    "@type": "Person",
    "name": "Vadim Shchepin",
    "url": "https://www.linkedin.com/in/vadim-shchepin/",
    "jobTitle": "Webentwickler & SEO-Spezialist",
    "worksFor": { "@type": "ProfessionalService", ... },
    "knowsAbout": ["Webdesign", "SEO", "AI SEO", "Google Ads", ...],
    "sameAs": ["https://www.linkedin.com/in/vadim-shchepin/", ...]
  }
}
```

| Check | Status | Notes |
|-------|--------|-------|
| @type ProfilePage | PASS | |
| mainEntity Person | PASS | |
| Person name, jobTitle | PASS | |
| Person @id | MISSING | Should have `@id: "#founder"` for consistency |
| Person url | NOTE | Points to LinkedIn, not to /ueber-uns. Consider using the page URL as `url` and LinkedIn as `sameAs` only |
| Person image | MISSING | Recommended for E-E-A-T |
| worksFor | PASS | But full ProfessionalService nested instead of @id ref |
| knowsAbout | PASS | Good list of competencies |
| sameAs | NOTE | Includes Instagram and TikTok -- these are business accounts, not personal. Only include personal profiles here |

**About page verdict: PASS with minor issues**

---

### Contact Page (/kontakt)

**Blocks:** WebSite + Organization (global) + ContactPage + BreadcrumbList (single)

#### ContactPage

```json
{
  "@type": "ContactPage",
  "name": "Kontakt - AISEO Hamburg",
  "description": "...",
  "url": "https://webseite.hamburg/kontakt",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "AISEO",
    "telephone": "+4917632194754",
    "email": "hallo@webseite.hamburg",
    "url": "https://webseite.hamburg",
    "address": { ... }
  }
}
```

| Check | Status | Notes |
|-------|--------|-------|
| @type ContactPage | PASS | |
| name, description, url | PASS | |
| mainEntity | PASS | ProfessionalService with contact details |

Note: Contact page has only 1 BreadcrumbList (not duplicated). Good.

**Contact page verdict: PASS**

---

### FAQ Page (/faq)

**Blocks:** WebSite + Organization (global) + FAQPage (23 Q&As) + BreadcrumbList (x2)

| Check | Status | Notes |
|-------|--------|-------|
| @type FAQPage | PASS | |
| mainEntity | PASS | 23 Questions |
| Question format | PASS | All have name + acceptedAnswer.text |
| Content depth | PASS | Comprehensive answers, not thin content |
| Rich result eligibility | INFO | Commercial site -- no Google FAQ rich results. Strong AI/LLM citation value with 23 detailed Q&As. |
| Duplicate BreadcrumbList | ISSUE | Two BreadcrumbList blocks |

**FAQ page verdict: PASS with duplicate breadcrumb issue**

---

### Legal Pages (/impressum, /datenschutz)

**Blocks:** WebSite + Organization (global) + BreadcrumbList (x2)

| Check | Status | Notes |
|-------|--------|-------|
| No page-specific schema | CORRECT | Legal pages do not need additional schema types |
| BreadcrumbList | PASS | Correct 2-item breadcrumb |
| Duplicate BreadcrumbList | ISSUE | Two blocks |

**Legal pages verdict: PASS -- no schema needed beyond what exists**

---

## COMPLETE ISSUE LIST

### Issue #1: Incomplete PostalAddress (Low)

**Affects:** Organization (global), ProfessionalService (homepage)
**Current:** Only `addressLocality` and `addressCountry`
**Missing:** `streetAddress`, `postalCode`
**Impact:** Google recommends full address for LocalBusiness-type entities. If this is a
home-based or virtual business with no public address, the current minimal form is
acceptable. If a street address exists, add it.
**Action:** Add street address and postal code if available, or leave as-is for a
virtual/home-based business.

### Issue #2: ProfessionalService URL missing trailing slash (Medium)

**Affects:** Homepage ProfessionalService block, all nested ProfessionalService in
Service and Article publisher
**Current:** `"url": "https://webseite.hamburg"`
**Should be:** `"url": "https://webseite.hamburg/"`
**Impact:** URL mismatch between schema and canonical. Google may not associate the
entity correctly.
**Fix:**
```json
"url": "https://webseite.hamburg/"
```

### Issue #3: ProfessionalService nested inline instead of using @id references (Low)

**Affects:** Service pages (provider), Article pages (publisher), ProfilePage (worksFor)
**Current:** Full ProfessionalService object (~200-300 bytes) nested inside each
Service.provider, Article.publisher, and ProfilePage.mainEntity.worksFor
**Should be:** Reference the global Organization via @id
**Impact:** Redundant data, potential entity confusion (is this the same entity or a
different one?), and the nested copies include the old sameAs with LinkedIn mixed in.
**Fix for Service.provider:**
```json
"provider": {
  "@type": "Organization",
  "@id": "https://webseite.hamburg/#organization"
}
```
**Fix for Article.publisher:**
```json
"publisher": {
  "@type": "Organization",
  "@id": "https://webseite.hamburg/#organization"
}
```

### Issue #4: Personal LinkedIn in ProfessionalService sameAs (Medium)

**Affects:** Homepage ProfessionalService block and all nested copies of it
**Current:**
```json
"sameAs": [
  "https://aiseo.hamburg/",
  "https://www.linkedin.com/in/vadim-shchepin/",
  "https://www.instagram.com/aiseo.hamburg/",
  "https://www.tiktok.com/@aiseo.hamburg/"
]
```
**Issue:** LinkedIn is a personal profile, not a business profile. Mixing personal and
business social links on the Organization/ProfessionalService entity confuses Google's
entity understanding.
**Fix:** Remove LinkedIn from ProfessionalService.sameAs. It is already correctly placed
on the Person entity in the Organization block.
```json
"sameAs": [
  "https://aiseo.hamburg/",
  "https://www.instagram.com/aiseo.hamburg/",
  "https://www.tiktok.com/@aiseo.hamburg/"
]
```

Note: The global Organization block already has this correct -- the issue is only in the
ProfessionalService block and its nested copies.

### Issue #5: ProfessionalService missing @id (Low)

**Affects:** Homepage ProfessionalService block
**Current:** No @id property
**Should have:** `"@id": "https://webseite.hamburg/#professional-service"`
**Impact:** Other blocks cannot reference this entity. Since Organization already uses
`#organization`, consider whether ProfessionalService is needed at all (see
Recommendation A below).
**Fix:**
```json
"@id": "https://webseite.hamburg/#professional-service"
```

### Issue #6: ProfessionalService missing logo and image (Low)

**Affects:** Homepage ProfessionalService block
**Current:** No logo or image property
**Should have:** Same as Organization block
**Impact:** Google recommends logo for LocalBusiness/ProfessionalService types.
**Fix:**
```json
"logo": {
  "@type": "ImageObject",
  "url": "https://webseite.hamburg/logo_red.webp"
},
"image": "https://webseite.hamburg/logo_red.webp"
```

### Issue #7: Monthly pricing missing referenceQuantity (Low)

**Affects:** /leistungen/seo, /leistungen/ai-seo (and likely /leistungen/google-ads)
**Current:**
```json
"priceSpecification": {
  "@type": "UnitPriceSpecification",
  "unitText": "Monat"
}
```
**Should be:**
```json
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
```
**Impact:** Without `referenceQuantity`, parsers cannot formally interpret the pricing
period. Also, the priceSpecification is missing `price` and `priceCurrency` (they are
only on the parent Offer).

### Issue #8: Duplicate BreadcrumbList blocks (Medium)

**Affects:** All pages except /kontakt
**Current:** Two BreadcrumbList JSON-LD blocks per page:
  1. Layout-level: all items include `item` URL
  2. Page-level: last item omits `item` URL

**Impact:** Google may parse both and show inconsistent breadcrumbs, or may ignore one.
Having two breadcrumb blocks is confusing and wastes bytes.

**Fix:** Remove one of the two. The page-level version (last item without `item`) is
more aligned with Google's documented recommendation that the final item should not
have a URL since it represents the current page. Keep that one, remove the layout-level
duplicate.

---

## @ID CROSS-REFERENCE MAP

| @id | Defined In | Referenced By | Status |
|-----|-----------|---------------|--------|
| `#website` | WebSite (global) | -- | PASS (defined, not yet cross-referenced) |
| `#organization` | Organization (global) | WebSite.publisher | PASS |
| `#founder` | Organization.founder (global) | -- | PARTIAL -- defined with @id but Article.author and ProfilePage.mainEntity do not use @id reference |

**Cross-reference gaps:**

1. Article.author should use `"@id": "https://webseite.hamburg/#founder"` instead of
   repeating the Person inline
2. ProfilePage.mainEntity.Person should use `"@id": "https://webseite.hamburg/#founder"`
3. Service.provider and Article.publisher should reference `#organization` via @id
   instead of nesting the full ProfessionalService
4. The ProfessionalService on the homepage has no @id and is therefore unreferenceable

---

## ARTICLE RICH RESULT ELIGIBILITY

| Requirement | Status | Blocks Rich Result? |
|-------------|--------|---------------------|
| headline | PRESENT | No |
| author.name | PRESENT | No |
| datePublished | PRESENT | No |
| publisher.name | PRESENT | No |
| publisher.logo | **MISSING** | **YES** |
| image | **MISSING** | **YES** |

**Current status: NOT ELIGIBLE for Article rich results.**

**Fix required:** Add `image` to each Article and `logo` to the publisher. If using @id
reference to Organization (recommended), the logo is already defined there and will
be resolved. For `image`, add the article's hero/featured image:

```json
{
  "@type": "Article",
  "headline": "...",
  "image": "https://webseite.hamburg/images/lokales-seo-hamburg.webp",
  "publisher": {
    "@type": "Organization",
    "@id": "https://webseite.hamburg/#organization"
  },
  "author": {
    "@type": "Person",
    "@id": "https://webseite.hamburg/#founder"
  }
}
```

---

## RICH RESULT ELIGIBILITY SUMMARY

| Rich Result Type | Eligible? | Pages | Action Needed |
|------------------|-----------|-------|---------------|
| **Breadcrumb** | YES | All pages | Fix duplicate blocks |
| **Article** | NO (fixable) | /wissen/* | Add `image` + `publisher.logo` |
| **Sitelinks Search Box** | N/A | Homepage | Site has no search -- not applicable |
| **FAQ** | NO | All FAQ pages | Commercial site restriction (Aug 2023). Keep for AI/LLM. |
| **Local Business** | PARTIAL | Homepage | ProfessionalService present but missing logo, @id |
| **Logo** | YES | All pages | Organization.logo present |

---

## WHAT NOT TO ADD

- **HowTo**: Rich results removed by Google September 2023. Do not add.
- **SpecialAnnouncement**: Deprecated July 31, 2025. Do not add.
- **CourseInfo, EstimatedSalary, LearningVideo**: Retired June 2025. Do not add.
- **FAQ on new pages**: Not recommended for Google rich result benefit on commercial
  sites. Existing FAQ schema is correctly deployed for AI/LLM discoverability.
- **Review/AggregateRating on own business**: Only add with genuine third-party
  review data and source attribution. Self-authored reviews violate Google guidelines.

---

## OVERALL SCORE: 7 / 10

| Category | Score | Notes |
|----------|-------|-------|
| Schema type coverage | 9/10 | Excellent variety: 10 types across page categories |
| Required properties | 6/10 | Article missing image and publisher.logo |
| @id and cross-referencing | 5/10 | @id defined but rarely used in cross-references; redundant nesting |
| Validation correctness | 7/10 | URL trailing slash, duplicate breadcrumbs, LinkedIn in sameAs |
| Rich result eligibility | 6/10 | Breadcrumbs eligible; Articles blocked by missing image |
| Architecture | 10/10 | Server-rendered JSON-LD on every page (massive improvement from v1) |

**Weighted total: 7/10**

---

## PRIORITY FIX ROADMAP

### Priority 1: Unlock Article Rich Results (High Impact)

1. Add `image` property to every Article schema on /wissen/* pages
2. Switch Article.publisher to @id reference to Organization (which already has logo)

This single change makes all 6 knowledge articles eligible for Article rich results
in Google Search and Google Discover.

### Priority 2: Fix Duplicate BreadcrumbList (Medium Impact)

3. Remove one of the two BreadcrumbList blocks per page (keep the page-level one)

Clean breadcrumb rich results on all pages.

### Priority 3: Clean Up ProfessionalService (Low Impact)

4. Fix URL trailing slash: `"url": "https://webseite.hamburg/"`
5. Remove LinkedIn from ProfessionalService.sameAs
6. Add @id to ProfessionalService
7. Add logo and image to ProfessionalService

### Priority 4: Improve @id Cross-References (Low Impact, High Cleanliness)

8. Use @id references instead of nested objects for:
   - Service.provider -> `#organization`
   - Article.publisher -> `#organization`
   - Article.author -> `#founder`
   - ProfilePage.mainEntity -> `#founder`
   - ProfilePage.mainEntity.worksFor -> `#organization`

This reduces JSON-LD payload size by ~2-3 KB per page and ensures entity consistency.

### Priority 5: Enrich Monthly Pricing (Low Impact)

9. Add `referenceQuantity` to UnitPriceSpecification on recurring-price services

---

## COMPARISON: V1 vs V2

| Metric | v1 (March 2026, pre-rebuild) | v2 (March 2026, current) |
|--------|------------------------------|--------------------------|
| Architecture | SPA, same JSON-LD on all pages | Server-rendered, per-page JSON-LD |
| Schema types | 2 (ProfessionalService, FAQPage) | 10 |
| @id entities | 0 | 3 (#website, #organization, #founder) |
| BreadcrumbList | Missing | Present on all pages |
| Article schema | Missing | Present on /wissen/* |
| Service schema | Missing | Present on /leistungen/* |
| ProfilePage | Missing | Present on /ueber-uns |
| ContactPage | Missing | Present on /kontakt |
| Organization | Missing | Present globally |
| WebSite | Missing | Present globally |
| Issues found | 13 | 8 |
| Score | 4/10 | 7/10 |
| Article rich result eligible | No | No (fixable with 2 additions) |
| Breadcrumb rich result eligible | No | Yes (after dedup fix) |
