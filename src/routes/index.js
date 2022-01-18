const router = require('express').Router();

const {
  emailValidation,
  nameAndPasswordValidation,
} = require('../middlewares/users.middlewares');

const {
  userRegisterController,
} = require('../controllers/users.controller');

router.post(
  '/users',
  nameAndPasswordValidation,
  emailValidation,
  userRegisterController,
);

module.exports = router;
