const { StudentModel } = require("../models/studentModel");

async function getAllStudents(req, res, next) {
  try {
    const students = await StudentModel.findAll({
      attributes: { exclude: ["password"] },
    });

    if (students.length === 0) {
      return res.status(200).json({ msg: "No students" });
    }

    return res.status(200).json({ students });
  } catch (error) {
    return res.status(500).json({ msg: "Fetching of student details failed" });
  }
}

module.exports = getAllStudents;
