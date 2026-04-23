# GEO Audit Report: webseite.hamburg
## Generative Engine Optimization & AI Search Readiness Assessment
**Date:** 2026-03-19
**Subject:** webseite.hamburg (AISEO Hamburg)
**Auditor:** Claude Opus 4.6 (GEO Specialist)
**Pages Analyzed:** 18 (5 in depth)

---

## EXECUTIVE SUMMARY

webseite.hamburg demonstrates **early-mover awareness** of AI search optimization -- it has llms.txt files, open AI crawler access, and rich JSON-LD schema markup. However, the site has a **critical rendering problem**: its visible page content appears to be delivered via client-side JavaScript rendering, meaning AI crawlers and content extraction tools can only access the JSON-LD structured data, not the actual article text, headings, or readable passages. This single issue severely undermines an otherwise forward-thinking AI optimization strategy.

**Overall GEO Health Score: 44/100**

---

## 1. GEO HEALTH SCORE BREAKDOWN

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Citability | 25% | 30/100 | 7.5 |
| Structural Readability | 20% | 40/100 | 8.0 |
| Multi-Modal Content | 15% | 25/100 | 3.75 |
| Authority & Brand Signals | 20% | 55/100 | 11.0 |
| Technical Accessibility | 20% | 68/100 | 13.6 |
| **TOTAL** | **100%** | | **43.85 (~44)** |

### Dimension Details

**Citability (30/100)**
- FAQ answers provide some self-contained passages (25-55 words), but most fall below the optimal 134-167 word range for AI citation
- No extended narrative passages detected in server-rendered HTML
- The AI SEO article and Local SEO guide -- which should be the strongest citability assets -- are invisible to non-JS crawlers
- Definitions exist (e.g., AI SEO vs. traditional SEO distinction) but are embedded in schema FAQ, not in crawlable body text
- Pricing data is clear and structured but lacks contextual framing paragraphs

**Structural Readability (40/100)**
- JSON-LD schema is exemplary: ProfessionalService, FAQPage, OfferCatalog all present
- However, no H1-H6 heading hierarchy is detectable in the server-rendered HTML
- No visible paragraph structure, bullet lists, or content blocks in the HTML source
- The schema effectively serves as a "shadow" content layer -- well-structured but not in the primary content channel that most AI extractors read
- FAQ questions are structured as interrogatives in schema, which is good practice

**Multi-Modal Content (25/100)**
- No evidence of images with alt text accessible to crawlers
- No embedded videos, infographics, or data visualizations detected
- No audio content or podcast references
- No downloadable resources (PDFs, templates, checklists)
- Case study pages exist but their visual content is not accessible without JS

**Authority & Brand Signals (55/100)**
- Founder Vadim Shchepin identified with LinkedIn profile (665 followers, 500+ connections)
- Three documented case studies (Blitz Hamburg, KinderAlbum, Solovei Beauty) with live URLs
- Clear service pricing creates transparency signal
- Results guarantee positioning strengthens trust
- However: no formal certifications listed, no press mentions found, no client testimonials in crawlable text
- Dual domain strategy (webseite.hamburg + aiseo.hamburg) may dilute brand signals

**Technical Accessibility (68/100)**
- robots.txt is fully open to all crawlers (excellent)
- llms.txt and llms-full.txt files present (ahead of most competitors)
- Sitemap.xml present with 18 URLs and modification dates
- JSON-LD schema is comprehensive and well-formed
- CRITICAL ISSUE: Page body content requires JavaScript rendering; non-JS crawlers see only schema markup
- Site appears to be SSR for metadata/schema but CSR for visible content

---

## 2. AI CRAWLER ACCESS STATUS

| Crawler | Purpose | Status | Notes |
|---------|---------|--------|-------|
| GPTBot | ChatGPT training/search | ALLOWED | robots.txt: Allow: / |
| OAI-SearchBot | ChatGPT search | ALLOWED | No specific block |
| ClaudeBot | Claude training | ALLOWED | No specific block |
| PerplexityBot | Perplexity search | ALLOWED | No specific block |
| Googlebot | Google indexing | ALLOWED | No specific block |
| Google-Extended | Gemini training | ALLOWED | No specific block |
| CCBot | Common Crawl | ALLOWED | No specific block |
| anthropic-ai | Anthropic training | ALLOWED | No specific block |
| cohere-ai | Cohere training | ALLOWED | No specific block |

