const connect = require('./connection');

const registerUserModel = async (name, email, password, role) => {
  const db = await connect();
  const { insertedId } = await db
    .collection('users')
    .insertOne({ name, email, password, role });

  return insertedId;
};

const findByNameModel = async (name) => {
  const db = await connect();
  const user = await db.collection('users').findOne({ name });
  return user;
};

const findByEmailModel = async (email) => {
  const db = await connect();
  const user = await db.collection('users').findOne({ email });
  return user;
};

module.exports = {
  registerUserModel,
  findByNameModel,
  findByEmailModel,
};
