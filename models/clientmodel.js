const mongoose=require('mongoose');
const cleintschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    client_logo:{
        type:String,
        required:true
    }
})
const cleintsmodel= mongoose.model("cleints",cleintschema)
module.exports=cleintsmodel