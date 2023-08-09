
const express=require('express');
const users=express.Router();
const {Getusers,Getoneuser,useradd,useredit,userdelete}=require('../controllars/usercontroler');
const Authentications=require('./Authenticationmiddleware')
users.get('/',Authentications(['admin']),Getusers)
users.get('/:id',Getoneuser)

users.post('/',Authentications(["CustamerCare"]),useradd)
//users.post('/singup',)
users.put('/:id',useredit)
users.delete('/:id',userdelete)
//login
// loginroute.post('/',LOGINPOST)
module.exports=users