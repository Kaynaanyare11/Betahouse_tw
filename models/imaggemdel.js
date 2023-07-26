const mongoose= require('mongoose');
const imageschema= new mongoose.Schema({
guryaha_ID:{
type:mongoose.Schema.Types.ObjectId,
ref:"Betahouse"
 },
 images_URL:{
type:String,
required:true
},
 },{timestamps:true})
const imagemodel=mongoose.model("images",imageschema)
module.exports=imagemodel
