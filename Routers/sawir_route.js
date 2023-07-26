
////all routes
const express=require('express');
const imgesroute=express.Router();
const {getimages,getbyid,postimages,imgupde,Deletimg}=require('../controllars/imagecontroller')

imgesroute.get('/',getimages)
imgesroute.get('/:id',getbyid)
//post
imgesroute.post('/',postimages)
//put
imgesroute.put('/:id',imgupde)
//delet
imgesroute.delete('/:id',Deletimg)


module.exports=imgesroute