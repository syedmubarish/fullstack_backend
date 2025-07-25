const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const StudentModel = sequelize.define(
  "student",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull : false
    },
    password: {
      type: DataTypes.STRING,
      allowNull :false
    },
    course: {
      type: DataTypes.STRING,
      defaultValue : "No course"
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { StudentModel };
