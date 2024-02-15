const express = require("express");
const { fetchWaiters } = require("./MVC/controller");
const app = express();

app.get("/api/waiters", fetchWaiters);

module.exports = app;
