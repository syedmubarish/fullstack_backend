const { validationResult, matchedData } = require("express-validator");
const { StudentModel } = require("../models/studentModel");

async function getStudent(req, res, next) {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result });
    }

    const santisedId = matchedData(req).id;

    
    let student;

    if (req.user.id != santisedId) {
      student = await StudentModel.findOne({
        where: { id: santisedId },
        attributes: { exclude: ["password"] },
      });
    } else {
      student = await StudentModel.findOne({ where: { id: santisedId } });
    }

    if (!student) {
      return res.sendStatus(404);
    }
    return res.status(200).send(student);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = getStudent;
