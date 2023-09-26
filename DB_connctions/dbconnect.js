const mongoose=require('mongoose');
const DB_CON=async()=>{
    try {
        //mongodb://127.0.0.1:27017/Houses
        //this is the connection to the database 
        mongoose.connect("mongodb+srv://amiira123:12345@cluster0.xdvvzfc.mongodb.net/Betahouse");
        console.log('DB connected !')
    } catch (error) {
       console.log(error.message) 
    }
}
module.exports = DB_CON