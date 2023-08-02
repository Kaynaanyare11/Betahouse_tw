const Housemodel=require('../models/housemodel')

    const joi=require('joi');
    //getby all
  
    const getHouse=async(req,res)=>{
    try {
        const houes= await Housemodel.find().populate({
            path:"user_id",
            model:"users",
            select:"name email status role"
        })
       res.status(200).send(houes)
    } catch (error) {
        res.status(401).send(error.message) 
    }
       
    }

    //get ID
    const GETBY_id=async(req,res)=>{
      try {
        const{id}=req.params
        const getbyeid= await Housemodel.findById(id);
        res.status(200).send(getbyeid)
      } catch (error) {
        res.status(401).send(error.message)
      }
    }

    //validations
    const Validation=(housevalidation)=>{
        const HOUSE=joi.object({
            Housetype:joi.string().required(),
            area:joi.string().required(),
            adress:joi.string().required(),
            age:joi.string().required(),
            deposit:joi.number().required(),
            rent:joi.number().required(),
            parking:joi.string(),
            imagepreview:joi.string(),
            isAvailable:joi.string(),
            rooms:joi.string().required(),
            pathrooms:joi.string().required(),
            masterRooms:joi.string().required(),
            description:joi.string().required(),
            user_id:joi.string()
        })
        return HOUSE.validate(housevalidation)
    }
   //post
    const Posthouse=async(req,res)=>{
        const{error}=Validation(req.body)
        if(error){
            res.json(error.message)
        }
        try {
           const Newhouse= new Housemodel(req.body) 
         await Newhouse.save()
     res.status(200).send({message:"succesfuuly added!!",newHouses:Newhouse})
        } catch (error) {
            res.status(401).send(error.message)
        }
    }
//update
const Update=async(req,res)=>{
   try {
    const {id}=req.params
    const updates= await Housemodel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({message:"successfully updated",house:updates})
   } catch (error) {
    res.status(401).send(error.message)
   }
}
//delete
const Delete= async(req,res)=>{
   try {
    const{id}=req.params
    const DELETES= await Housemodel.findByIdAndDelete(id)
    res.status(200).send({status:"successfully deleted",hOUS:DELETES})
   } catch (error) {
    res.status(401).send(error.message)
   }
}

    module.exports={getHouse,Posthouse,GETBY_id,Update,Delete}