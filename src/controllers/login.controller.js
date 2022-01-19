const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { loginService } = require('../services/login.service');

const ERROR_LOGIN = { message: '' };

const bodyValidation = (body) =>
  Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(body);

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = bodyValidation(req.body);

  if (error) return next(error);

  const payload = { email, password };
  const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
  
  const result = await loginService(req.body);

  return result ? res.status(200).json(token) : res.status(422).json(ERROR_LOGIN);
};

module.exports = {
  loginController,
};
