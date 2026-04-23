# GEO Audit Report: webseite.hamburg
**Date:** 2026-03-19  
**Auditor:** Claude Opus 4.6 (Automated GEO Analysis)  
**Site:** https://webseite.hamburg/  
**Technology:** Next.js 15, Server-Side Rendered  
**Pages Analyzed:** 19 (full sitemap)

---

## GEO Health Score: 82 / 100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Citability | 25% | 78 | 19.5 |
| Structural Readability | 20% | 90 | 18.0 |
| Multi-Modal Content | 15% | 60 | 9.0 |
| Authority & Brand Signals | 20% | 80 | 16.0 |
| Technical Accessibility | 20% | 95 | 19.0 |
| **Total** | **100%** | | **81.5** |

**Rounded Score: 82 / 100 -- Strong AI Search Readiness**

---

## 1. AI Crawler Access Status

### robots.txt Analysis

The robots.txt is fully permissive:

```
User-agent: *
Allow: /
Sitemap: https://webseite.hamburg/sitemap.xml
```

| Crawler | Purpose | Status |
|---------|---------|--------|
| GPTBot | ChatGPT search & training | ALLOWED |
| OAI-SearchBot | ChatGPT search only | ALLOWED |
| ClaudeBot | Anthropic crawling | ALLOWED |
| PerplexityBot | Perplexity search | ALLOWED |
| Google-Extended | Gemini training | ALLOWED |
| CCBot | Common Crawl / training | ALLOWED |
| anthropic-ai | Anthropic training | ALLOWED |
| cohere-ai | Cohere training | ALLOWED |

**Assessment:** Full access granted to all AI crawlers via wildcard Allow. This is the correct posture for an agency that actively wants AI search visibility. No selective blocking of training-only crawlers (CCBot, anthropic-ai) is in place, which is acceptable but could be refined if the business wants to allow search visibility while restricting training usage.

**Recommendation:** Consider adding explicit User-agent lines for GPTBot, ClaudeBot, and PerplexityBot with `Allow: /` to signal intentional permission, and optionally block CCBot / cohere-ai to prevent training-only ingestion without search benefit.

---

## 2. llms.txt and llms-full.txt Analysis

### /llms.txt -- PRESENT and WELL-STRUCTURED

**Compliance with llmstxt.org spec:** High

**Strengths:**
- Correct header format with `# AISEO Hamburg` title
- `Preferred-Citation` field present: `"AISEO Hamburg (webseite.hamburg)"`
- `Last-Updated` field with current date (2026-03-19)
- Contact email provided
- Complete service catalog with pricing (5 service categories)
- Three reference projects with URLs and quantified results
- All 6 articles linked with descriptive titles
- Social media profiles listed (LinkedIn, Instagram, TikTok, Google Business)
- Clean markdown structure with proper H2/H3 hierarchy

**Weaknesses:**
- No `License` or `Terms` field specifying citation/reuse permissions (RSL 1.0 not referenced)
- No `Language` field (content is German but not declared)
- No `Canonical-URL` field
- Missing `Industry` or `Category` field for entity disambiguation

### /llms-full.txt -- PRESENT

The full version provides expanded content covering all services, case studies, and detailed descriptions. The WebFetch tool returned a summarized version, but the file is accessible and functional.

**Weaknesses identified:**
- The full text appears to be a prose expansion rather than structured data dump
- Could benefit from including FAQ content verbatim (all 24 Q&As)
- Missing article excerpts or key passages that LLMs should cite

### llms.txt Completeness Score: 8 / 10

---

## 3. Passage-Level Citability Analysis

### Optimal Citation Block Assessment (134-167 word target)

| Article | Citable Passages (134-167w) | First-60-Word Directness | Question Headings | Stats w/ Sources |
|---------|-----------------------------|--------------------------|-------------------|------------------|
| Lokales SEO Hamburg Guide | 3-4 blocks | Strong | Yes (4 of 7 H2s) | 3 attributed |
| AI SEO Guide | 2-3 blocks | Strong | Partial (2 of 6) | 1 attributed |
| Langsame Websites | 3-4 blocks | Strong | Limited | 3 attributed |
| Google Ads Fehler | 2-3 blocks | Moderate | No | 2 attributed |
| Conversion-Optimierung | 2-3 blocks | Moderate | No | 2 attributed |
| Relaunch Checkliste | 1-2 blocks | Moderate | No | 1 attributed |

