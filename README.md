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

### Testaus
Asennusten toiminta testattiin tekemällä Robot Framework -testi tiedostolle `bmi.html`.

Testitiedosto:
- `tests/front/bmi.robot`

Testi avaa BMI-laskurisivun selaimessa, syöttää painon ja pituuden, painaa laskentapainiketta ja tarkistaa, että tulokseksi tulee oikea BMI-arvo.

Testi suoritettiin komennolla:

```bash
robot -d outputs tests/front/bmi.robot


Lähetetty kuva
 jos projektini rakenne on tämä, niin miten minun kannattaa tehdä nämä githubin ohjeet: 01. Asennukset
Tavoite
Tavoitteena on asentaa projektissa käytettävä Robot Framework automaatiotestaustyökalu ja sen lisäosat.

Taustaa
Tulemme käyttämään kurssilla seuraavia työkaluja:

Robot Framework - yleiskäyttöinen avoimeen lähdekoodiin perustuva automaatiokehys. Sitä voidaan käyttää testiautomaatiossa ja RPA-tehtävissä.
Browser library - moderni vaihtoehto verkkosovellusten testaamisen. Lisäkirjasto Robot Frameworkiin.
Requests library - Taustapalvelimen HTTP API testaamiseen. Lisäkirjasto Robot Frameworkiin.
CryptoLibrary - Python-lisäkirjasto salasanojen turvalliseen käsittelyyn.
Robotidy - työkalu, joka automaattisesti muotoilee Robot Framework koodit.
Huom!

Robot Frameworkin kanssa verkkosovellusten testaamisessa käytetään usein SeleniumLibrarya. Se on vanhempi lisäkirjasto kuin BrowserLibrary ja siihen löytyy erittäin hyvin esimerkkejä. Käytämme kuitenkin tällä kurssilla BrowserLibrarya.

Asennusohjeet
Seuraavissa ohjeissa oletetaan, että käytät sovelluskehitykseen Visual Studio Codea (VSCode). Tehtävät suoritetaan käyttäen VSCoden käyttöliittymää, työkaluja ja VSCoden terminaali-ikkunaa. Jos käytät sovelluskehitykseen esim. JetBrains IDE (mm. PyCharm), joudut soveltamaan ohjeita ympäristön mukaan.

Samoin oletetaan, että olet aiemmassa jaksossa suorittanut Web-sovelluskehitys-kurssin, käytössäsi on terveyspäiväkirja-web-sovelluksen koodit sekä Github-kansio. Tavoitteena on, että oheinen asennus ja testit suoritetaan omalle terveyspäiväkirja-web-sovellukselle ja käyttäen sovelluksen projektihakemistoa.

1. Avaa projekti ja luo testaus-kansio
Avaa VSCodessa oman sovelluksesi projektikansio (File > Open Folder).
Lisää projektin juurihakemistoon alihakemisto nimeltä: tests.
Lisää testaus hakemiston alle kaksi alihakemistoa: front ja back.
Näitä uusia kansioita käytetään ohjelmistotestauksen opetteluun. Myöhemmin tulette ryhmänne kanssa tekemään samanlaisen kansiorakenteen omalle terveyssovelluksellenne. Projektin kansiorakenne tulee näyttämään esim. seuraavanlaiselta:

oman-projektin-nimi
   > Frontend/
   > Backend/
   > tests/
   > resources/
   > outputs/
Huom! Jos sovelluksesi selain (Frontend) ja taustapalvelin (Backend) ovat erillisiä projekteja, eli sijaitsevat eri kansioissa, tee Python asennukset selaimen (Frontend) alle, esim.

selain-projektin-nimi
   > js
   > assets/
   > ...
   > tests/
   > resources/
   > outputs/
Lisätietoa: Project structure

2. Python-testi
Testaa ensiksi, että Python-asennus on kunnossa.

Avaa terminaali-ikkuna (CTRL+ö).
Anna terminaalissa komento:
python --version
Terminaalissa pitäisi tuloksena näkyä, esim.

Python: 3.11.2
Ongelmia? Katso, esim.

Python Tutorial | VSCode docs
3. Virtuaaliympäristön luominen
Python-virtuaaliympäristö auttaa pitämään projektin riippuvuudet erillään muista projekteista. Näin voit helposti hallita ja päivittää projektin riippuvuksia ilman, että se vaikuttaa muihin projekteihin. Virtuaaliympäristö luodaan seuraavasti:

Jatka terminaali-ikkunan käyttöä (CTRL+ö tai View > Terminal).
Aja seuraava komento:
python -m venv .venv
Tämä luo uuden hakemiston nimeltä .venv, joka sisältää virtuaaliympräistön.

Aktivoi virtuaaliympäristö antamalla komento
Windows:
.venv\Scripts\activate
macOS tai Linux:
source myenv/bin/activate
Kun virtuaaliympäristö on aktivoitu, terminaalin prompt muuttuu ja näyttää, että työskentelet nyt virtuaaliympäristössä.

Voit nyt asentaa projektin riippuvuudet virtuaaliympäristön sisälle.

34 Virtuaaliympäristön lisääminen .gitignore -tiedostoon
Jotta virtuaaliympäristön tiedostot eivät kopioituisi GitHub-kansioon, lisää .gitignore -tiedostoon seuraava rivi:

# Lisätään .venv hakemisto .gitignoreen
.venv
Tämä estää virtuaaliympäristön kopioinnin, kun julkaiset uuden version koodeistasi GitHubissa.

5. pip päivitys
Seuraavaksi kannattaa tarkistaa, että Python-pakettien asentaja (pip), on päivitetty viimeisimpään versioon. Anna terminaalissa komento:

python -m pip install --upgrade pip
Ongelmia? Katso, esim.

Installation | pip documentation
Getting started | pip documentation
6. Robot Framework asennus
Kun Python ja pip on asennettu ja päivitetty sekä olet luonut virtuaaliympäristön, seuraavaksi asennetaan Robot Framework.

Kirjoita VSCoden terminaali-ikkunaan seuraava komento:
pip install robotframework
Huom! Jos koneesi ei tunnista pip komentoa, kirjoita sen sijaan:
python -m pip install robotframework
Lisätietoa: Should I use pip or pip3 | Stackoverflow

Testaa, että asennus on onnistunut antamalla komentorivillä seuraava komento:
robot --version
Huom! Jos koneesi ei tunnista robot komentoa, kokeile:
python -m robot --version
Lisätietoa: User Guide | (robotframework.org)

7. Browser library asennus
Huom! Browser library tarvitsee toimiakseen sekä Pythonin että Node.JS asennukset. Tarkista ensiksi, että sinulla on molemmat asennettuina. Anna terminaali-ikkunassa komento:

node -v
Browser library voidaan asentaa joko selainajurien kanssa tai erikseen. Suositeltavaa on asentaa selainajureiden kanssa. Ohessa on ohjeet kuinka voit Browser library asennetaan selainajurien kanssa.

Avaa VSCodessa terminaali-ikkuna.
Asenna Browser library -kirjasto ja selainajurit antamalla komento:
pip install robotframework-browser
Alusta kirjaston toiminta:
rfbrowser init
Jos rfbrowser komentoa ei löydy, kokeile
python -m Browser.entry init
Tarkemmat ohjeet: Installation | robotframework-browser.org

8. Requests libraryn asennus
Anna terminaali-ikkunassa komento:

pip install robotframework-requests
Ongelmia? Katso RequestsLibrary - Readme

9. Cryptolibraryn asennus
Asenna CryptoLibrary antamalla komento:

pip install --upgrade robotframework-crypto
Lisätietoa: Robot Framework CryptoLibrary | pypi.org

10. Robotidyn asennus
Asenna Robotidy antamalla komento:

pip install robotframework-tidy
Lisätietoa: Robotidy documentation

11. Asennuslistan tarkistus
pip freezeon komento, joka listaa kaikki nykyisessä Python-ympäristössä asennetut paketit ja niiden versiot. Anna terminaalissa komento:

pip freeze
Tarkista, että listasta löytyvät seuraavat modulit (Huom. versionumerot voivat olla uudemmat):

...
robotframework==7.2
robotframework-assertion-engine==3.0.3
robotframework-browser==19.3.0
robotframework-crypto==0.4.2
robotframework-pythonlibcore==4.4.1
robotframework-requests==0.9.7
robotframework-tidy==4.16.0
...
12. Luo requirements.txt-asennuslista
Voit myös ohjata pip freeze-komennon luettelon tiedostoon käyttämällä uudelleenohjausta:

pip freeze > requirements.txt
Tämä luo requirements.txt-tiedoston, joka sisältää kaikki nykyisessä ympäristössä asennetut paketit ja niiden versiot. Tämän tiedoston avulla voit asentaa samata paketit toisessa ympäristössä käyttämällä seuraavaa komentoa:

pip install -r requirements.txt
13. Asennusten testaus
Kopioi asennustesti.py tiedosto oman projektisi kansioon ja aja se. Jos asennukset ovat kunnossa, tuloksena terminaali-ikkunaan tulostuu, esim.

Robot Framework: 7.2
Browser: 19.3.0
requests: 2.32.3
CryptoLibrary: 0.4.2

Hyvä kysymys — sun projektirakenne vaikuttaa siltä, että sulla on backend-projekti (hyte-server-example...) erillään muusta + juuritasolla muita kansioita. Tässä tärkein juttu:

👉 Robot Framework -testit kannattaa tehdä frontendin yhteyteen TAI koko projektin juureen — ei backendin sisään.

🔧 Suositus juuri sun rakenteella
Koska sulla näkyy:

Back-end/hyte-server-example... (Node backend)

juuritasolla public/, src/, bmi.html jne (todennäköisesti frontend)

👉 Tee testaus projektin juureen, ei backend-kansion sisään.

✅ 1. Luo testikansiot oikein
Projektin juureen (samaan tasoon kuin Back-end, src, jne):

projekti/
│
├── Back-end/
├── src/
├── public/
├── tests/
│   ├── front/
│   └── back/
├── resources/
├── outputs/
👉 VS Codessa:

oikea klikkaus → New Folder → tests

sen sisään front ja back

🐍 2. Minne Python + venv?
Koska sulla on frontend samassa repossa:

👉 Luo Python-ympäristö projektin juureen

Aja terminaalissa (juurihakemistossa!):

python -m venv .venv
Aktivoi:

Windows:

.venv\Scripts\activate
🚫 3. .gitignore tärkeä
Lisää JUURITASON .gitignore-tiedostoon:

.venv
📦 4. Asennukset (juuritasossa)
Kun .venv on aktiivinen:

pip install --upgrade pip
pip install robotframework
pip install robotframework-browser
rfbrowser init
pip install robotframework-requests
pip install robotframework-crypto
pip install robotframework-tidy
🧪 5. Miten käytät front/back kansioita?
🔹 tests/front
selain/UI testit (Browser library)

esim:

login.robot
bmi.robot
🔹 tests/back
API-testit (RequestsLibrary)

esim:

users_api.robot
auth.robot
📄 6. requirements.txt
Aja juurihakemistossa:

pip freeze > requirements.txt
👉 Tämä tulee myös juureen.

🚀 7. Testien ajaminen
Projektin juuresta:

robot tests
Tai vain frontend:

robot tests/front
💡 Tärkein pointti sun tilanteessa
👉 ÄLÄ tee tätä:

Back-end/hyte-server-example/tests ❌
👉 Tee tämä:

projekti/tests ✅
🤔 Jos haluat varmistuksen
Voin katsoa sun koko rakenteen ja sanoa tarkalleen mihin mikäkin tulee.

👉 Lähetä vaikka:

koko projektipuun screenshot (laajempi kuin nyt)
TAI

kerro missä frontend oikeasti sijaitsee (src + html viittaa siihen)


Lähetetty kuva
mitä laitankaan terminaaliin nyt

Hyvä, oot oikeassa paikassa 👍
Näyttää että olet projektin juuressa, joten tehdään tämä nyt step-by-step.

🧪 1. Testaa Python
Kirjoita terminaaliin:

python --version
👉 Jos saat version (esim. Python 3.11.x), jatka
👉 Jos et, sano niin autan asennuksessa

🐍 2. Luo virtuaaliympäristö
python -m venv .venv
⚡ 3. Aktivoi virtuaaliympäristö (Windows)
.venv\Scripts\activate
👉 Kun onnistuu, rivin alkuun tulee:

(.venv)
📦 4. Päivitä pip
python -m pip install --upgrade pip
🤖 5. Asenna kaikki tarvittava
Aja nämä yksi kerrallaan:

pip install robotframework
pip install robotframework-browser
Sitten:

rfbrowser init
👉 Jos ei toimi, käytä:

python -m Browser.entry init
📡 6. Loput kirjastot
pip install robotframework-requests
pip install robotframework-crypto
pip install robotframework-tidy
📄 7. Luo requirements.txt
pip freeze > requirements.txt
🧪 8. (Vapaaehtoinen testi)
robot --version
🚨 Jos haluat mennä helpoimmalla
Voit myös kopioida KAIKKI kerralla:

python -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
pip install robotframework robotframework-browser robotframework-requests robotframework-crypto robotframework-tidy
rfbrowser init
pip freeze > requirements.txt
❓ Seuraava askel
Kun nämä toimii, seuraavaksi:
👉 luodaan eka .robot testi

Jos haluat, voin tehdä sulle valmiin ensimmäisen testin sun projektiin 🔥


Lähetetty kuva
 onko tämä huono jos tuli pipin päivityksen jälkeen

Ei ole huono — päinvastoin 👍
Tuo on VS Coden varoitus, joka yrittää auttaa sua tekemään asiat oikein.

🔍 Mitä tuo tarkoittaa?
Se sanoo käytännössä:

👉 “Saatat asentaa paketteja globaalisti → se voi sotkea projekteja”

✅ Mitä sun kannattaa tehdä?
Koska olet juuri tekemässä tätä kurssia:

👉 KÄYTÄ virtuaaliympäristöä (.venv)

🔥 Tee näin nyt
Koska et ole vielä aktivoinut .venv:iä (todennäköisesti), tee:

1. Luo venv (jos et jo tehnyt)
python -m venv .venv
2. Aktivoi se
.venv\Scripts\activate
👉 Nyt prompt alkaa näin:

(.venv) PS C:\...
❗ Tärkeä juttu
👉 Kun .venv on aktiivinen:

kaikki pip install menee oikeaan paikkaan

varoitus häviää

🤖 Mitä tuosta popupista?
Voit:

👉 painaa Create
TAI
👉 tehdä itse kuten yllä (parempi oppimisen kannalta)

💡 Yhteenveto
❌ Ei virhe

⚠️ Varoitus (hyvä sellainen)

✅ Ratkaisu = käytä .venv

👉 Jos haluat varmistaa
Lähetä screenshot terminaalista kun olet aktivoinut venvin —
sanon heti onko kaikki kunnossa 👌


(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> python -m pip install --upgrade pip
Requirement already satisfied: pip in c:\users\käyttäjä\desktop\html + css\webkehitys\k2026-hyte-projekti-vite\.venv\lib\site-packages (25.3)
Collecting pip
  Downloading pip-26.0.1-py3-none-any.whl.metadata (4.7 kB)
Downloading pip-26.0.1-py3-none-any.whl (1.8 MB)
   ━━━━━━━━━━ 1.8/1.8 MB 688.6      0:00:02
                         kB/s
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 25.3
    Uninstalling pip-25.3:
      Successfully uninstalled pip-25.3
Successfully installed pip-26.0.1
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> mitä tämän jälkeen

Hyvä! 🔥 Nyt kaikki on mennyt just oikein:

✅ .venv aktiivinen
✅ pip päivitetty
👉 Olet täydellisessä tilanteessa jatkaa

🚀 Seuraavaksi: asennetaan Robot Framework + kirjastot
Aja nämä yksi kerrallaan:

pip install robotframework
pip install robotframework-browser
⚠️ TÄRKEÄ vaihe (Browser tarvitsee tämän!)
rfbrowser init
👉 Jos tulee virhe:

python -m Browser.entry init
📡 Loput kirjastot
pip install robotframework-requests
pip install robotframework-crypto
pip install robotframework-tidy
📄 Lopuksi requirements.txt
pip freeze > requirements.txt
🧪 Tarkista että toimii
robot --version
💡 Sen jälkeen
Kun nämä toimii 👉 seuraava askel on:

👉 luoda ensimmäinen testi tests/front kansioon

Voin tehdä sulle valmiin testin sun projektiin (esim. avaa bmi.html selaimessa ja testaa jotain) — haluatko?


PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> .venv\Scripts\activate
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> python -m pip install --upgrade pip
Requirement already satisfied: pip in c:\users\käyttäjä\desktop\html + css\webkehitys\k2026-hyte-projekti-vite\.venv\lib\site-packages (25.3)
Collecting pip
Downloading pip-26.0.1-py3-none-any.whl (1.8 MB)
   ━━━━━━━━━━ 1.8/1.8 MB 688.6      0:00:02
                         kB/s
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 25.3
    Uninstalling pip-25.3:
      Successfully uninstalled pip-25.3
Successfully installed pip-26.0.1
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> pip install robotframework
Collecting robotframework
  Downloading robotframework-7.4.2-py3-none-any.whl.metadata (7.6 kB)
Downloading robotframework-7.4.2-py3-none-any.whl (807 kB)
   ━━━━━━━━━━ 807.1/807… 754.7      0:00:01
              kB         kB/s
Installing collected packages: robotframework
Successfully installed robotframework-7.4.2
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML pip install robotframework-browserti-vite>
Collecting robotframework-browser
  Downloading robotframework_browser-19.12.7-py3-none-any.whl.metadata (88 kB)
Collecting grpcio==1.78.0 (from robotframework-browser)
  Downloading grpcio-1.78.0-cp314-cp314-win_amd64.whl.metadata (3.9 kB)
Collecting grpcio-tools==1.78.0 (from robotframework-browser)
  Downloading grpcio_tools-1.78.0-cp314-cp314-win_amd64.whl.metadata (5.5 kB)
Collecting protobuf==6.33.5 (from robotframework-browser)
  Downloading protobuf-6.33.5-cp310-abi3-win_amd64.whl.metadata (593 bytes)
Requirement already satisfied: robotframework<9.0.0,>=6.1.1 in .\.venv\Lib\site-packages (from robotframework-browser) (7.4.2)
Collecting robotframework-pythonlibcore<5.0.0,>=4.4.1 (from robotframework-browser)
  Downloading robotframework_pythonlibcore-4.5.0-py3-none-any.whl.metadata (9.5 kB)
Collecting robotframework-assertion-engine<5.0.0,>=4.0.0 (from robotframework-browser)
  Downloading robotframework_assertion_engine-4.0.0-py3-none-any.whl.metadata (5.2 kB)
Collecting wrapt>=2.0.1 (from robotframework-browser)
  Downloading wrapt-2.1.2-cp314-cp314-win_amd64.whl.metadata (7.6 kB)
Collecting overrides>=7.7.0 (from robotframework-browser)
  Downloading overrides-7.7.0-py3-none-any.whl.metadata (5.8 kB)
Collecting click>=8.1.8 (from robotframework-browser)
  Downloading click-8.3.1-py3-none-any.whl.metadata (2.6 kB)
Collecting seedir>=0.5.1 (from robotframework-browser)
  Downloading seedir-0.5.1-py3-none-any.whl.metadata (1.8 kB)
Collecting psutil>=7.1.3 (from robotframework-browser)
  Downloading psutil-7.2.2-cp37-abi3-win_amd64.whl.metadata (22 kB)
Collecting PyYAML>=6.0.3 (from robotframework-browser)
  Downloading pyyaml-6.0.3-cp314-cp314-win_amd64.whl.metadata (2.4 kB)
Collecting typing-extensions~=4.12 (from grpcio==1.78.0->robotframework-browser)
  Downloading typing_extensions-4.15.0-py3-none-any.whl.metadata (3.3 kB)
Collecting setuptools>=77.0.1 (from grpcio-tools==1.78.0->robotframework-browser)
  Downloading setuptools-82.0.1-py3-none-any.whl.metadata (6.5 kB)
Collecting colorama (from click>=8.1.8->robotframework-browser)
  Downloading colorama-0.4.6-py2.py3-none-any.whl.metadata (17 kB)
Collecting natsort (from seedir>=0.5.1->robotframework-browser)
  Downloading natsort-8.4.0-py3-none-any.whl.metadata (21 kB)
Downloading robotframework_browser-19.12.7-py3-none-any.whl (371 kB)
Downloading grpcio-1.78.0-cp314-cp314-win_amd64.whl (4.9 MB)
   ━━━━━━━━━━━━━━━ 4.9/4.9 MB 4.7 MB/s  0:00:01
Downloading grpcio_tools-1.78.0-cp314-cp314-win_amd64.whl (1.2 MB)
   ━━━━━━━━━━━━━━━ 1.2/1.2 MB 5.5 MB/s  0:00:00
Downloading protobuf-6.33.5-cp310-abi3-win_amd64.whl (437 kB)
Downloading robotframework_assertion_engine-4.0.0-py3-none-any.whl (13 kB)
Downloading robotframework_pythonlibcore-4.5.0-py3-none-any.whl (19 kB)
Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
Downloading click-8.3.1-py3-none-any.whl (108 kB)
Downloading overrides-7.7.0-py3-none-any.whl (17 kB)
Downloading psutil-7.2.2-cp37-abi3-win_amd64.whl (137 kB)
Downloading pyyaml-6.0.3-cp314-cp314-win_amd64.whl (156 kB)
Downloading seedir-0.5.1-py3-none-any.whl (113 kB)
Downloading setuptools-82.0.1-py3-none-any.whl (1.0 MB)
   ━━━━━━━━━━━━━━━ 1.0/1.0 MB 4.1 MB/s  0:00:00
Downloading wrapt-2.1.2-cp314-cp314-win_amd64.whl (60 kB)
Downloading colorama-0.4.6-py2.py3-none-any.whl (25 kB)
Downloading natsort-8.4.0-py3-none-any.whl (38 kB)
Installing collected packages: wrapt, typing-extensions, setuptools, robotframework-pythonlibcore, PyYAML, psutil, protobuf, overrides, natsort, colorama, seedir, robotframework-assertion-engine, grpcio, click, grpcio-tools, robotframework-browser
Successfully installed PyYAML-6.0.3 click-8.3.1 colorama-0.4.6 grpcio-1.78.0 grpcio-tools-1.78.0 natsort-8.4.0 overrides-7.7.0 protobuf-6.33.5 psutil-7.2.2 robotframework-assertion-engine-4.0.0 robotframework-browser-19.12.7 robotframework-pythonlibcore-4.5.0 seedir-0.5.1 setuptools-82.0.1 typing-extensions-4.15.0 wrapt-2.1.2
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> rfbrowser
 init
======================================================================
Installing node dependencies...
Installing rfbrowser node dependencies at C:\Users\K ytt j \Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\.venv\Lib\site-packages\Browser\wrapper
npm warn config production Use --omit=dev instead.

added 81 packages, and audited 82 packages in 7s

8 packages are looking for funding
  run npm fund for details

found 0 vulnerabilities
npm notice
npm notice New minor version of npm available! 11.9.0 -> 11.12.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.0
npm notice To update run: npm install -g npm@11.12.0
npm notice





Installing browser binaries to C:\Users\K ytt j \Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\.venv\Lib\site-packages\Browser\wrapper
npx --quiet playwright install
|
                                  |   0% of 172.8 MiB
|
                                  |  10% of 172.8 MiB
|
                                  |  20% of 172.8 MiB
|
                                  |  30% of 172.8 MiB
|
                                  |  40% of 172.8 MiB
|
                                  |  50% of 172.8 MiB
|
                                  |  60% of 172.8 MiB
|
                                  |  70% of 172.8 MiB
|
                                  |  80% of 172.8 MiB
|
                                  |  90% of 172.8 MiB
|
                                  | 100% of 172.8 MiB
|
                                  |   0% of 108.8 MiB
|
                                  |  10% of 108.8 MiB
|
                                  |  20% of 108.8 MiB
|
                                  |  30% of 108.8 MiB
|
                                  |  40% of 108.8 MiB
|
                                  |  50% of 108.8 MiB
|
                                  |  60% of 108.8 MiB
|
                                  |  70% of 108.8 MiB
|
                                  |  80% of 108.8 MiB
|
                                  |  90% of 108.8 MiB
|
                                  | 100% of 108.8 MiB
|
                                  |   0% of 110.2 MiB
|
                                  |  10% of 110.2 MiB
|
                                  |  20% of 110.2 MiB
|
                                  |  30% of 110.2 MiB
|
                                  |  40% of 110.2 MiB
|
                                  |  50% of 110.2 MiB
|
                                  |  60% of 110.2 MiB
|
                                  |  70% of 110.2 MiB
|
                                  |  80% of 110.2 MiB
|
                                  |  90% of 110.2 MiB
|
                                  | 100% of 110.2 MiB
|
                                  |   0% of 58.7 MiB
|
                                  |  10% of 58.7 MiB
|
                                  |  20% of 58.7 MiB
|
                                  |  30% of 58.7 MiB
|
                                  |  40% of 58.7 MiB
|
                                  |  50% of 58.7 MiB
|
                                  |  60% of 58.7 MiB
|
                                  |  70% of 58.7 MiB
|
                                  |  50% of 0.1 MiB
|                                                                                |  63% of 0.1 MiB
|                                                                                |  76% of 0.1 MiB
|                                                                                |  89% of 0.1                                  |  50% of 0.1 MiB
|                                                                                |  63% of 0.1 MiB
|                                                                                |  76% of 0.1 MiB
|                                                                                |  89% of 0.1 MiB
|                                                                                | 100% of 0.1 MiB






rfbrowser init completed
======================================================================
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> pip install robotframework-requests
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x0000017020787CB0>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-requests/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x000001702094D590>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-requests/
ct at 0x000001B0AB467CB0>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-crypto/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x000001B0AB66D590>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-crypto/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x000001B0AB66D6D0>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-crypto/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x000001B0AB66D810>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-crypto/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x000001B0AB66D950>: Failed to establish a new connection: [Errno 11001] getaddrinfo failed')': /simple/robotframework-crypto/
ERROR: Could not find a version that satisfies the requirement robotframework-crypto (from versions: none)
ERROR: No matching distribution found for robotframework-crypto
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> teinkö tässä jotain väärin,  mitä pitää tehdä


Mietti 28s
Et tehnyt mitään väärin. Suurin osa meni oikein:

robotframework asentui

robotframework-browser asentui

rfbrowser init onnistui

Eli perusasennus on kunnossa.

Se mikä epäonnistui, näyttää tässä ennen kaikkea verkkoyhteys/DNS-ongelmalta, ei väärältä komennolta. Virhe Failed to establish a new connection: [Errno 11001] getaddrinfo failed tarkoittaa yleensä, ettei pip saanut yhteyttä pakettipalveluun. Siksi robotframework-requests ei latautunut, vaikka paketti kyllä on olemassa PyPI:ssä komennolla pip install robotframework-requests. Myös robotframework-crypto on olemassa PyPI:ssä.

Yksi lisähuomio: sulla näyttää olevan Python 3.14 käytössä, koska Browserin asennuksessa näkyi cp314. robotframework-crypto ilmoittaa PyPI:ssä tukevansa Pythonia >=3.9, mutta sen luokittelussa näkyvät vain 3.9–3.12, joten 3.14 voi aiheuttaa yhteensopivuusongelmia joissain kurssipaketeissa. robotframework-requests taas on vanhempi julkaisu ja sen PyPI-luokittelussa näkyy tuki vain 3.9 asti. Tämä ei vielä todista, ettei ne toimisi 3.14:llä, mutta se on mahdollinen lisäsyy, jos asennus tökkii verkon korjaamisen jälkeenkin.

Tee nyt näin samassa terminaalissa:

pip install robotframework-requests
Jos se antaa taas saman verkkovirheen, testaa ensin onko yhteys kunnossa:

ping pypi.org
Jos ping ei toimi, ongelma ei ole Robot Frameworkissa vaan netissä, DNS:ssä, VPN:ssä, koulun verkossa tai palomuurissa.

Sitten kokeile cryptoa vielä näin:

pip install --upgrade robotframework-crypto
Jos sama virhe jatkuu molemmissa, sulje VS Code, avaa uusi terminaali ja kokeile uudestaan. Jos olet koulun verkossa tai VPN:ssä, vaihda hetkeksi toiseen verkkoon, esimerkiksi puhelimen hotspot.

Jos requests alkaa asentua mutta crypto ei vieläkään asennu, silloin todennäköinen seuraava epäilty on Python 3.14. Siinä tapauksessa helpoin kurssia varten on käyttää Python 3.11 tai 3.12 ja tehdä uusi .venv sillä versiolla.

Voit myös tarkistaa nykyisen Python-version täsmällisesti:

python --version
Ja tarkistaa asennetut paketit tähän asti:

pip freeze
Lähetä seuraavaksi joko python --version ja uusi virheilmoitus, tai pelkkä tulos komennosta ping pypi.org, niin osaan sanoa heti onko tämä verkko- vai Python-versio-ongelma.


(.venv) PS C:\Users\Käyttäjä\Desktop\Hpip install robotframework-requestsjekti-vite>
Collecting robotframework-requests
  Downloading robotframework_requests-0.9.7-py3-none-any.whl.metadata (7.2 kB)
Requirement already satisfied: robotframework in .\.venv\Lib\site-packages (from robotframework-requests) (7.4.2)
Collecting requests (from robotframework-requests)
  Downloading requests-2.32.5-py3-none-any.whl.metadata (4.9 kB)
Collecting charset_normalizer<4,>=2 (from requests->robotframework-requests)
  Downloading charset_normalizer-3.4.6-cp314-cp314-win_amd64.whl.metadata (41 kB)
Collecting idna<4,>=2.5 (from requests->robotframework-requests)
  Downloading idna-3.11-py3-none-any.whl.metadata (8.4 kB)
Collecting urllib3<3,>=1.21.1 (from requests->robotframework-requests)
  Downloading urllib3-2.6.3-py3-none-any.whl.metadata (6.9 kB)
Collecting certifi>=2017.4.17 (from requests->robotframework-requests)
  Downloading certifi-2026.2.25-py3-none-any.whl.metadata (2.5 kB)
Downloading robotframework_requests-0.9.7-py3-none-any.whl (21 kB)
Downloading requests-2.32.5-py3-none-any.whl (64 kB)
Downloading charset_normalizer-3.4.6-cp314-cp314-win_amd64.whl (154 kB)
Downloading idna-3.11-py3-none-any.whl (71 kB)
Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
Downloading certifi-2026.2.25-py3-none-any.whl (153 kB)
Installing collected packages: urllib3, idna, charset_normalizer, certifi, requests, robotframework-requests
Successfully installed certifi-2026.2.25 charset_normalizer-3.4.6 idna-3.11 requests-2.32.5 robotframework-requests-0.9.7 urllib3-2.6.3
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> pip install --upgrade robotframework-crypto
Collecting robotframework-crypto
  Downloading wcwidth-0.6.0-py3-none-any.whl.metadata (30 kB)
Downloading robotframework_crypto-0.4.2-py3-none-any.whl (22 kB)
Downloading pynacl-1.6.2-cp38-abi3-win_amd64.whl (239 kB)
Downloading cffi-2.0.0-cp314-cp314-win_amd64.whl (185 kB)
Downloading questionary-2.1.1-py3-none-any.whl (36 kB)
Downloading prompt_toolkit-3.0.52-py3-none-any.whl (391 kB)
Downloading pycparser-3.0-py3-none-any.whl (48 kB)
Downloading wcwidth-0.6.0-py3-none-any.whl (94 kB)
Installing collected packages: wcwidth, pycparser, prompt_toolkit, cffi, questionary, PyNaCl, robotframework-crypto
Successfully installed PyNaCl-1.6.2 cffi-2.0.0 prompt_toolkit-3.0.52 pycparser-3.0 questionary-2.1.1 robotframework-crypto-0.4.2 wcwidth-0.6.0
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite>

Hyvä — nyt ne asentui oikein. 🎉

Sulla on tässä vaiheessa kunnossa ainakin:

robotframework

robotframework-browser

robotframework-requests

robotframework-crypto

Seuraavaksi tee vielä tämä:

pip install robotframework-tidy
Sen jälkeen:

pip freeze > requirements.txt
Ja tarkista versiot:

robot --version
pip freeze
Jos haluat tehdä kurssiohjeen kansiorakenteen myös nyt, projektin juuressa:

mkdir tests
mkdir tests\front
mkdir tests\back
mkdir resources
mkdir outputs
Ja varmista, että .gitignore-tiedostossa on ainakin:

.venv
outputs/
Kun nämä on tehty, asennusvaihe on käytännössä valmis.

Sen jälkeen voidaan tehdä sulle heti ensimmäinen testitiedosto, esimerkiksi:

selaintesti tests/front

API-testi tests/back

Kirjoita seuraavaksi vaikka vain: “tehdään eka testi”.


pip freeze > requirements.txt laitanko tämän tällaisenaan terminaalin vai ensin pip freeze ja sen jälkeen requirements.txt

Hyvä kysymys — tämä on monelle epäselvä 👍

👉 Laita se yhtenä rivinä juuri näin:

pip freeze > requirements.txt
🔍 Mitä tuo tekee?
pip freeze = listaa kaikki asennetut paketit

> = ohjaa tulosteen tiedostoon

requirements.txt = tiedoston nimi

👉 Eli se luo automaattisesti tiedoston, sinun ei tarvitse tehdä sitä erikseen

📄 Mitä tapahtuu kun ajat sen?
Projektin juureen ilmestyy:

requirements.txt
Ja sen sisällä esim:

robotframework==7.4.2
robotframework-browser==19.12.7
robotframework-requests==0.9.7
robotframework-crypto==0.4.2
...
❗ Yleinen virhe (vältä tämä)
❌ Älä tee näin:

pip freeze
requirements.txt
→ tämä ei tee mitään järkevää

✅ Tee nyt
Aja:

pip freeze > requirements.txt
👉 Sen jälkeen
Olet käytännössä valmis 🎉

Jos haluat, seuraavaksi:
👉 tehdään eka .robot testi sun projektiin (suosittelen 🔥)


Lähetetty kuva
requirements.txt näyttää tältä

Hyvä että näytit — tuo EI ole normaalia ❗
requirements.txt ei saa näyttää tuolta (NULL-merkkejä kaikkialla).

👉 Tämä tarkoittaa käytännössä:
tiedosto meni rikki (encoding/binary-ongelma)

🔧 Korjataan tämä nopeasti
1. Poista rikkinäinen tiedosto
VS Codessa:

oikea klikkaus requirements.txt

Delete

TAI terminaalissa:

del requirements.txt
2. Luo se uudestaan oikein
Aja tämä uudestaan:

pip freeze > requirements.txt
⚠️ Tärkeä juttu (todennäköinen syy)
Tämä bugi tulee usein jos:

PowerShell encoding sekoilee

tai VS Code avaa tiedoston väärin

🛠️ Jos sama ongelma tulee uudestaan
Käytä tätä varmaa tapaa:

pip freeze | Out-File -Encoding utf8 requirements.txt
👉 Tämä pakottaa oikean encodingin

✅ Lopputuloksen pitää näyttää tältä
robotframework==7.x.x
robotframework-browser==...
robotframework-requests==...
robotframework-crypto==...
🚀 Kun tämä on kunnossa
👉 olet 100% valmis testien tekemiseen

Seuraava askel:
👉 tehdään sun eka Robot Framework -testi

Haluatko:

🔹 selaintesti (avaa bmi.html tms)

🔹 API-testi (backendiin)

Sanot vaan kumpi 👇


lopputulos näyttää tältä: certifi==2026.2.25
cffi==2.0.0
charset-normalizer==3.4.6
click==8.3.1
colorama==0.4.6
grpcio==1.78.0
grpcio-tools==1.78.0
idna==3.11
Jinja2==3.1.6
markdown-it-py==4.0.0
MarkupSafe==3.0.3
mdurl==0.1.2
natsort==8.4.0
overrides==7.7.0
pathspec==1.0.4
prompt_toolkit==3.0.52
protobuf==6.33.5
psutil==7.2.2
pycparser==3.0
Pygments==2.19.2
PyNaCl==1.6.2
PyYAML==6.0.3
questionary==2.1.1
requests==2.32.5
rich==14.3.3
rich-click==1.9.7
robotframework==7.4.2
robotframework-assertion-engine==4.0.0
robotframework-browser==19.12.7
robotframework-crypto==0.4.2
robotframework-pythonlibcore==4.5.0
robotframework-requests==0.9.7
robotframework-tidy==4.18.0
seedir==0.5.1
setuptools==82.0.1
tomli==2.4.0
typing_extensions==4.15.0
urllib3==2.6.3
wcwidth==0.6.0
wrapt==2.1.2

Jes — tuo näyttää hyvältä. Asennukset ovat kunnossa. ✅

Sulta löytyy juuri ne tärkeät paketit:

robotframework

robotframework-browser

robotframework-requests

robotframework-crypto

robotframework-tidy

Eli tämä vaihe on käytännössä valmis.

Seuraavaksi tee vielä nämä viimeiset tarkistukset:

robot --version
ja lisää .gitignore-tiedostoon ainakin:

.venv
outputs/
Jos et ole vielä tehnyt kansioita, tee ne projektin juuressa:

mkdir tests
mkdir tests\front
mkdir tests\back
mkdir resources
mkdir outputs
Sen jälkeen olet valmis tekemään ensimmäisen testin.

Koska sulla näkyi aiemmin selainosoitteena http://localhost:4000/, luontevin seuraava askel on tehdä frontendin selaintesti tests/front-kansioon. Luo sinne tiedosto esimerkiksi etusivu.robot ja laita sisään tämä:

*** Settings ***
Library    Browser

*** Test Cases ***
Etusivu Aukeaa
    New Browser    chromium    headless=False
    New Page    http://localhost:4000/
    Get Title
    Sleep    3s
    Close Browser
Aja testi projektin juuressa näin:

robot tests/front/etusivu.robot
Jos haluat vähän hyödyllisemmän version heti, voidaan tehdä seuraavaksi testi, joka tarkistaa vaikka:

että sivulla näkyy tietty otsikko

että BMI-laskurin kentät toimivat

että backendiä voi testata RequestsLibrarylla

Kirjoita vain: tehdään etusivutesti tai tehdään API-testi.


Lähetetty kuva
projekti näyttää nyt tältä, minne gitignoreen lisään

Hyvä — rakenne näyttää oikein hyvältä 👌

👉 Sun pitää lisätä .gitignore-tiedostoon rivit projektin JUURITASOLLA olevaan .gitignore-tiedostoon.

Kuvassa näkyy:

yksi .gitignore juuritasolla ✅

yksi .gitignore backendin sisällä

👉 Lisää nämä juurihakemiston .gitignore:en (se alempi kuvassa):

✏️ Lisää nämä sinne
Avaa .gitignore ja lisää loppuun:

# Python virtual environment
.venv/

# Test outputs
outputs/

# Robot Framework output files
*.log
*.xml
*.html
🔍 Miksi juuri tähän?
👉 Koska:

.venv on juuritasolla → pitää ignoroida siellä

tests, outputs jne ovat juuritasolla

tämä koskee koko projektia

⚠️ Älä lisää tänne
❌ Backendin .gitignore:en ei tarvitse lisätä .venv:iä
(sillä backend ei käytä sitä)

💡 Bonus (suositus)
Voit lisätä myös:

# VS Code
.vscode/
✅ Lopputulos
Kun commitoit GitHubiin:

.venv EI mene mukaan ❌

testitulokset EI mene mukaan ❌

koodi menee mukaan ✅

🚀 Seuraava askel
Nyt sulla on:
✅ asennukset kunnossa
✅ kansiorakenne kunnossa
✅ gitignore kunnossa

👉 seuraavaksi kannattaa tehdä eka testi

Sanot vaan:
👉 “tehdään testi bmi.html:lle”
tai
👉 “tehdään API-testi backendiin”


“tehdään testi bmi.html:lle” onko tämä se mikä kuuluu tuntitehtävään

Hyvä että kysyit 👍

🎯 Lyhyt vastaus
👉 KYLLÄ — tämä kuuluu juuri siihen tehtävään.

📚 Miksi?
Kurssin ohjeessa lukee:

Browser library → verkkosovelluksen testaus

front-kansio → frontend-testit

👉 Sun bmi.html on juuri:

frontend-sivu

selaimessa toimiva

➡️ Eli täydellinen ensimmäinen testikohde

🧪 Mitä tällä oikeasti harjoitellaan?
Kun teet bmi.html testin, opit:

avaamaan selaimen automaattisesti

avaamaan sivun

tarkistamaan että sivu toimii

(myöhemmin) täyttämään lomakkeita

👉 tämä on koko Robot Framework -kurssin ydin

🔥 Tehdään sulle oikea tuntitehtävän tasoinen testi
📁 Luo tiedosto:
tests/front/bmi.robot
✏️ Laita sisään:
*** Settings ***
Library    Browser

*** Test Cases ***
BMI Sivun Avaus
    New Browser    chromium    headless=False
    New Page    file://${CURDIR}/../../bmi.html
    Get Title
    Sleep    3s
    Close Browser
▶️ Aja testi
Projektin juuresta:

robot tests/front/bmi.robot
⚠️ Tärkeä huomio
Koska käytät HTML-tiedostoa suoraan, käytetään:

file://
👉 eikä localhost

🚀 Jos tämä toimii
Seuraava tuntitehtävän taso on:

👉 testata oikeasti toiminnallisuutta, esim:

syöttää pituus & paino

klikata nappia

tarkistaa tulos

👉 Haluatko seuraavaksi?
Voin tehdä sulle valmiin testin joka:

täyttää BMI-lomakkeen

klikkaa nappia

tarkistaa tuloksen

Sanot vaan: “jatketaan bmi testiin” 💪


pitääkö bmi.robot lisätä tästä jotenkin kun painoin front filen kohdalla right clickiä? vai lisätäänkö se muualta

Hyvä kysymys — tämä on just se kohta missä moni menee vähän sekaisin 👍

✅ Oikea tapa
👉 Kyllä, teit oikein lähtemällä front-kansiosta

Tee näin:
VS Codessa:

oikea klikkaus tests/front

valitse New File

kirjoita nimeksi:

bmi.robot
👉 Valmis — ei tarvitse tehdä mitään muuta erikseen

❗ Tärkeä huomio
Sun kuvassa front ja back näyttävät tiedostoilta eikä kansioilta 😅

👉 niiden pitäisi olla kansioita, ei filejä

🔍 Tarkista tämä heti
Jos front näyttää tältä:

📄 front → ❌ väärin (tiedosto)

Sen pitäisi olla:

📁 front → ✅ oikein (kansio)

🔧 Jos ne on väärin (todennäköistä)
Tee näin:

Poista front ja back (jos ne on tiedostoja)

Luo uudestaan:

oikea klikkaus tests

New Folder → front

New Folder → back

Sitten:

oikea klikkaus tests/front

New File → bmi.robot

📁 Lopputulos pitää näyttää tältä
tests/
 ├── front/
 │    └── bmi.robot
 └── back/
🚀 Kun tämä on tehty
Sanot vaan:
👉 “valmis”

→ annan sulle heti seuraavan stepin ja varmistetaan että testi oikeasti toimii 💪


Lähetetty kuva
piti laittaa äsköiseen viestiin tämä kuva

Hyvä kun laitoit kuvan — tästä näkee heti tilanteen 👌

🔴 Ongelma
Sun front ja back ovat nyt:
👉 tiedostoja (📄), ei kansioita (📁)

Siksi et näe "New File" -vaihtoehtoa niiden sisään.

✅ Korjaus (tee tämä nyt)
1. Poista väärät
oikea klikkaus front → Delete

oikea klikkaus back → Delete

2. Luo ne oikeina kansioina
oikea klikkaus tests

New Folder → front

New Folder → back

👉 Nyt niiden ikonin pitää olla 📁

3. Luo testitiedosto oikein
oikea klikkaus tests/front

New File

nimeksi:

bmi.robot
📁 Lopputulos
Sen pitää näyttää tältä:

tests/
 ├── front/
 │    └── bmi.robot
 └── back/
🚀 Kun tämä on tehty
Sanot:
👉 “valmis”

→ sitten tehdään testi joka oikeasti:

avaa sun bmi.html

toimii selaimessa oikein 💪


valmis

Mahtavaa 💪 nyt päästään itse asiaan — eka oikea testi 🚀

🧪 1. Laita tämä bmi.robot-tiedostoon
Avaa tests/front/bmi.robot ja lisää:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Sivun Avaus
    New Browser    chromium    headless=False
    New Page    file://${CURDIR}/../../bmi.html
    Get Title
    Sleep    3s
    Close Browser
▶️ 2. Aja testi
Projektin juuresta terminaalissa:

robot tests/front/bmi.robot
👀 Mitä pitäisi tapahtua
selain aukeaa (Chromium)

bmi.html avautuu

odottaa 3 sekuntia

selain sulkeutuu

👉 jos tämä tapahtuu → kaikki toimii oikein 🎉

❗ Jos EI toimi
Mahdolliset virheet:

selain ei aukea → Browser library ei init oikein

tiedosto ei löydy → polku väärä

👉 laita virhe tänne, niin korjaan heti

🚀 Seuraava taso (tämä on se oikea harjoitus)
Kun tämä toimii, tehdään oikea testaus:

👉 testataan että:

käyttäjä syöttää pituuden ja painon

klikataan nappia

tarkistetaan tulos

👉 Kysy seuraavaksi
Kirjoita:
👉 “jatketaan bmi testiin”

→ teen sulle testin joka oikeasti käyttää sun sivua (tämä on se mitä opettaja haluaa nähdä 💯)


(.venv) PS C:\Users\Käyttäjä\Desktop\Hrobot tests/front/bmi.robothyte-projekti-vite>
[ ERROR ] Suite 'Bmi' contains no tests or tasks.

Try --help for usage information.
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite>

Hyvä — tämä on yleinen ja helppo korjata 👍

🔴 Virhe:
Suite 'Bmi' contains no tests or tasks.
👉 Tämä tarkoittaa:
Robot ei tunnistanut yhtään test casea tiedostosta

🔍 Todennäköinen syy
Jompikumpi näistä:

1. Otsikot väärin (yleisin)
Pitää olla TÄSMÄLLEEN näin:

*** Settings ***
*** Test Cases ***
👉 EI esim:

*** TestCase *** ❌

*** test cases *** ❌

** Test Cases ** ❌

2. Sisennys väärin
Robot on tarkka sisennyksestä

👉 pitää olla esim:

*** Test Cases ***
BMI Sivun Avaus
    New Browser    chromium    headless=False
✅ Kopioi tämä varma versio
Korvaa koko bmi.robot tällä:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Sivun Avaus
    New Browser    chromium    headless=False
    New Page    file://${CURDIR}/../../bmi.html
    Get Title
    Sleep    3s
    Close Browser
⚠️ Tärkeä
käytä välilyöntejä (4 spaces)

EI tabia

▶️ Aja uudestaan
robot tests/front/bmi.robot
👉 Jos vielä ei toimi
Laita tänne:

screenshot koko bmi.robot tiedostosta

→ sanon suoraan missä virhe on (tämä on yleensä 1 rivin typo 😄)

💪 Kun tämä toimii
Seuraavaksi tehdään:
👉 oikea BMI-laskurin testi (input + nappi + tulos)

Se on se mikä oikeasti vaikuttaa arvosanaan 👍


Lähetetty kuva
mikä on vikana

Hyvä screenshot — nyt näen heti missä vika on 👇

🔴 Ongelma
Sun test case ei ole sisennetty oikein

Tämä rivi:

BMI Sivun Avaus
👉 sen alla olevien rivien pitää olla sisennetty enemmän kuin nyt

❗ Tällä hetkellä näyttää siltä että sisennys ei mene oikein (tai on tab/väärä määrä välilyöntejä)
Robot ei tunnista sitä testiksi → siksi:

contains no tests
✅ Korjaa näin (kopioi tämä täysin)
Poista koko sisältö ja laita tämä:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Sivun Avaus
    New Browser    chromium    headless=False
    New Page    file://${CURDIR}/../../bmi.html
    Get Title
    Sleep    3s
    Close Browser
⚠️ Tärkeimmät säännöt
käytä välilyöntejä, EI tabia

sisennys = vähintään 2–4 välilyöntiä

kaikkien komentojen pitää alkaa samalla kohdalla

🔧 VS Code fix (suositus)
Avaa alareunasta:
👉 Spaces: 4

Varmista:

Indent Using Spaces

EI Tabs

▶️ Testaa uudestaan
robot tests/front/bmi.robot
👉 Jos vielä ei toimi
Lähetä uusi screenshot — mutta nyt tämä on 99% varmuudella pelkkä sisennysongelma 👍

💪 Kun toimii
Seuraavaksi tehdään oikea testi:
👉 täytetään BMI-lomake ja tarkistetaan tulos (tämä on se tärkeä osa)


mkdir tests
mkdir tests\front
mkdir tests\back
mkdir resources
mkdir outputs   en ikinä tehnyt tätä erikseen, ja minun kansion nimi on tests onko sillä merkitystä tähän: robot tests/front/bmi.robot

Hyvä kysymys — ja vastaus on:

👉 EI ole mitään ongelmaa 👍

🔍 Selitys
Sä ajoit testin näin:

robot tests/front/bmi.robot
👉 Tämä toimii, jos:

sulla on kansio nimeltä tests

sen sisällä front

ja siellä bmi.robot

📁 Sun tilanne
Kuvien perusteella sulla on:

tests/
 ├── front/
 │    └── bmi.robot
 └── back/
👉 Eli täsmälleen oikein ✅

🤔 Miksi ne mkdir-komennot oli ohjeessa?
Ne on vaan:
👉 tapa luoda kansiot TERMINAALISTA

Mutta sä teit saman VS Codessa → ihan yhtä oikein 👍

❗ Tärkeä pointti
Ainoa mikä vaikuttaa tähän:

👉 polku pitää olla oikein

Eli jos tiedosto on täällä:

tests/front/bmi.robot
niin komento on oikein:

robot tests/front/bmi.robot
🚨 Eli sun ongelma EI liity kansioihin
Se aiempi virhe johtui:
👉 bmi.robot sisällöstä (sisennys/formaatti)

✅ Tee nyt
varmista että bmi.robot on korjattu (se jonka annoin)

aja:

robot tests/front/bmi.robot
👉 Jos tulee vielä virhe
lähetä:

uusi screenshot bmi.robotista
TAI

koko virhe

→ korjaan suoraan

💪 Kun tämä toimii
Sitten mennään siihen oikeaan:
👉 BMI-laskurin testaukseen (input + nappi + tulos)


Lähetetty kuva
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> robot tests/front/bmi.robot
[ ERROR ] Suite 'Bmi' contains no tests or tasks.

Try --help for usage information.
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite>

Hyvä — nyt näkyy selvästi missä vika on 🔍
Tämä EI ole enää sisennysongelma, vaan:

🔴 Ongelma
Sun tiedostossa on tab-merkkejä tai väärä erotin

Robot Framework EI tunnista tätä riviksi:

New Browser    chromium    headless=False
jos siinä on tabit → silloin se näyttää oikealta mutta EI toimi ❌

✅ Korjaus (toimii 100%)
🔧 Vaihe 1: pakota VS Code käyttämään välilyöntejä
Alareunassa (status bar):

klikkaa "Spaces: 4"

valitse:
👉 Convert Indentation to Spaces

🔧 Vaihe 2: kirjoita rivit uudelleen käsin
👉 Älä kopioi — kirjoita nämä rivit itse:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Sivun Avaus
    New Browser    chromium    headless=False
    New Page    file://${CURDIR}/../../bmi.html
    Get Title
    Sleep    3s
    Close Browser
💥 Miksi tämä tapahtuu?
Robot Framework:

EI käytä pelkkää sisennystä kuten Python

vaan sarakkeita erotetaan välilyönneillä

👉 Tab = rikkoo rakenteen täysin

🧪 Testaa heti
robot tests/front/bmi.robot
🔥 Jos haluat nopean varmistuksen
Lisää tämä debug-rivi testiin:

Log    Testi toimii
jos se ei näy → Robot ei vieläkään tunnista test casea

💪 Kun tämä toimii
Seuraava (tärkein osa kurssia):

👉 tehdään testi joka:

syöttää arvot BMI-laskuriin

klikkaa nappia

tarkistaa tuloksen

Sanot vaan: “jatketaan bmi testiin”


(.venv) PS C:\Users\robot tests/front/bmi.robot\webkehitys\k2026-hyte-projekti-vite>
==============================================================================
Bmi
==============================================================================
BMI Sivun Avaus                                                       | PASS |
------------------------------------------------------------------------------
Bmi                                                                   | PASS |
1 test, 1 passed, 0 failed
==============================================================================
Output:  C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\output.xml
Log:     C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\log.html
Report:  C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\report.html
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite>  tässä terminal teksti, ja hetkeksi avautui bmi sivu

Jes — nyt se toimii oikein. 🎉

Tuo tarkoittaa, että:

Robot Framework toimii

Browser-kirjasto toimii

bmi.robot löytyy oikeasta paikasta

testi meni läpi

selain avautui oikein

Eli olet saanut asennuksen ja ensimmäisen frontend-testin onnistuneesti valmiiksi.

Se että BMI-sivu avautui hetkeksi on juuri oikea toiminta, koska testissä on:

Sleep    3s
Close Browser
Nyt olet jo tehnyt sen perusvaiheen, joka yleensä tähän tuntitehtävään kuuluu. Seuraava taso on tehdä testistä oikeasti hyödyllinen, eli ei vain avata sivua vaan myös tarkistaa jotain sivulta.

Seuraava järkevä vaihe on esimerkiksi tarkistaa, että sivulla näkyy oikea otsikko. Esimerkiksi näin:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Sivu Aukeaa Ja Otsikko Näkyy
    New Browser    chromium    headless=False
    New Page    file://${CURDIR}/../../bmi.html
    Get Text    h1    ==    BMI-laskuri
    Sleep    3s
    Close Browser
Tuo toimii vain jos sivulla oikeasti on h1, jossa lukee BMI-laskuri.

Vielä parempi seuraava askel olisi testata itse BMI-laskuria:

syötä pituus

syötä paino

paina nappia

tarkista tulos

Siihen tarvitsen nähdä vähän bmi.html-rakennetta, ainakin:

input-kenttien id tai name

napin teksti tai id

mihin tulos ilmestyy

Lähetä seuraavaksi bmi.html:n relevantti osa, niin teen sulle suoraan oikean Robot Framework -testin siihen.


tämä on ns tehtävän palautus ohje yms: Tehtävien palautus
• Tehdyt tehtävät palautetaan Web-sovelluskehitys-kurssin terveyspäiväkirja-projektin
GitHub-kansioon.
• Testejä varten luodaan oma tests -kansio.
• Tulostiedostoja varten luodaan oma outputs-kansio.
• GitHub-kansion README.md -tiedostoon lisätään osio, mihin dokumentoidaan tehdyt
tehtävät ja niiden tekemiseen liittyvät havainnot ja kommentit.
• OMAan palautetaan toimiva hyperlinkki GitHub-kansioon sekä github.io-sivustoon
(tehtävä 8).
• Tehtävät palautetaan osissa lähtituntien yhteydessä tai niiden jälkeen.
• Tehtävien suorittaminen rytmitetään kurssin etenemisen mukaan.
Arviointi ja välipalaute
• Tehtävistä annetaan välipalautetta joko suoraan lähitunneilla tai käyttäen OMAn
tehtävää.
• Tehtävien kokonaissuoritus arvioidaan kurssin lopussa.
• Maksimi pistemäärä on 20 p.
• Myöhäinen palautus vähentää maksimipistemäärää.
• Arvioinnissa kiinnitetään huomiota
• Dokumenttien ja koodien selkeyteen
• Tehtyjen tehtävien määrään ja laatuun

2

Arviointiskaala
- 18–20 p - erinomainen
- 16–17 p - erittäin hyvä
- 14–15 p - hyvä
- 12–13 p - erittäin tyydyttävä
- 10–11 p - tyydyttävä
- alle 10 p - hylätty/täydennettävä
Lisätietoa

Kaikkiin tehtäviin löytyy tarkemmat ohjeet: ohjeet_testaus at sakluk/projekti-
terveyssovelluksen-kehitys

Tehtävät
Lopputilanne
Tavoitteena on, että tehtävien lopuksi jokaisella on omalle harjoitussovellukselle tehtynä
Robot Frameworkilla tehdyt automaatiotestitehtävät, jotka on dokumentoitu käyttäen
Markdown-dokumentteja. Lisäksi automaatiotestien tuottamat raportit ja lokit on suoraan
katselmoitavissa käyttäen github.io-sivustoa.
Tehtävä 1
Asenna omalle koneellesi seuraavat työkalut
- Robot Framework
- Browser Library
- Requests library
- CryptoLibrary
- Robotidy
Dokumentoi asennus. Ks. Tehtävien palautus ja Tehtävä 10.  olenko tehnyt tästä kaiken kun laitoin sinulle 1 tehtävän tarkemman ohjeen silloin aikaisemmin

Melkein kaiken, mutta ei ihan vielä kaikkea mitä palautukseen tarvitaan.

Tehtävä 1:n varsinainen asennusosa olet tehnyt onnistuneesti:

Robot Framework asennettu

Browser Library asennettu

Requests Library asennettu

CryptoLibrary asennettu

Robotidy asennettu

ensimmäinen testi toimii

tests-kansio on tehty

requirements.txt on tehty

.venv on gitignoressa

Mutta palautusohjeen perusteella pelkkä asennus ei riitä, vaan lisäksi pitää olla ainakin dokumentointi kunnossa.

Sinulta puuttuu tai kannattaa vielä varmistaa nämä:

1. outputs-kansio
Palautusohjeessa sanotaan, että tulostiedostoille luodaan oma outputs-kansio.

Sinulla Robot loi tällä hetkellä tiedostot projektin juureen:

output.xml

log.html

report.html

Eli tee outputs-kansio, jos et ole jo tehnyt, ja aja testit jatkossa sinne näin:

robot -d outputs tests/front/bmi.robot
Tuo -d outputs tarkoittaa, että raportit ja lokit menevät outputs-kansioon.

2. README.md-dokumentointi
Palautusohje sanoo selvästi, että README.md:hen lisätään osio, jossa dokumentoidaan:

tehdyt tehtävät

havainnot

kommentit

Eli Tehtävä 1 ei ole täysin valmis ennen kuin olet kirjoittanut README:hen esimerkiksi tällaisen osion:

## Tehtävä 1 – Asennukset

Asensin projektiin seuraavat työkalut:

- Robot Framework
- Browser Library
- Requests Library
- CryptoLibrary
- Robotidy

### Asennusvaiheet
Loin projektin juureen Python-virtuaaliympäristön `.venv` ja aktivoin sen.
Päivitin pipin ja asensin tarvittavat paketit.
Lisäksi suoritin Browser Libraryn alustuksen komennolla `rfbrowser init`.

### Luodut kansiot
- `tests`
- `tests/front`
- `tests/back`
- `outputs`

### Havainnot
Asennuksessa tuli aluksi ongelmia `requirements.txt`-tiedoston kanssa sekä joidenkin pakettien latauksessa, mutta ne ratkesivat myöhemmin.
Ensimmäinen Robot Framework -testi saatiin toimimaan tiedostolle `bmi.html`.

### Testaus
Testasin asennuksia ajamalla ensimmäisen selaintestin tiedostolle `tests/front/bmi.robot`. Testi meni läpi onnistuneesti.
3. Testitulosten sijainti
Koska lopputavoitteessa puhutaan raporteista ja lokeista, kannattaa siirtää ne outputs-kansioon eikä jättää juureen.

Voit halutessasi poistaa juureen syntyneet vanhat:

output.xml

log.html

report.html

ja ajaa testin uudestaan:

robot -d outputs tests/front/bmi.robot
4. GitHubiin push
Tehtävä ei ole palautusmielessä valmis ennen kuin nämä tiedostot ovat GitHubissa:

testikansiot

testitiedosto

README-päivitys

requirements.txt

Mitä sanoisin tilanteestasi nyt
Teknisesti Tehtävä 1 on tehty.
Palautuksen kannalta siitä puuttuu vielä dokumentointi README:hen ja outputs-kansion käyttö.

Eli tee vielä nämä kaksi, niin voit sanoa tehtävän olevan kunnolla valmis:

lisää README:hen Tehtävä 1 -osio

aja testi uudestaan näin:

robot -d outputs tests/front/bmi.robot
Jos haluat, voin kirjoittaa sulle valmiin README-tekstin Tehtävä 1:tä varten suoraan kopioitavaksi.


Lähetetty kuva
 puuttuuko minulta mitä

Hyvä — nyt näkee koko tilanteen 👌
Ja vastaan suoraan:

👉 Olet tosi lähellä valmista — puuttuu 2 pientä mutta tärkeää juttua

✅ Sulla on jo oikein
✔ tests/front/bmi.robot
✔ kaikki kirjastot asennettu
✔ requirements.txt
✔ testi toimii
✔ .gitignore löytyy
✔ README löytyy

👉 nämä = tekninen osuus valmis 💯

❗ PUUTTUU / KORJATTAVAA
1. 🟡 outputs-kansio puuttuu
Nyt sulla on nämä juuritasolla:

output.xml

log.html

report.html

👉 ohje vaatii:

tulostiedostot omaan outputs-kansioon

🔧 Tee näin:
Luo kansio:
mkdir outputs
Aja testi uudestaan:
robot -d outputs tests/front/bmi.robot
👉 Nyt tiedostot menee tänne:

outputs/
 ├── output.xml
 ├── log.html
 └── report.html
2. 🟡 README.md pitää täydentää
👉 Tämä on arvioinnissa TOSI tärkeä

Sinulla on README, mutta varmista että siellä on:

Lisää sinne esim:
## Tehtävä 1 – Asennukset

Asensin projektiin seuraavat työkalut:

- Robot Framework
- Browser Library
- Requests Library
- CryptoLibrary
- Robotidy

### Asennus
Loin Python-virtuaaliympäristön (.venv) ja asensin paketit pipin avulla.
Suoritin myös Browser libraryn alustuksen komennolla `rfbrowser init`.

### Testaus
Tein ensimmäisen testin tiedostoon `tests/front/bmi.robot`, joka avaa bmi.html-sivun selaimessa.

Testi suoritettiin komennolla:
robot -d outputs tests/front/bmi.robot

Havainnot
Alussa oli ongelmia requirements.txt-tiedoston kanssa sekä pip-asennuksissa,
mutta ne ratkesivat. Testi saatiin lopulta toimimaan onnistuneesti.


---

## ❗ BONUS (suositeltava)

Lisää `.gitignore`:en:

```gitignore
outputs/
👉 ettei raportit mene GitHubiin

