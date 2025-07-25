const bcrypt = require("bcrypt");
const { StudentModel } = require("../models/studentModel");
const jwt = require("jsonwebtoken");
const { validationResult, matchedData } = require("express-validator");

async function loginStudent(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result });
  }
  console.log(matchedData(req));
  const {username,password} = matchedData(req)
  try {
    const user = await StudentModel.findOne({ where: { username: username } });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const isPasswordRight = await bcrypt.compare(password, user.password);
    if (!isPasswordRight) {
      return res.status(401).json({ msg: "Username or Password is wrong!!" });
    }

    const token = jwt.sign({ id: user.id }, process.env.secret, {
      expiresIn: "1h",
    });

    return res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ msg: "Login failed" });
  }
}

module.exports = { loginStudent };
