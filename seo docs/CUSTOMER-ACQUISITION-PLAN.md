# Customer Acquisition Master Plan: AISEO Hamburg
## Date: 2026-03-20
## Sites: webseite.hamburg | aiseo.hamburg

---

## CURRENT SITUATION

**What you have:**
- Two strong sites: webseite.hamburg (general web services) + aiseo.hamburg (AI SEO niche)
- SEO health: 84/100 (up from 52 after Next.js migration)
- 5 services: Webdesign (ab 2.000), SEO (ab 1.000/mo), AI SEO (ab 1.200/mo), Google Ads (ab 500/mo), Free Audit
- 3 case studies: Blitz Hamburg, KinderAlbum, Solovei Beauty
- 6 knowledge articles, 24 FAQ Q&As
- Strong technical foundation (SSR, structured data, llms.txt)
- Google Business: 5.0 stars, 24 reviews

**What's missing:**
- No active lead generation funnel (only passive contact form + free audit mention)
- No email list or nurture sequences
- No YouTube or Reddit presence
- No outbound or cold outreach system
- No Google Ads running for your own agency
- No industry-specific landing pages (Handwerker, Arzte, etc.)
- Limited social proof (no client testimonials with photos/quotes on site)
- aiseo.hamburg and webseite.hamburg not strategically cross-linked

---

## PHASE 1: QUICK WINS (This Week -- Days 1-7)

### 1.1 Fix Remaining Technical SEO Issues
**Goal:** Push SEO score from 84 to 90+
**Time:** 4-6 hours total

- [ ] Add `image` property to all Article schemas (unlocks Article rich results in Google)
- [ ] Fix duplicate BreadcrumbList (remove layout-level duplicate)
- [ ] Switch Article.publisher to @id reference to Organization
- [ ] Remove LinkedIn from ProfessionalService.sameAs
- [ ] Add trailing slash to ProfessionalService URL
- [ ] Add @id + logo to ProfessionalService
- [ ] Fix www redirect from 307 to 301/308 (Vercel dashboard or vercel.json)
- [ ] Add favicon.ico redirect to /logo_red.webp

### 1.2 Activate Your Free Audit as a Real Lead Magnet
**Goal:** Turn the "Kostenlose Website-Analyse" into an actual lead capture system
**Time:** 2-3 hours

Right now the free audit is just a CTA that goes to a contact form. Transform it:

- [ ] Create a dedicated landing page at `/website-analyse` with:
  - Headline: "Kostenlose Website-Analyse in 48 Stunden"
  - What they get: Performance score, SEO check, 3 konkrete Verbesserungen
  - Form: Name, Email, Website-URL, Telefon (optional)
  - Social proof: "Uber 50 Analysen durchgefuhrt" + Blitz Hamburg before/after screenshot
- [ ] Same for aiseo.hamburg: `/ki-check` landing page for the AI visibility check
- [ ] Set up email confirmation with Resend (you already have it in package.json)
- [ ] After submission: redirect to a "Danke" page with calendar link (Calendly/Cal.com)

### 1.3 Google Business Profile Optimization
**Goal:** Maximize local search visibility immediately
**Time:** 1-2 hours

- [ ] Add all services as GBP service categories
- [ ] Upload 10+ project photos (Blitz Hamburg screenshots, website examples)
- [ ] Add business description with keywords: "Webdesign Hamburg, SEO Hamburg, AI SEO"
- [ ] Create a GBP post every week (case study snippets, tips)
- [ ] Add Q&A on your GBP (seed your own FAQ questions)
- [ ] Request reviews from past clients (target: 30+ reviews)

### 1.4 Set Up Basic Analytics & Conversion Tracking
**Goal:** Know what's working before investing more
**Time:** 2 hours

- [ ] Google Search Console: verify both domains
- [ ] Google Analytics 4: install on both sites
- [ ] Set up conversion events: form submissions, phone clicks, email clicks
- [ ] Connect GA4 to Search Console for keyword data

---

## PHASE 2: LEAD GENERATION ENGINE (Week 2-3)

### 2.1 Run Google Ads for Your Own Agency
**Goal:** Immediate leads while SEO builds
**Time:** Setup 4-6 hours, then ongoing management
**Budget:** 500-1.000 EUR/month