🧾 Lopputilanne checklist
✔ tests-kansio
✔ bmi.robot
✔ requirements.txt
✔ README dokumentointi
✔ outputs-kansio
✔ testit toimii

👉 silloin Tehtävä 1 = valmis palautukseen ✅

🚀 Seuraava (jos haluat hyvän arvosanan)
👉 nyt kannattaa tehdä vielä:

BMI-laskurin oikea testi (input + nappi + tulos)

Se nostaa pisteitä selvästi 🔥

👉 Kysy seuraavaksi
Sanot vaan:
👉 “tehdään bmi laskuri testi”

→ se on se mikä erottaa hyvän ja erinomaisen arvosanan 💯


Lähetetty kuva
 haittaako että nämä on ns kaksi kertaa

Hyvä havainto — ja hyvä että kysyit 👍

🔍 Tilanne
Sulla on nyt:

✔ Oikea paikka
outputs/
 ├── log.html
 ├── output.xml
 ├── report.html
❌ Väärä (ylimääräinen)
log.html
output.xml
report.html
→ projektin juuressa

❗ Haittaako?
👉 Ei riko mitään
mutta
👉 on epäsiisti ja voi sekoittaa arvioijaa

✅ Suositus (tee tämä)
🔥 Poista juuresta nämä:
log.html

