const mongoose =require('mongoose')
const servicemodel=require('../models/servicemodel');
const joi=require('joi');

//getallservices
const getservice=async(req,res)=>{
    try {
       const getal=await servicemodel.find();
       res.status(200).send(getal) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getone
const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await servicemodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//service valdation
const servalidation=(servicevali)=>{
    const servcie=joi.object({
       title:joi.string().required(),
       description:joi.string().required(),
       icon:joi.string().required(),
    })
    return servcie.validate(servicevali)
}
///post
const POST=async(req,res)=>{
    const{err}=servalidation(req.body)
    if(err){
        res.status(400).send(err.message)
    }
        try {
          const services= new servicemodel(req.body) 
           await services.save();
           res.status(200).send({message:"successfuly posted",sarvice:services})
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    //puts
    const update=async(req,res)=>{
        try {
           const {id}=req.params
           const updat= await servicemodel.findByIdAndUpdate(id,req.body,{new:true}) ;
           res.status(200).send("successfuly updated")
        } catch (error) {
         res.status(400).send(error.message)   
        }
    }
    //delete
    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await servicemodel.findByIdAndDelete(id)
           res.status(200).send('succesfuly deleted') 
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    module.exports={getones,getservice,POST,update,deletes}