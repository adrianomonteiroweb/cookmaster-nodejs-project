const { loginModel } = require('../models/login.models');

const loginService = async (body) => {
  const login = await loginModel(body) || null;
  
  return login;
};

module.exports = {
  loginService,
};
