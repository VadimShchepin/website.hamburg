Hier sind die recherchierten, datierten Zahlen, Fakten und offiziellen Quellenlinks für deinen Vergleichsartikel:

---

### 1. Marktanteile, CWV-Performance, Preise & Domain-Umzug

#### A. Marktanteile CMS & Baukästen in Deutschland (Stand: 2026)
*   **BuiltWith Deutschland (CMS-Verteilung unter erkannten Systemen, 2026):**
    *   **WordPress:** ~66,4 % Marktanteil (> 1,94 Mio. Live-Websites in DE)
    *   **TYPO3:** ~14,8 % (~130.000 Websites in DE – traditionell stark im DACH-Unternehmensbereich)
    *   **Joomla:** ~5,2 %
    *   **Contao:** ~3,4 %
    *   **Wix:** ~208.000 erfasste Websites in DE
    *   **Jimdo:** ~123.000 erfasste Websites in DE (starker lokaler Baukasten-Player)
    *   *Quelle:* [BuiltWith Trends Germany CMS (2026)](https://trends.builtwith.com/cms/country/Germany) | [BuiltWith Simple Website Builder Germany (2026)](https://trends.builtwith.com/websitelist/Simple-Website-Builder/Germany)
*   **W3Techs (Globaler Vergleichsmaßstab, 2026):**
    *   WordPress: 59,1 % (unter CMS-basierten Seiten) / 40,5 % aller Websites
    *   Shopify: 7,6 %
    *   Wix: 6,1 %
    *   Squarespace: 3,5 %
    *   *Quelle:* [W3Techs CMS Market Share Report (2026)](https://w3techs.com/technologies/overview/content_management)

---

#### B. Core Web Vitals (CWV) Performance nach Plattform (Stand: 2026)
*(Quelle: HTTP Archive & Chrome User Experience Report / CrUX – Anteil der Origins, die alle 3 Core Web Vitals LCP, INP und CLS auf Mobilgeräten mit „Good“ bestehen)*

*   **Wix:** **~70 % – 85 %** (hohe Bestehensquote durch standardisierte CDN-Infrastruktur und serverseitige Optimierungen)
*   **Squarespace:** **~67 % – 78 %**
*   **Shopify:** **~75 % – 88 %**
*   **WordPress:** **~43 % – 56 %** (stark fragmentiert: starker Leistungsabfall durch billiges Shared-Hosting, überladene Page-Builder und Plugin-Ballast; gut optimierte Setups erreichen jedoch >80 %)
*   **Next.js / Individuelle Jamstack-Entwicklungen:** Als Entwickler-Framework nicht als monolithisches CMS erfasst; ermöglicht bei professioneller Umsetzung (Static Site Generation / Server Components, minimales JavaScript-Bundle) Bestehensquoten von **>90 %**.
*   *Quelle:* [HTTP Archive Core Web Vitals Technology Report (2026)](https://httparchive.org/reports/cwv-tech)

---

#### C. Monatliche Preise der Baukästen in Deutschland (Stand: 2026)
*(Reguläre Preise, netto/brutto je nach Anbieter, basierend auf 12-Monats-Abrechnung)*

| Plattform | Einstieg / Basis | Standard / Business | E-Commerce / Advanced | Quelle & Details |
| :--- | :--- | :--- | :--- | :--- |
| **Wix** | **Light:** ~13 € – 17 €/Mo. | **Core:** ~26 € – 30 €/Mo. | **Business:** ~40 € – 46 €/Mo. *(Business Elite: ~177 €)* | [Wix Preise & Pläne (2026)](https://de.wix.com/upgrade/website) |
| **Jimdo** | **Start:** ~11 €/Mo. *(Play: 0 €)* | **Grow:** ~17 € – 18 €/Mo. *(Grow Legal: ~26 €)* | **Unlimited:** ~39 € – 49 €/Mo. | [Jimdo Preisübersicht (2026)](https://www.jimdo.com/de/preise/) |
| **Squarespace** | **Basic:** 12 €/Mo. *(17 € bei mtl. Zahlg.)* | **Core:** 18 €/Mo. *(24 € bei mtl. Zahlg.)* | **Plus:** 32 €/Mo. / **Advanced:** 69 €/Mo. | [Squarespace Tarife (2026)](https://de.squarespace.com/preise) |
| **Shopify** | **Basic:** ~25 €/Mo. *(36 € bei mtl. Zahlg.)* | **Grow (Shopify):** ~66 €/Mo. *(105 € bei mtl. Zahlg.)* | **Advanced:** ~289 €/Mo. *(384 € bei mtl. Zahlg.)* | [Shopify Deutschland Preise (2026)](https://www.shopify.com/de/preise) |

---

#### D. Kosten für Domain-Umzug & Vendor-Lock-in
*   **Kosten AuthCode-Freigabe:** Bei allen Anbietern (Wix, Squarespace, Jimdo) ist die Herausgabe des EPP-/AuthCodes für den Domain-Transfer **kostenlos**.
*   **Transferkosten beim neuen Registrar:** I. d. R. fallen lediglich die normalen Jahresgebühren für die Verlängerung beim neuen Hoster an (ca. **5 € – 15 €/Jahr** für `.de` oder `.com`).
*   **Technischer Lock-in:** Während die Domain transportabel ist, kann das Website-Design/der Programmcode proprietärer Baukästen nicht 1:1 umgezogen werden (siehe Punkt 2).

---

### 2. Offizielle Aussagen der Anbieter zu Datenexport & Portabilität

*   **Wix Help Center („Eine Wix-Website exportieren oder herunterladen“):**
    *   *Offizielle Aussage:* Es ist **nicht möglich**, eine Wix-Website oder deren HTML-/CSS-Code herunterzuladen oder auf einen externen Webhoster zu übertragen.
    *   *Was exportiert werden kann:* Ausschließlich Rohdaten via CSV (z. B. Shop-Produkte, Kontakte, CMS-Datenbank-Sammlungen).
    *   *Quelle:* [Wix Help Center: Request: Exporting or Downloading Your Wix Site (2026)](https://support.wix.com/en/article/request-exporting-or-downloading-your-wix-site)
*   **Squarespace Help Center („Deine Website exportieren“):**
    *   *Offizielle Aussage:* Squarespace erlaubt den Export von Basisinhalten in eine `.xml`-Datei (hauptsächlich kompatibel mit WordPress-Importen).
    *   *Limitationen:* Layout-Stile, benutzerdefinierte CSS-Codes, Video-/Audio-Blöcke, interaktive Elemente und Seitenstrukturen werden **nicht** exportiert und müssen auf dem Zielsystem neu gebaut werden.
    *   *Quelle:* [Squarespace Hilfe-Center: Deine Website exportieren (2026)](https://support.squarespace.com/hc/de/articles/206566687-Deine-Website-exportieren)

---

### 3. Google-offizielle Aussagen: CMS-Wahl vs. Core Web Vitals / Page Experience

*   **CMS-Wahl ist kein Ranking-Faktor:**
    *   Google (u. a. John Mueller, Search Advocate) stellt klar: Google bevorzugt oder benachteiligt kein bestimmtes CMS oder handgeschriebenen Code. Die Suchmaschine bewertet ausschließlich das fertig gerenderte HTML und die Nutzererfahrung im Browser.
    *   *Quelle:* [Search Engine Journal: Google – CMS Choice Is Not A Ranking Factor (2024/2026)](https://www.searchenginejournal.com/google-cms-ranking-factor/)
*   **Page Experience & Core Web Vitals sind Ranking-Signale:**
    *   In den offiziellen Google Search Essentials und Page Experience Docs bestätigt Google, dass die Core Web Vitals (LCP, INP, CLS) Teil der Page Experience-Signale sind, die von den Kern-Rankingsystemen genutzt werden.
    *   *Quellen:* 
        *   [Google Search Central: Page Experience in Search Results (2026)](https://developers.google.com/search/docs/appearance/page-experience)
        *   [Google Search Central: Core Web Vitals Report (2026)](https://developers.google.com/search/docs/appearance/core-web-vitals)
