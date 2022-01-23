const { userRegisterServices } = require('../services/users.service');
const { created } = require('../utils/dictionary/statusCodes');

const userRegisterController = async (req, res, next) => {
  const { name, email, password } = req.body;
  const { role } = req;
  let user;
  try {
    user = await userRegisterServices(name, email, password, role);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
  // console.log(user.message);
  return user.code
  ? res.status(user.code).json({ message: user.message })
  : res.status(created).json(user);
};

module.exports = {
  userRegisterController,
};
