const { required } = require('joi');
const mongoose= require('mongoose');
const moongoose=require('mongoose');
const houseSchema= new moongoose.Schema({
    Housetype:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    deposit:{
        type:Number,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    parking:{
        type:String,
        default:'active',
        enum:["active","pendin","blocked"]
    },
    
    imagepreview:{
        type:String
       
    },
    isAvailable:{
        type:String,
        default:'active',
        enum:["active","pendin","blocked"]
    },
    rooms:{
        type:String,
        required:true
    },
    pathrooms:{
        type:String,
        required:true
    },
    masterRooms:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    user_id:{
        type:mongoose.Types.ObjectId,
        // required:true,
        ref:"users"
    }

},{timestamps:true});
const Housemodel=mongoose.model('Betahouse',houseSchema)
module.exports=Housemodel