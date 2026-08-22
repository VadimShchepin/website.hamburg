# Organic Growth Strategy — webseite.hamburg

> Goal: rank in Google/AI search and acquire clients organically for a **local Hamburg agency** (Webdesign, SEO, Google Ads).
> Last updated: 2026-06-10

## Context / current state

- **34 pages live, ~10 indexed** (Google Search Console audit, May 2026) — 70% of content invisible.
- 8 service pages (`/leistungen/*`) — recently rewritten for AI/GEO citation. ✅ Strong asset.
- 10 case studies (`/referenzen/*`) with real metrics. ✅ Strongest trust asset.
- 7 blog articles (`/wissen/*`) — informational, not buying-intent.
- Stack: Next.js 15, auto-deploy via Vercel on push to `main`.

The GEO/AI-citation work is done. The organic-**client** engine for a local agency is a different game — that's what this doc covers.

---

## Priority order

### 1. Fix the indexation gap first (free, biggest, fastest)
Nothing else matters until Google indexes the pages. 70% of content is invisible.

- Search Console → **Pages** report → check "Why pages aren't indexed" (likely *Discovered–not indexed* / *Crawled–not indexed* = low authority, not a bug).
- Manually **Request Indexing** for 8 service pages + top case studies.
- Real fix = internal linking + authority (see #3 and #5).

### 2. Google Business Profile — #1 organic channel for a local agency
For "Webdesign Hamburg" / "SEO Agentur Hamburg" the **Map Pack ranks above the blue links**.

- Complete profile; categories "Webdesigner" + "Internetagentur"; service areas; photos of real work.
- **Get reviews** — ask all 10 case-study clients. 10–15 reviews beats most Hamburg solo competitors.
- Highest-intent free traffic that exists for this business.

### 3. Turn case studies into a lead engine
10 case studies with metrics — most agencies don't have this.

- Add an **"Ergebnisse" snippet** to each (e.g. "+X% Anfragen in 3 Monaten").
- **Link each case study from the relevant service page** (Blitz → `/leistungen/webdesign-handwerker`, DYBEAUTY → e-commerce, etc.). This internal linking fixes #1 *and* builds trust.
- Add a **bottom CTA** to each ("Ähnliche Ergebnisse? → Kontakt").

### 4. Blog content that targets buying intent (not just topics)
Current articles are informational. For organic *clients*, target money keywords:

- `Webdesign Agentur Hamburg` / `SEO Agentur Hamburg Kosten` / `Google Ads Agentur Hamburg`
- **Local + industry combos** (already started with Ärzte, Handwerker). Add: Anwälte, Restaurants, Zahnärzte, Steuerberater Hamburg — low-competition, high-conversion local pages.
- **Decision content**: "Was kostet eine Website in Hamburg 2026", "Webdesign-Agentur vs. Freelancer", "Wix vs. eigene Website".

### 5. Backlinks & local citations (the authority problem)
Low domain authority is *why* pages won't index/rank.

- Agency directories: **Clutch, Sortlist, ProvenExpert, 11880, Das Örtliche, Gelbe Seiten**.
- Hamburg-local: Handelskammer Hamburg, local business networks, Branchenbuch Hamburg.
- Best controllable source: **footer credit "Webdesign by webseite.hamburg"** on every client site (with permission) = relevant local backlinks.

### 6. Conversion — don't leak the traffic you get
- Phone + WhatsApp visible on **every** page (German B2B clients call).
- Strong, specific contact CTA (dynamic availability/scarcity text already in place ✅).
- Lead magnet: **"Kostenlose Website-Analyse in 24h"** — anchor to existing `/leistungen/website-audit`.

---

## Do this week (top 3)

1. **Fix indexation** in Search Console + add internal links from service pages → case studies.
2. **Optimize Google Business Profile** + request reviews from past clients.
3. **Publish 2 local-industry pages** (e.g. "Webdesign für Anwälte Hamburg", "SEO für Restaurants Hamburg") using the existing GEO template.

## Highest-impact tasks Claude can do directly in-code
- **#3** case-study ↔ service-page internal linking (fixes indexation + trust at once).
- **#4** scaffold new local-industry pages from the existing GEO template.
- **#6** lead-magnet CTA block / WhatsApp button across pages.
