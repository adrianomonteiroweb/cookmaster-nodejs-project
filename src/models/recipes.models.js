const { ObjectId } = require('mongodb');

const connection = require('./connection');

const recipesRegisterModel = async (body) => {
  const db = await connection();
  const { insertedId } = await db.collection('recipes').insertOne(body);
  return insertedId;
};

const recipesSearchModel = async () => {
  try {
    const db = await connection();

    const recipes = await db
      .collection('recipes').find().toArray();

      return recipes || null;
  } catch (error) {
    return error.message;
  }
};

const recipeByIdModel = async (id) => {
  try {
    const db = await connection();

    const recipe = await db
      .collection('recipes').findOne({ _id: ObjectId(id) });
    // console.log(recipe);
    return recipe || null;
  } catch (error) {
    return error.message;
  }
};

const recipeUpdateModel = async (id, recipe) => {
  try {
    const db = await connection();

    const update = await db
    .collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { ...recipe } });
    console.log(update);
    return update || null;
  } catch (error) {
    return error.message;
  }
};

const recipeDeleteModel = async (id) => {
  const db = await connection();
  
  await db
  .collection('recipes')
  .deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  recipesRegisterModel,
  recipesSearchModel,
  recipeByIdModel,
  recipeUpdateModel,
  recipeDeleteModel,
};
