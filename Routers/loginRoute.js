const express=require('express')
const loginroute=express.Router();

const LOGINPOST=require('../controllars/logincontroler');
loginroute.post('/',LOGINPOST)

module.exports=loginroute


