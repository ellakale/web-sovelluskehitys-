import express from 'express';
import {
  deleteEntry,
  getEntries,
  getEntryById,
  postEntry,
  putEntry,
} from '../controllers/entry-controller.js';
import {authenticateToken} from '../middlewares/authentication.js';
import { entryValidationRules } from '../validators/entry-validator.js';
import validate from '../middlewares/validate.js';

const entryRouter = express.Router();

// Päiväkirjamerkintöjen listaus ja uuden merkinnän lisäys
entryRouter
  .route('/')
  .get(authenticateToken, getEntries)
  .post(authenticateToken, entryValidationRules, validate, postEntry);

//Yksittäisen päiväkirjamerkinnän haku, päivitys ja poisto
entryRouter
  .route('/:id')
  .get(authenticateToken,getEntryById)
  .put(authenticateToken, entryValidationRules, validate, putEntry)
  .delete(authenticateToken, deleteEntry);

export default entryRouter;
