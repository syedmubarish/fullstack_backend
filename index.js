const express = require("express")
const dotenv = require("dotenv")


const app = express()
dotenv.config({ quiet: true })

app.get("/",(req,res)=>{
    res.sendStatus(200)
})

app.listen(process.env.PORT ,()=>{
    console.log(`Listening on port:${process.env.PORT}`);
})