**Campaign 1: Search Ads (webseite.hamburg)**
Target keywords:
- "Webdesign Hamburg" (high volume, competitive)
- "Website erstellen lassen Hamburg" (high intent)
- "SEO Agentur Hamburg" (high intent)
- "Google Ads Agentur Hamburg"
- "Webdesigner Hamburg"

Ad copy angles:
- "100/100 PageSpeed | Websites die Kunden bringen"
- "Keine Vertragsbindung | Transparente Preise ab 2.000 EUR"
- "10+ Jahre Erfahrung | Ergebnis-Garantie"

Landing pages: Use `/website-analyse` as destination (lead capture, not homepage)

**Campaign 2: Search Ads (aiseo.hamburg)**
Target keywords:
- "AI SEO Hamburg"
- "KI Sichtbarkeit Unternehmen"
- "ChatGPT Optimierung"
- "AI SEO Agentur"

This is a blue ocean -- almost no competition on AI SEO keywords in German.

**Campaign 3: Local Services Ads**
- Set up LSA for "Website Design" and "SEO Services" in Hamburg
- Pay per lead, not per click
- Your 5.0 Google rating is a massive advantage here

### 2.2 Create Industry-Specific Landing Pages
**Goal:** Capture high-intent long-tail traffic
**Time:** 2-3 days
**Impact:** Each page targets a specific buyer persona

Create these pages on webseite.hamburg:

- [ ] `/leistungen/webdesign-handwerker` -- "Webdesign fur Handwerker in Hamburg"
- [ ] `/leistungen/webdesign-aerzte` -- "Webdesign fur Arztpraxen & Zahnarzte"
- [ ] `/leistungen/webdesign-gastronomie` -- "Website fur Restaurants & Cafes in Hamburg"
- [ ] `/leistungen/seo-handwerker` -- "SEO fur Handwerksbetriebe Hamburg"

Each page should include:
- Industry-specific problems ("Ihre Patienten suchen 'Zahnarzt Hamburg' -- finden sie Sie?")
- Relevant case study (Blitz Hamburg for Handwerker)
- Industry-specific pricing guidance
- FAQ tailored to that industry
- Service + FAQPage schema

Why this works: "Webdesign Handwerker Hamburg" has lower competition than "Webdesign Hamburg" but higher conversion intent. The searcher already knows what they need.

### 2.3 Cold Outreach System (LinkedIn + Email)
**Goal:** 5-10 qualified conversations per week
**Time:** Setup 1 day, then 30 min/day

**LinkedIn Outreach (free):**
- [ ] Optimize your LinkedIn profile as a landing page (headline: "Ich baue Websites die messbar Kunden bringen | Hamburg")
- [ ] Connect with Hamburg business owners (Handwerker, Arzte, Restaurantbesitzer)
- [ ] Post 3x/week: case study snippets, quick tips, industry observations
- [ ] DM sequence (NOT pitching):
  1. Connect with personalized note ("Sehe dass Sie [Branche] in Hamburg sind...")
  2. Wait 2-3 days, engage with their content
  3. Offer free value: "Ich habe mir Ihre Website kurz angeschaut -- hatten Sie Interesse an 2-3 konkreten Verbesserungsvorschlagen?"
  4. If interested: send Loom video audit (5 min), end with calendar link

**Cold Email (if you have access to business directories):**
- [ ] Build a list of Hamburg businesses with bad websites (check manually or use tools)
- [ ] Send personalized audit emails:
  - Subject: "Ihre Website auf [business-name].de -- 3 Verbesserungen"
  - Body: 2-3 specific issues you found + offer for free detailed analysis
  - Follow-up after 3 days with a different angle
- [ ] Use Resend or similar for delivery (not Gmail directly for volume)

### 2.4 Email Nurture Sequence
**Goal:** Convert audit leads who don't buy immediately
**Time:** 4-6 hours to write

After someone requests a free audit, they enter this sequence:

- **Day 0:** Audit delivery email with results + CTA to book a call
- **Day 3:** "Die 3 haufigsten Fehler die ich bei Hamburger Websites sehe" (value email)
- **Day 7:** Blitz Hamburg case study -- "Wie ein Hamburger Handwerker seine Kundengewinnung verdoppelt hat"
- **Day 14:** "Warum die meisten Websites keine Kunden bringen" (link to article)
- **Day 21:** Direct offer -- "Sollen wir Ihre Website in 4 Wochen umbauen?"
- **Day 30:** Last chance -- "Noch Interesse? Ansonsten kein Problem"

