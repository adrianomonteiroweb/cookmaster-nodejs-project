module.exports = (err, _req, res, _next) => {
  if (err.message === 'invalid token' || 'invalid signature') {
    return res.status(401).json({ message: 'jwt malformed' });
  }

  return res.status(500).end();
};