const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const { sequelize, dbAuth } = require("./config/db");
const app = express();

dbAuth();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port:${process.env.PORT}`);
});
