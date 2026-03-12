# web-sovelluskehitys-

# Aktiv – hyvinvointipäiväkirja

Aktiv on HTML-, CSS- ja JavaScript-pohjainen hyvinvointisovellus, jossa käyttäjä voi kirjautua sisään, lisätä omia hyvinvointimerkintöjä ja tarkastella niitä päiväkirjamaisessa näkymässä. Sovellus hyödyntää Node.js/Express-taustapalvelua ja MySQL/MariaDB-tietokantaa.

## Sovelluksen ominaisuudet

- käyttäjän rekisteröinti
- käyttäjän kirjautuminen
- JWT-autentikointi
- hyvinvointimerkintöjen lisääminen
- omien päiväkirjamerkintöjen hakeminen
- omien päiväkirjamerkintöjen päivittäminen
- omien päiväkirjamerkintöjen poistaminen
- painoindeksilaskuri
- käyttöliittymässä päiväkirjamerkinnät esitetään kortteina

## Käytetyt teknologiat

### Frontend
- HTML
- CSS
- JavaScript
- Vite

### Backend
- Node.js
- Express
- JWT
- bcrypt

### Tietokanta
- MariaDB / MySQL

## Tietokannan rakenne

Sovellus käyttää tietokantaa `healthdiary`.

Keskeiset taulut:

- `users`
  - user_id
  - username
  - password
  - email
  - created_at
  - user_level

- `diaryentries`
  - entry_id
  - user_id
  - entry_date
  - mood
  - weight
  - sleep_hours
  - notes
  - created_at

Lisäksi tietokannassa on myös:
- `medications`
- `exercises`

## Autentikointi ja käyttöoikeudet

Sovelluksessa käytetään JWT-autentikointia käyttäjän tunnistamiseen. Kirjautumisen jälkeen käyttäjälle palautetaan token, joka tallennetaan localStorageen ja lähetetään suojattujen pyyntöjen mukana.

### Käyttöoikeussäännöt
- vain kirjautunut käyttäjä voi hakea omat päiväkirjamerkintänsä
- uusi päiväkirjamerkintä tallennetaan aina kirjautuneelle käyttäjälle
- käyttäjä voi päivittää vain oman päiväkirjamerkintänsä
- käyttäjä voi poistaa vain oman päiväkirjamerkintänsä
- suojatut reitit tarkistavat JWT-tokenin ennen toiminnon suorittamista

## Toteutetut API-reitit

### Users
- `POST /api/users` – uuden käyttäjän rekisteröinti
- `POST /api/users/login` – kirjautuminen
- `GET /api/users/me` – kirjautuneen käyttäjän tietojen haku

### Diary entries
- `GET /api/entries` – käyttäjän omien merkintöjen haku
- `POST /api/entries` – uuden merkinnän lisäys
- `PUT /api/entries/:id` – oman merkinnän päivitys
- `DELETE /api/entries/:id` – oman merkinnän poisto

## Käyttöliittymän muokkaukset lähtöprojektista

Sovellus pohjautuu kurssilla tehtyihin backend- ja frontend-esimerkkeihin, mutta käyttöliittymää on muokattu omannäköiseksi.

Tehdyt muutokset:
- sovelluksen nimi vaihdettu muotoon **Aktiv**
- etusivun tekstit ja rakenne muokattu
- väriteemaa muutettu
- päiväkirjasivua muokattu hyvinvointipäiväkirjaksi
- päiväkirjaan lisätty merkintöjen tallennuslomake
- päiväkirjamerkinnät näytetään korteissa
- dialogin sisältöä muokattu näyttämään merkinnän tarkemmat tiedot

## Sovelluksen käynnistäminen

### Frontend
```bash
npm install
npm run dev