---

## PHASE 3: CONTENT & AUTHORITY (Week 3-6)

### 3.1 YouTube Channel
**Goal:** Build the #1 authority signal for AI citations + additional traffic channel
**Time:** 1 video/week, 2-3 hours per video

**Channel name:** "AISEO Hamburg" or "Vadim Shchepin -- Webdesign & SEO"

**First 5 videos:**
1. "Ich habe die Website eines Hamburger Handwerkers komplett umgebaut -- das Ergebnis" (Blitz Hamburg case study)
2. "So wirst du von ChatGPT empfohlen -- AI SEO erklart" (biggest differentiator)
3. "Warum deine Website keine Kunden bringt (und was du andern kannst)"
4. "Google Ads fur lokale Unternehmen -- die 7 teuersten Fehler"
5. "Website-Analyse LIVE: Ich bewerte eine echte Hamburger Website"

Format: Screen recording + face cam (Loom or OBS). Perfection is not needed -- authenticity matters more.

Embed each video on the corresponding article page (multi-modal SEO boost).

### 3.2 Expand Knowledge Articles
**Goal:** Double topical coverage, capture more organic traffic
**Time:** 1 article/week

**New articles to write:**

| Article | Target Keyword | Search Intent |
|---------|---------------|---------------|
| Website erstellen lassen -- Was kostet es wirklich? | website erstellen lassen kosten | Transactional |
| Webdesign fur Handwerker: Der komplette Guide | webdesign handwerker | Informational |
| Google Business Profil optimieren 2026 | google business profil optimieren | Informational |
| Website Geschwindigkeit testen und verbessern | website geschwindigkeit testen | Informational |
| SEO selber machen oder Agentur beauftragen? | seo selber machen | Commercial Investigation |
| Was ist AI SEO? Einfach erklart fur Unternehmen | was ist ai seo | Informational |

Each article should:
- Be 1.800+ words
- Include question-based H2 headings (for AI citation)
- Have 1 stat with source per section
- Cross-link to relevant service page
- End with a CTA to the free audit
- Have proper Article schema with image

### 3.3 Reddit & Community Presence
**Goal:** Brand entity signals for AI systems + direct referral traffic
**Time:** 15-20 min/day

- [ ] Create Reddit account, join r/SEO, r/webdev, r/de_EDV, r/hamburg
- [ ] Answer questions about web design, SEO, local marketing
- [ ] Never spam links -- provide genuine value, mention your experience when relevant
- [ ] After 2-3 months of consistent participation, your brand will appear in training data

### 3.4 Strategic Cross-Linking Between Your Two Sites
**Goal:** Leverage both domains for maximum authority
**Time:** 2-3 hours

Currently webseite.hamburg and aiseo.hamburg are barely connected:

- [ ] webseite.hamburg/leistungen/ai-seo should prominently link to aiseo.hamburg with: "Mehr uber AI SEO erfahren auf aiseo.hamburg"
- [ ] aiseo.hamburg should link back to webseite.hamburg for general services: "Webdesign, SEO & Google Ads: webseite.hamburg"
- [ ] Both sites should appear in each other's schema (sameAs already partially done)
- [ ] aiseo.hamburg blog/wissen articles should link to webseite.hamburg articles and vice versa where relevant

---

## PHASE 4: CONVERSION OPTIMIZATION (Week 4-8)

### 4.1 Add Social Proof Throughout Both Sites
**Goal:** Increase conversion rate on existing traffic
**Time:** 1-2 days

- [ ] Add Google Reviews widget on homepage (you have 5.0 stars -- show it prominently)
- [ ] Add named client testimonials with photos on service pages
- [ ] Add client logos section ("Vertrauen uns" / "Ausgewahlte Projekte")
- [ ] Add before/after performance screenshots (Lighthouse scores) on webdesign page
- [ ] Add "Bekannt fur" trust bar with concrete numbers: "50+ Projekte | 10+ Jahre | 5.0 Google Bewertung"

### 4.2 Create More Case Studies
**Goal:** Proof for every service you offer
**Time:** 1 case study per week

