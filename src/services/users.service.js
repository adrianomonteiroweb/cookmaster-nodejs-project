const Joi = require('joi');

const { badRequest, conflict } = require('../utils/dictionary/statusCodes');
const errors = require('../utils/functions/erros');
const { registerUserModel, findByEmailModel } = require('../models/users.models');
const {
  invalidEntries,
  alreadyRegistered,
} = require('../utils/dictionary/statusMessages');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().required(),
});

const userRegisterServices = async (name, email, password, userRole) => {
  const { error } = userSchema.validate({ name, email, password });

  if (error) return errors(badRequest, invalidEntries);

  const emailExists = await findByEmailModel(email);

  if (emailExists) return errors(conflict, alreadyRegistered);
  
  const role = userRole ? 'admin' : 'user';

  const userId = await registerUserModel(name, email, password, role);

  const user = {
    _id: userId,
    name,
    email,
    role,
  };

  return { user };
};

module.exports = {
  userRegisterServices,
};
