import ArticleLayout from '../../components/ArticleLayout';

export default function LangsameWebsitesArticle() {
    return (
        <ArticleLayout
            slug="langsame-websites-kosten-kunden"
            category="WEBDESIGN"
            title="Warum langsame Websites Sie jeden Tag Kunden kosten"
            readTime="6 Min."
            publishDate="2026-02-15"
        >
            <p>
                Ihre Website laedt laenger als drei Sekunden? Dann haben Sie gerade
                einen potenziellen Kunden verloren. Nicht vielleicht. Sicher.
            </p>
            <p>
                <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer">Google-Daten</a> zeigen:
                53 % der mobilen Nutzer verlassen eine Seite, die laenger als drei Sekunden zum Laden braucht.
                Bei fuenf Sekunden steigt die Absprungrate um 90 %. Das ist kein Rundungsfehler. Das ist fast jeder Besucher.
            </p>

            <h2>Wie schnell muss eine Website wirklich laden?</h2>
            <p>
                Google misst Website-Geschwindigkeit ueber die sogenannten{' '}
                <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">Core Web Vitals</a>.
                Drei Metriken entscheiden, ob Ihre Seite als „gut" oder „schlecht" eingestuft wird:
            </p>
            <ul>
                <li>
                    <strong>Largest Contentful Paint (LCP):</strong> Der groesste sichtbare Inhalt
                    muss in unter 2,5 Sekunden geladen sein. Alles darueber ist rot.
                </li>
                <li>
                    <strong>Interaction to Next Paint (INP):</strong> Die Seite muss innerhalb
                    von 200 Millisekunden auf Klicks reagieren. Traege Buttons kosten Vertrauen.
                </li>
                <li>
                    <strong>Cumulative Layout Shift (CLS):</strong> Nichts darf springen oder
                    verrutschen waehrend dem Laden. Wert unter 0,1 ist das Ziel.
                </li>
            </ul>
            <p>
                Wer diese Werte nicht einhaeelt, wird im Google-Ranking nach unten gerueckt.
                Nicht als Strafe — sondern weil Google Seiten bevorzugt, die Nutzer nicht frustrieren.
            </p>

            <h2>Was macht Websites eigentlich langsam?</h2>
            <p>
                Die Ursachen sind fast immer dieselben. Keine Raketenwissenschaft, aber erstaunlich
                verbreitet:
            </p>
            <ul>
                <li>
                    <strong>Unkomprimierte Bilder.</strong> Ein einzelnes Hero-Bild mit 4 MB
                    reicht, um die Ladezeit zu verdoppeln. WebP und ordentliche Komprimierung
                    druecken das auf 100-200 KB — ohne sichtbaren Qualitaetsverlust.
                </li>
                <li>
                    <strong>Zu viele Plugins und Skripte.</strong> WordPress-Seiten mit 30+ Plugins
                    laden oft 20 externe Skripte, bevor der Nutzer irgendetwas sieht.
                    Jedes Skript ist eine zusaetzliche Anfrage, die den Browser ausbremst.
                </li>
                <li>
                    <strong>Billiges Hosting.</strong> Shared Hosting fuer 3 Euro im Monat
                    teilt sich einen Server mit hunderten anderen Seiten. Die Antwortzeit
                    des Servers (Time to First Byte) liegt dann bei 800 ms statt 200 ms.
                </li>
                <li>
                    <strong>Kein Caching.</strong> Ohne Browser-Caching laedt ein wiederkehrender
                    Besucher jedes Mal alles neu. Das ist, als wuerde man bei jedem Besuch
                    die Eingangstuer neu bauen.
                </li>
                <li>
                    <strong>Render-blockierendes CSS und JS.</strong> Wenn der Browser erst
                    alle Stylesheets und Skripte verarbeiten muss, bevor er etwas anzeigt,
                    starrt der Nutzer auf eine weisse Seite.
                </li>
            </ul>

            <h2>Was kostet eine langsame Website konkret?</h2>
            <p>
                Rechnen wir. Angenommen, Ihre Website hat 1.000 Besucher im Monat.
                Bei einer Ladezeit ueber drei Sekunden verlieren Sie 53 % davon sofort —
                bleiben 470. Davon konvertieren vielleicht 2 % zu einer Anfrage: 9 Anfragen.
            </p>
            <p>
                Eine schnelle Seite (unter 2 Sekunden) haelt 85 % der Besucher.
                Bleiben 850. Bei gleicher Conversion-Rate: 17 Anfragen. Fast doppelt so viele.
                Bei einem durchschnittlichen Auftragswert von 2.000 Euro sind das 16.000 Euro
                Unterschied — pro Monat.
            </p>
            <p>
                <a href="https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" target="_blank" rel="noopener noreferrer">Portent-Studien</a> bestaetigen:
                Seiten, die in einer Sekunde laden, haben eine dreimal hoehere Conversion-Rate
                als Seiten mit fuenf Sekunden Ladezeit.
            </p>

            <h2>Warum scoren die meisten Agentur-Websites so schlecht?</h2>
            <p>
                Testen Sie es selbst: Geben Sie die Website Ihres Webdesigners bei{' '}
                <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a>{' '}
                ein. Die Wahrscheinlichkeit ist hoch, dass der Score zwischen 30 und 50 liegt.
            </p>
            <p>
                Warum? Weil viele Agenturen auf schwere Page-Builder wie Elementor oder Divi setzen.
                Diese Tools machen das Bauen einfach, aber den Output schwer. Eine typische
                Elementor-Seite laedt 1-2 MB an CSS und JavaScript, bevor ueberhaupt ein
                Buchstabe sichtbar wird.
            </p>
            <p>
                Das ist kein Vorwurf. Es ist ein Geschaeftsmodell-Problem: Page-Builder sparen
                Entwicklungszeit, kosten aber Performance. Die Rechnung zahlt der Kunde — mit
                weniger Sichtbarkeit und weniger Anfragen.
            </p>

            <h2>Wie pruefe ich meine aktuelle Website-Geschwindigkeit?</h2>
            <p>
                Zwei Tools reichen voellig:
            </p>
            <ul>
                <li>
                    <strong>Google PageSpeed Insights</strong> — misst Core Web Vitals mit echten
                    Nutzerdaten. Score unter 90 bedeutet: da geht was.
                </li>
                <li>
                    <strong>GTmetrix</strong> — zeigt detailliert, welche Dateien wie lange laden
                    und wo die Engpaesse liegen. Besonders nuetzlich fuer die Wasserfall-Analyse.
                </li>
            </ul>
            <p>
                Wichtig: Testen Sie immer mobil. Ueber 60 % der Zugriffe kommen vom Handy.
                Wenn Ihre Seite nur am Desktop schnell ist, bringt das nichts.
            </p>

            <h2>Was bringt eine Performance-Optimierung in der Praxis?</h2>
            <blockquote>
                Bei einem Hamburger Handwerksbetrieb haben wir die Ladezeit von 6 auf 1,2 Sekunden
                reduziert — die Anfragen stiegen um das Dreifache. Der PageSpeed-Score ging von 34
                auf 98. Die Website war dieselbe, nur ohne den ganzen Ballast.
            </blockquote>
            <p>
                Die Massnahmen waren keine Hexerei: Bilder in WebP konvertiert, ungenutztes CSS
                entfernt, kritisches CSS inline geladen, JavaScript auf lazy loading umgestellt,
                Server-Caching aktiviert. Alles zusammen hat zwei Tage gedauert.
            </p>
            <p>
                Der Punkt ist: Performance-Optimierung ist kein Luxus und kein „Nice-to-have".
                Es ist die einfachste Methode, mehr aus dem bestehenden Traffic rauszuholen —
                ohne einen Cent mehr fuer Werbung auszugeben.
            </p>

            <h2>Zusammenfassung: Was Sie jetzt tun sollten</h2>
            <ul>
                <li>Website bei PageSpeed Insights testen. Score notieren.</li>
                <li>Bilder pruefen: Format, Groesse, Komprimierung.</li>
                <li>Hosting hinterfragen: TTFB unter 200 ms?</li>
                <li>Plugins und Skripte zaehlen. Brauchen Sie wirklich alle?</li>
                <li>Core Web Vitals als Messlatte nehmen, nicht das Bauchgefuehl.</li>
            </ul>
            <p>
                Geschwindigkeit ist kein technisches Detail. Es ist der erste Eindruck, den
                Ihre Website macht. Und der entscheidet, ob jemand bleibt oder geht.
            </p>
        </ArticleLayout>
    );
}
