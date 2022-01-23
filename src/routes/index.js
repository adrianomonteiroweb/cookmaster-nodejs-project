const router = require('express').Router();

const {
  userRegisterController,
} = require('../controllers/users.controller');

const {
  recipesRegisterController,
  recipesSearchController,
  recipeByIdController,
  recipeUpdateController,
} = require('../controllers/recipes.controller');

const { loginController } = require('../controllers/login.controller');
const auth = require('../middlewares/auth');

router.post(
  '/users',
  userRegisterController,
);

router.post(
  '/login',
  loginController,
);

router.post(
  '/recipes',
  auth,
  recipesRegisterController,
);

router.get(
  '/recipes',
  recipesSearchController,
);

router.get(
  '/recipes/:id',
  recipeByIdController,
);

router.put(
  '/recipes/:id',
  auth,
  recipeUpdateController,
);

module.exports = router;
