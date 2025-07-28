const { validationResult, matchedData } = require("express-validator");
const { StudentModel } = require("../models/studentModel");
const bcrypt = require("bcrypt");

async function updateStudent(req, res, next) {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ error: result });
    }

    const sanitisedData = matchedData(req)

    
    

    const { id } = sanitisedData;

    if (req.user.id != id) {
      return res.sendStatus(403);
    }

    const student = await StudentModel.findByPk(id);
    if (!student) {
      return res.sendStatus(404);
    }

    if("password" in sanitisedData){
      
      const hashedPassword = await bcrypt.hash(sanitisedData.password,10)
      sanitisedData.password = hashedPassword
    }

    await StudentModel.update(sanitisedData, {
      where: { id },
    });

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}
module.exports = updateStudent;

