const status = require('http-status-codes').StatusCodes;

const {
  userRegisterServices,
} = require('../services/users.service');

const userRegisterController = async (req, res) => {
  let data;
  try {
    data = await userRegisterServices(req.body);
  } catch (error) {
    return res.status().json();
  }
  delete data.password;
  return data
  ? res.status(status.CREATED).json({ user: { ...data, role: 'user' } })
  : res.status(status.UNPROCESSABLE_ENTITY).json({ message: 'Erro na conexão!' });
};

module.exports = {
  userRegisterController,
};
