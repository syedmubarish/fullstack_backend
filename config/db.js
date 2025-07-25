const Sequelize = require("sequelize")


const sequelize = new Sequelize('cruddb','root',process.env.sqlpassword,{
    dialect : 'mysql'
})



sequelize.authenticate()
.then(()=>{
    console.log("Connected to crud db");
})
.catch((err)=>{
    console.log("Connection failed :",err);
})