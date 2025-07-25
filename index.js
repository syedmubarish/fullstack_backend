const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const { sequelize, dbAuth } = require("./config/db");
const { StudentModel } = require("./models/studentModel");
const app = express();

dbAuth();
StudentModel.sync({})

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port:${process.env.PORT}`);
});
