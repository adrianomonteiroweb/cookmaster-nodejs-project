const connection = require('./connection');

const userRegisterModel = async (body) => {
  try {
    const db = await connection();
    const user = await db.collection('users').insertOne(body);

    return user ? user.ops.pop() : null;
  } catch (error) {
    return error.message;
  }
};

const srcUserByEmailModel = async (email) => {
  try {
    const db = await connection();
    const user = await db.collection('users').findOne({ email });

    return user || null;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userRegisterModel,
  srcUserByEmailModel,
};