output.xml

report.html

👉 koska oikeat versiot ovat jo outputs-kansiossa

🧹 Lopputulos
projekti/
 ├── outputs/
 │    ├── log.html
 │    ├── output.xml
 │    └── report.html
 ├── tests/
 ├── ...
👉 tämä näyttää siistiltä ja oikealta palautuksessa

⚠️ Miksi niitä tuli kaksi?
Koska ajoit aiemmin:

robot tests/front/bmi.robot
ja myöhemmin:

robot -d outputs tests/front/bmi.robot
👉 eka loi juureen
👉 toinen loi outputs-kansioon

💡 Estä jatkossa
Käytä aina tätä:

robot -d outputs tests/front/bmi.robot
🧾 Bonus (tärkeä GitHubiin)
Varmista .gitignore:

outputs/
👉 ettei raportit mene repoosi

🎯 Yhteenveto
👉 Ei vakava ongelma
👉 Mutta kannattaa siivota pois

🚀 Seuraava askel
Nyt kun kaikki on kunnossa:

👉 tehdään oikea BMI-laskurin testi (se tuo pisteet)

Sanot vaan:
“tehdään bmi laskuri testi” 💪


tehdään bmi laskuri testi

Tehdään. Tarvitsen ensin bmi.html:stä sen osan, jossa on:

