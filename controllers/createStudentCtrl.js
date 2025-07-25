const bcrypt = require("bcrypt");
const { StudentModel } = require("../models/studentModel");
const { validationResult, matchedData } = require("express-validator");

async function createStudent(req, res, next) {
  const result = validationResult(req)
  console.log(result);
  
  const { username, password, course } = req.body;
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
