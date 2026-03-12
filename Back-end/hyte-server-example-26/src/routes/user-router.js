import express from 'express';
import {
  getMe,
  getUsers,
  postLogin,
  postUser,
  getUserById,
  putUserById,
  deleteUserById,
} from '../controllers/user-controller.js';
import {authenticateToken} from '../middlewares/authentication.js';

const userRouter = express.Router();

// Käyttäjien listaus ja uuden käyttäjän luonti
userRouter
  .route('/')
  .get(authenticateToken, getUsers)
  .post(postUser);

// Kirjautuminen palauttaa JWT-tokenin
userRouter.post('/login', postLogin);

// Palauttaa kirjautuneen käyttäjän tiedot tokenin perusteella
userRouter.get('/me', authenticateToken, getMe);

// Yksittäisen käyttäjän käsittely
userRouter
  .route('/:id')
  .get(authenticateToken, getUserById)
  .put(authenticateToken, putUserById)
  .delete(authenticateToken, deleteUserById);

export default userRouter;