### Citability Strengths

1. **Direct opening sentences.** Most articles begin with a clear problem-answer statement in the first 40-60 words. Example from the speed article: "Ihre Website laedt laenger als drei Sekunden? Dann haben Sie gerade einen potenziellen Kunden verloren." This pattern is ideal for AI extraction.

2. **Self-contained sections.** Each H2 section can be extracted without surrounding context. The local SEO guide and speed article are particularly strong here.

3. **External source attribution.** Key statistics link to Google (thinkwithgoogle.com), Moz, Whitespark, Portent, Nielsen Norman Group, and Baymard Institute. This gives LLMs confidence to cite the passages.

4. **Consistent author bylines.** Every article has Vadim Shchepin as named author with LinkedIn link, publication date, and organization attribution.

### Citability Weaknesses

1. **Insufficient question-based headings.** Only the local SEO guide makes strong use of interrogative H2/H3s ("Wie suchen Hamburger wirklich?"). The Google Ads, conversion, and relaunch articles use mostly declarative headings that are less likely to match conversational AI queries.

2. **Thin statistical density.** Most articles have 1-3 externally attributed statistics. The AI SEO article has only one (the 30% traffic claim from Search Engine Land). For high citability, each major section should contain at least one data point with attribution.

3. **Missing "definition blocks."** None of the articles include a clearly formatted definition paragraph (e.g., "Lokales SEO ist...") in the 134-167 word optimal range that an LLM could extract verbatim.

4. **Case studies lack specificity.** References to "ein Hamburger Handwerksbetrieb" are anecdotal. Named case studies with specific metrics (Blitz Hamburg, KinderAlbum) appear in llms.txt but not consistently in article body text.

### Citability Score: 78 / 100

---

## 4. Structural Readability for AI

### Heading Hierarchy

All pages use clean H1 > H2 > H3 hierarchy. No heading level skips detected. Article pages average 6-8 H2 sections, which is appropriate for comprehensive guides.

### Structured Data (JSON-LD) Coverage

| Schema Type | Pages Present | Quality |
|-------------|---------------|---------|
| Organization | All pages | Strong -- @id references, geo, contact, social |
| WebSite | All pages | Standard implementation |
| BreadcrumbList | All pages | Correct hierarchy |
| Article | 6 article pages | Author, datePublished, dateModified, publisher |
| FAQPage | FAQ page + service pages | 24 Q&As on /faq, inline FAQs on service pages |
| Service | Service pages | Provider, pricing, description |
| ProfessionalService | Homepage | Comprehensive local business signals |
| ProfilePage (Person) | /ueber-uns | Founder bio with credentials |

**Assessment:** Structured data implementation is comprehensive and above average. The use of @id references for entity linking between Organization, Person, and Service schemas is a strong signal for AI entity resolution. FAQPage schema on the dedicated FAQ page and inline on service pages maximizes the surface area for featured snippet and AI answer extraction.

### Content Format Signals

- Bullet-pointed lists on service pages: strong for extraction
- Numbered step-by-step processes in articles: strong for procedural queries
- Bold key terms within paragraphs: aids scanning
- Pricing presented in clear, structured format: ideal for comparison queries

### Structural Readability Score: 90 / 100

---

## 5. Multi-Modal Content Assessment

### Current State

| Content Type | Present | Coverage |
|--------------|---------|----------|
| Text content | Yes | Comprehensive across all 19 pages |
| Images | Limited | No evidence of infographics, diagrams, or data visualizations in articles |
| Video | None | No embedded video content detected |
| Audio/Podcast | None | Not present |
| Tables/Charts | Minimal | Pricing tables exist but no comparative data tables in articles |
| Interactive tools | None | No calculators, assessments, or interactive elements |

### Impact on AI Visibility

Multi-modal content is increasingly important for AI systems that process and reference visual content. Google AI Overviews in particular favor pages with supporting images and diagrams. The site is text-heavy with minimal visual content support.

