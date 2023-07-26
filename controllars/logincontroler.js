 //const express=require('express');
 const usermodel=require('../models/usermodel');


 const jwt=require('jsonwebtoken');
 const bcrypt= require('bcrypt')
// const Erroshandle=require('errorhandler');

 const LOGINPOST=async(req,res)=>{
    try{
        const loginData= await usermodel.findOne({email:req.body.email})
        if(!loginData) return res.json("invalid username")
        const checkposword= await bcrypt.compare(req.body.password,loginData.password)
        if(!checkposword) return res.send(
            {status:"erorr",
        message:"invalid username or passsword"})

        const token=jwt.sign({
            id:loginData._id,
            email:loginData.email,
            password:loginData.password
            
        },"superkey")
res.header("token",token).json({
    status:"success",
    message:"successfully loged",
    token:token
})

    }catch(erorr){
res.status(400).send(erorr.message)
    }
 }

module.exports=LOGINPOST