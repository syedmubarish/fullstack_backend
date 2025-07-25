const express = require("express");
const createStudent = require("../controllers/createStudentCtrl");
const { loginStudent } = require("../controllers/loginStudentCtrl");
const { checkSchema } = require("express-validator");
const createStudentSchema = require("../validation/createStudentSchema");
const loginStudentSchema = require("../validation/loginStudentSchema");
const getAllStudents = require("../controllers/getAllStudentsCtrl");


const router = express.Router();

router.post("/signup",checkSchema(createStudentSchema), createStudent);

router.post("/login", checkSchema(loginStudentSchema),loginStudent);

router.get("/students",getAllStudents)

module.exports = router;
