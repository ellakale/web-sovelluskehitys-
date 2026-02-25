import { fetchData } from './fetch.js';

const diaryContainer = document.querySelector('.diary-card-area');

const getEntries = async (event) => {
  const url = 'http://localhost:3000/api/entries';
  let headers = {};
  let token = localStorage.getItem('token');
  console.log(token);
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
    console.error('Error login in:', response.error);
    return;
  }

  if (response.message) {
    console.log(response.message, 'success');
  }

  console.log(response);

  // Luodaan tässä lennossa tarvittavat kortit
  diaryContainer.innerHTML = '';

  response.forEach((entry) => {
    // Luodaan aina yksittäinen kortti per rivi eli entry
    console.log(entry);

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<span>${entry.notes}</span>`;

    const cardDiary = document.createElement('div');
    cardDiary.classList.add('card-text');
    cardDiary.innerHTML = `
      <p><strong>Date:</strong> ${entry.entry_date}</p>
      <p><strong>Mood:</strong> ${entry.mood}</p>
      <p><strong>Weight:</strong> ${entry.weight} kg</p>
      <p><strong>Sleep:</strong> ${entry.sleep_hours} hours</p>
      <p><strong>Notes:</strong> ${entry.notes}</p>
    `;

    card.appendChild(cardDiary);
    diaryContainer.appendChild(card);
  });
};

export { getEntries };
