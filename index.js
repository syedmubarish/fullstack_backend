const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const { sequelize, dbAuth } = require("./config/db");
const { StudentModel } = require("./models/studentModel");
const createStudent = require("./controllers/createStudentCtrl");
const { loginStudent } = require("./controllers/loginStudentCtrl");
const app = express();

app.use(express.json())

dbAuth();
StudentModel.sync({})

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/signup",createStudent)

app.post("/login",loginStudent)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port:${process.env.PORT}`);
});
