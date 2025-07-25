const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const StudentModel = sequelize.define(
  "student",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    course: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { StudentModel };
