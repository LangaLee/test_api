const { getWaiters } = require("./models");
const fetchWaiters = async (req, res) => {
  try {
    const response = await getWaiters();
    const waiter = response;
    res.status(200).send(waiter);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchWaiters };
