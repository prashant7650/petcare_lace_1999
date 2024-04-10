const express = require("express");
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");

const {userModel}=require("../model/user.model")

const userRouter=express.Router();
const app=express()
userRouter.post("/signup", async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const userExists=await userModel.findOne({email});
        if(userExists){
            return res.status(400).json({message:"user is already exists"})
        }

        const hash=await bcrypt.hash(password,8)
        const user=new userModel({name,email,password:hash})
        const userdata =await user.save();

       if(userdata){
        res.status(200).json({"msg":"registration succesfull"})
       }else{
        res.status(200).json({"msg":"registration failled"})

       }
       
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})
module.exports={userRouter}