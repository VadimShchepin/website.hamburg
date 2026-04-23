# Content Quality & E-E-A-T Audit: webseite.hamburg
## Date: 2026-03-19
## Auditor: Content Quality Specialist (per Google Sept 2025 QRG)

---

## EXECUTIVE SUMMARY

**Overall Content Quality Score: 78/100**

webseite.hamburg is a well-built, content-rich local agency website with strong structural SEO foundations, impressive AI citation readiness, and clear founder-led E-E-A-T signals. The site has several notable strengths -- particularly its structured data implementation, llms.txt files, transparent pricing, and first-hand case studies. Key weaknesses include the SPA architecture (poor for crawlability), identical meta tags across all pages due to the SPA shell, thin content on the homepage relative to its importance, and missing author bylines on knowledge articles.

**AI Citation Readiness Score: 82/100** -- Above average, with llms.txt, schema markup, and well-structured FAQ content.

---

## SITE-WIDE TECHNICAL FINDINGS

### Critical Issue: Single-Page Application (SPA) Architecture

The entire site is a client-side React SPA. Every URL returns the same HTML shell:
- Same `<title>` tag on every page: "Webdesign & SEO Hamburg | Websites die Kunden bringen"
- Same `<meta name="description">` on every page
- Same canonical: `https://webseite.hamburg/`
- Content is rendered entirely via a ~469KB JavaScript bundle (`index-CLgbmDEF.js`)

