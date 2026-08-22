#!/bin/zsh
# $1 = absolute output path, $2 = motif description (German)
OUT="$1"; SUBJ="$2"
PROMPT="Erzeuge eine plakative Hero-Illustration als SVG-Datei und schreibe sie nach: $OUT

MOTIV (Deutsch, Zielgruppe deutsche Unternehmer): $SUBJ

ZWECK: Diese Grafik steht rechts neben der Ueberschrift im Seitenkopf und ist der Blickfang der Seite. Sie muss auch klein (350 px Breite auf dem Handy) sofort lesbar sein. Also: wenige, grosse Formen, ein klares Zentrum, viel Ruhe. Keine Infografik, kein Diagramm, keine Erklaerung.

HARTE VORGABEN:
- Ein einziges <svg> Element, viewBox=\"0 0 1200 900\", KEINE width/height am Wurzelelement, role=\"img\", <title id=\"title\"> und <desc id=\"desc\"> auf Deutsch, aria-labelledby=\"title desc\".
- KEIN vollflaechiger Hintergrund-Rechteck ueber die ganze Flaeche. Die Grafik steht auf hellgrauem Seitenhintergrund (#F5F7FA), also duerfen Flaechen weiss (#FFFFFF) oder #E9EEF3 sein, aber der Rand bleibt transparent.
- Markenfarben ausschliesslich: #0A192F (Navy, Hauptlinien und Flaechen), #172A45 (Navy hell), #E53935 (Rot, genau EIN Blickfang-Element), #FFFFFF, #F5F7FA, #E9EEF3, #666666. Keine anderen Farben, keine Gradienten, keine Filter, keine Schatten, keine Transparenz-Tricks.
- Stil: moderne flache Vektor-Illustration mit klaren geometrischen Formen, Linienstaerke 6-10 (dicker als bei Diagrammen), stroke-linejoin=round, stroke-linecap=round. Ein Motiv im Zentrum, 2 bis 4 unterstuetzende Elemente. Grosszuegige Groessenverhaeltnisse, das Hauptobjekt fuellt mindestens 45 Prozent der Hoehe.
- TEXT: maximal 3 kurze Labels, jedes maximal 16 Zeichen, font-family=\"Inter, Helvetica, Arial, sans-serif\", font-size mindestens 30, font-weight 600. Deutsche Umlaute als echte UTF-8-Zeichen (ae/oe/ue/ss NIE als Ersatzschreibung: schreibe Erstgespräch, Öffnungszeiten, Anwälte, groß). Text nie ueber Linien oder anderem Text, mindestens 20 px Freiraum. Textbreite grob mit 0,58 * font-size * Zeichenzahl abschaetzen und pruefen, ob sie in ihre Zone passt.
- Alles vollstaendig innerhalb der viewBox mit mindestens 40 px Rand.
- Kein <image>, kein <foreignObject>, keine externen Schriften.
- Unter 10 KB.

Arbeitsweise: erst Komposition planen (Zentrum, Blickfuehrung, wo das rote Element sitzt), dann Datei schreiben, dann selbst pruefen (valides XML, Palette, Umlaute, keine Ueberlappung, Groesse). Bei Bedarf korrigieren und neu schreiben. Antworte am Ende nur mit OK plus einem Satz."
~/.local/bin/codex exec --dangerously-bypass-approvals-and-sandbox "$PROMPT" > "/tmp/hero-$(basename $OUT).log" 2>&1