pituuden input

painon input

nappi

tuloksen näyttävä elementti

mahdollinen scripti, joka laskee BMI:n

Ilman niitä en voi tehdä varmasti toimivaa testiä, koska Robotissa pitää viitata oikeisiin id-, name-, class- tai tekstiarvoihin.

Lähetä tänne bmi.html:n relevantti osa, niin teen sulle suoraan valmiin tests/front/bmi.robot-testin.


bmi.html näyttää tältä:
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta
      name="description"
      content="On tärkeää että pidät huolta itsestäsi. Seuraa treeniohjeitamme, tarkastele terveyttäsi
      HRV tiedon avulla ja voi kokonaisvaltaisesti hyvin. Suuntaa nyt hyvinvointia ja uutta
      elämääsi kohti."
    />

    <title>Aktiv</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&family=Roboto+Slab:wght@100;200;300;400;500;600;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!---------------->
    <!-- Navigation -->

    <nav>
      <ul>
        <li><a href="" id="logo">Aktiv</a></li>
        <li>
          <a href="index.html" class="navlink">Etusivu</a>
        </li>
        <li>
          <!-- <a href="./bmi/" class="navlink">BMI laskuri</a> -->
          <a href="#" class="navlink selected">Painoindeksilaskuri</a>
        </li>
        <li>
          <a href="viikkotehtavat.html" class="navlink">Viikkotehtävät</a>
        </li>
        <li>
          <a href="paivakirja.html" class="navlink">Hyvinvointipäiväkirja</a>
        </li>
      </ul>
      <div>Hei Käyttäjä:&nbsp;<span class="username">Vieras</span></div>
    </nav>

    <main>
      <div class="card">
        <img src="/images/BMI-UUSI.png" alt="BMI Index chart" style="width: 100%" />
        <h2>Painoindeksilaskuri / BMI-laskuri</h2>
        <p class="description">
          Painoindeksilaskurilla voit laskea pituuden ja painon perustella
          painoindeksin (BMI, Body Mass Index).
        </p>

        <form action="">
          <label for="weight">Anna painosi:</label>
          <input type="text" id="weight" name="weight" placeholder="kg" />
          <label for="height">Anna pituutesi:</label>
          <input type="text" id="height" name="height" placeholder="cm" />
          <button type="submit" class="btn calculate">Laske indeksi</button>
        </form>

        <section class="bmi-table">
          <p>Mittaustuloksesi: <span class="bmi-score">0</span></p>

          <table id="bmiTbl" class="table table-bordered">
            <tbody>
              <tr class="bmi0-19">
                <td>Alipaino</td>
                <td>0 - 18.9</td>
              </tr>
              <tr class="bmi19-25">
                <td>Normaali paino</td>
                <td>19 - 24.9</td>
              </tr>
              <tr class="bmi25-30">
                <td>Ylipaino</td>
                <td>25.0 - 40.0 tai enemmän</td>
              </tr>
            </tbody>
          </table>

          <p>
            〽️ Analyysi:
            <span class="analysis">Tähän saat analyysin BMI tuloksestasi</span>
          </p>
        </section>
      </div>
    </main>
  </body>
  <script type="module" src="/src/js/bmi.js"></script>
  <script type="module" src="/src/js/loggedUser.js"></script>
