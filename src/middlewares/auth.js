const jwt = require('jsonwebtoken');

const secret = 'secret';

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
  
    if (!token) return res.status(401).json({ error: 'Token not found' });
  
    const { data: { _id: id, role } } = jwt.verify(token, secret);
    
    req.body.userId = id;
    req.body.role = role;
  
    next();
    } catch (err) {
      next(err);
    }
};

module.exports = tokenValidation;
