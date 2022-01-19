const router = require('express').Router();

const {
  emailValidation,
  nameAndPasswordValidation,
} = require('../middlewares/users.middlewares');

const {
  userRegisterController,
} = require('../controllers/users.controller');

const {
  loginController,
} = require('../controllers/login.controller');
const { loginValidation } = require('../middlewares/login.middleware');

router.post(
  '/users',
  nameAndPasswordValidation,
  emailValidation,
  userRegisterController,
);

router.post(
  '/login',
  loginValidation,
  loginController,
);

module.exports = router;