You have 3 case studies but only 1 detailed page (Blitz Hamburg). Create:

- [ ] `/referenzen/kinderalbum` -- Full case study page with AI SEO focus (your strongest differentiator)
- [ ] `/referenzen/solovei-beauty` -- Full case study with Instagram/local focus
- [ ] `/referenzen` -- Case studies hub page listing all projects
- [ ] Each should include: problem, approach, results with specific numbers, client quote, screenshots

### 4.3 Exit-Intent Popup for Free Audit
**Goal:** Capture visitors who are leaving without converting
**Time:** 2-3 hours

- [ ] Add exit-intent popup on service pages: "Bevor Sie gehen -- Kostenlose Website-Analyse in 48h"
- [ ] Trigger only once per session, only on desktop
- [ ] Offer: Free 5-minute Loom video analysis of their website
- [ ] Form: just email + website URL (minimal friction)
- [ ] Expected conversion lift: 2-5% of bouncing visitors

### 4.4 WhatsApp/Chat Integration
**Goal:** Lower the barrier to first contact
**Time:** 1-2 hours

- [ ] Add WhatsApp button (floating, bottom right) on both sites
- [ ] Pre-filled message: "Hallo! Ich interessiere mich fur [Webdesign/SEO]. Konnen Sie mir weiterhelfen?"
- [ ] WhatsApp is the preferred communication channel for Handwerker and small business owners in Germany

---

## PHASE 5: SCALING (Month 2-3+)

### 5.1 Referral Program
**Goal:** Turn happy clients into a sales channel
**Time:** Setup 2-3 hours

- [ ] Offer existing clients: "Empfehlen Sie uns weiter -- Sie erhalten einen Monat SEO kostenlos / 200 EUR Gutschrift"
- [ ] Create a simple referral tracking page or even just a dedicated email: empfehlung@webseite.hamburg
- [ ] Ask for referrals at the end of every successful project delivery

### 5.2 Partnerships with Complementary Businesses
**Goal:** Warm introductions instead of cold outreach
**Time:** Ongoing

