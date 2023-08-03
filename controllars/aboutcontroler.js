const aboutmmodel = require('../models/aboutodel');

const joi=require('joi')
//new update for about
const getaboutus=async(req,res)=>{
    try {
       const getall=await aboutmmodel.find().sort({_id: -1}).limit(1);
       res.status(200).send(getall) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//getone 

const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await aboutmmodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///cleint validation
const aboutmmodelvalidation=(contanvali)=>{
    const conta=joi.object({
        full_descrip:joi.string().required(),
        description:joi.string().required()
    })
    return conta.validate(contanvali)
}
///post
const posts=async(req,res)=>{
    try {
        const{err}= aboutmmodelvalidation(req.body)
    if(err) 
       return   res.status(400).send(err.message)

        const getaboutes=await aboutmmodel.find().sort({_id: -1}).limit(1)
        if(getaboutes){
            const updates= await aboutmmodel.findByIdAndUpdate(getaboutes[0]._id,{
               
                full_descrip:req.body.full_descrip,
                description:req.body.description
            },{new:true})
            res.status(200).send({updates})
        }
        else{
           
            const contact= new aboutmmodel(req.body) 
            await contact.save();
            res.status(200).send({status:true, message:"successfully added !!",contacts:contact})
            //    catch (error) {
            //       res.status(400).send(error.message)
            //   }
        }
    }
     catch (error) {
        res.status(400).send(error.message)
    }
      
    }
    //puts
    // const update=async(req,res)=>{
    //     try {
    //        const {id}=req.params
    //        const updat= await aboutmmodel.findByIdAndUpdate(id,req.body,{new:true}) ;
    //        res.status(200).send("successfuly updated")
    //     } catch (error) {
    //      res.status(400).send(error.message)   
    //     }
    // }
    //delete
    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await aboutmmodel.findByIdAndDelete(id)
           res.status(200).send('succesfuly deleted') 
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    module.exports={getones,getaboutus,posts,deletes}