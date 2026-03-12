import { validationResult } from 'express-validator';

const validate = (req, res, next) => {
  //tarkistaa requestin validointivirheet
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    error.statusCode = 400;
    return next(error);
  }

  next();
};

export default validate;
