# -*- coding: utf-8 -*-
"""Haengt heroImage/heroAlt an einen ArticleLayout-Aufruf und entfernt optional die
doppelte In-Text-Figure, wenn dasselbe Bild jetzt im Seitenkopf steht."""
import re
import sys

CONFIG = [
    # (Pfad, Bild, Alt, framed, dupliziertes Bild im Text entfernen)
    ('app/wissen/website-nicht-bei-google-gefunden/page.jsx', '/wissen/hero-indexierung.svg',
     'Illustration: Dokument mit Textzeilen unter einer Lupe, daneben ein rotes Fragezeichen als Zeichen für eine nicht indexierte Seite', False, False),
    ('app/wissen/google-business-profile-optimieren/page.jsx', '/wissen/hero-gbp.svg',
     'Illustration: großer roter Standort-Pin mit Ladengeschäft-Symbol über einer Reihe von fünf Sternen', False, False),
    ('app/wissen/seo-kosten-hamburg/page.jsx', '/wissen/hero-seo-kosten.svg',
     'Illustration: Münzstapel, aus dem eine rote Kurve nach oben steigt, daneben eine Lupe', False, False),
    ('app/wissen/webdesign-agentur-oder-freelancer/page.jsx', '/wissen/hero-agentur-freelancer.svg',
     'Illustration: Wegweiser mit drei Schildern für Baukasten, Freelancer und Agentur, das mittlere rot hervorgehoben', False, False),
    ('app/wissen/website-baukasten-oder-eigene-website/page.jsx', '/wissen/hero-baukasten.svg',
     'Illustration: gestapelte Bausteine, die eine Website bilden, ein Baustein rot, daneben ein Vorhängeschloss', False, False),
    ('app/wissen/webdesign-kosten/page.jsx', '/wissen/hero-webdesign-kosten.svg',
     'Illustration: Preisschild mit rotem Eurozeichen vor einem Browserfenster', False, False),
    ('app/wissen/website-relaunch-checkliste/page.jsx', '/wissen/hero-relaunch.svg',
     'Illustration: altes und neues Browserfenster, dazwischen ein roter Rundpfeil, darunter eine Checkliste', False, False),
    ('app/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen/page.jsx', '/wissen/hero-ai-seo.svg',
     'Illustration: Sprechblase mit Antworttext und rotem Quellenverweis auf eine Website', False, False),
    # Bestehende Artikel: erste In-Text-Figure wandert in den Seitenkopf
    ('app/wissen/warum-langsame-websites-kunden-kosten/page.jsx', '/wissen/speed-hero.svg',
     'Illustration: Tachometer und Stoppuhr als Sinnbild für die Ladezeit einer Website', False, True),
    ('app/wissen/lokales-seo-hamburg-guide/page.jsx', '/wissen/localseo-hero.svg',
     'Illustration: Stadtplan mit Standort-Pins und ein Smartphone mit lokaler Suche', False, True),
    ('app/wissen/google-ads-fehler-lokale-unternehmen/page.jsx', '/wissen/googleads-hero.svg',
     'Illustration: Google-Suchergebnisseite mit zwei Anzeigenplätzen, ein Mauszeiger klickt die obere Anzeige', False, True),
    ('app/wissen/website-conversion-optimierung/page.jsx', '/wissen/conversion-hero.svg',
     'Illustration: Besucherstrom, der über einen Trichter zu Anfragen wird', False, True),
    ('app/wissen/case-study-fotogalerie-performance/page.jsx', '/wissen/hero-galerie-performance.webp',
     'Fotogalerie-Plattform mit vielen Bildvorschauen als Sinnbild für die Performance-Case-Study', True, True),
    ('app/wissen/dsgvo-fotoplattform-sicherheit-performance/page.jsx', '/wissen/hero-dsgvo-fotoplattform.webp',
     'DSGVO-konforme Fotoplattform für Schulen als Sinnbild für Sicherheitsarchitektur', True, True),
]


def add_hero(path, img, alt, framed, drop_dup):
    src = open(path, encoding='utf-8').read()
    if 'heroImage=' in src:
        print('skip (hero vorhanden):', path)
        return
    m = re.search(r'(\n(\s*)publishDate="[^"]*"\n)(\s*)>', src)
    if not m:
        print('MISS ArticleLayout:', path)
        return
    indent = m.group(2)
    extra = f'{indent}heroImage="{img}"\n{indent}heroAlt="{alt}"\n'
    if framed:
        extra += f'{indent}heroFramed\n'
    src = src[:m.end(1)] + extra + src[m.end(1):]

    if drop_dup:
        # erste <figure>, die dieses Bild zeigt, entfernen
        pat = re.compile(r'\n\s*<figure className="article-figure">.*?</figure>\n', re.S)
        for fm in pat.finditer(src):
            if img in fm.group(0):
                src = src[:fm.start()] + '\n' + src[fm.end():]
                break
        else:
            print('  (keine doppelte Figure gefunden)', path)

    open(path, 'w', encoding='utf-8').write(src)
    print('hero gesetzt:', path)


if __name__ == '__main__':
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for path, img, alt, framed, drop in CONFIG:
        if only and only not in path:
            continue
        add_hero(path, img, alt, framed, drop)
