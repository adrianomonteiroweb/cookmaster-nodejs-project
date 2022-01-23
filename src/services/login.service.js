const jwt = require('jsonwebtoken');

const { findByEmailModel } = require('../models/users.models');

const { unauthorized } = require('../utils/dictionary/statusCodes');
const {
  fieldsRequired,
  incorrectEntries,
} = require('../utils/dictionary/statusMessages');
const errors = require('../utils/functions/erros');
const { requiredSchema, formatSchema } = require('./schemas');

const secret = 'secret';

const expires = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const loginService = async (email, password) => {
  const { error } = requiredSchema.validate({ email, password });

  if (error) return errors(unauthorized, fieldsRequired);
  
  const format = formatSchema.validate({ email, password });

  const user = await findByEmailModel(email);
  
  if (!user || format.error || user.password !== password) {
    return errors(unauthorized, incorrectEntries);
  }

  const { password: passBD, ...userWithoutPassword } = user;

  const token = jwt.sign({ data: userWithoutPassword }, secret, expires);

  return { token };
};

module.exports = {
  loginService,
};
