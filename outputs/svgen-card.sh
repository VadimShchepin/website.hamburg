#!/bin/zsh
# $1 = absolute output path, $2 = motif description (German)
# Kartenbild fuer die /wissen-Uebersicht: dunkler Navy-Hintergrund, feine Linien,
# ein roter Akzent, KEIN Text. Format 1520x988 (entspricht 760x494 der Karte).
OUT="$1"; SUBJ="$2"
PROMPT="Erzeuge ein Kartenbild als SVG-Datei und schreibe es nach: $OUT

MOTIV (Deutsch): $SUBJ

ZWECK: Dieses Bild ist das Vorschaubild einer Artikelkarte in einer Uebersicht. Es wird auf 760x494 Pixel skaliert und beschnitten (object-fit cover). Es muss auch klein wirken: wenige grosse Formen, ruhige Komposition, klare Silhouette.

HARTE VORGABEN:
- Ein einziges <svg> Element, viewBox=\"0 0 1520 988\", KEINE width/height am Wurzelelement, role=\"img\", <title id=\"title\"> und <desc id=\"desc\"> auf Deutsch, aria-labelledby=\"title desc\".
- ERSTES Element ist ein Rechteck ueber die gesamte Flaeche in #0A192F als Hintergrund. Das Bild ist also durchgehend dunkel.
- Palette ausschliesslich: #0A192F (Hintergrund), #172A45 (dunkle Fuellungen), #8892B0 (helle Fuellung, sparsam), #CBD5E1 (feine Linien), #FFFFFF (nur wenige Glanzlinien), #E53935 (Rot, genau EIN Element, maximal 8 Prozent der Flaeche). Keine Gradienten, keine Filter, keine Schatten.
- Stil: feine Linien-Illustration mit duennen Konturen (Linienstaerke 3 bis 5), leicht isometrisch versetzte, abgerundete Rechtecke und einfache geometrische Objekte, viel dunkler Freiraum. Wie eine hochwertige redaktionelle Vektor-Illustration auf dunklem Grund.
- KEIN TEXT. Keine Buchstaben, keine Zahlen, keine Labels, keine Ziffern. Formen muessen ohne Beschriftung verstaendlich sein.
- Wichtige Formen liegen in der mittleren Bildhaelfte, weil oben und unten beschnitten werden kann. Mindestens 60 px Rand.
- Kein <image>, kein <foreignObject>, keine externen Schriften.
- Unter 10 KB.

Arbeitsweise: erst Komposition planen (Zentrum, roter Akzent, Blickfuehrung), dann Datei schreiben, dann selbst pruefen (valides XML, Palette, kein Text, Hintergrundrechteck vorhanden, Groesse). Bei Bedarf korrigieren und neu schreiben. Antworte am Ende nur mit OK plus einem Satz."
~/.local/bin/codex exec --dangerously-bypass-approvals-and-sandbox "$PROMPT" > "/tmp/card-$(basename $OUT).log" 2>&1
