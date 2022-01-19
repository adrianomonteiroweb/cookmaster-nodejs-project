const connection = require('./connection');

const loginModel = async (body) => {
  const { email, password } = body;
  try {
    const db = await connection();
    const login = await db.collection('users').findOne({ email, password });

    return login || null;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  loginModel,
};
