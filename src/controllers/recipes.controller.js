const {
  recipesRegisterService,
  recipesSearchService,
} = require('../services/recipes.service');
const {
  created,
  success,
  badRequest,
} = require('../utils/dictionary/statusCodes');

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

module.exports = {
  recipesRegisterController,
  recipesSearchController,
};
