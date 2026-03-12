import '../css/api.css';
import { fetchData } from './fetch.js';

console.log('Aktiv login script käynnistyi');

// ------ REGISTER ------

const registerUser = async (event) => {
  event.preventDefault();

  // Haetaan oikea formi
  const registerForm = document.querySelector('.registerForm');

  // Haetaan formista arvot
  const username = registerForm.querySelector('#username').value.trim();
  const password = registerForm.querySelector('#password').value.trim();
  const email = registerForm.querySelector('#email').value.trim();


  const bodyData = {
    username: username,
    password: password,
    email: email,
  };


  const url = 'http://localhost:3000/api/users';


  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  };


  // Hakee datan
  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Virhe käyttäjän luomisessa:', response.error);
    return;
  }

  console.log('Käyttäjä luotu:', response);
  registerForm.reset(); // formi tyhjennetään
};

//------ LOGIN ------

const loginUser = async (event) => {
  event.preventDefault();

  // Haetaan oikea formi
  const loginForm = document.querySelector('.loginForm');

  // Haetaan formista arvot
  const username = loginForm.querySelector('input[name=username]').value;
  const password = loginForm.querySelector('input[name=password]').value;

  // Luodaan body lähetystä varten taustapalvelun vaatimaan muotoon
  const bodyData = {
    username: username,
    password: password,
  };

  // Endpoint
  const url = 'http://localhost:3000/api/users/login';

  // Options
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  };


  // Hae data
  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Kirjautuminen epäonnistui:', response.error);
    return;
  }

  if (response.message) {
    console.log('Kirjautuminen onnistui');

    //Tallennetaan token selaimeen
    localStorage.setItem('token', response.token);

    //Tallennetaan käyttäjän nimi
    localStorage.setItem('name', response.user.username);

    document.getElementById(
      'loginResponse'
    ).innerText = 'Kirjautuminen onnistui! Siirrytään etusivulle...';

    //Ohjataan etusivulle
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  }

  loginForm.reset(); // tyhjennetään formi
};

// ------ EVENT LISTENERS ------

const registerForm = document.querySelector('.registerForm');
registerForm.addEventListener('submit', registerUser);

const loginForm = document.querySelector('.loginForm');
loginForm.addEventListener('submit', loginUser);


