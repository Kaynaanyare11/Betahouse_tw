const { validate } = require('../models/housemodel')
const shirkadamodel=require('../models/herosection_shrkadmodel')
const joi= require('joi')
//get al
const GET=async(req,res)=>{
try {
    const orgnizationDAta= await shirkadamodel.find().sort({_id: -1}).limit(1)
    res.status(200).send(orgnizationDAta)
} catch (error) {
    res.status(400).send(error.message)
}
}
//getbyone
const GETONE= async(req,res)=>{
    try {
        const{id}=req.params
        const getone= await shirkadamodel.findById(id)
        res.status(200).send(getone)
    } catch (error) {
     res.status(400).send(error.message)   
    }
}

//validTION
const shirkadvalidation=(shirkadvalida)=>{
    const org=joi.object({
        name:joi.string().required(),
        location:joi.string().required(),
        logo:joi.string().required(),
        address:joi.string().required(),
        email:joi.string().required(),
        phone:joi.string().required(),
        facebook: joi.string().required(),
        tiktok:joi.string().required(),
        twitter:joi.string().required(),
        Instigram:joi.string().required(),
        her_title:joi.string().required(),
        hero_img:joi.string().required(),
        hero_description:joi.string().required(),
        footer_Text:joi.string().required()
    })
    return org.validate(shirkadvalida)
}
//post
const POST=async(req,res)=>{
try {
        
const{err}=shirkadvalidation(req.body)
if(err) return  res.status(400).send(err.message)
const getshirkada= await shirkadamodel.find().sort({_id: -1}).limit(1)
if(getshirkada){
    const shirkadaUpdate= await shirkadamodel.findByIdAndUpdate(getshirkada[0]._id,{
        name:req.body.name,
        location:req.body.location,
        logo:req.body.logo,
        address:req.address,
        email:req.body.email,
        phone:req.body.phone,
        facebook:req.body.facebook,
        tiktok:req.body.tiktok,
        twitter:req.body.twitter,
        Instigram:req.body.Instigram,
        her_title:req.body.her_title,
        hero_img:req.body.hero_img,
        hero_description:req.body.hero_description,
        footer_Text:req.body.footer_Text
    },{new:true})
    res.status(200).send({shirkadaUpdate})
}
    else{
        const xogtashikada= new shirkadamodel(req.body)
       await xogtashikada.save();
       res.status(200).send({status:true,message:"successfuly posted",homesection:xogtashikada})
    }
} catch (error) {
    res.status(400).send(error.message)
}
}
//pu
// const update=async(req,res)=>{
//     try {
//        const {id}=req.params
//        const upd= await shirkadamodel.findByIdAndUpdate(id,req.body,{new:true}) ;
//        res.status(200).send("successfuly updated")
//     } catch (error) {
//      res.status(400).send(error.message)   
//     }
// }
//delete
const deletes=async(req,res)=>{
    try {
       const{id}=req.params;
       const del= await shirkadamodel.findByIdAndDelete(id)
       res.status(200).send('succesfuly deleted') 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports={GET,GETONE,POST,deletes}