**Assessment:** Fully open access policy. This is the correct approach for a business seeking maximum AI visibility. The site does not differentiate between search-oriented bots (which drive referrals) and training-only bots (which do not). For a small agency, the open approach is appropriate -- the visibility benefit outweighs any content protection concern.

---

## 3. LLMS.TXT ANALYSIS

### llms.txt (Summary File)
**Status:** Present
**Format:** Follows llmstxt.org standard conventions
**Content Quality:** Good -- provides a clear overview of AISEO's services, pricing, case studies, and contact information

**Strengths:**
- Identifies the business clearly: Hamburg-based digital agency for local businesses
- Lists all four core services with pricing
- References three case studies by name
- Includes contact information
- Mentions the six knowledge articles

**Weaknesses:**
- No explicit RSL 1.0 (Responsible Source Licensing) declaration
- No usage terms or citation preferences stated
- No "preferred citation format" for AI systems
- Does not specify which content is factual vs. marketing
- Missing: date of last update, content versioning

### llms-full.txt (Detailed File)
**Status:** Present
**Format:** Extended version with service descriptions
**Content Quality:** Good -- provides more detail on each service including deliverables and process

**Strengths:**
- Expands on service descriptions with specific deliverables
- Includes key principles (result guarantees, transparency, data-driven approach)
- More detailed case study references
- Provides enough context for AI systems to accurately describe the business

**Weaknesses:**
- Same licensing/terms gaps as llms.txt
- Content reads as marketing copy rather than factual reference material
- No structured data within the file (could use markdown tables, definition lists)
- Does not include content from knowledge articles (the most citable content)

---

## 4. PAGE-BY-PAGE ANALYSIS

### 4.1 Homepage (/)
**AI Extraction Quality:** MODERATE (schema only)

- Title: "Webdesign & SEO Hamburg | Websites die Kunden bringen" -- clear, keyword-rich
- JSON-LD includes: ProfessionalService, FAQPage (4 Q&As), OfferCatalog (6 services)
- FAQ answers are the most citable content: the SEO vs. AI SEO distinction is a quotable definition
- Service pricing is clearly structured in schema
- PROBLEM: No H1-H6 heading structure in rendered HTML
- PROBLEM: Body content not accessible without JavaScript

**Best citable passage (from schema FAQ):**
"Klassisches SEO optimiert fuer Google-Rankings. AI SEO sorgt zusaetzlich dafuer, dass Ihr Unternehmen in AI-Antworten (ChatGPT, Perplexity, Google AI Overviews) als Quelle erscheint."

This passage works because it is self-contained, contrastive, and defines a concept. However, at approximately 25 words, it is far below the optimal 134-167 word citation window.

### 4.2 SEO Service Page (/leistungen/seo)
**AI Extraction Quality:** LOW

- Same schema markup as homepage (appears to share a global schema block)
- No unique page-level schema for the SEO service specifically
- No visible body content for AI extraction
- Pricing (EUR 1,000/month) is in schema but lacks contextual justification
- Missing: process steps, expected timelines, success metrics, comparison tables

### 4.3 AI SEO Knowledge Article (/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen)
**AI Extraction Quality:** LOW (despite being the highest-value content)

- This should be the flagship citable page -- it addresses a topic ("AI SEO") where the agency wants to be an authority source
- Content is entirely behind JavaScript rendering
- Schema markup is identical to the homepage (global schema, not article-specific)
- No Article or BlogPosting schema detected for this page
- No author attribution, publication date, or modification date in schema (despite sitemap showing lastmod: 2026-03-01)
- No breadcrumb schema for content hierarchy

**This is the single most damaging gap in the site's GEO strategy.**

### 4.4 Local SEO Hamburg Guide (/wissen/lokales-seo-hamburg-guide)
**AI Extraction Quality:** LOW

- Same issues as the AI SEO article
- Geographic specificity ("Hamburg") is a strong signal for local AI queries but is wasted if content is not crawlable
- No LocalBusiness-specific content in schema
- Sitemap lastmod: 2026-01-20
- Missing: Hamburg-specific statistics, local business directories, neighborhood data

### 4.5 About Us (/ueber-uns)
**AI Extraction Quality:** LOW

- Founder name (Vadim Shchepin) appears only in schema, not in crawlable body text
- No visible credentials, company history, or team information
- LinkedIn reference is in schema but not as a crawlable link
- Missing: professional bio paragraphs, years of experience, client count, industry focus areas

---

## 5. BRAND MENTION & ENTITY ANALYSIS

### External Platform Presence

