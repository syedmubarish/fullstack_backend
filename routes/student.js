const express = require("express");
const createStudent = require("../controllers/createStudentCtrl");
const { loginStudent } = require("../controllers/loginStudentCtrl");
const { checkSchema, body } = require("express-validator");
const createStudentSchema = require("../validation/createStudentSchema");
const loginStudentSchema = require("../validation/loginStudentSchema");
const updateStudentSchema = require("../validation/updateStudentSchema");
const getAllStudents = require("../controllers/getAllStudentsCtrl");
const getStudent = require("../controllers/getStudentCtrl");
const { param } = require("express-validator");
const verifyToken = require("../middlewares/jwtAuthMiddleware");
const updateStudent = require("../controllers/updateStudentCtrl");
const deleteStudent = require("../controllers/deleteStudentCtrl");

const router = express.Router();

router.post("/signup", checkSchema(createStudentSchema), createStudent);

router.post("/login", checkSchema(loginStudentSchema), loginStudent);

router.get("/students", getAllStudents);

router.get(
  "/students/:id",
  param("id").isNumeric().withMessage("Id should be number"),
  verifyToken,
  getStudent
);

router.patch(
  "/students/:id",
  verifyToken,
  checkSchema(updateStudentSchema),
  updateStudent
);

router.delete(
  "/students/:id",
  param("id").isNumeric().withMessage("Id should be number"),
  verifyToken,
  deleteStudent
);

module.exports = router;
