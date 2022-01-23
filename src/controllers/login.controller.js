const { success } = require('../utils/dictionary/statusCodes');
const { loginService } = require('../services/login.service');

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  let token;
  try {
    token = await loginService(email, password);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
  // console.log(token);
  return token.code
  ? res.status(token.code).json({ message: token.message })
  : res.status(success).json(token);
};

module.exports = {
  loginController,
};
