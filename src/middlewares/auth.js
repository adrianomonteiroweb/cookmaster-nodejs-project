const jwt = require('jsonwebtoken');

const errors = require('../utils/functions/erros');
const {
  infoToken,
  notFoundToken,
} = require('../utils/dictionary/statusMessages');
const { unauthorized } = require('../utils/dictionary/statusCodes');

const secret = 'secret';

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return errors(unauthorized, notFoundToken);
  
  try {
    const { data } = jwt.verify(token, secret);
    req.user = data;
    // console.log(data);
    return next();
  } catch (error) {
    error.message = infoToken;
    error.status = unauthorized;
    
    return next(error);
  }
};