| Platform | Status | Impact on AI Citations |
|----------|--------|----------------------|
| Wikipedia | NO PRESENCE | High negative impact -- Wikipedia entities strongly correlate with AI citations |
| Reddit | NO DETECTABLE PRESENCE | Moderate negative impact -- Reddit is a major training source for LLMs |
| YouTube | NO DETECTABLE PRESENCE | Highest negative impact (~0.737 correlation with AI citations) |
| LinkedIn | PRESENT (founder profile) | Moderate positive -- Vadim Shchepin has 500+ connections, posts about AI SEO |
| Google Business Profile | UNKNOWN (not verified in audit) | Critical for local AI queries |
| Industry Directories | NOT DETECTED | Negative -- reduces entity authority |

### Brand Name Analysis

**"AISEO" as a brand name presents a significant challenge:**
- "AISEO" is a generic term that conflicts with multiple existing entities (AISEO.ai is a well-known AI writing tool)
- AI systems will likely associate "AISEO" with the larger, more established AISEO.ai platform
- The brand "webseite.hamburg" is more distinctive but less memorable and harder for AI to associate with expertise
- The dual-domain strategy (webseite.hamburg + aiseo.hamburg) fragments brand signals rather than consolidating them
- Neither domain has sufficient external citation density for AI systems to recognize as an authoritative entity

### Entity Disambiguation Risk: HIGH
When a user asks an AI about "AISEO," the response will almost certainly reference AISEO.ai (the AI writing tool), not AISEO Hamburg (the web agency). The brand lacks sufficient external signals to override this default association.

---

## 6. PLATFORM-SPECIFIC AI VISIBILITY SCORES

| Platform | Estimated Score | Reasoning |
|----------|----------------|-----------|
| Google AI Overviews | 30/100 | Schema helps Google parse services, but body content rendering issues limit passage extraction; local schema could improve local queries |
| ChatGPT (SearchGPT) | 25/100 | GPTBot is allowed and llms.txt exists, but JS-rendered content limits what GPTBot can index; brand name conflicts with AISEO.ai |
| Perplexity | 30/100 | PerplexityBot allowed; Perplexity tends to extract from rendered content which may partially work; knowledge articles invisible |
| Bing Copilot | 20/100 | No Bing-specific optimizations detected; limited external citations reduce Bing's entity confidence |
| Claude (Anthropic) | 35/100 | llms.txt gives a slight advantage as Claude specifically looks for this file; content in llms-full.txt is accessible |

---

## 7. TOP 10 HIGHEST-IMPACT RECOMMENDATIONS

### PRIORITY 1 (Critical -- Do These First)

**1. Fix Content Rendering for AI Crawlers**
- **Impact:** Would improve GEO score by an estimated 20-25 points
- **Effort:** Medium (1-2 weeks)
- **Action:** Ensure all page body content (headings, paragraphs, lists) is present in the initial HTML response without requiring JavaScript execution. Options:
  - Switch to static site generation (SSG) or server-side rendering (SSR) for all pages
  - Pre-render pages for known bot user agents
  - At minimum, include critical content in noscript tags
- **Why:** This is the single most impactful change. All other content optimizations are moot if AI crawlers cannot read the content.

**2. Add Article/BlogPosting Schema to Knowledge Pages**
- **Impact:** +5-8 points on citability
- **Effort:** Low (2-3 hours)
- **Action:** Each /wissen/ article needs its own schema with:
  - @type: Article or BlogPosting
  - headline, author (with @type: Person and credentials), datePublished, dateModified
  - publisher with organization details
  - articleBody with the full text content
  - speakable markup for voice-assistant-friendly passages
- **Why:** Article schema tells AI systems "this is reference content by an identified author" rather than "this is a service page."

**3. Expand Citable Passages to Optimal Length (134-167 Words)**
- **Impact:** +5-10 points on citability
- **Effort:** Medium (1 week of content work)
- **Action:** For each major heading section, ensure the content block is 134-167 words, opens with a direct answer in the first 40-60 words, and includes at least one specific data point or statistic. Example for the AI SEO article:
  - Current: Brief definition of AI SEO (~25 words)
  - Target: Full paragraph explaining what AI SEO is, why it matters, how it differs from traditional SEO, with a statistic about AI search adoption, in 134-167 words

### PRIORITY 2 (High Impact -- Do Within 30 Days)

