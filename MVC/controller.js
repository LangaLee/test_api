const { getWaiters } = require("./models");
const fetchWaiters = async (req, res) => {
  try {
    const response = await getWaiters();
    res.status(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchWaiters };
