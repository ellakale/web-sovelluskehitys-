


## Tehtävä 1 – Asennukset

Projektia varten asennettiin seuraavat työkalut:

- Robot Framework
- Browser Library
- Requests Library
- CryptoLibrary
- Robotidy

### Toteutus
Projektin juureen luotiin Python-virtuaaliympäristö `.venv`, jonka jälkeen pip päivitettiin ja tarvittavat kirjastot asennettiin. Browser Library alustettiin komennolla `rfbrowser init`.

Projektin juureen luotiin myös kansiot:
- `tests`
- `tests/front`
- `tests/back`
- `outputs`

---

### Testaus
Asennusten toiminta testattiin tekemällä Robot Framework -testi tiedostolle `bmi.html`.

Testitiedosto:
- `tests/front/bmi.robot`

Testi avaa BMI-laskurisivun selaimessa, syöttää painon ja pituuden, painaa laskentapainiketta ja tarkistaa, että tulokseksi tulee oikea BMI-arvo.

Testi suoritettiin komennolla:

```bash
robot -d outputs tests/front/bmi.robot
Havainnot

Asennuksen aikana tuli aluksi haasteita requirements.txt-tiedoston muodostuksessa, Robot Framework -tiedoston sisennyksissä sekä paikallisen palvelimen osoitteessa. Ongelmien jälkeen testi saatiin toimimaan onnistuneesti Vite-kehityspalvelimen kautta.

Tekoälyn käyttö

Tehtävän tekemisessä hyödynnettiin tekoälyä (ChatGPT) apuna erityisesti virhetilanteiden ratkaisemisen sekä ensimmäisten testien muodostamisen tukena. Ratkaisut käytiin kuitenkin läpi ja sovellettiin omaan projektiin.

Tehtävä 2–3 – Käyttöliittymän (GUI) testaus
Tavoite

Tavoitteena oli tutustua Robot Frameworkin Browser Libraryn käyttöön ja testata verkkosovelluksen käyttöliittymän toiminnallisuuksia.

Toteutus

Tehtävää varten luotiin seuraavat tiedostot:

tests/front/Keywords.robot
tests/front/browser_demo.robot

Keywords.robot-tiedostoon määriteltiin testissä käytettävät muuttujat, kuten käyttäjätunnus, salasana ja viesti.

Testit toteutettiin käyttäen Browser Librarya ja Chromium-selainta.

Tehtävä 2 – Kirjautumistestin valmistelu

Tutustuttiin kirjautumisen testaamiseen ja siihen, miten käyttäjätunnus ja salasana voidaan erottaa omaan resurssitiedostoon (Keywords.robot).

Lisäksi harjoiteltiin Type Secret -avainsanan käyttöä, jolla salasana voidaan syöttää turvallisesti ilman että se näkyy testilokeissa.

Tehtävä 3 – Web form -testi

Tehtävässä testattiin Seleniumin Web form -esimerkkisivun eri käyttöliittymäelementtejä.

Testissä tehtiin seuraavat toiminnot:

avattiin verkkosivu selaimessa
tarkistettiin sivun otsikko
syötettiin teksti tekstikenttään
syötettiin salasana Type Secret -avainsanalla
kirjoitettiin viesti textarea-kenttään
valittiin arvo dropdown (select) -valikosta
syötettiin arvo datalist-kenttään
ladattiin tiedosto file input -kenttään
valittiin ja poistettiin checkboxeja
valittiin radio button
lähetettiin lomake
tarkistettiin, että lopputulos oli Received!
Testin suoritus

Testi suoritettiin komennolla:

robot -d outputs tests/front/browser_demo.robot
Havainnot

Testauksen aikana opittiin:

Robot Frameworkin rakenne (Settings, Test Cases)
Browser Libraryn keskeiset avainsanat
elementtien valinta CSS- ja name-selectoreilla
tiedostopolkujen merkitys testejä ajettaessa
käyttöliittymäelementtien automatisointi
Tekoälyn käyttö

Tehtävän tekemisessä hyödynnettiin tekoälyä (ChatGPT) apuna erityisesti:

virhetilanteiden ratkaisemisessa
Robot Frameworkin syntaksin tarkistamisessa
testien muodostamisessa
README-dokumentaation parantamisessa

Ratkaisut käytiin kuitenkin läpi ja sovellettiin omaan projektiin.

# Aktiv – Hyvinvointipäiväkirja

## Projektin kuvaus

Aktiv on hyvinvointisovellus, jonka avulla käyttäjä voi seurata päivittäistä vointiaan, unta ja muita hyvinvointiin liittyviä tekijöitä.

Sovellus sisältää REST API -taustapalvelun sekä HTML/CSS/JavaScript -pohjaisen käyttöliittymän.

Sovellus hyödyntää Node.js + Express REST API -taustapalvelua, joka käsittelee tietokantaan liittyvät operaatiot.

---

## Sovelluksen ominaisuudet

Käyttäjä voi:

- luoda käyttäjätilin
- kirjautua sisään
- lisätä hyvinvointipäiväkirjamerkintöjä
- tarkastella omia merkintöjään
- päivittää merkintöjä
- poistaa merkintöjä

---

## REST API

### Authentication

Kirjautuminen tapahtuu endpointin kautta:

POST /api/users/login

Onnistunut kirjautuminen palauttaa JWT-tokenin.

Token lisätään suojattuihin pyyntöihin seuraavasti:

Authorization: Bearer <token>

---

### Users API

GET /api/users
POST /api/users
GET /api/users/me
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id

---

### Diary Entries API

GET /api/entries
POST /api/entries
PUT /api/entries/:id
DELETE /api/entries/:id

---

## Tietoturva

Sovelluksessa on toteutettu seuraavat tietoturvatoiminnot.

### Authentication

- JWT-token kirjautumiseen
- token tarkistetaan middlewarella

### Authorization

- käyttäjä voi nähdä vain omat päiväkirjamerkintänsä
- käyttäjä voi päivittää vain omia merkintöjään
- käyttäjä voi poistaa vain omia merkintöjään
- käyttäjä voi muokata vain omia käyttäjätietojaan

### Password security

Salasanat hashataan ennen tallennusta käyttäen bcrypt-kirjastoa.

---

## Input validation

Palvelin validoi käyttäjän syötteet käyttämällä express-validator kirjastoa.

Validoidut kentät:

- entry_date
- mood
- weight
- sleep_hours
- notes

Virheelliset pyynnöt estetään ennen controlleria.

---

## Error handling

Sovelluksessa on käytössä keskitetty virheenkäsittely middleware.

Virheet välitetään controllerista next(error) kautta ja käsitellään errorHandler middlewarella.

---

## Tietokannan rakenne

### Users

| Kenttä | Tyyppi |
|------|------|
| user_id | INT (PK) |
| username | VARCHAR |
| password | VARCHAR |
| email | VARCHAR |
| created_at | DATETIME |
| user_level | VARCHAR |

---

### DiaryEntries

| Kenttä | Tyyppi |
|------|------|
| entry_id | INT (PK) |
| user_id | INT (FK) |
| entry_date | DATE |
| mood | VARCHAR |
| weight | DECIMAL |
| sleep_hours | INT |
| notes | TEXT |
| created_at | DATETIME |

---

### Medications

| Kenttä | Tyyppi |
|------|------|
| medication_id | INT |
| user_id | INT |
| name | VARCHAR |
| dosage | VARCHAR |
| frequency | VARCHAR |

---

### Exercises

| Kenttä | Tyyppi |
|------|------|
| exercise_id | INT |
| user_id | INT |
| type | VARCHAR |
| duration | INT |
| intensity | VARCHAR |

---

## Käyttöliittymä

Käyttöliittymä on toteutettu käyttäen:

- HTML
- CSS
- JavaScript

Sivut:

- Etusivu
- BMI-laskuri
- Viikkotehtävät
- Hyvinvointipäiväkirja

Päiväkirjasivulla käyttäjä voi:

- lisätä merkinnän
- tarkastella merkintöjä
- avata merkinnän dialogissa
- päivittää tai poistaa merkinnän

---

## Kuvakaappaukset

![Etusivu](public/images/Näyttökuva(etusivu).png)
![Info](public/images/Näyttökuva(info).png)
![bmi1](public/images/Näyttökuva(bmi1).png)
![bmi2](public/images/Näyttökuva(bmi2).png)
![Iviikkoteht](public/images/Näyttökuva(viikkoteht).png)
![Paivakirja](public/images/Näyttökuva(paiva1).png)
![IPaivakirja2](public/images/Näyttökuva(paiva2).png)
![Paivakirja3](public/images/Näyttökuva(paiva3).png)
![Luokayttaja](public/images/Näyttökuva(luo).png)
![Kirjaudu](public/images/Näyttökuva(kirjaudu).png)



---

## Käytetyt lähteet

Projektissa on käytetty seuraavia lähteitä:

- Node.js dokumentaatio
- Express dokumentaatio
- MySQL dokumentaatio
- MDN Web Docs
- kurssin tuntimateriaalit

---

## AI:n hyödyntäminen

Projektin kehityksessä on hyödynnetty tekoälytyökaluja:

- koodin selittämiseen
- virheiden debuggaamiseen
- REST API rakenteen ymmärtämiseen
- dokumentaation kirjoittamiseen

AI:ta on käytetty oppimisen tukena, ja kaikki koodi on testattu sekä muokattu projektin tarpeisiin sopivaksi.

---

## GitHub repository

Projektin lähdekoodi löytyy GitHubista.

https://github.com/ellakale/web-sovelluskehitys-.git
