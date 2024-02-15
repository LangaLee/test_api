// const { connectToDb, getDb } = require("../db/connection");
// let db;
// connectToDb(() => {
//   if (!error) {
//     db = getDb();
//   }
// });
const { client } = require("../db/connection");

const getWaiters = async () => {
  try {
    const database = client.db("testing_mongo");
    const items = database.collection("user_1_items");
    const result = await items.findOne({ name: "Bender" });
    return result;
  } finally {
    await client.close();
  }
};
// https://www.youtube.com/watch?v=084rmLU1UgA&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&index=25
module.exports = { getWaiters };
