const express = require("express")
const createStudent = require("../controllers/createStudentCtrl");
const { loginStudent } = require("../controllers/loginStudentCtrl");

const router = express.Router()



router.post("/signup", createStudent);

router.post("/login", loginStudent);

module.exports = router