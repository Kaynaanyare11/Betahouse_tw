const usermodel=require('../models/usermodel');
const joi=require('joi')

//get all users
const Getusers=async(req,res)=>{
  try {
    const userlis= await usermodel.find()
    res.status(200).send(userlis);
  } catch (error) {
    res.status(400).send(error.message)
  }
}
//get ome
const Getoneuser=async(req,res)=>{
    try {
        const {id}=req.params
    const userlis= await usermodel.findById(id)
    res.status(200).send(userlis);
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//uservalidation
const uservalidation=(userval)=>{
    const uservalide=joi.object({
       name:joi.string().required(),
      email:joi.string().email().required(),
      password:joi.string().required(),
       role:joi.string(),
       status:joi.string()
    })
    return uservalide.validate(userval);
}
//post
const useradd=async(req,res)=>{
    const{error}=uservalidation(req.body)
    if(error){
        res.json(error.message)
    }
    try {
       const userad= new usermodel(req.body)
       await userad.save()
       res.status(200).send({message:'successfuly posted',users:userad})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///update
const useredit= async(req,res)=>{
  try {
    const{id}=req.params
    const edit= await usermodel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send('succesfuly updated')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
///delete
const userdelete= async(req,res)=>{
   try {
    const{id}=req.params
    const dele= await usermodel.findByIdAndDelete(id)
    res.status(200).send('succesfuly deleted')
   } catch (error) {
    res.status(400).send(error.message)
   }
}
//login

module.exports={Getusers,Getoneuser,useradd,useredit,userdelete}