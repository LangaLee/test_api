const db = require("../db/connection");
const getWaiters = async () => {
  try {
    const result = await db.query({});
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getWaiters };