**Impact:** This is a significant SEO and content quality concern:
1. Googlebot may not render all pages correctly (despite Google's JS rendering capabilities, SPA rendering remains unreliable for complex sites)
2. Every page shares the same title/description in the HTML source -- page-specific meta tags are only set via client-side JS, which may not be picked up reliably
3. Social sharing (Open Graph) will show generic homepage data for all pages
4. Non-Google crawlers (Bing, AI crawlers) may see zero content

**Recommendation:** Migrate to SSR/SSG (e.g., Next.js, Astro, or Vite SSR plugin) or implement pre-rendering. This is the single highest-impact improvement available.

### Positive: Structured Data (Schema.org)

The homepage includes excellent structured data in the HTML head (server-rendered, not dependent on JS):
- `ProfessionalService` schema with complete business details
- `FAQPage` schema with 4 questions
- `OfferCatalog` with all services and prices
- Founder linked via `Person` schema with LinkedIn URL
- `hasCredential` with three named client references
- `sameAs` linking to LinkedIn, Instagram, TikTok

### Positive: LLM-Readiness Files

- `/llms.txt` (375 words) -- concise agency summary with services, prices, references, contact
- `/llms-full.txt` (928 words) -- detailed version with service descriptions, case study results, technology stack, expertise details
- Both are well-structured, factual, and citation-ready
- `<link rel="alternate" type="text/plain" href="/llms.txt">` in HTML head -- excellent

### Sitemap & Robots

- Sitemap includes 16 URLs with `<lastmod>` dates on knowledge articles (most recent: 2026-03-01)
- robots.txt references both sitemap and llms.txt files
- All pages set to `index, follow`

---

## PAGE-BY-PAGE ANALYSIS

---

### 1. HOMEPAGE (https://webseite.hamburg/)

**Content Quality Score: 72/100**

#### Content Depth
- Estimated word count: ~800-1,000 words (rendered content)
- Content minimum for homepage: 500 words -- PASSES
- Sections identified: Hero, Case Studies (3), Problem Statement, Services Overview, Process, Pricing Preview, FAQ, CTA
- The homepage functions as a conversion-focused overview page -- adequate but not exceptional depth

#### Title & Meta
- HTML source title: "Webdesign & SEO Hamburg | Websites die Kunden bringen" -- Good, includes primary keyword + benefit
- Meta description: "Professionelle Websites, SEO und Google Ads fur Handwerker und lokale Unternehmen in Hamburg. Schnell, strukturiert, messbar. Kostenlose Website-Analyse." -- Good length, includes CTA, local modifier
- **Issue:** These are hardcoded in the HTML shell but the SPA may override them via JS. In the HTML source, they are identical for all pages.

#### Heading Hierarchy
- H1: "Webdesign & Marketing aus Hamburg" -- unclear if rendered as H1 via JS
- Subheading: "Findet er Sie -- oder Ihren Wettbewerber?" -- strong hook
- Sections use clear headings: "Echte Projekte. Echte Ergebnisse.", "Die meisten Firmenwebsites funktionieren nicht.", "Vom Erstgesprach zum Ergebnis."

#### E-E-A-T Signals
- **Experience (16/20):** Three named case studies with specific results (e.g., "5.0 Sterne bei 24 Bewertungen", "5.000 Impressionen in 2 Monaten", "Platz 1 in ChatGPT"). Real client URLs provided. Missing: more quantitative before/after metrics.
- **Expertise (18/25):** Services clearly described with technical specificity. Pricing transparency signals knowledge. Missing: explicit founder credentials on homepage.
- **Authoritativeness (16/25):** Client references with live URLs. Social proof via case studies. Missing: industry certifications, awards, media mentions, Google Partner badge.
- **Trustworthiness (24/30):** Phone number, email, physical location (Hamburg). Transparent pricing. "Ergebnis-Garantie" promise. DSGVO compliance mentioned. Missing: Impressum link visibility, specific street address in schema.

**E-E-A-T Total: 74/100**

#### CTA Effectiveness
- Primary CTA: "Kostenlose Website-Analyse anfordern" -- strong, specific, low-friction
- Secondary CTA: "Kostenloses Erstgesprach" -- good alternative
- CTAs appear multiple times throughout the page -- good practice
- Contact form asks for minimal information (name, email, website, message) -- good

#### AI Citation Readiness: 75/100
- FAQ schema with 4 questions (server-rendered) -- excellent for AI extraction
- Case study data is specific and citable
- Missing: standalone statistics/facts that are easy to quote out of context

#### Recommendations
1. Add founder name and brief credentials visible on homepage (not just in schema)
2. Add a "Bekannt aus" or certification/partner section
3. Ensure page-specific title/meta are rendered server-side
4. Add more quantitative results to case studies (e.g., "Traffic-Steigerung um X%")

---

### 2. SERVICE PAGE: WEBDESIGN (https://webseite.hamburg/leistungen/webdesign)

**Content Quality Score: 82/100**

#### Content Depth
- Estimated word count: ~1,200-1,400 words
- Content minimum for service page: 800 words -- PASSES
- Sections: Hero, Problem Statement ("Warum die meisten Firmenwebsites Kunden verlieren"), Approach ("Mein Ansatz: Website als Geschaftsinstrument"), Features (Performance, Conversion, SEO), Pricing (2 tiers), Process (4 steps), FAQ (6+ questions), CTA

#### Title & Meta (JS-rendered)
- "Webdesign Hamburg | Schnelle Websites ab 2.000 Euro" -- excellent, includes price point
- Description: "Professionelle Website-Entwicklung fur lokale Unternehmen in Hamburg. Individuelles Design, PageSpeed 100/100, Conversion-Optimierung." -- strong

#### Content Quality Highlights
- Specific technical claims: "PageSpeed-Scores von 90-100 sind Standard"
- Concrete pricing: One-Pager ab 2.000 EUR, Mehrseitige Website ab 3.000 EUR
- Problem-agitate-solve structure is well executed
- Stats cited: "53% der mobilen Nutzer verlassen eine Seite, die langer als 3 Sekunden ladt"
- Process transparency: 4-step process with clear timeline expectations

#### E-E-A-T Signals
- **Experience (17/20):** First-person perspective ("Ich baue Websites"), mentions seeing common Hamburg business problems, practical process description
- **Expertise (20/25):** Technical specifics (PageSpeed scores, semantisches HTML, strukturierte Daten), clear methodology description
- **Authoritativeness (16/25):** No external validation on this page, no certifications shown
- **Trustworthiness (25/30):** Transparent pricing, clear process, FAQ addresses common concerns honestly

**E-E-A-T Total: 78/100**

#### AI Citation Readiness: 80/100
- Clear factual statements suitable for citation
- Pricing information structured and unambiguous
- FAQ section with clear Q&A pairs
- Missing: linked sources for statistical claims

---

### 3. SERVICE PAGE: SEO (https://webseite.hamburg/leistungen/seo)

**Content Quality Score: 83/100**

#### Content Depth
- Estimated word count: ~1,300-1,500 words
- Content minimum for service page: 800 words -- PASSES
- Sections: Hero, Why Local SEO Matters (with statistics), What's Included (8 items), Live Dashboard description, Pricing, FAQ (6+ questions), CTA

#### Title & Meta (JS-rendered)
- "SEO Hamburg | Lokale Sichtbarkeit & Google Rankings" -- good keyword targeting
- Description: "Professionelle Suchmaschinenoptimierung fur lokale Unternehmen in Hamburg. Google Rankings, lokale Sichtbarkeit, Google Maps Optimierung." -- comprehensive

#### Content Quality Highlights
- Statistics used effectively: "93% aller Online-Erfahrungen beginnen mit einer Suchmaschine", "46% aller Google-Suchen haben lokale Absicht", "28% der lokalen Suchen fuhren innerhalb von 24h zu einer Aktion"
- Transparent about results timeline: "Erste Ergebnisse typischerweise nach 4-8 Wochen. Volle Wirkung nach 3-6 Monaten."
- Honest about guarantees: "Nein -- und seien Sie vorsichtig bei jedem, der das tut." (re: Platz 1 guarantee)
- Live dashboard concept differentiates from competitors

#### E-E-A-T Signals
- **Experience (17/20):** References to Hamburg-specific work, mentions common problems seen in Hamburg businesses
- **Expertise (21/25):** Detailed technical knowledge, mentions specific tools (Google Search Console, Analytics, Ahrefs, Screaming Frog)
- **Authoritativeness (17/25):** Statistics cited but sources not always linked
- **Trustworthiness (26/30):** Results guarantee, transparent pricing, honest FAQ answers, live data access promise

**E-E-A-T Total: 81/100**

---

### 4. SERVICE PAGE: AI SEO (https://webseite.hamburg/leistungen/ai-seo)

**Content Quality Score: 85/100**

#### Content Depth
- Estimated word count: ~1,200-1,400 words
- Content minimum for service page: 800 words -- PASSES
- Sections: Hero, Market Context (with statistics), How AI Search Differs, Service Components (5 items), Pricing, First-Mover Advantage argument, FAQ (4+ questions), CTA

#### Title & Meta (JS-rendered)
- "AI SEO Hamburg | Sichtbar in ChatGPT & Perplexity" -- excellent, targets emerging keywords
- Description: "AI SEO Optimierung fur Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews. Ihr Unternehmen als vertrauenswurdige Quelle in KI-Antworten." -- strong

#### Content Quality Highlights
- **This is the site's strongest differentiator page.** AI SEO is a nascent market and this page positions the agency as a specialist.
- Specific statistics: "200 Millionen wochentliche ChatGPT-Nutzer", "70% der Gen-Z nutzt AI statt Google"
- Clear explanation of how AI search differs from traditional search
- Urgency framing: "In 2-3 Jahren wird AI SEO so selbstverstandlich sein wie klassisches SEO heute -- aber die Platze an der Spitze werden dann bereits vergeben sein."
- Case study reference (KinderAlbum achieving Platz 1 in ChatGPT)

#### E-E-A-T Signals
- **Experience (19/20):** Documented case study with real results in AI search, clearly based on practitioner experience
- **Expertise (22/25):** Demonstrates understanding of RAG, LLM citation mechanics, schema markup for AI -- technical depth is strong
- **Authoritativeness (18/25):** Case study with verifiable results, mentions of specific AI platforms
- **Trustworthiness (25/30):** Honest framing ("AI-Suchmarkt ist noch jung"), transparent pricing

**E-E-A-T Total: 84/100**

#### AI Citation Readiness: 88/100
- Ironic and fitting: the AI SEO page itself is highly citation-ready
- Clear definitions, specific claims, structured information
- The KinderAlbum case study is a strong proof point that AI systems can verify

---

### 5. KNOWLEDGE ARTICLE: Lokales SEO Hamburg Guide (https://webseite.hamburg/wissen/lokales-seo-hamburg-guide)

**Content Quality Score: 88/100**

#### Content Depth
- Estimated word count: ~2,000-2,500 words
- Content minimum for blog post: 1,500 words -- PASSES
- Last modified: 2026-01-20
- Sections: What is Local SEO, Google Business Profile, Local Keywords, NAP Consistency, Local Citations, Reviews, Google Maps Ranking, Common Mistakes, Measuring Success, Conclusion

#### Title & Meta (JS-rendered)
- "Lokales SEO in Hamburg: Der komplette Leitfaden fur 2026" -- excellent, year-tagged for freshness
- Description: comprehensive and keyword-rich

#### Content Quality Highlights
- **This is the site's strongest content piece.**
- Hamburg-specific throughout: mentions specific Stadtteile (Eimsbuttel, Altona, Innenstadt, Neustadt), Hamburg-specific directories (hamburg.de, Handelskammer Hamburg)
- External sources cited with URLs: Moz Local Search Ranking Factors, Google Business Profile documentation
- Concrete examples: "Ein Sanitarbetrieb in Hamburg hatte 3 verschiedene Adressen in verschiedenen Verzeichnissen. Nach der Bereinigung: von Seite 3 auf Position 4 in 6 Wochen."
- Practical keyword examples: "Schlusseldienst Eimsbuttel", "Friseur Altona"
- Addresses common mistakes with specific examples ("Muller Sanitar Klempner Notdienst Hamburg 24h" as keyword-stuffed GBP name)
- Specific numbers: "30-50 Bewertungen" as benchmark for Hamburg businesses

#### E-E-A-T Signals
- **Experience (19/20):** "Nach Jahren der Arbeit mit lokalen Unternehmen in Hamburg sehe ich dieselben Fehler immer wieder" -- clear first-hand experience. Real case study embedded.
- **Expertise (23/25):** Technically comprehensive, covers ranking factors systematically, cites authoritative sources
- **Authoritativeness (20/25):** Links to Moz and Google documentation. Hamburg-specific data. Missing: author byline with credentials.
- **Trustworthiness (26/30):** Balanced tone, no overselling, cites sources, actionable advice

**E-E-A-T Total: 88/100**

#### AI Citation Readiness: 90/100
- Highly citable: specific Hamburg statistics, step-by-step instructions, named local directories
- Well-structured with clear H2 hierarchy
- Contains original insights specific to the Hamburg market
- Missing: explicit author attribution on the article itself

---

### 6. KNOWLEDGE ARTICLE: AI SEO Was Unternehmen jetzt wissen mussen (https://webseite.hamburg/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen)

**Content Quality Score: 87/100**

#### Content Depth
- Estimated word count: ~1,800-2,200 words
- Content minimum for blog post: 1,500 words -- PASSES
- Last modified: 2026-03-01 (most recent article)

#### Content Quality Highlights
- **Exceptionally strong technical content** for a local agency blog
- Explains RAG (Retrieval-Augmented Generation) and LLM citation mechanics in plain language
- Cites external sources: edwardsturm.com/ai-seo, Google's AI Overviews documentation, Search Engine Land analysis
- Real case study: "Fur eine DSGVO-konforme Schulfotos-App haben wir die Inhalte so strukturiert, dass sie in ChatGPT und Perplexity auf Platz 1 erscheinen"
- Specific methodology described: FAQ schema, H2-structured answers, Author-Markup, Organization-Schema
- Quantified impact: "Seiten, die in AI Overviews zitiert werden, verzeichnen bis zu 30% mehr organischen Traffic"
- Actionable checklist at the end

#### E-E-A-T Signals
- **Experience (20/20):** Documented real-world case study with verifiable results. This is genuine practitioner content.
- **Expertise (23/25):** Technical accuracy, understands LLM mechanics, cites primary sources
- **Authoritativeness (19/25):** External citations, original case study data. Could benefit from author bio.
- **Trustworthiness (25/30):** Balanced perspective, acknowledges limitations, provides actionable steps

**E-E-A-T Total: 87/100**

#### AI Citation Readiness: 92/100
- This article is practically designed to be cited by AI systems
- Contains original research/case study data
- Clear structure with quotable statements
- External source links for verification
- **Best-in-class for a local agency**

---

### 7. KNOWLEDGE ARTICLE: Website Conversion Optimierung (https://webseite.hamburg/wissen/website-conversion-optimierung)

**Content Quality Score: 82/100**

#### Content Depth
- Estimated word count: ~1,800-2,000 words
- Content minimum for blog post: 1,500 words -- PASSES
- Last modified: 2026-01-10

#### Content Quality Highlights
- Clear math example: "1.000 Besucher, 1% Conversion = 10 Anfragen. 2% = 20 Anfragen. Doppelter Umsatz, kein extra Euro."
- References Baymard Institute usability studies
- Real case study: beauty-coworking in Hamburg, "5.000 Impressionen und vollstandig ausgebuchte Arbeitsplatze"
- Practical CTA advice: "Jetzt Angebot anfordern" vs. generic text
- Covers 6 major conversion killers with specific fixes
- Hamburg-specific framing: "Nach unserer Erfahrung mit Hamburger Unternehmen"

#### E-E-A-T Signals
- **Experience (17/20):** References Hamburg client work, practical examples from real projects
- **Expertise (20/25):** Good technical knowledge of CRO, cites Baymard Institute
- **Authoritativeness (17/25):** One external citation, could use more research backing
- **Trustworthiness (24/30):** Honest, practical advice, no overselling

**E-E-A-T Total: 78/100**

---

### 8. ABOUT PAGE (https://webseite.hamburg/ueber-uns)

**Content Quality Score: 80/100**

#### Content Depth
- Estimated word count: ~800-1,000 words
- Adequate for an about page

#### Content Quality Highlights
- Strong personal narrative: "Ich bin kein Agentur-Netzwerk mit Account-Managern"
- Credentials stated: "Uber 10 Jahre Erfahrung in der digitalen Produktentwicklung"
- Background differentiation: "Nicht bei einer Marketing-Agentur -- sondern in der Praxis: Softwareentwicklung, Produktdesign, Performance-Optimierung"
- Technology stack listed: React, Next.js, Node.js, WordPress, Custom CMS
- Tools listed: Google Search Console, Analytics, Ahrefs, Screaming Frog
- Core values clearly stated: Ergebnis-Garantie, Transparenz, Datenbasiert, Kundeneigentum
- Three value pillars with concrete meaning

#### E-E-A-T Signals
- **Experience (18/20):** 10+ years, tech company background, specific tool knowledge
- **Expertise (20/25):** Comprehensive tech and marketing skill set detailed
- **Authoritativeness (15/25):** Missing: specific company names in career history, certifications, education, publications, speaking engagements
- **Trustworthiness (25/30):** Direct, personal tone. LinkedIn linked. Contact details provided.

**E-E-A-T Total: 78/100**

#### Recommendations for About Page
1. Add specific career milestones (companies worked at, notable projects beyond current clients)
2. Add a professional photo if not already present
3. Consider adding certifications (Google Ads certification, etc.)
4. Link to LinkedIn more prominently
5. Add a "Warum ich AISEO gegrundet habe" narrative section

---

## ADDITIONAL PAGES (Based on Content Extracted)

### Knowledge Article: Warum langsame Websites Kunden kosten
- Estimated ~1,800 words. Strong technical content with Google Think with Google citation, practical math examples, real Hamburg case study ("Hamburger Handwerksbetrieb: Ladezeit von 6 auf 1,2 Sekunden, Anfragen verdreifacht"). Score: 83/100.

### Knowledge Article: Die 7 teuersten Google Ads Fehler
- Estimated ~2,000 words. Excellent practical content with real Hamburg examples, linked Google documentation, actionable checklist. Score: 85/100.

### Knowledge Article: Website-Relaunch Checkliste
- Estimated ~2,000 words. Comprehensive technical guide with chronological phases, specific tool mentions (Screaming Frog, Sitebulb), linked Google documentation. Expert-level content. Score: 86/100.

### Service Page: Google Ads
- Estimated ~1,200 words. Strong differentiation on transparency (client owns account). Score: 80/100.

### Service Page: Website-Audit
- Estimated ~1,000 words. Clear process description, trust-building language. Free offer well positioned. Score: 78/100.

---

## CROSS-SITE ASSESSMENT

### Internal Linking Quality: 70/100
- Service pages link to related knowledge articles (positive)
- Knowledge articles include CTAs linking to relevant services (positive)
- Navigation structure: Homepage > Leistungen > Individual services; Wissen > Individual articles
- **Missing:** Cross-links between knowledge articles (e.g., the SEO guide should link to the website speed article)
- **Missing:** Contextual internal links within article body text
- Related services shown at bottom of service pages (positive)

### Keyword Targeting for Local SEO Hamburg: 82/100

| Target Keyword | Page | Assessment |
|---|---|---|
| Webdesign Hamburg | /leistungen/webdesign | Strong -- in title, H1, body |
| SEO Hamburg | /leistungen/seo | Strong -- in title, H1, body |
| AI SEO Hamburg | /leistungen/ai-seo | Strong -- in title, H1, body |
| Google Ads Hamburg | /leistungen/google-ads | Strong -- in title, H1, body |
| Website Audit Hamburg | /leistungen/website-audit | Adequate |
| Lokales SEO Hamburg | /wissen/lokales-seo-hamburg-guide | Excellent -- comprehensive topical authority |
| AI SEO Unternehmen | /wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen | Good |
| Website erstellen lassen Hamburg | Homepage/Webdesign | Not explicitly targeted |
| Webseite erstellen Hamburg | Not targeted | Gap -- high-volume keyword variant |
| Webdesigner Hamburg | Not targeted | Gap -- searcher intent variant |

### Content Freshness: 78/100
- Knowledge articles have lastmod dates (Jan-Mar 2026) -- good
- Service pages lack lastmod in sitemap -- minor issue
- AI SEO article updated Mar 2026 -- timely and relevant
- No visible "last updated" dates on articles themselves (verify in rendered version)

### Author/Founder Visibility: 65/100
- Vadim Shchepin named in schema.org data (server-rendered) -- good for crawlers
- LinkedIn profile linked in structured data and footer
- About page provides biography and credentials
- **Critical gap:** Articles lack author bylines. No visible "Von Vadim Shchepin" on knowledge articles.
- **Critical gap:** No author schema (Person) on individual article pages
- **Recommendation:** Add author attribution and Person schema to every article. This is essential for E-E-A-T under Sept 2025 QRG guidelines.

### Trust Signals: 72/100

Present:
- Phone number and email
- Three named client references with live URLs
- Specific results (5.0 stars/24 reviews, Platz 1 in ChatGPT, 5000 impressions)
- Transparent pricing on all services
- Free audit offer (low-risk entry point)
- "Ergebnis-Garantie" promise
- DSGVO compliance mentioned
- Social media profiles linked

Missing:
- Google reviews widget/embed on site
- Testimonial quotes from named clients
- Industry certifications or partner badges (Google Partner, etc.)
- Specific street address (only "Hamburg, Deutschland" in schema)
- Privacy policy / Impressum links not visible in extracted content (may be in footer)
- Case study detail pages with before/after data
- Awards or media mentions

### AI-Generated Content Assessment: LOW RISK

The content shows clear signals of human authorship:
- First-person perspective throughout ("Ich baue...", "Nach meiner Erfahrung...")
- Hamburg-specific examples and local knowledge
- Opinionated stances ("Warum scoren die meisten Agentur-Websites so schlecht?")
- Original case studies with verifiable results
- Varied sentence structure and natural German prose
- Technical specificity that goes beyond generic AI output
- Authentic business voice with personality

No flags for low-quality AI content per Sept 2025 QRG criteria.

---

## SUMMARY SCORES

| Page | Quality Score | E-E-A-T | AI Citation | Word Count OK? |
|---|---|---|---|---|
| Homepage | 72 | 74 | 75 | Yes (est. 800-1000) |
| Webdesign Service | 82 | 78 | 80 | Yes (est. 1200-1400) |
| SEO Service | 83 | 81 | 82 | Yes (est. 1300-1500) |
| AI SEO Service | 85 | 84 | 88 | Yes (est. 1200-1400) |
| Lokales SEO Guide | 88 | 88 | 90 | Yes (est. 2000-2500) |
| AI SEO Article | 87 | 87 | 92 | Yes (est. 1800-2200) |
| Conversion Article | 82 | 78 | 78 | Yes (est. 1800-2000) |
| About Page | 80 | 78 | 70 | Yes (est. 800-1000) |

**Site Average: 82/100**

---

## TOP 10 PRIORITY RECOMMENDATIONS

### Critical (Impact: High, Effort: High)

1. **Migrate from SPA to SSR/SSG.** The client-side rendering means that the HTML source for every page is identical -- same title, same meta description, same canonical URL. This fundamentally undermines page-level SEO. Pre-rendering or server-side rendering would ensure each URL returns unique, crawlable HTML. This is the single most impactful change.

### High Priority (Impact: High, Effort: Low-Medium)

2. **Add author bylines and Person schema to all knowledge articles.** Every article should show "Von Vadim Shchepin" with a link to the about page. Add `Article` schema with `author` property on each article page. This is a core E-E-A-T requirement under the Sept 2025 QRG.

3. **Implement page-specific meta tags server-side.** Even without a full SSR migration, use `<meta>` tag injection via pre-rendering for at minimum: unique `<title>`, `<meta description>`, `<link rel="canonical">`, and Open Graph tags per page.

4. **Add page-specific structured data to service and article pages.** Currently, only the homepage has structured data in the HTML. Each service page should have `Service` schema; each article should have `Article` schema with datePublished, dateModified, and author.

5. **Embed Google reviews or testimonials on the homepage and service pages.** The case studies are strong but lack direct client quotes. Adding visible social proof (star ratings, named testimonials) would significantly boost trust signals.

### Medium Priority (Impact: Medium, Effort: Low)

6. **Strengthen internal linking within knowledge articles.** Articles should cross-reference each other (e.g., the conversion article should link to the page speed article; the local SEO guide should link to the Google Ads article). Aim for 3-5 contextual internal links per article.

7. **Add visible "Last updated" dates to knowledge articles.** The sitemap has lastmod dates, but users and search engines benefit from visible freshness signals on the page itself.

8. **Target missing keyword variants.** Create or optimize for "Website erstellen lassen Hamburg" and "Webdesigner Hamburg" -- these are high-volume searcher intent variants not currently covered.

9. **Add a complete street address to structured data and contact page.** A full postal address (not just "Hamburg, Deutschland") strengthens local SEO signals and trust.

10. **Create dedicated case study pages.** The three client references (Blitz Hamburg, KinderAlbum, Solovei Beauty) deserve their own pages with detailed before/after data, screenshots, timelines, and client quotes. These would be powerful E-E-A-T and link-building assets.

---

## E-E-A-T BREAKDOWN (SITE-WIDE)

| Factor | Weight | Score | Weighted | Notes |
|---|---|---|---|---|
| Experience | 20% | 82/100 | 16.4 | Strong: real case studies, first-person perspective, Hamburg-specific knowledge |
| Expertise | 25% | 80/100 | 20.0 | Strong: technical depth, tool knowledge, accurate information |
| Authoritativeness | 25% | 72/100 | 18.0 | Moderate: needs external validation, certifications, author attribution |
| Trustworthiness | 30% | 78/100 | 23.4 | Good: transparent pricing, contact info, guarantees. Needs reviews/testimonials |
| **TOTAL** | **100%** | | **77.8/100** | |

---

## COMPETITIVE POSITIONING ASSESSMENT

The site demonstrates genuine specialization in three areas that differentiate it from typical Hamburg web agencies:

1. **AI SEO as a named service** -- very few local agencies in Germany currently offer this as a distinct service with case study proof
2. **Performance-first approach** with documented PageSpeed claims
3. **Full transparency model** (client owns all accounts, live dashboards)

The knowledge article library (6 articles) provides meaningful topical authority. The content is practical, Hamburg-specific, and technically sound -- a clear cut above the generic agency blog content that dominates this market.

The primary competitive vulnerability is the SPA architecture, which could prevent Google from properly indexing and ranking this otherwise strong content.

---

*Audit generated: 2026-03-19*
*Methodology: Google September 2025 Quality Rater Guidelines, Helpful Content System signals (integrated into core algorithm March 2024)*
*Content analyzed via: HTML source, JavaScript bundle extraction, llms.txt, llms-full.txt, sitemap.xml, structured data*