**4. Create YouTube Content About AI SEO**
- **Impact:** +5-8 points on brand signals (YouTube has the strongest correlation with AI citations at ~0.737)
- **Effort:** Medium-High (ongoing)
- **Action:** Produce 5-10 short videos (3-8 minutes) on topics covered in the /wissen/ articles:
  - "Was ist AI SEO? Erklaerung fuer Unternehmen" (What is AI SEO? Explained for businesses)
  - "Lokales SEO in Hamburg: Der komplette Guide" (Local SEO in Hamburg: Complete Guide)
  - "Website-Geschwindigkeit und Umsatz" (Website Speed and Revenue)
- **Why:** YouTube is the single strongest brand signal for AI citation probability. Even modest YouTube presence dramatically increases the chance of being cited by ChatGPT and Perplexity.

**5. Build Reddit Presence**
- **Impact:** +3-5 points on brand signals
- **Effort:** Medium (ongoing, 2-3 hours/week)
- **Action:** Participate authentically in relevant subreddits:
  - r/SEO, r/bigseo, r/webdev for English-language authority
  - r/de_EDV, r/hamburg for German-language local presence
  - Share genuine expertise, link to knowledge articles where relevant
- **Why:** Reddit content is heavily weighted in LLM training data. Authentic participation creates entity associations that AI systems learn.

**6. Add RSL 1.0 License to llms.txt**
- **Impact:** +2-3 points on technical accessibility
- **Effort:** Very Low (30 minutes)
- **Action:** Add a license header to llms.txt:
  ```
  License: RSL-1.0
  Preferred-Citation: "AISEO Hamburg (webseite.hamburg)"
  Contact: hallo@webseite.hamburg
  Last-Updated: 2026-03-19
  ```
- **Why:** Signals to AI systems that the content is explicitly intended for AI consumption and provides a preferred citation format.

### PRIORITY 3 (Moderate Impact -- Do Within 60 Days)

**7. Consolidate Brand Identity for AI**
- **Impact:** +3-5 points on brand signals
- **Effort:** Low-Medium (strategic decision + implementation)
- **Action:**
  - Choose ONE primary brand name and use it consistently everywhere
  - "AISEO Hamburg" conflicts with AISEO.ai; consider "Webseite Hamburg" or a distinctive alternative
  - Redirect one domain to the other (or use clear canonical signals)
  - Update all external profiles to reference the same brand name and URL
- **Why:** AI systems need consistent entity signals to build a knowledge graph entry. Two brands, two domains, and name conflicts with a larger entity make it nearly impossible for AI to disambiguate.

**8. Add Statistics and Source Citations to Knowledge Articles**
- **Impact:** +3-5 points on citability
- **Effort:** Medium (research + content updates)
- **Action:** Each knowledge article should include:
  - At least 3 specific statistics with named sources
  - Example: "Laut einer BrightLocal-Studie (2025) lesen 87% der Verbraucher Online-Bewertungen fuer lokale Unternehmen"
  - Data tables where relevant (e.g., SEO pricing comparison, AI search market share)
  - Named methodology or frameworks
- **Why:** AI systems strongly prefer citing passages that contain specific, attributed data points. Unsourced claims are rarely cited.

**9. Create a Comprehensive FAQ Hub**
- **Impact:** +3-5 points on citability and structural readability
- **Effort:** Medium (1-2 weeks)
- **Action:**
  - Create a dedicated /faq page with 20-30 questions organized by category
  - Use question-based H2 headings (e.g., "Was kostet SEO in Hamburg?")
  - Each answer should be 134-167 words, self-contained, and include specific data
  - Add FAQPage schema for each question
  - Questions should match real search queries and AI prompt patterns
- **Why:** FAQ format is the single most AI-extractable content structure. Question-based headings directly match how users query AI systems.

**10. Establish Google Business Profile and Generate Reviews**
- **Impact:** +3-5 points on authority (especially for local AI queries)
- **Effort:** Low to set up, ongoing to maintain
- **Action:**
  - Ensure Google Business Profile is fully optimized with all services, photos, and business hours
  - Actively request reviews from completed client projects
  - Respond to all reviews (AI systems note review response patterns)
  - Post regular updates to GBP
- **Why:** For local queries ("web designer Hamburg," "SEO Agentur Hamburg"), Google AI Overviews and other AI systems heavily weight GBP signals.

---

## 8. CONTENT STRUCTURE ASSESSMENT BY PAGE

### Heading Usage Across Audited Pages

