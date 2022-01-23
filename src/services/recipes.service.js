const { recipesRegisterModel, recipesSearchModel } = require('../models/recipes.models');

const { badRequest, notFound } = require('../utils/dictionary/statusCodes');
const {
  invalidEntries,
  notFoundMsg,
} = require('../utils/dictionary/statusMessages');
const errors = require('../utils/functions/erros');
const { recipeSchema } = require('./schemas');

const recipesRegisterService = async (body) => {
  const { name, ingredients, preparation } = body;
  const { error } = recipeSchema.validate({ name, ingredients, preparation });
  
  if (error) return errors(badRequest, invalidEntries);
  
  const id = await recipesRegisterModel(body);

  const recipe = { _id: id, ...body };
  return { recipe };
};

const recipesSearchService = async () => {
  const recipes = await recipesSearchModel();
  if (!recipes) return errors(notFound, notFoundMsg);

  return recipes;
};

module.exports = {
  recipesRegisterService,
  recipesSearchService,
};
