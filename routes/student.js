const express = require("express");
const createStudent = require("../controllers/createStudentCtrl");
const { loginStudent } = require("../controllers/loginStudentCtrl");
const { checkSchema } = require("express-validator");
const createStudentSchema = require("../validation/createStudentSchema");
const loginStudentSchema = require("../validation/loginStudentSchema");
const getAllStudents = require("../controllers/getAllStudentsCtrl");
const getStudent = require("../controllers/getStudentCtrl");
const { param } = require("express-validator");

const router = express.Router();

router.post("/signup", checkSchema(createStudentSchema), createStudent);

router.post("/login", checkSchema(loginStudentSchema), loginStudent);

router.get("/students", getAllStudents);

router.get(
  "/students/:id",
  param("id").isNumeric().withMessage("Id should be number"),
  getStudent
);

module.exports = router;