- [ ] Partner with Hamburg-based Steuerberater (they advise business owners, often asked about websites)
- [ ] Partner with Fotografen (they build portfolios, clients often need full websites)
- [ ] Partner with Immobilienmakler (they need websites + local SEO)
- [ ] Partner with Druckereien/Grafikdesigner (they get website requests they can't fulfill)
- [ ] Offer: 10-15% referral commission or reciprocal referrals

### 5.3 Free Tool as Lead Magnet
**Goal:** Attract traffic with a useful tool that captures leads
**Time:** 1-2 weeks to build

Build a simple free tool on webseite.hamburg:

**Option A: "Website-Score Check"**
- User enters their URL
- You run a basic Lighthouse/PageSpeed API check
- Show results: Performance, SEO, Accessibility scores
- "Ihre Website hat Verbesserungspotenzial -- Kostenlose detaillierte Analyse anfordern"
- Captures email for the detailed report

**Option B: "AI-Sichtbarkeit Checker" (on aiseo.hamburg)**
- User enters their business name + city
- You check if they appear in ChatGPT/Perplexity for their category
- Show results: "Ihre Firma wurde in 0/5 KI-Antworten erwahnt"
- "Wollen Sie von KI empfohlen werden? Kostenloser AI-Check"

This would be highly differentiated -- no German competitor offers this.

### 5.4 Webinars / Live Sessions
**Goal:** Demonstrate expertise, build email list
**Time:** 1 session/month, 2-3 hours prep

- [ ] Monthly live "Website-Sprechstunde" on YouTube/LinkedIn
- [ ] Analyze 3-4 audience-submitted websites live
- [ ] Record and repurpose as YouTube content
- [ ] Registration via email (builds your list)

---

## CONCRETE WEEKLY ACTION PLAN

### Week 1
- [ ] Fix all remaining technical SEO issues (Phase 1.1)
- [ ] Build `/website-analyse` lead capture landing page (Phase 1.2)
- [ ] Optimize Google Business Profile (Phase 1.3)
- [ ] Set up GA4 + GSC + conversion tracking (Phase 1.4)
- [ ] Write and schedule 3 LinkedIn posts

### Week 2
- [ ] Set up Google Ads Campaign 1 (webseite.hamburg keywords)
- [ ] Set up Google Ads Campaign 2 (aiseo.hamburg keywords)
- [ ] Start LinkedIn outreach (10 connections/day)
- [ ] Build first industry landing page (Handwerker)
- [ ] Write email nurture sequence (6 emails)

### Week 3
- [ ] Record first YouTube video (Blitz Hamburg case study)
- [ ] Write new article: "Website erstellen lassen -- Was kostet es wirklich?"
- [ ] Create KinderAlbum case study page
- [ ] Set up Reddit account, start participating
- [ ] Send first batch of cold outreach (10-20 personalized audits)

### Week 4
- [ ] Record second YouTube video (AI SEO explainer)
- [ ] Build second industry landing page (Arzte)
- [ ] Add Google Reviews widget + testimonials to both sites
- [ ] Set up exit-intent popup
- [ ] Add WhatsApp button
- [ ] Cross-link both sites strategically

### Month 2
- [ ] 1 video + 1 article per week
- [ ] Ongoing Google Ads optimization
- [ ] Ongoing LinkedIn outreach (5 conversations/week target)
- [ ] Solovei Beauty case study page
- [ ] Referral program launch
- [ ] Start partnership outreach (Steuerberater, Fotografen)

### Month 3
- [ ] Build the free Website-Score tool or AI-Sichtbarkeit Checker
- [ ] First webinar/live session
- [ ] 2 more industry landing pages
- [ ] Evaluate Google Ads ROI, double down on what works
- [ ] Create Wikidata entity for AISEO Hamburg

---

## EXPECTED RESULTS TIMELINE

| Timeframe | Expected Outcome |
|-----------|-----------------|
| Week 1-2 | First leads from Google Ads + improved GBP visibility |
| Week 2-4 | 3-5 leads/week from Ads + LinkedIn outreach combined |
| Month 2 | First organic traffic increase from new content + industry pages |
| Month 3 | YouTube + Reddit building authority signals, AI citation probability increasing |
| Month 4-6 | 5-10 qualified leads/week from all channels combined |
| Month 6+ | Organic + referral leads should reduce dependency on paid ads |

---

## BUDGET ESTIMATE

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Google Ads | 500-1.000 EUR | Your own campaigns |
| YouTube equipment | 0 EUR | Loom/OBS + existing setup |
| LinkedIn | 0 EUR | Free outreach |
| Email (Resend) | 0-20 EUR | Already in your stack |
| Cal.com / Calendly | 0 EUR | Free tier sufficient |
| Total | 500-1.020 EUR/month | ROI-positive with 1 new client/month |

One new client at your minimum price (2.000 EUR one-time or 1.000 EUR/month) pays for the entire marketing budget multiple times over.

---

## PRIORITY RANKING: IF YOU CAN ONLY DO 5 THINGS

1. **Build the `/website-analyse` lead capture page** -- turns existing traffic into leads
2. **Start Google Ads for your own agency** -- immediate leads while everything else builds
3. **LinkedIn outreach** -- free, personal, high conversion for B2B services
4. **Fix remaining SEO technical issues** -- quick, unlocks rich results
5. **First YouTube video** -- builds the single highest-impact authority signal

Everything else is important but these 5 give you the fastest path to new customers.

---

## COMPETITIVE ADVANTAGES TO LEVERAGE

1. **AI SEO is your moat.** Almost no agency in Hamburg (or Germany) offers real AI SEO with proven results. KinderAlbum ranking #1 in ChatGPT is a story nobody else can tell. Lead with this everywhere.

2. **Two domains = two funnels.** webseite.hamburg captures "Webdesign/SEO Hamburg" searches. aiseo.hamburg captures the emerging "AI SEO" market. Don't merge them -- use each for its strength.

3. **Technical proof.** Your sites score 100/100 on PageSpeed. Most agencies' own sites don't. Show this as proof of competence in every pitch.

4. **Transparent pricing.** You publish prices. Most agencies don't. This filters for serious buyers and builds instant trust.

5. **5.0 Google rating.** 24 reviews at 5.0 is strong for a solo agency. Push to 30+ and this becomes a dominant local signal.

---

*Plan created 2026-03-20. Review and update monthly based on lead data and conversion metrics.*
