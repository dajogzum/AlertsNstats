# AlertsNstats

### Instalacja<br>
```
git clone https://github.com/dajogzum/AlertsNstats
```
### Aktualizacja<br>
```
cd ../modules/alertsnstats<br>
git pull
```
**Link do pokazania powiadomienia:**<br>
http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=SHOW_STATS&payload={"id":"amp1","comment":"tekst","type":"alert/warning/info"}

> alert - czerwona pulsująca ikona<br>
> warning - pomarańczowa wolno pulsująca ikona<br>
> info - biała ikona statyczna<br>

**Link do ukrywania powiadomienia:**<br>
http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=HIDE_STATS&payload={"id":"amp1"}
