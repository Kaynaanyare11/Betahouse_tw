//const express=require('express');
// all croud oparations
const imagemodel=require('../models/imaggemdel');
const joi=require('joi');

//getby all
const getimages=async(req,res)=>{
  try {
   const imageslis= await imagemodel.find().populate({
      path:"guryaha_ID",
      model:"Betahouse",
      select:"imagepreview parking deposit rent"
  })
  res.json(imageslis);
  } catch (error) {
   res.status(400).send(error.message)
  }
 }

//get bye id
const getbyid=async(req,res)=>{
try {
   const {id}=req.params
   const getbyone= await imagemodel.findById(id);
   res.json(getbyone);
} catch (error) {
   res.status(400).send(error.message)
}
 }
 //validation
 const imgvalidation=(imgvalide)=>{
    const imgval=joi.object({
        guryaha_ID:joi.string(),
        images_URL:joi.string().required()
    })
    return imgval.validate(imgvalide)
 }
 //post images
 const postimages=async(req,res)=>{
    const{err}=imgvalidation(req.body)
       if(err){
        res.json(err.message)
       }
    try {
       const posimg= new imagemodel(req.body) 
       await posimg.save();
       res.status(200).send({message:'successfully aded !!',img:posimg})
    } catch (error) {
       res.status(400).send(error.message) 
    }
 }
 //update
 const imgupde=async(req,res)=>{
   try {
      const{id}=req.params
      const imgupd= await imagemodel.findByIdAndUpdate(id,req.body,{new:true})
      res.status(200).send('successfully updated !!')
   } catch (error) {
      res.status(400).send(error.message)
   }
 }
 ///dlete
 const Deletimg=async(req,res)=>{
  try {
   const{id}=req.params
   const deletig= await imagemodel.findByIdAndDelete(id)
   res.status(200).send('successfully deleted !!')
  } catch (error) {
   res.status(400).send(error.message)
  }
 }

 module.exports={getimages,getbyid,postimages,imgupde,Deletimg}