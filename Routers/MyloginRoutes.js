const express=require('express')
const {Mylogin}=require('../controllars/MyloginControler')
const logrout=express.Router();
logrout.post('/',Mylogin)

module.exports=logrout