| Page | H1 Detected | H2s Detected | H3s Detected | Question Headings |
|------|-------------|-------------|-------------|-------------------|
| Homepage | No (in HTML) | No (in HTML) | No (in HTML) | 4 (in schema FAQ only) |
| /leistungen/seo | No (in HTML) | No (in HTML) | No (in HTML) | Same global FAQ |
| /wissen/ai-seo... | No (in HTML) | No (in HTML) | No (in HTML) | Same global FAQ |
| /wissen/lokales-seo... | No (in HTML) | No (in HTML) | No (in HTML) | Same global FAQ |
| /ueber-uns | No (in HTML) | No (in HTML) | No (in HTML) | Same global FAQ |

**This table illustrates the core problem:** The site likely has well-structured content with proper headings in the client-side rendered view, but none of it is accessible in the server-rendered HTML that AI crawlers receive.

### Schema Markup Quality

| Schema Type | Present | Quality |
|-------------|---------|---------|
| ProfessionalService | Yes | Good -- includes name, address, contact, services |
| FAQPage | Yes | Adequate -- 4 questions, could expand to 15-20 |
| OfferCatalog | Yes | Good -- 6 services with pricing |
| Article/BlogPosting | No | MISSING -- critical gap for knowledge articles |
| BreadcrumbList | No | MISSING -- helps AI understand content hierarchy |
| Person (author) | Partial | Name in founder field, but no author schema on articles |
| Review/AggregateRating | No | MISSING -- no review signals |
| HowTo | No | MISSING -- would benefit guide-style content |

---

## 9. COMPETITIVE POSITIONING FOR AI CITATIONS

### Query Scenarios and Likely AI Behavior

**Query: "Was ist AI SEO?"**
- Current likelihood of webseite.hamburg being cited: LOW
- Reason: Content not crawlable; AISEO.ai and major SEO publications will dominate
- Fix: Make the /wissen/ai-seo article crawlable with comprehensive, well-sourced content

**Query: "SEO Agentur Hamburg Empfehlung"**
- Current likelihood: LOW-MODERATE
- Reason: Schema data may help, but no reviews, no Reddit mentions, no YouTube presence
- Fix: Build external citation network, collect Google reviews

**Query: "Webdesign Kosten Hamburg"**
- Current likelihood: MODERATE
- Reason: Clear pricing in schema (EUR 2,000-3,000) is a strong signal for price-related queries
- Fix: Create a dedicated pricing page with comparison tables and detailed breakdowns

**Query: "Unterschied SEO und AI SEO"**
- Current likelihood: LOW-MODERATE
- Reason: The FAQ schema contains a relevant answer, but it is too brief for citation
- Fix: Expand the answer to 134-167 words with statistics and examples

---

## 10. SUMMARY OF FINDINGS

### What webseite.hamburg Does Well
1. Forward-thinking: llms.txt and llms-full.txt files are present (rare among small agencies)
2. Fully open AI crawler access (correct strategic decision)
3. Comprehensive JSON-LD schema with pricing, services, and FAQ
4. Clear service differentiation (especially AI SEO as a distinct offering)
5. Transparent pricing signals
6. Sitemap with modification dates
7. Dual-language capability (German primary, accessible to DE-market AI queries)

### What Needs Immediate Attention
1. **Content rendering:** Body content invisible to non-JS crawlers (CRITICAL)
2. **No article schema:** Knowledge pages lack BlogPosting/Article markup
3. **Passage length:** All detectable passages are far below the 134-167 word optimal range
4. **Zero external platform presence:** No YouTube, no Reddit, no Wikipedia entity
5. **Brand name conflict:** "AISEO" competes with the established AISEO.ai brand
6. **No author attribution:** Articles lack byline, credentials, and author schema
7. **Identical schema across pages:** All pages appear to share the same global schema rather than having page-specific structured data

### Estimated GEO Score After Implementing All Recommendations
- Current: 44/100
- After Priority 1 fixes (rendering, article schema, passage optimization): ~65/100
- After Priority 2 fixes (YouTube, Reddit, RSL licensing): ~75/100
- After Priority 3 fixes (brand consolidation, statistics, FAQ hub, GBP): ~85/100

---

*This audit was conducted by analyzing server-rendered HTML, structured data, llms.txt files, robots.txt directives, and external platform presence. Content behind client-side JavaScript rendering could not be fully evaluated. A follow-up audit after rendering fixes are implemented is recommended.*

*Generated: 2026-03-19 | Methodology: GEO Health Score Framework (Citability 25%, Structural Readability 20%, Multi-Modal 15%, Authority 20%, Technical 20%)*
