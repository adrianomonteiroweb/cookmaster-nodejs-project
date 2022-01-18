const { srcUserByEmailService } = require('../services/users.service');

const ERROR_ENTRIES = { message: 'Invalid entries. Try again.' };
const ERROR_EXISTS = { message: 'Email already registered' };

const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  const regex = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;

  if (!email || !regex.test(email)) return res.status(400).json(ERROR_ENTRIES);

  next();
};

const nameAndPasswordValidation = async (req, res, next) => {
  const { name, password, email } = req.body;

  if (!name || !password) return res.status(400).json(ERROR_ENTRIES);

  const user = await srcUserByEmailService(email);
  console.log(user);
  if (user) return res.status(409).json(ERROR_EXISTS);
  next();
};

module.exports = {
  emailValidation,
  nameAndPasswordValidation,
};
