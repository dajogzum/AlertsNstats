# AlertsNstats

### Instalacja<br>
```
git clone https://github.com/dajogzum/AlertsNstats
```
### Aktualizacja<br>
```
cd ../modules/alertsnstats
git pull
```
### Aktualizacja jeśli były zmieniane pliki lokalnie<br>
```
cd ../modules/alertsnstats
git reset --hard
git pull
```
### Config
```
{
  module: "alertsnstats",
  position: "top_left",
},
```
**Link do pokazania powiadomienia:**<br>
`http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=SHOW_STAT&payload={"id":"amp1","comment":"tekst","type":"alert"}`

##### ID:
> dowolne unikalne ID dla każdego komunikatu<br>
> lepiej na razie nie używać polskich znaków<br>

##### Comment:
> treść komunikatu do wyświetlenia<br>
> spacja - %20<br>

##### Type:
> alert - czerwona pulsująca ikona<br>
> warning - pomarańczowa wolno pulsująca ikona<br>
> info - biała ikona statyczna<br>

**Link do ukrywania powiadomienia:**<br>
`http://xxx.xxx.xxx.xxx:8080/remote?action=NOTIFICATION&notification=HIDE_STAT&payload={"id":"amp1"}`
