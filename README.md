# AlertsNstats

### Instalacja<br>
```
git clone https://github.com/dajogzum/AlertsNstats
```
### Aktualizacja<br>
```
cd ../modules/AlertsNstats
git pull
```
### Aktualizacja jeśli były zmieniane pliki lokalnie<br>
```
cd ../modules/AlertsNstats
git reset --hard
git clean -df
git pull
```
### Config
```
{
  module: "AlertsNstats",
  position: "top_left",
},
```
**Link do pokazania powiadomienia:**<br>
`http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=SHOW_STAT&payload={"id":"amp1","comment":"tekst","type":"alert"}`

##### ID:
- Dowolne unikalne ID dla każdego komunikatu<br>
- Polskie znaki działają ale czasem coś z kodowaniem może być nie tak<br>

##### Comment:
- Treść komunikatu do wyświetlenia<br>
- Spacja - %20<br>

##### Type:
- Alert - czerwona pulsująca ikona<br>
- Warning - pomarańczowa wolno pulsująca ikona<br>
- Info - biała ikona statyczna<br>

**Link do ukrywania powiadomienia:**<br>
`http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=HIDE_STAT&payload={"id":"amp1"}`

**Link do pokazywania kamery:**<br>
`http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=SHOW_CAMERA`


**Link do ukrywania kamery:**<br>
`http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=HIDE_CAMERA`
