import promisePool from '../utils/database.js';

const findUserById = async (id) => {
  try {
    const sql =
      'SELECT user_id, username, email, created_at, user_level FROM Users WHERE user_id = ?';
    const [rows] = await promisePool.execute(sql, [id]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const updateUserById = async (id, user) => {
  const {username, email} = user;

  try {
    const sql = `
      UPDATE Users
      SET username = ?, email = ?
      WHERE user_id = ?
    `;
    const [result] = await promisePool.execute(sql, [username, email, id]);
    return result.affectedRows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const removeUserById = async (id) => {
  try {
    const sql = 'DELETE FROM Users WHERE user_id = ?';
    const [result] = await promisePool.execute(sql, [id]);
    return result.affectedRows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

// GET /api/users - list all users
const listAllUsers = async () => {
  try {
    const sql = 'SELECT username, created_at FROM Users';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

// POST /api/users - add a new user
const addUser = async (user) => {
  const {username, password, email} = user;
  const sql = `INSERT INTO Users (username, password, email)
               VALUES (?, ?, ?)`;
  const params = [username, password, email];
  try {
    const result = await promisePool.execute(sql, params);
    //console.log('insert result', result);
    return {user_id: result[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};


const findUserByUsername = async (username) => {
  try {
    const sql = 'SELECT * FROM Users WHERE username = ?';
    const [rows] = await promisePool.execute(sql, [username]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {
  findUserByUsername,
  addUser,
  listAllUsers,
  findUserById,
  updateUserById,
  removeUserById,
};
