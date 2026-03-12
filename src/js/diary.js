import '../css/style.css';
import '../css/mobile.css';
import '../css/diary-card.css';

import { getEntries, addEntry } from './entries.js';

const getEntriesBtn = document.querySelector('.get_entries');
if (getEntriesBtn) {
  getEntriesBtn.addEventListener('click', getEntries);
}

const entryForm = document.querySelector('.entry-form');
if (entryForm) {
  entryForm.addEventListener('submit', addEntry);
}
