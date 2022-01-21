const connection = require('./connection');

const recipesRegisterModel = async (body) => {
    try {
      const db = await connection();

      const recipes = await db
      .collection('recipes').insertOne(body);
      console.log(recipes);
      return recipes || null;
    } catch (error) {
      return error.message;
    }
};

module.exports = {
  recipesRegisterModel,
};
