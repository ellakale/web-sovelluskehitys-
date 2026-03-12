import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  addUser,
  findUserByUsername,
  listAllUsers,
  findUserById,
  updateUserById,
  removeUserById,
} from '../models/user-model.js';

// Palauttaa kaikki käyttäjät
const getUsers = async (req, res) => {
  const users = await listAllUsers();
  res.json(users);
};

// Luo uuden käyttäjän ja tallentaa salasanan hash-muodossa
const postUser = async (req, res) => {
  const newUser = req.body;

  if (!(newUser.username && newUser.password && newUser.email)) {
    return res.status(400).json({error: 'required fields missing'});
  }

  const hash = await bcrypt.hash(newUser.password, 10);
  newUser.password = hash;

  const newUserId = await addUser(newUser);

  res.status(201).json({
    message: 'new user added',
    user_id: newUserId,
  });
};

// Tarkistaa käyttäjän tunnukset ja palauttaa JWT-tokenin
const postLogin = async (req, res) => {
  try {
    const {username, password} = req.body;

    const user = await findUserByUsername(username);

    if (user) {
      const passwordOk = await bcrypt.compare(password, user.password);

      if (passwordOk) {
        delete user.password;

        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN,
        });

        return res.json({message: 'login ok', user, token});
      }

      return res.status(403).json({error: 'invalid password'});
    }

    return res.status(404).json({error: 'user not found'});
  } catch (error) {
    console.error('postLogin error:', error);
    return res.status(500).json({error: error.message});
  }
};

// Palauttaa kirjautuneen käyttäjän tiedot tokenin perusteella
const getMe = (req, res) => {
  res.json(req.user);
};

// Hakee käyttäjän id:n perusteella
const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);

  if (user?.error) {
    return res.status(500).json(user);
  }

  if (!user) {
    return res.status(404).json({message: 'user not found'});
  }

  res.json(user);
};

// Päivittää käyttäjän tiedot (vain oma käyttäjä)
const putUserById = async (req, res) => {
  const requestedUserId = Number(req.params.id);
  const loggedInUserId = Number(req.user.user_id);

  if (requestedUserId !== loggedInUserId) {
    return res
      .status(403)
      .json({message: 'you can update only your own user'});
  }

  const {username, email} = req.body;

  if (!username || !email) {
    return res
      .status(400)
      .json({message: 'username and email are required'});
  }

  const result = await updateUserById(requestedUserId, {username, email});

  if (result?.error) {
    return res.status(500).json(result);
  }

  if (result > 0) {
    return res.json({message: 'user updated successfully'});
  }

  return res.status(404).json({message: 'user not found'});
};

// Poistaa käyttäjän (vain oma käyttäjä)
const deleteUserById = async (req, res) => {
  const requestedUserId = Number(req.params.id);
  const loggedInUserId = Number(req.user.user_id);

  if (requestedUserId !== loggedInUserId) {
    return res
      .status(403)
      .json({message: 'you can delete only your own account'});
  }

  const result = await removeUserById(requestedUserId);

  if (result?.error) {
    return res.status(500).json(result);
  }

  if (result > 0) {
    return res.json({message: 'user deleted successfully'});
  }

  return res.status(404).json({message: 'user not found'});
};

export {
  getUsers,
  postUser,
  postLogin,
  getMe,
  getUserById,
  putUserById,
  deleteUserById,
};
