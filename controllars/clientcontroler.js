const cleintsmodel=require('../models/clientmodel')
const joi= require('joi')
const getservice=async(req,res)=>{
    try {
       const getal=await cleintsmodel.find();
       res.status(200).send(getal) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getone
const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await cleintsmodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///cleint validation
const cleintvalidation=(cleinvali)=>{
    const clein=joi.object({
        name:joi.string().required(),
   
        client_logo :joi.string().required(),
    })
    return clein.validate(cleinvali)
}
///post
const POST=async(req,res)=>{
    const{err}=cleintvalidation(req.body)
    if(err){
        res.status(400).send(err.message)
    }
        try {
          const cleins= new cleintsmodel(req.body) 
           await cleins.save();
           res.status(200).send({message:"succesfully",clients:cleins})
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    //puts
    const update=async(req,res)=>{
        try {
           const {id}=req.params
           const updat= await cleintsmodel.findByIdAndUpdate(id,req.body,{new:true}) ;
           res.status(200).send("successfuly updated")
        } catch (error) {
         res.status(400).send(error.message)   
        }
    }
    //delete
    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await cleintsmodel.findByIdAndDelete(id)
           res.status(200).send('succesfuly deleted') 
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    module.exports={getones,getservice,POST,update,deletes}