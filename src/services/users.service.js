const {
  userRegisterModel, srcUserByEmailModel,
} = require('../models/users.models');

const userRegisterServices = async (body) => {
  const register = await userRegisterModel(body) || null;
  return register;
};

const srcUserByEmailService = async (email) => {
  const user = await srcUserByEmailModel(email) || null;
  return user;
};

module.exports = {
  userRegisterServices,
  srcUserByEmailService,
};
