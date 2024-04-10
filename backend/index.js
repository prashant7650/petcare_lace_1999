const express = require("express")
const {connection}=require("./db")
const {userRouter}=require("./Route/user.route")
const app=express()

app.use(express.json())
 
app.get("/",(req,res)=>{
    res.send("welcome to the petcare website")
})
app.use("users",userRouter)

app.listen(8500, async(req,res)=>{
    try{
        await connection
        console.log("connected to the database")
        console.log("port is running on server 8500")
    }catch(err){
        console.log(err)
        console.log("cannot connected")
    }
    console.log("port is running on server 8500")
})