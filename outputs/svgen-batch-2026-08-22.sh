#!/bin/zsh
# Hero-Illustrationen fuer den Artikel-Batch vom 22.08.2026.
# Nutzt outputs/svgen-hero.sh (codex exec) und schreibt direkt nach public/wissen/.
cd /Users/vadim/projects/website.hamburg || exit 1
S=outputs/svgen-hero.sh
P=/Users/vadim/projects/website.hamburg/public/wissen

$S "$P/hero-bfsg-pflicht.svg" "Ein grosses Browser-Fenster, in dessen Mitte das Barrierefreiheits-Symbol steht: eine Person mit ausgestreckten Armen in einem Kreis. Rechts daneben, kleiner, ein rundes Amtssiegel mit einem Paragraphenzeichen darin. Das Siegel ist das einzige rote Element. Ein Label: BFSG" &
$S "$P/hero-barrierefrei-machen.svg" "Ein Browser-Fenster, das gerade geprueft wird. Darin drei grosse, klar getrennte Prueffelder untereinander: ein Kreis halb dunkel halb hell fuer Kontrast, ein Eingabefeld mit einer Beschriftung darueber, ein Rechteck mit dicker Fokus-Umrandung. Rechts davor eine grosse Lupe. Ein rotes Haekchen an einem der Felder. Ein Label: WCAG 2.2" &
$S "$P/hero-impressum-pflicht.svg" "Zwei leicht versetzt gestapelte Dokumentseiten mit angedeuteten Textzeilen. Auf der vorderen Seite oben ein grosses Paragraphenzeichen. Darueber, halb ueberlappend, ein runder Stempel. Der Stempelrand ist das einzige rote Element. Ein Label: Pflichtangaben" &
$S "$P/hero-abmahnung.svg" "Ein grosser geoeffneter Briefumschlag im Zentrum, aus dem ein gefaltetes Schreiben mit Paragraphenzeichen herausragt. Rechts kleiner ein Browser-Fenster, aus dem ein Pfeil zu einer Wolke laeuft. Der Briefumschlag hat einen roten Rand als Blickfang. Ein Label: Abmahnung" &
wait

$S "$P/hero-wordpress-alternativen.svg" "Links ein grosser Block aus vielen gleichen kleinen Quadraten, wie eine Mauer, als Symbol fuer das eine grosse System. Rechts davon drei deutlich unterschiedlich geformte einzelne Bausteine in einer vertikalen Reihe als Alternativen, der mittlere davon rot. Ein Label: CMS" &
$S "$P/hero-webflow-wordpress.svg" "Eine grosse Balkenwaage im Zentrum. In der linken Schale ein Baukasten-Symbol aus drei gestapelten Quadraten, in der rechten Schale ein Zahnrad mit spitzen Code-Klammern daneben. Der Waagebalken neigt sich leicht nach rechts. Der Zeiger der Waage ist rot. Kein Label ausser den zwei Woertern Baukasten und Code" &
$S "$P/hero-google-ads-kosten.svg" "Ein grosser Auktionshammer, der von rechts oben auf ein breites Suchfeld zeigt. Unter dem Suchfeld drei Muenzstapel in aufsteigender Hoehe. Der hoechste Muenzstapel ist rot. Ein Label: Klickpreis" &
$S "$P/hero-wordpress-sicherheit.svg" "Ein grosses Schutzschild mit einem Schloss in der Mitte, dahinter halb verdeckt ein Browser-Fenster. Rechts drei uebereinander liegende Plugin-Bausteine, der unterste hat einen deutlichen Riss und ist rot. Ein Label: Plugins" &
wait

$S "$P/hero-website-umzug.svg" "Zwei grosse Server-Schraenke mit angedeuteten Einschueben, links und rechts im Bild. Dazwischen ein breiter, geschwungener Pfeil von links nach rechts. Am Pfeil haengt ein rechteckiges Schild mit der Aufschrift 301. Das Schild ist rot. Ein weiteres Label: Umzug" &
$S "$P/hero-onlineshop-kosten.svg" "Ein grosser Einkaufswagen aus klaren geometrischen Formen im Zentrum, dahinter halb verdeckt ein Browser-Fenster. Am Wagen haengt ein grosses rechteckiges Preisschild mit Loch und Schnur. Das Preisschild ist rot. Ein Label: Onlineshop" &
wait
echo BATCH-DONE
