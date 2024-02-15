const express = require("express");
const { fetchWaiters } = require("./MVC/controller");
const app = express();

app.listen(10000, () => {
  console.log("we are live");
});

app.get("/api/waiters", fetchWaiters);

module.exports = app;
