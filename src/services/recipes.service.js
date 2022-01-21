const { recipesRegisterModel } = require('../models/recipes.models');
const schemaValidation = require('./schemaValidation');

const recipesRegisterService = async (body) => {
  const check = schemaValidation.validate(body);
  if (check.error) return check;

  const createResult = await recipesRegisterModel(body);

  return { recipe: { ...createResult.ops[0] } };
};

module.exports = {
  recipesRegisterService,
};
