import { fetchData } from './fetch.js';

const diaryContainer = document.querySelector('.diary-card-area');

// Dialog
const dialog = document.querySelector('.diary_dialog');
const closeButton = document.querySelector('.diary_dialog button');

// "Close" button closes the dialog
if (closeButton) {
  closeButton.addEventListener('click', () => {
    dialog.close();
  });
}

// Hae päiväkirjamerkinnät
const getEntries = async () => {
  console.log('getEntries käynnistyi');
  const url = 'http://localhost:3000/api/entries';
  let headers = {};
  let token = localStorage.getItem('token');

  console.log('Token:', token);

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const options = {
    headers: headers,
  };

  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Virhe päiväkirjamerkintöjen haussa:', response.error);
    diaryContainer.innerHTML = `<p>Virhe: ${response.error}</p>`;
    return;
  }

  if (!Array.isArray(response) || response.length === 0) {
    diaryContainer.innerHTML =
      '<p>Sinulla ei ole vielä hyvinvointimerkintöjä.</p>';
    return;
  }

  diaryContainer.innerHTML = '';

  response.forEach((entry) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardDiary = document.createElement('div');
    cardDiary.classList.add('card-text');
    cardDiary.innerHTML = `
      <p><strong>Päivämäärä:</strong> ${new Date(entry.entry_date).toLocaleDateString('fi-FI')}</p>
      <p><strong>Vointi:</strong> <span class="mood">${entry.mood}</span></p>
      <p><strong>Paino:</strong> ${entry.weight} kg</p>
      <p><strong>Uni:</strong> ${entry.sleep_hours} h</p>
      <p><strong>Muistiinpanot:</strong> ${entry.notes}</p>
    `;

    const openCard = document.createElement('button');
    openCard.classList.add('dialogButton');
    openCard.textContent = 'Näytä tiedot';

    openCard.addEventListener('click', () => {
  if (dialog) {
    dialog.showModal();

    dialog.querySelector('.diary_id').innerHTML = `
      <p><strong>ID:</strong> ${entry.entry_id}</p>
      <p><strong>Päivämäärä:</strong> ${new Date(entry.entry_date).toLocaleDateString('fi-FI')}</p>
      <p><strong>Vointi:</strong> ${entry.mood}</p>
      <p><strong>Paino:</strong> ${entry.weight} kg</p>
      <p><strong>Uni:</strong> ${entry.sleep_hours} h</p>
      <p><strong>Muistiinpanot:</strong> ${entry.notes}</p>
    `;
  }
});
const deleteButton = document.createElement('button');
deleteButton.classList.add('deleteButton');
deleteButton.textContent = 'Poista merkintä';

deleteButton.addEventListener('click', () => {
  deleteEntryById(entry.entry_id);
});


    card.appendChild(cardDiary);
    card.appendChild(openCard);
    card.appendChild(deleteButton)
    diaryContainer.appendChild(card);
  });
};

const deleteEntryById = async (entryId) => {
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Et ole kirjautunut sisään.');
    return;
  }

  const confirmed = confirm('Haluatko varmasti poistaa tämän merkinnän?');
  if (!confirmed) {
    return;
  }

  const url = `http://localhost:3000/api/entries/${entryId}`;

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Virhe merkinnän poistossa:', response.error);
    alert(`Virhe: ${response.error}`);
    return;
  }

  alert('Merkintä poistettu onnistuneesti.');
  await getEntries();
};

// Lisää uusi päiväkirjamerkintä
const addEntry = async (event) => {
  event.preventDefault();
  console.log('addEntry käynnistyi');

  const token = localStorage.getItem('token');
  const message = document.querySelector('.entry-message');

  //Haetaan formista arvot
  const entry_date = document.querySelector('#entry_date').value;
  const mood = document.querySelector('#mood').value.trim();
  const weight = Number(document.querySelector('#weight').value);
  const sleep_hours = Number(document.querySelector('#sleep_hours').value);
  const notes = document.querySelector('#notes').value.trim();

  //Body backendille
  const bodyData = {
    entry_date,
    mood,
    weight,
    sleep_hours,
    notes,
  };



  const url = 'http://localhost:3000/api/entries';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyData),
  };

  console.log('Lähettävä body:',bodyData);
  console.log('Request options:', options);

  const response = await fetchData(url, options);

  console.log('Server response:',response);

  if (response.error) {
    console.error('Virhe merkinnän tallennuksessa:', response.error);
    if (message) {
      message.textContent = `Virhe: ${response.error}`;
    }
    return;
  }

  if (message) {
    message.textContent = 'Merkintä tallennettu onnistuneesti.';
  }

  document.querySelector('.entry-form').reset();

  await getEntries();
};

export { getEntries, addEntry };
