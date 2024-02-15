const { config } = require("dotenv");
const { MongoClient } = require("mongodb");
const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

// if (process.env.NODE_ENV === "test") {
config.connectionString = process.env.DATABASE_URL;
config.max = 2;
// }

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

const client = new MongoClient(config.connectionString);

module.exports = {
  client,
  //   connectToDb: () => {
  //     MongoClient.connect(config.connectionString).then((client) => {
  //       dbConnection = client.db();
  //     });
  //   },
  //   getDb: () => dbConnection,
};
