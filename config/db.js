const Sequelize = require("sequelize");

const sequelize = new Sequelize("cruddb", "root", process.env.sqlpassword, {
  dialect: "mysql",
});

function dbAuth() {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to crud db");
    })
    .catch((err) => {
      console.log("Connection failed :", err);
    });
}

module.exports = { sequelize, dbAuth };