### Multi-Modal Score: 60 / 100

---

## 6. Authority & Brand Signals

### Entity Presence Audit

| Platform | Status | Impact |
|----------|--------|--------|
| **LinkedIn** (Vadim Shchepin) | Active, 665 followers, 500+ connections | Positive -- establishes personal authority |
| **Google Business Profile** | Active, linked from site | Strong local signal |
| **Instagram** (@aiseo.hamburg) | Present, linked | Moderate brand signal |
| **TikTok** (@aiseo.hamburg) | Present, linked | Moderate, growing platform |
| **Wikipedia** | Not present | Gap -- no Wikipedia entity for AISEO or Vadim Shchepin |
| **YouTube** | Not present | Significant gap -- YouTube mentions have ~0.737 correlation with AI citations |
| **Reddit** | Not assessed (no links found) | Gap -- Reddit presence correlates highly with AI citations |
| **Crunchbase/directories** | Not detected | Minor gap |

### Brand Name Disambiguation

The brand "AISEO" presents a disambiguation challenge. "AISEO" is also the name of an AI writing tool (aiseo.ai). The site mitigates this through:
- Geographic qualifier: "AISEO Hamburg"
- Domain signal: webseite.hamburg (geo-TLD)
- Consistent use of full name in structured data
- Alternative brand reference: "webseite.hamburg" as domain-as-brand

**Risk:** When users ask AI about "AISEO," responses may default to the more widely known aiseo.ai tool. The site should consistently use "AISEO Hamburg" as the canonical brand name.

### E-E-A-T Signals

| Signal | Evidence |
|--------|----------|
| **Experience** | 50+ projects, 10+ years, named case studies (Blitz Hamburg, KinderAlbum, Solovei Beauty) |
| **Expertise** | Technical stack disclosed, tool proficiency listed, specialized AI SEO knowledge |
| **Authoritativeness** | Founder-attributed content, LinkedIn presence, consistent bylines |
| **Trustworthiness** | Transparency principles stated, client data ownership policy, pricing published openly |

### Authority & Brand Score: 80 / 100

---

## 7. Platform-Specific AI Search Readiness

| Platform | Estimated Score | Key Factors |
|----------|----------------|-------------|
| **Google AI Overviews** | 80/100 | Strong structured data, good passage structure, FAQPage schema. Weakened by limited multi-modal content. |
| **ChatGPT (SearchGPT)** | 78/100 | GPTBot allowed, llms.txt present, good article depth. AISEO brand disambiguation is a risk. |
| **Perplexity** | 82/100 | PerplexityBot allowed, well-attributed sources in articles, clear author signals. Best platform fit due to source-heavy answers. |
| **Bing Copilot** | 75/100 | No Bing-specific optimizations detected. Content is strong but no BingBot-specific signals or Microsoft Clarity integration noted. |

---

## 8. Top 5 Highest-Impact Recommendations

### 1. Convert Article Headings to Question Format
**Impact:** High | **Effort:** Low (2-4 hours)

Rewrite H2/H3 headings across all 6 articles to use interrogative phrasing. This directly matches how users query AI assistants.

Current: "Der konkrete Unterschied: Traditionelles SEO vs. AI SEO"  
Recommended: "Was ist der Unterschied zwischen traditionellem SEO und AI SEO?"

Current: "Inhalte, die zitiert werden"  
Recommended: "Welche Inhalte werden von KI-Systemen zitiert?"

Target: At least 60% of H2 headings should be question-based across all article pages. Prioritize the AI SEO, Google Ads, and conversion articles which currently have zero or minimal question headings.

### 2. Add Definition Blocks in Optimal Citation Length (134-167 words)
**Impact:** High | **Effort:** Medium (4-8 hours)

Insert a clearly formatted definition/summary paragraph at the beginning of each major section, targeting 134-167 words. These should be self-contained, factually dense, and extractable without any surrounding context.

Template pattern:
```
[Question-based H2]
[1-2 sentence direct answer]
[3-4 sentences of supporting detail with at least one attributed statistic]
[1 sentence with specific recommendation or takeaway]
```

Priority pages: AI SEO article (highest commercial value), Local SEO guide (highest search volume potential), FAQ page answers (expand thin answers to optimal length).

