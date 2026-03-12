import jwt from 'jsonwebtoken';
import 'dotenv/config';

//Middleware joka tarkistaa JWT-tokenin
const authenticateToken = (req, res, next) => {
  //// Authorization header: Bearer TOKEN
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  //console.log('token', token);
  if (token == undefined) {
    return res.sendStatus(401);
  }
  try {
    //Tallennetaan tokenista purettu käyttäjä req.user-muuttujaan
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log('token verification failed', error);
    res.status(403).send({message: 'Token ei ole kelvollinen'});
  }
};

export {authenticateToken};
