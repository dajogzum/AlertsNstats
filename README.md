# AlertsNstats

#instalacja
git clone https://github.com/dajogzum/AlertsNstats

#aktualizacja
cd ../modules/alertsnstats
git pull

Link do pokazania powiadomienia:
http://192.168.1.170:8080/remote?action=NOTIFICATION&notification=SHOW_STATS&payload={"id":"amp1","comment":"tekst","type":"alert/warning/info"}

> alert - czerwona pulsująca ikona
> warning - pomarańczowa wolno pulsująca ikona
> info - biała ikona statyczna

Link do ukrywania powiadomienia:
http://192.168.1.170:8080/remote?action=NOTIFICATION&notification=HIDE_STATS&payload={"id":"amp1"}
