const router = require('express').Router();

const {
  emailValidation,
  nameAndPasswordValidation,
} = require('../middlewares/users.middlewares');

const {
  userRegisterController,
} = require('../controllers/users.controller');

const { recipesRegisterController } = require('../controllers/recipes.controller');

const { loginController } = require('../controllers/login.controller');
const { loginValidation } = require('../middlewares/login.middleware');
const { recipeValidation } = require('../middlewares/recipes.middleware');
const auth = require('../middlewares/auth');
const invalidToken = require('../middlewares/invalidToken');

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

router.post(
  '/recipes',
  recipeValidation,
  auth,
  invalidToken,
  recipesRegisterController,
);

module.exports = router;