</html>

Hyvä, tästä saa jo tehtyä oikean testin.

Yksi tärkeä huomio ensin: koska sivu käyttää module-skriptiä

<script type="module" src="/src/js/bmi.js"></script>
BMI-laskenta toimii luotettavasti vain, jos ajat sivua palvelimen kautta, et file://-polulla. Eli tätä testiä varten kannattaa käyttää sitä osoitetta, joka sinulla jo oli aiemmin auki, esimerkiksi:

http://localhost:4000/bmi.html
tai Viten kanssa usein:

http://localhost:5173/bmi.html
Valitse se portti, jolla sivusi oikeasti aukeaa selaimessa.

Laita nyt tests/front/bmi.robot-tiedostoon tämä:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Laskuri Laskee Oikein
    New Browser    chromium    headless=False
    New Page    http://localhost:4000/bmi.html

    Fill Text    id=weight    70
    Fill Text    id=height    170
    Click    text=Laske indeksi

    Get Text    css=.bmi-score    ==    24.2

    Close Browser
Tässä testissä:

paino = 70

pituus = 170 cm

BMI = 70 / (1.70 * 1.70) = 24.2

Aja testi näin:

robot -d outputs tests/front/bmi.robot
Jos tuo menee läpi, sinulla on jo paljon parempi testi kuin pelkkä sivun avaus.

