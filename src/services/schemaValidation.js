const Joi = require('@hapi/joi');

const message = 'Invalid entries. Try again.';

module.exports = Joi.object({
  name: Joi.string().required().messages({ 'any.required': message }),
  ingredients: Joi.string().required().messages({ 'any.required': message }),
  preparation: Joi.string().required().messages({ 'any.required': message }),
  userId: Joi.any(),
});
