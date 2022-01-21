// const status = require('http-status-codes').StatusCodes;

const { recipesRegisterService } = require('../services/recipes.service');

const recipesRegisterController = async (req, res) => {
  try {
    const { name, ingredients, preparation, userId } = req.body;
   
    const createResult = await recipesRegisterService({ name, ingredients, preparation, userId });

    if (createResult.error) {
      return res.status(400).json({ message: createResult.error.details[0].message }); 
    }

    return res.status(201).json(createResult);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  recipesRegisterController,
};
