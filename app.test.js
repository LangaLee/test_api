const request = require("supertest");
const app = require("./app");
const db = require("./db/connection");

describe("testing database", () => {
  test("200: /api/waiters", async () => {
    const response = await request(app).get("/api/waiters");
    console.log(response.data);
  });
});
