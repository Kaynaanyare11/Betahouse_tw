const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:'active',
        enum:["active","pendin","blocked"]
       
    },
    role:{
        type:String,
    default:"admin",
        enum:["superadmin","CustamerCare","user"]
    }
})
const usermodel= mongoose.model("users",userSchema)
module.exports=usermodel