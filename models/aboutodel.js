const mongoose=require('mongoose');
const aboutschma= new mongoose.Schema({
    full_descrip:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  
})
const aboutmmodel= mongoose.model("AboutUS",aboutschma)
module.exports=aboutmmodel