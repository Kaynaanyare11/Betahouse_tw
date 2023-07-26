const mongoose=require('mongoose');
const contactform= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})
const contactformmodel= mongoose.model("Contact",contactform)
module.exports=contactformmodel