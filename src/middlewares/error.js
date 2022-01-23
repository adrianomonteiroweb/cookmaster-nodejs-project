const { serverError } = require('../utils/dictionary/statusCodes');
const { serverErrorMsg } = require('../utils/dictionary/statusMessages');

module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  console.log(err.status);
  return res.status(serverError).json({ message: serverErrorMsg });
};