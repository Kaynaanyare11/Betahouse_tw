const contactformmodel=require('../models/contactformodel')
const joi=require('joi')
const getcontacts=async(req,res)=>{
    try {
       const getall=await contactformmodel.find();
       res.status(200).send(getall) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getone
const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await contactformmodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///cleint validation
const contavalidation=(contanvali)=>{
    const conta=joi.object({
        name:joi.string().required(),
        phone:joi.string().required(),
        message:joi.string().required()
    })
    return conta.validate(contanvali)
}
///post
const posts=async(req,res)=>{
    const{err}=contavalidation(req.body)
    if(err){
        res.status(400).send(err.message)
    }
        try {
          const contact= new contactformmodel(req.body) 
           await contact.save();
           res.status(200).send({message:"successfuly posted",contactus:contact})
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    //puts
    const update=async(req,res)=>{
        try {
           const {id}=req.params
           const updat= await contactformmodel.findByIdAndUpdate(id,req.body,{new:true}) ;
           res.status(200).send("successfuly updated")
        } catch (error) {
         res.status(400).send(error.message)   
        }
    }
    //delete
    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await contactformmodel.findByIdAndDelete(id)
           res.status(200).send('succesfuly deleted') 
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    module.exports={getones,getcontacts,posts,update,deletes}