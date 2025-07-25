const bcrypt = require("bcrypt");
const { StudentModel } = require("../models/studentModel");
const { validationResult, matchedData } = require("express-validator");

async function createStudent(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result });
  }
  console.log(matchedData(req));

  const { username, password, course } = matchedData(req);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = await StudentModel.create({
      username,
      password: hashedPassword,
      course,
    });
    res.status(201).json({ msg: "Student created succesfully" });
  } catch (error) {
    res.status(500).json({ msg: "Student creation failed" });
  }
}

module.exports = createStudent;
