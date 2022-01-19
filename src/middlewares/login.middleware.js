const { loginService } = require('../services/login.service');

const ERROR_FIELD = { message: 'All fields must be filled' };
const ERROR_LOGIN = { message: 'Incorrect username or password' };

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(401).json(ERROR_FIELD);

  const regex = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;

  const user = await loginService(req.body);
  
  if (!regex.test(email) || !user) return res.status(401).json(ERROR_LOGIN);

  next();
};

module.exports = {
  loginValidation,
};
