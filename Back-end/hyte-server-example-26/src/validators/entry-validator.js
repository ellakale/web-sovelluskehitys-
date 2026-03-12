import { body } from 'express-validator';

const entryValidationRules = [
  body('entry_date')
    .notEmpty()
    .withMessage('Päivämäärä on pakollinen')
    .isDate()
    .withMessage('Päivämäärän täytyy olla oikea päivämäärä'),

  body('mood')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Voinnin pituus tulee olla 2-50 merkkiä'),

  body('weight')
    .optional()
    .isFloat({ min: 1, max: 500 })
    .withMessage('Painon täytyy olla numero'),

  body('sleep_hours')
    .optional()
    .isInt({ min: 0, max: 24 })
    .withMessage('Unen määrän täytyy olla 0-24 tuntia'),

  body('notes')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Muistiinpanot voivat olla max 500 merkkiä')
];

export { entryValidationRules };
