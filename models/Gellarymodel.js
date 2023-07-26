const mongoose=require('mongoose');
const gellryschema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    }
})
const gellryschemamodel= mongoose.model("Gellary",gellryschema)
module.exports=gellryschemamodel