Todennäköisesti haluat vielä tarkistaa myös analyysin. HTML:n perusteella analyysi tulee tähän:

<span class="analysis">...</span>
Koska emme vielä tiedä tarkkaa analyysitekstiä, aloitetaan ensin vain BMI-luvun tarkistuksella. Se on varmin.

Jos haluat tehdä vähän laajemman version heti, voit käyttää tätä:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Laskuri Laskee Oikein
    New Browser    chromium    headless=False
    New Page    http://localhost:4000/bmi.html

    Get Text    h2    ==    Painoindeksilaskuri / BMI-laskuri
    Fill Text    id=weight    70
    Fill Text    id=height    170
    Click    text=Laske indeksi
    Get Text    css=.bmi-score    ==    24.2

    Close Browser
Jos testi epäonnistuu painikkeen klikkauksessa, syy voi olla se, että nappi on type="submit" ja lomake käyttäytyy vähän eri tavalla. Silloin korjataan testiä sen mukaan.

Seuraava hyvä vaihe tämän jälkeen on tehdä vielä toinen testi, esimerkiksi:

alipaino

normaali paino

ylipaino

Esimerkiksi 50 kg / 170 cm pitäisi antaa noin 17.3.


*** Settings ***
Library    Browser

*** Test Cases ***
BMI Laskuri Laskee Oikein
    New Browser    chromium    headless=False
    New Page    http://localhost:4000/bmi.html

    Fill Text    id=weight    70
    Fill Text    id=height    170
    Click    text=Laske indeksi

    Get Text    css=.bmi-score    ==    24.2

    Close Browser laitanko siis tämän nykyisen tekstin tilalle

