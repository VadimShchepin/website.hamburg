#!/bin/zsh
# $1 = absolute output path, $2 = subject description
OUT="$1"; SUBJ="$2"
PROMPT="Erzeuge eine flache, hochwertige Vektor-Illustration als SVG-Datei und schreibe sie nach: $OUT

MOTIV (Deutsch, Zielgruppe deutsche Unternehmer): $SUBJ

HARTE VORGABEN:
- Ein einziges <svg> Element, viewBox=\"0 0 1600 900\", KEINE width/height Attribute am Wurzelelement, role=\"img\" mit <title id=\"title\"> und <desc id=\"desc\"> auf Deutsch und aria-labelledby=\"title desc\".
- Markenfarben ausschliesslich: #0A192F (Navy, Hauptlinien), #172A45 (Navy hell), #E53935 (Rot, nur Akzente, max 15% der Flaeche), #FFFFFF, #F5F7FA, #E9EEF3 (Flaechen), #666666 (Sekundaertext). Keine anderen Farben, keine Gradienten, keine Filter, keine Schatten.
- Stil: flache geometrische Linien-Illustration, Linienstaerke 4-7, stroke-linejoin=round, stroke-linecap=round, sauber, redaktionell, wie eine Wirtschaftszeitungs-Infografik. Kein Clipart-Look, keine Emojis.
- TEXT: maximal 8 kurze Labels, jedes maximal 22 Zeichen, font-family=\"Inter, Helvetica, Arial, sans-serif\", font-size mindestens 22, korrekte deutsche Umlaute als UTF-8 Zeichen. Text NIE ueber Linien oder anderen Text legen: jedes Label braucht mindestens 14px Freiraum. Rechne die Textbreite grob mit 0,55 * font-size * Zeichenanzahl und pruefe, dass es in seinen Bereich passt.
- Alle Elemente vollstaendig innerhalb der viewBox mit mindestens 40px Rand.
- Kein <image>, kein <foreignObject>, keine externen Schriften, keine Kommentare mit Emojis.
- Dateigroesse unter 12 KB.

Arbeitsweise: erst Layout planen (Raster, Zonen, Label-Positionen), dann die Datei schreiben, dann selbst pruefen: valides XML, keine Overlaps, keine Farbe ausserhalb der Palette. Korrigiere bei Bedarf und schreibe die Datei erneut. Antworte am Ende nur mit OK und einem Satz Beschreibung."
~/.local/bin/codex exec --dangerously-bypass-approvals-and-sandbox "$PROMPT" > "/tmp/svgen-$(basename $OUT).log" 2>&1
