#!/bin/zsh
# Kartenbilder fuer die 10 neuen Artikel vom 22.08.2026.
cd /Users/vadim/projects/website.hamburg || exit 1
S=outputs/svgen-card.sh
P=/Users/vadim/projects/website.hamburg/public/wissen/cards

$S "$P/barrierefreie-website-pflicht.svg" "Ein grosses Browser-Fenster in leicht isometrischer Ansicht, in dessen Mitte das Barrierefreiheits-Symbol steht: eine Person mit ausgestreckten Armen in einem Kreis. Rechts unten davor ein rundes Amtssiegel mit gezacktem Rand. Das Siegel ist rot. Links im Hintergrund zwei weitere angedeutete Fensterrahmen." &
$S "$P/website-barrierefrei-machen.svg" "Ein grosses Browser-Fenster in leicht isometrischer Ansicht mit drei uebereinander liegenden Pruefzeilen darin: ein Kreis, der zur Haelfte gefuellt ist, ein Eingabefeld mit einem kleinen Strich darueber als Beschriftung, ein Rechteck mit deutlich dickerer Umrandung. Rechts davor eine grosse Lupe. Der dicke Umrandungsrahmen ist rot." &
$S "$P/impressum-datenschutzerklaerung-pflicht.svg" "Zwei leicht versetzt uebereinander liegende Dokumentseiten in isometrischer Ansicht, mit angedeuteten Textzeilen als feine waagerechte Striche. Ueber der vorderen Seite, halb ueberlappend, ein runder Stempel mit gezacktem Rand. Der Stempel ist rot. Im Hintergrund eine dritte, nur angedeutete Seite." &
$S "$P/website-abmahnung-vermeiden.svg" "Ein grosser geoeffneter Briefumschlag in isometrischer Ansicht in der Bildmitte, aus dem ein gefaltetes Schreiben herausragt. Links dahinter ein Browser-Fenster, von dem eine gestrichelte Linie zu einer einfachen Wolkenform rechts oben laeuft. Die Innenklappe des Briefumschlags ist rot." &
wait

$S "$P/wordpress-alternativen.svg" "Links ein grosser Block aus vielen gleichen kleinen Quadraten in isometrischer Ansicht, wie eine Mauer. Rechts davon drei deutlich unterschiedlich geformte einzelne Bausteine, senkrecht angeordnet, mit feinen Verbindungslinien zur Mauer. Der mittlere der drei Bausteine ist rot gefuellt." &
$S "$P/webflow-oder-wordpress.svg" "Eine grosse Balkenwaage in der Bildmitte. In der linken Schale drei gestapelte abgerundete Quadrate, in der rechten Schale ein Zahnrad. Der Balken neigt sich leicht nach rechts. Die Saeule und der Zeiger der Waage sind fein gezeichnet, der Zeiger ist rot." &
$S "$P/google-ads-kosten.svg" "Ein grosser Auktionshammer, der schraeg von rechts oben auf ein breites abgerundetes Suchfeld zeigt. Unter dem Suchfeld drei Muenzstapel in aufsteigender Hoehe, isometrisch dargestellt. Der hoechste Muenzstapel ist rot." &
$S "$P/wordpress-sicherheit-wartung.svg" "Ein grosses Schutzschild in der Bildmitte mit einem einfachen Schloss darin, dahinter halb verdeckt ein Browser-Fenster. Rechts drei uebereinander liegende flache Bausteine in isometrischer Ansicht, der unterste hat einen deutlichen Riss und ist rot." &
wait

$S "$P/website-umzug-hosting-deutschland.svg" "Zwei grosse Serverschraenke in isometrischer Ansicht, links und rechts im Bild, mit angedeuteten waagerechten Einschueben. Dazwischen ein breiter geschwungener Pfeil von links nach rechts. An dem Pfeil haengt ein kleines rechteckiges Schild ohne Text. Das Schild ist rot." &
$S "$P/onlineshop-kosten.svg" "Ein grosser Einkaufswagen aus klaren geometrischen Formen in leicht isometrischer Ansicht, dahinter halb verdeckt ein Browser-Fenster. Am Wagengriff haengt ein grosses rechteckiges Preisschild mit einem Loch und einer feinen Schnur. Das Preisschild ist rot." &
wait
echo CARDS-DONE
