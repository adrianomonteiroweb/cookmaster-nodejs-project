const {
  recipesRegisterService,
  recipesSearchService,
  recipeByIdService,
  recipeUpdateService,
} = require('../services/recipes.service');
const {
  created,
  success,
  badRequest,
  notFound,
} = require('../utils/dictionary/statusCodes');
const { notFoundRecipe } = require('../utils/dictionary/statusMessages');

const recipesRegisterController = async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;
  const { _id } = req.user;
  const recipe = {
    name,
    ingredients,
    preparation,
    userId: _id,
  };
  let result;
  try {
    result = await recipesRegisterService(recipe);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
  
  return !result.code ? res.status(created).json(result)
  : res.status(badRequest).json({ message: result.message });
};

const recipesSearchController = async (_req, res, next) => {
  try {
    const recipes = await recipesSearchService();

    return res.status(success).json(recipes);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const recipeByIdController = async (req, res, next) => {
  const { id } = req.params;
  let recipe;
  try {
    recipe = await recipeByIdService(id);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
  // console.log(recipe);
  return recipe.code
  ? res.status(notFound).json({ message: notFoundRecipe })
  : res.status(success).json(recipe);
};

const recipeUpdateController = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;

  let recipe;
  try {
    recipe = await recipeUpdateService(id, _id, req.body);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
  // console.log(recipe);
  return recipe.code
  ? res.status(notFound).json({ message: notFoundRecipe })
  : res.status(success).json(recipe);
};

module.exports = {
  recipesRegisterController,
  recipesSearchController,
  recipeByIdController,
  recipeUpdateController,
};
