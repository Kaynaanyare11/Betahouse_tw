const gellryschemamodel=require('../models/Gellarymodel')
const joi=require('joi')
const getgelry=async(req,res)=>{
    try {
       const getall=await gellryschemamodel.find();
       res.status(200).send(getall) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getone
const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await gellryschemamodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///cleint validation
const gelvalidation=(gelrnvali)=>{
    const gelr=joi.object({
        title:joi.string().required(),
        logo:joi.string().required()
    })
    return gelr.validate(gelrnvali)
}
///post
const POST=async(req,res)=>{
    const{err}=gelvalidation(req.body)
    if(err){
        res.status(400).send(err.message)
    }
        try {
          const gellery= new gellryschemamodel(req.body) 
           await gellery.save();
           res.status(200).send({message:"successfully posted",gellary:gellery})
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    //puts
    const update=async(req,res)=>{
        try {
           const {id}=req.params
           const updat= await gellryschemamodel.findByIdAndUpdate(id,req.body,{new:true}) ;
           res.status(200).send("successfuly updated")
        } catch (error) {
         res.status(400).send(error.message)   
        }
    }
    //delete
    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await gellryschemamodel.findByIdAndDelete(id)
           res.status(200).send('succesfuly deleted') 
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    module.exports={getones,getgelry,POST,update,deletes}