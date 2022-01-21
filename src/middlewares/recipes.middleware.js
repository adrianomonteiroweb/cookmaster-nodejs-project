const ERROR_ENTRIES = { message: 'Invalid entries. Try again.' };

const recipeValidation = async (req, res, next) => {
  const { name, preparation, ingredients } = req.body;

  if (!name || !preparation || !ingredients) return res.status(400).json(ERROR_ENTRIES);

  next();
};

module.exports = {
  recipeValidation,
};
