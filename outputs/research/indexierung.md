Hier ist die strukturierte Recherche für deinen Fachartikel **„Meine Website wird nicht bei Google gefunden – was tun?“** mit offiziellen Google-Quellen, Studien und einer technischen Checkliste.

---

# Teil 1: Offizielle Google-Dokumentation & Google-Statements

### 1.1 Search Console Seitenindexierungsbericht & Statusmeldungen
* **Offizielle Dokumentation:** [Google Search Console-Hilfe: Seitenindexierungsbericht](https://support.google.com/webmasters/answer/7440203)
* **Gefunden – zurzeit nicht indexiert (*Discovered – currently not indexed*):**
  * **Offizielle Definition von Google:** *„Die Seite wurde von Google gefunden, aber noch nicht gecrawlt. Das liegt in der Regel daran, dass Google versucht hat, eine Überlastung der Website zu vermeiden, und das Crawlen daher verschoben wurde. Aus diesem Grund ist das Datum des letzten Crawlings im Bericht leer.“*
  * **Bedeutung:** Google kennt die URL (z. B. über Sitemaps oder interne Links), hat sie aber in die Warteschlange gestellt und priorisiert sie aktuell nicht fürs Crawling.
* **Gecrawlt – zurzeit nicht indexiert (*Crawled – currently not indexed*):**
  * **Offizielle Definition von Google:** *„Die Seite wurde von Google gecrawlt, aber nicht indexiert. Sie kann in Zukunft indexiert werden oder auch nicht; es ist nicht erforderlich, diese URL zur Indexierung neu einzureichen.“*
  * **Bedeutung:** Der Googlebot war auf der Seite und hat die Inhalte gelesen, hat sich aber **aktiv dagegen entschieden**, die URL in den Index aufzunehmen.

---

### 1.2 Qualität vs. Crawl-Budget (John Mueller & Search Off the Record)
* **Qualität als Hauptursache für Nicht-Indexierung:**
  * John Mueller (Google Search Advocate) und das Search-Relations-Team betonen regelmäßig (u. a. im [Podcast Search Off the Record – Episode 13](https://search-off-the-record.libsyn.com/crawling-indexing-and-all-the-stuff-in-between) und in den *Google Search Central Office Hours*), dass der Status **„Gecrawlt – zurzeit nicht indexiert“ primär ein Qualitäts- und Relevanzsignal** ist.
  * Wenn Google eine Seite crawlt und verwirft, liegt das meist daran, dass der Inhalt als minderwertig, redundant (*Thin Content* / *Commodity Content*) oder nicht einzigartig genug eingestuft wird.
  * Eine hohe Anzahl nicht-indexierter Seiten ist oft ein Symptom für ein **site-weites Qualitätsproblem**, nicht für einen technischen Fehler einzelner URLs.
* **Quellen & weiterführende Einordnung:**
  * [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
  * [Google Search Off the Record Podcast](https://search-off-the-record.libsyn.com/)

---

### 1.3 Google Doku zur Crawl-Budget-Verwaltung: Ab welcher Seitenzahl relevant?
* **Offizielle Dokumentation:** [Google Search Central: Crawl-Budget-Verwaltung für große Websites](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget)
* **Relevanz-Schwellenwerte laut Google:**
  * Für kleine und mittelgroße Standard-Websites ist das Crawl-Budget **irrelevant**.
  * Crawl-Budget-Optimierung ist laut Google erst erforderlich für:
    1. **Große Websites mit > 1.000.000 eindeutigen URLs**, deren Inhalt sich moderat ändert (z. B. wöchentlich).
    2. **Mittelgroße/große Websites mit > 10.000 eindeutigen URLs**, deren Inhalte sich **sehr schnell / täglich ändern** (z. B. News-Portale, Marktplätze mit hohem Umschlag).
  * **Definition:** Das Crawl-Budget setzt sich zusammen aus dem *Crawl Capacity Limit* (Serverkapazität/Überlastungsschutz) und dem *Crawl Demand* (Interesse von Google an den Inhalten basierend auf Popularität und Frische).

---

### 1.4 robots.txt vs. noindex: Der fundamentale Unterschied
* **robots.txt-Dokumentation:** [Google Search Central: Einführung in robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
  * **Wichtig:** Eine `robots.txt` steuert das **Crawling**, verhindert aber **nicht** zwingend die **Indexierung**. Wenn eine durch `robots.txt` gesperrte URL von externen Seiten verlinkt wird, kann Google sie dennoch als URL-Snippet ohne Inhaltsvorschau indexieren (*„Indexiert, obwohl durch robots.txt blockiert“*).
* **noindex-Dokumentation:** [Google Search Central: Indexierung mit noindex blockieren](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
  * Wird über `<meta name="robots" content="noindex">` oder den HTTP-Header `X-Robots-Tag: noindex` gesteuert.
  * **Kritischer Stolperstein:** Damit Google das `noindex` überhaupt erkennen kann, **darf die Seite nicht in der robots.txt blockiert sein**. Ist sie in der robots.txt blockiert, kann Googlebot die Seite nicht abrufen und sieht das `noindex`-Tag nicht.

---

### 1.5 XML-Sitemaps
* **Offizielle Dokumentation:** [Google Search Central: Sitemaps-Übersicht](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
* **Wichtigste Fakten:**
  * Eine XML-Sitemap ist eine **Empfehlung/Entdeckungshilfe** (*Discovery Hint*), **keine Garantie** für Crawling oder Indexierung.
  * In Sitemaps gehören ausschließlich kanonische URLs mit dem HTTP-Statuscode `200 OK` (keine Weiterleitungen, keine 404s, keine `noindex`-URLs).

---

### 1.6 Grundsatz: Indexierung ist niemals garantiert
* **Offizielle Dokumentation:** [Google Search Central: Wie die Google-Suche funktioniert](https://developers.google.com/search/docs/fundamentals/how-search-works)
* **Offizielles Zitat von Google:**
  > *„Google does not crawl all the pages on the web, and we don't index all the pages we crawl. It's perfectly normal for not all the pages on a site to be indexed.“*  
  *(„Google crawlt nicht alle Seiten im Web und wir indexieren nicht alle Seiten, die wir crawlen. Es ist völlig normal, dass nicht alle Seiten einer Website indexiert werden.“)*
* Dies wird auch im [URL-Prüftool-Leitfaden](https://support.google.com/webmasters/answer/9012289) explizit festgehalten: Das Einreichen einer URL erzwingt keine Indexierung.

---

# Teil 2: Belastbare Studien & Daten zur Nicht-Indexierung

1. **Onely Technical SEO Studie (Tomasz Rudzki / Bartosz Góralewicz):**
   * **Quelle:** [Onely: Ultimate Guide to Indexing SEO](https://www.onely.com/
Hier ist die Fortsetzung und vollständige Übersicht der Recherche:

---

# Teil 2: Belastbare Studien & Daten zur Nicht-Indexierung

1. **Onely-Studie zur Indexierung (Tomasz Rudzki / Bartosz Góralewicz):**
   * **Quelle:** [Onely: Ultimate Guide to Indexing SEO & Research](https://www.onely.com/blog/ultimate-guide-to-indexing-seo/)
   * **Kernergebnisse:**
     * Google indexiert durchschnittlich **16 % der wertvollen Seiten (*valuable pages*)** auf großen, etablierten Websites **nicht**.
     * Bei einzelnen Großportalen lag die Quote nicht indexierter Produkt- oder Detailseiten bei bis zu 45 % (z. B. Walmart).
     * **JavaScript-Rendering-Verzögerung:** Das Rendern von JavaScript-lastigen Seiten kann bei Google bis zu **9-mal länger** dauern als bei reinem HTML, was zu Verzögerungen und Abbrüchen im Indexierungsprozess führt.

2. **Ahrefs-Studie zur Sichtbarkeit & Indexierung:**
   * **Quelle:** [Ahrefs: 90.63% of Content Gets No Traffic from Google (Search Traffic Study)](https://ahrefs.com/blog/search-traffic-study/) & [Ahrefs: How to Fix 'Discovered – currently not indexed'](https://ahrefs.com/blog/how-to-fix-discovered-currently-not-indexed/)
   * **Kernergebnisse:**
     * **96,55 %** aller von Ahrefs erfassten Webseiten erhalten **keinerlei organischen Traffic** von Google.
     * Google filtert massiv vor: Seiten ohne Unique Value, ohne Backlinks oder mit unzureichender interner Verlinkung werden entweder gar nicht gecrawlt (*Discovered*) oder nach dem Crawl verworfen (*Crawled – not indexed*).

3. **Botify Enterprise Web Crawl Ratio Studies:**
   * **Quelle:** [Botify: How Much Does Google Crawl Your Website?](https://www.botify.com/blog/how-much-does-google-crawl-your-website)
   * **Kernergebnisse:**
     * Bei großen Enterprise-Websites kennt bzw. crawlt Google oft **bis zu 50 % der URLs innerhalb eines 30-Tage-Fensters nicht** (*Crawl Ratio Gap*).
     * Tiefe Klickpfade (> 4 Klicks von der Startseite) und langsame Server-Antwortzeiten senken die Crawl- und Indexierungsrate drastisch.

---

# Teil 3: Häufigste technische Ursachen als Checkliste

### 1. HTTP-Header & Meta-Tags
- [ ] **Versehentliches `noindex`:** Steht im HTML `<meta name="robots" content="noindex">` (häufiger Staging-/Relaunch-Fehler nach CMS-Umzügen)?
- [ ] **HTTP-Response Header:** Sendet der Webserver im Header ein `X-Robots-Tag: noindex`?  
  *(Doku: [Google: Block Indexing](https://developers.google.com/search/docs/crawling-indexing/block-indexing))*
- [ ] **Falscher HTTP-Statuscode:** Liefert die Seite versehentlich `404`, `410`, `403` oder `500` statt `200 OK`?
- [ ] **Weiterleitungsschleifen (*Redirect Chains*):** Werden mehr als 3–5 Hops durchlaufen oder bricht der Redirect ab?  
  *(Doku: [Google: Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects))*

### 2. Crawl-Blockaden & Canonical-Konflikte
- [ ] **robots.txt-Sperre:** Verhindert ein `Disallow:` in der `robots.txt` den Zugriff auf die Seite oder auf notwendige CSS/JS-Ressourcen?  
  *(Doku: [Google: robots.txt Robots Intro](https://developers.google.com/search/docs/crawling-indexing/robots/intro))*
- [ ] **Fehlerhaftes Canonical-Tag:**
  * Zeigt das `<link rel="canonical" href="...">` auf eine andere URL oder eine HTTP- statt HTTPS-Version?
  * Zeigt das Canonical-Tag auf eine 404-Seite oder eine URL mit `noindex`?  
  *(Doku: [Google: Consolidate Duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls))*
- [ ] **robots.txt + noindex Konflikt:** Ist eine Seite mit `noindex` versehen, aber gleichzeitig in der `robots.txt` gesperrt? (Google kann das `noindex` dann nicht lesen!).

### 3. Technische Infrastruktur & Rendering
- [ ] **JavaScript / Client-Side Rendering (CSR):**
  * Werden Hauptinhalte oder interne Links erst über Client-Side-JS geladen und fehlen im initialen HTML?
  * Werden essenzielle API-Endpoints durch robots.txt blockiert?  
  *(Doku: [Google: JavaScript SEO Basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics))*
- [ ] **Host-Load & Server-Timeouts:** Antwortet der Server zu langsam (> 2–3 Sekunden) oder wirft er `503 Service Unavailable` bei Googlebot-Anfragen ab?  
  *(Doku: [Google: Crawl Budget Management](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget))*
- [ ] **Passwortschutz / IP-Whitelisting:** Blockieren Firewalls (z. B. Cloudflare WAF, ModSecurity) versehentlich den Googlebot-User-Agent oder die Google-IP-Ranges?  
  *(Doku: [Google: Verifying Googlebot](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot))*

### 4. Informationsarchitektur & Orphan Pages
- [ ] **Fehlende interne Verlinkung (*Orphan Pages*):** Gibt es interne Links zur URL, oder ist die Seite nur in der XML-Sitemap vorhanden?
- [ ] **Klicktiefe (*Crawl Depth*):** Ist die Seite mehr als 3–4 Klicks von der Startseite entfernt?
- [ ] **XML-Sitemap-Qualität:** Ist die Sitemap in der Search Console eingereicht, und enthält sie ausschließlich kanonische `200 OK`-URLs?  
  *(Doku: [Google: Sitemaps Overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview))*

### 5. Qualität & Duplikate
- [ ] **Near-Duplicate Content:** Gibt es hunderte ähnlicher Seiten (z. B. durch URL-Parameter, Filter, Facettennavigation ohne Canonical-Strategie)?
- [ ] **Soft 404-Fehler:** Gibt die Seite eine leere Fehler-/Produkt-nicht-verfügbar-Meldung zurück, aber mit HTTP-Status `200`?  
  *(Doku: [Google: Soft 404 Errors](https://developers.google.com/search/docs/crawling-indexing/soft-404-errors))*