### 3. Establish YouTube Presence and Reddit Activity
**Impact:** High | **Effort:** High (ongoing, 4-8 hours/week)

YouTube mentions have the strongest correlation (~0.737) with AI citation probability. Reddit presence also correlates highly. Currently, neither platform has any AISEO Hamburg presence.

**YouTube actions:**
- Create a channel under "AISEO Hamburg"
- Publish video versions of the 6 existing articles (screen recordings with voiceover are sufficient)
- Embed videos on corresponding article pages (multi-modal boost)
- Use consistent entity naming: "AISEO Hamburg | Vadim Shchepin"

**Reddit actions:**
- Participate in relevant subreddits (r/SEO, r/webdev, r/hamburg, German-language SEO communities)
- Share expertise (not links) to build brand entity recognition
- Create a branded profile referencing AISEO Hamburg

### 4. Add RSL 1.0 License and Expand llms.txt Metadata
**Impact:** Medium | **Effort:** Low (1-2 hours)

Add the following fields to /llms.txt:
```
License: RSL-1.0 (Responsible Source License)
Language: de
Canonical-URL: https://webseite.hamburg
Industry: Digital Marketing Agency
Service-Area: Hamburg, Germany
```

Add to /llms-full.txt:
- All 24 FAQ Q&As verbatim (high-value citation blocks)
- Key citable passages from each article (the best 134-167 word blocks)
- Explicit citation format preference: "Source: AISEO Hamburg (webseite.hamburg), [Article Title], [Date]"

### 5. Increase Statistical Density with Source Attribution
**Impact:** Medium | **Effort:** Medium (6-10 hours)

Each article section should contain at least one externally attributed data point. Current density is 1-3 stats per article; target is 1 per H2 section (5-8 per article).

Priority additions:
- AI SEO article: Add BrightEdge, Gartner, or Statista data on AI search adoption rates
- Google Ads article: Add Google's own benchmark data for local service industries
- Conversion article: Add industry-specific conversion benchmarks from Unbounce or WordStream
- All articles: Add "Last verified: [date]" to statistical claims

Format statistics as standalone sentences: "According to [Source] ([year]), [specific claim with number]." This pattern is the most extractable format for LLM citation.

---

## 9. Secondary Recommendations

| Recommendation | Impact | Effort |
|----------------|--------|--------|
| Add infographics/diagrams to articles (Core Web Vitals visual, SEO process flowchart) | Medium | Medium |
| Create a Wikidata entity for AISEO Hamburg | Medium | Low |
| Add hreflang tags if English content is planned | Low | Low |
| Implement explicit AI crawler User-agent lines in robots.txt | Low | Low |
| Add `speakable` schema markup to key article passages | Medium | Low |
| Expand case studies with specific before/after metrics | Medium | Medium |
| Add a glossary page with definition schema for key terms (SEO, AI SEO, Core Web Vitals) | Medium | Medium |
| Publish data-original content (e.g., "Hamburg Local SEO Benchmark 2026") | High | High |

---

## 10. Summary

**webseite.hamburg scores 82/100 on the GEO Health Scale**, placing it in the top tier of AI search readiness for a local agency website. The site's strengths are its technical foundation (SSR, comprehensive structured data, full AI crawler access) and its proactive adoption of llms.txt. The primary gaps are in multi-modal content, cross-platform brand entity presence (YouTube and Reddit), and passage-level optimization for AI citation extraction.

The site is already ahead of the vast majority of German agency websites in AI search readiness. The five recommendations above, if implemented, would likely push the score to 90+ and significantly increase the probability of being cited across ChatGPT, Perplexity, and Google AI Overviews.

**Key stat for context:** Only 11% of domains are cited by both ChatGPT and Google AI Overviews. The current setup positions webseite.hamburg to be in that 11% for Hamburg-local digital marketing queries, provided the brand entity signals (YouTube, Reddit) are addressed.

---

*Report generated 2026-03-19 by Claude Opus 4.6*  
*Methodology: GEO Health Score framework (Citability 25%, Structural Readability 20%, Multi-Modal 15%, Authority & Brand 20%, Technical Accessibility 20%)*