👉 Kyllä — korvaa nykyinen bmi.robot sisältö tällä 👍

✅ Tee näin
Avaa:

tests/front/bmi.robot
Poista kaikki vanha sisältö

Liitä tämä tilalle:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Laskuri Laskee Oikein
    New Browser    chromium    headless=False
    New Page    http://localhost:4000/bmi.html

    Fill Text    id=weight    70
    Fill Text    id=height    170
    Click    text=Laske indeksi

    Get Text    css=.bmi-score    ==    24.2

    Close Browser
▶️ Aja testi
robot -d outputs tests/front/bmi.robot
⚠️ Jos testi FAILaa (todennäköistä pienellä säädöllä)
Mahdollisia syitä:

1. ❗ Sivun osoite väärä
Varmista selaimessa:

http://localhost:4000/bmi.html
👉 jos ei aukea → käytä oikeaa porttia (esim. 5173)

2. ❗ BMI arvo ei ole täsmälleen 24.2
Jos tulee esim:

24.22

24.183

👉 silloin korjataan testiä (esim. contains tai regex)

3. ❗ Klikkaus ei toimi
Koska nappi on submit, voi joskus tarvita:

Click    css=.calculate
🔥 Jos menee PASS
👉 tämä on jo oikea testiautomaatio, ei pelkkä demo

