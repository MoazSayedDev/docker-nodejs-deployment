const express = require("express");
const pg = require("pg");

const { Pool, Client } = pg;

const app = express();
const PORT = process.env.PORT || 5000;

// postgres connection
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;

const connectionString = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@postgres/${POSTGRES_DB}`;

const pool = new Pool({
  connectionString,
});

pool
  .connect()
  .then((client) => {
    console.log("Connected");
    client.release();
  })
  .catch((error) => {
    console.log("Not connected", error);
  });

app.get("/", (req, res) => res.send("<h1>moaz sayed</h1>"));

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
