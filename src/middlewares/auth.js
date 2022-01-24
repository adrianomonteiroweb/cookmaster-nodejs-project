const jwt = require('jsonwebtoken');

const errors = require('../utils/functions/erros');
const {
  infoToken,
  notFoundToken,
} = require('../utils/dictionary/statusMessages');
const { unauthorized } = require('../utils/dictionary/statusCodes');

const secret = 'secret';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  const { code, message } = errors(unauthorized, notFoundToken);
  
  if (!token) return res.status(code).json({ message });
  
  try {
    const { data } = jwt.verify(token, secret);
    req.user = data;
    // console.log('try');
    return next();
  } catch (error) {
    error.message = infoToken;
    error.status = unauthorized;
    // console.log('catch');
    return next(error);
  }
};