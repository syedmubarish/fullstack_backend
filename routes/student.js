const express = require("express");
const createStudent = require("../controllers/createStudentCtrl");
const { loginStudent } = require("../controllers/loginStudentCtrl");
const { checkSchema } = require("express-validator");
const createStudentSchema = require("../validation/createStudentSchema");


const router = express.Router();

router.post("/signup",checkSchema(createStudentSchema), createStudent);

router.post("/login", loginStudent);

module.exports = router;
