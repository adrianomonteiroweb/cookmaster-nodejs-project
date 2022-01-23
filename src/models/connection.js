const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_NAME = 'Cookmaster';
const MONGODB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/${DB_NAME}`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = async () => MongoClient.connect(MONGODB_URL, OPTIONS)
  .then((conn) => conn.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = connection;
