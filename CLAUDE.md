# website.hamburg — CLAUDE.md

## Project

Production website for webseite.hamburg — Webdesign, SEO & Google Ads agency in Hamburg.

- **Live URL:** https://webseite.hamburg
- **Stack:** Next.js 15 App Router, React, GSAP
- **Fonts:** Goldman (headings), Inter (body)
- **Analytics:** Umami (`data-umami-event` attributes)

## Development

```bash
npm run dev    # localhost:3000
npm run build  # production build
npm run lint
```

## Deployment — CRITICAL

**Never add `Co-Authored-By` trailers to commits.** The Vercel project is on a Hobby plan. Vercel Hobby blocks deployments when a co-author email doesn't match the connected account — it treats it as an unauthorized collaborator.

**Keep the GitHub repo public.** The Vercel project is connected to a different email account (`vadimshchepinit-gmailcoms-projects`) than the GitHub push account (`VadimShchepin` / `vadimshch21@gmail.com`). On Hobby plan, private repos only deploy for the exact owner. Making the repo public removes this restriction. The repo contains no secrets — API keys are in `.env` (gitignored).

**Never run `npx vercel --prod` from this directory.** It creates a duplicate Vercel project under the wrong team (`vadimshchepins-projects`) and causes double-deployment failures.

Deployment flow: push to `main` on GitHub → Vercel auto-deploys via the `vadimshchepinit-gmailcoms-projects` project.

## Project Structure

```
app/                        # Next.js App Router pages
  page.jsx                  # Homepage (imports all section components)
  layout.jsx                # Root layout — fonts, header, footer, cursor, cookie consent
  leistungen/               # Service pages: webdesign, seo, ai-seo, google-ads, website-audit, ...
  referenzen/               # Case study pages: blitz-hamburg, dybeauty, manetec, ...
  wissen/                   # Blog/knowledge articles
  kontakt/                  # Contact page
  api/contact/              # Contact form API route
  sitemap.js                # Auto-generated sitemap
src/
  components/               # All React components
  index.css                 # Global styles + CSS variables
public/
  llms.txt                  # LLM-readable site summary
  llms-full.txt             # Full LLM context
  robots.txt
```

## Key Components

| Component | Notes |
|-----------|-------|
| `Hero.jsx` | `'use client'` — GSAP entrance animation, cursor follow, dynamic availability text |
| `Cta.jsx` | `'use client'` — Final CTA section, dynamic availability text |
| `CursorFollower.jsx` | Custom cursor, hidden on mobile |
| `AnimateOnScroll.jsx` | Scroll-triggered reveal animations |
| `Header.jsx` | Site nav |
| `Footer.jsx` | Site footer |

## Dynamic Availability Text

Both `Hero.jsx` and `Cta.jsx` use a `getAvailability()` function that auto-computes:
- **Next month name** in German (e.g. in May → shows "Juni")
- **Slot count 2–5** — deterministic per calendar month via a fixed array, so it changes monthly and looks natural without a backend

No cron jobs or redeployments needed — runs client-side on every page load.

## Services (leistungen/)

webdesign · seo · ai-seo · google-ads · website-audit · website-erstellen-lassen · webdesign-aerzte · webdesign-handwerker

## Case Studies (referenzen/)

blitz-hamburg · dybeauty · gl-sommer · glucksmomente-events · kinderalbum · manetec · mit-kinder · pest-control-saas · solovei-beauty · typeexplore-ai

## Schema & SEO

- JSON-LD in `app/page.jsx`: `ProfessionalService`, `FAQPage`, `BreadcrumbList`
- Individual service/reference pages have their own schema
- Sitemap at `/sitemap.xml`
- `llms.txt` and `llms-full.txt` for AI crawler context
