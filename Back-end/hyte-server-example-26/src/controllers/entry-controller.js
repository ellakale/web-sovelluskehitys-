import {
  //listAllEntries,
  findEntryById,
  addEntry,
  listAllEntriesByUserId,
  removeEntryById,
  updateEntryById,
} from '../models/entry-model.js';

// Palauttaa vain kirjautuneen käyttäjän omat päiväkirjamerkinnät
const getEntries = async (req, res) => {
  // haetaan kaikkien käyttäjien merkinnät
  //const result = await listAllEntries();
  // haetaan kirjautuneen (token) käyttäjän omat merkinnät
  const result = await listAllEntriesByUserId(req.user.user_id);
  if (!result.error) {
    res.json(result);
  } else {
    res.status(500);
    res.json(result);
  }
};

const getEntryById = async (req, res) => {
  const entry = await findEntryById(req.params.id);
  if (entry) {
    res.json(entry);
  } else {
    res.sendStatus(404);
  }
};

const postEntry = async (req, res, next) => {
  const user_id = req.user.user_id;

  try {
    const result = await addEntry({ user_id, ...req.body });

    if (result.error) {
      const error = new Error(result.error);
      error.statusCode = 500;
      return next(error);
    }

    res.status(201).json({
      message: 'Uusi hyvinvointimerkintä tallennettu.',
      ...result,
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

const putEntry = async (req, res, next) => {
  const user_id = req.user.user_id;
  const entry_id = req.params.id;

  try {
    const result = await updateEntryById(entry_id, user_id, req.body);

    if (result.error) {
      const error = new Error(result.error);
      error.statusCode = 500;
      return next(error);
    }

    if (result > 0) {
      return res.json({ message: 'Merkintä päivitetty onnistuneesti.' });
    }

    const error = new Error(
      'Merkintää ei löytynyt tai sinulla ei ole oikeutta muokata sitä.'
    );
    error.statusCode = 404;
    return next(error);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

const deleteEntry = async (req, res) => {
  const affectedRows = await removeEntryById(req.params.id, req.user.user_id);
  if (affectedRows > 0) {
    res.json({message: 'Merkintä poistettu onnistuneesti.'});
  } else {
    res.status(404).json({message: 'Merkintää ei löytynyt.'});
  }
};

export {getEntries, getEntryById, postEntry, putEntry, deleteEntry};