→ nostaa arvosanaa selvästi

👉 Lähetä seuraavaksi
PASS tai FAIL

tai virhe

→ korjaan sen suoraan (tästä tulee 100% toimiva 💪)


(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> robot -d outputs tests/front/bmi.robot
==============================================================================
Bmi

==============================================================================
BMI Laskuri Laskee Oikein

BMI Laskuri Laskee Oikein
              | FAIL |
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4000/bmi.html
Call log:
  - navigating to "http://localhost:4000/bmi.html", waiting until "load"
------------------------------------------------------------------------------
Bmi
              | FAIL |
1 test, 0 passed, 1 failed
==============================================================================
Output:  C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\outputs\output.xml
Log:     C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\outputs\log.html
Report:  C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\outputs\report.html
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite>

Hyvä — testi itsessään on kunnossa. Ongelma on vain tämä:

👉 http://localhost:4000/bmi.html ei ole juuri nyt käynnissä.

Virhe ERR_CONNECTION_REFUSED tarkoittaa, että selaintesti yrittää avata palvelinta, mutta mitään ei kuuntele portissa 4000.

Tee näin
Avaa uusi terminaali projektin juuressa ja käynnistä Vite:

npm run dev
Sitten katso mitä osoitetta se näyttää. Se on yleensä jotain kuten:

http://localhost:5173/
Kun se on käynnissä, avaa selaimessa:

http://localhost:5173/bmi.html
Jos sivu aukeaa, vaihda bmi.robot-tiedostoon tuo oikea osoite.

Todennäköisesti näin:

*** Settings ***
Library    Browser

*** Test Cases ***
BMI Laskuri Laskee Oikein
    New Browser    chromium    headless=False
    New Page    http://localhost:5173/bmi.html

    Fill Text    id=weight    70
    Fill Text    id=height    170
    Click    text=Laske indeksi

    Get Text    css=.bmi-score    ==    24.2

    Close Browser
Sitten aja toisessa terminaalissa testi:

robot -d outputs tests/front/bmi.robot
Tärkeä käytäntö
Sinulla pitää olla:

yhdessä terminaalissa npm run dev käynnissä

toisessa terminaalissa Robot-testi

Miksi näin?
Koska bmi.html käyttää tätä:

<script type="module" src="/src/js/bmi.js"></script>
Se tarvitsee palvelimen, eikä toimi kunnolla pelkällä irrallisella tiedostolla.

Lähetä seuraavaksi se osoite, jonka npm run dev näyttää, niin annan sinulle täsmälleen oikean New Page -rivin.


Lähetetty kuva

Nyt ongelma on selvä: uudessa terminaalissa .venv ei ole aktiivinen, joten robot-komentoa ei löydy.

Vasen terminaali on oikein, siellä Vite pyörii. Oikeassa terminaalissa pitää ensin aktivoida virtuaaliympäristö.

Kirjoita oikeaan terminaaliin näin:

.venv\Scripts\activate
Kun rivin alkuun tulee (.venv), aja sitten:

robot -d outputs tests/front/bmi.robot
Eli työnkulku on nyt tämä:

Terminaali 1

npm run dev
Terminaali 2

.venv\Scripts\activate
robot -d outputs tests/front/bmi.robot
Ja koska Vite näyttää osoitteeksi http://localhost:5173/, sun bmi.robot-tiedoston rivi

New Page    http://localhost:5173/bmi.html
on nyt oikea.

Pieni lisähuomio .gitignore:sta: sulla on nyt siellä myös

*.html
Se on vaarallinen, koska se voi ignoroida myös sun omat sivut kuten bmi.html, index.html, login.html jne. Poista siis nämä rivit .gitignore:sta:

*.log
*.xml
*.html
ja jätä mieluummin vain tämä:

.venv/
outputs/
playwright-log.txt
Koska outputs/ jo peittää raportit, erillisiä *.html-ignoreja ei tarvita.

Eli seuraavat kaksi korjausta nyt:

aktivoi .venv oikeassa terminaalissa ennen robot-komentoa

poista .gitignore:sta *.html, *.xml, *.log

Lähetä seuraava testiajon tulos, niin katsotaan meneekö BMI-testi läpi.


PS C:\Users\Käyttäjä\Desktop\HTML + CSS\.venv\Scripts\activateprojekti-vite>
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite> robot -d outputs tests/front/bmi.robot
==============================================================================
Bmi


==============================================================================
BMI Laskuri Laskee Oikein


BMI Laskuri Laskee Oikein
          | PASS |
Output:  C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\outputs\output.xml
Log:     C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\outputs\log.html
Report:  C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite\outputs\report.html
(.venv) PS C:\Users\Käyttäjä\Desktop\HTML + CSS\webkehitys\k2026-hyte-projekti-vite>

Hienoa — nyt se meni läpi oikein. ✅

Sinulla on nyt kasassa:

asennukset tehty

tests-kansio tehty

outputs-kansio käytössä

toimiva bmi.robot

selainpohjainen BMI-laskuritesti toimii

raportit menevät oikeaan paikkaan

Tämä on jo selvästi enemmän kuin pelkkä asennusvaihe. Käytännössä sinulla on nyt myös ensimmäinen oikea frontend-automaatiotesti.

Seuraavaksi suosittelen tekemään kaksi asiaa, jotta tämä näyttää palautuksessa hyvältä.

Ensimmäinen: päivitä README.md. Voit lisätä sinne suoraan tämän:

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


Toinen: varmista, että `.gitignore` on siisti. Sen hyvä sisältö tähän kohtaan olisi esimerkiksi:

```gitignore
.venv/
outputs/
playwright-log.txt
Ja poista sieltä nämä, jos ne ovat vielä mukana:

*.html
*.xml
*.log
koska ne voivat ignoroida vääriä tiedostoja.

Tässä vaiheessa sanoisin, että:
Tehtävä 1 on tehty ja dokumentointia vaille valmis, tai valmis jos README on jo päivitetty.

Seuraava järkevä askel kurssia varten olisi tehdä toinen testi, esimerkiksi:

alipaino

ylipaino

virheellinen syöte

Se näyttää palautuksessa vahvemmalta kuin yksi ainoa testi.

Kirjoita vain: tehdään toinen bmi-testi, niin teen sinulle seuraavan valmiin testin.


voitko laittaa readme tekstiin vielä että tekoälyä on käytetty apuna

Hyvä idea — tuo on itse asiassa plussaa 👍

Lisätään se luonnollisesti README:hen ilman että se kuulostaa oudolta.

👉 Tässä päivitetty versio, jonka voit kopioida suoraan:

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
Tehtävän tekemisessä hyödynnettiin tekoälyä (ChatGPT) apuna erityisesti asennusvaiheiden, virhetilanteiden ratkaisemisen sekä ensimmäisten testien muodostamisen tukena. Kaikki ratkaisut on kuitenkin ymmärretty ja sovellettu omaan projektiin.


---

👉 Tämä on hyvä, koska:
- rehellinen
- ei kuulosta siltä että vain kopioitu
- näyttää että ymmärrät mitä teit

---

## 🎯 Nyt tilanne

👉 Tehtävä 1 = **valmis palautukseen** ✅

---

Jos haluat varmistaa paremman arvosanan:

👉 seuraavaksi kannattaa tehdä **toinen testi (edge case)**

Sanot vaan:
**“tehdään toinen bmi testi”** 💪

## Tehtävä 1 – Asennukset

Projektia varten asennettiin seuraavat työkalut:

- Robot Framework
- Browser Library
- Requests Library
- CryptoLibrary
- Robotidy

### Toteutus
Projektin juureen luotiin Python-virtuaaliympäristö .venv, jonka jälkeen pip päivitettiin ja tarvittavat kirjastot asennettiin. Browser Library alustettiin komennolla rfbrowser init.

Projektin juureen luotiin myös kansiot:
- tests
- tests/front
- tests/back
- outputs

### Testaus
Asennusten toiminta testattiin tekemällä Robot Framework -testi tiedostolle bmi.html.

Testitiedosto:
- tests/front/bmi.robot

Testi avaa BMI-laskurisivun selaimessa, syöttää painon ja pituuden, painaa laskentapainiketta ja tarkistaa, että tulokseksi tulee oikea BMI-arvo.

Testi suoritettiin komennolla:

bash
robot -d outputs tests/front/bmi.robot  eihän tässä lue tekoälyn käytöstä mitään? ja siis olisiko testissä pitänyt tapahtua jotain muuta kuin sivun aukeaminen tai en ole varma enkö vaan nähnyt mitään

Olet oikeassa — siitä puuttuu vielä se tekoälykohta, ja koodiblokki jäi myös kesken.

Tässä korjattu README-teksti kokonaan:

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

### Testaus
Asennusten toiminta testattiin tekemällä Robot Framework -testi tiedostolle `bmi.html`.

Testitiedosto:
- `tests/front/bmi.robot`

Testi avaa BMI-laskurisivun selaimessa, syöttää painon ja pituuden, painaa laskentapainiketta ja tarkistaa, että tulokseksi tulee oikea BMI-arvo.

Testi suoritettiin komennolla:

```bash
robot -d outputs tests/front/bmi.robot

# Havainnot
Asennuksen aikana tuli aluksi haasteita requirements.txt-tiedoston muodostuksessa, Robot Framework -tiedoston sisennyksissä sekä paikallisen palvelimen osoitteessa. Ongelmien jälkeen testi saatiin toimimaan onnistuneesti Vite-kehityspalvelimen kautta.

# Tekoälyn käyttö
Tehtävän tekemisessä hyödynnettiin tekoälyä (ChatGPT) apuna erityisesti virhetilanteiden ratkaisemisen sekä ensimmäisten testien muodostamisen tukena. Ratkaisut käytiin kuitenkin läpi ja sovellettiin omaan projektiin.

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
