const express=require('express');
const conatacts=express.Router();
const {getones,getcontacts,posts,update,deletes}=require('../controllars/contactformControler')
conatacts.get('/',getcontacts)
conatacts.get('/:id',getones)
conatacts.post('/',posts)
conatacts.put('/:id',update)
conatacts.delete('/:id',deletes)
module.exports=conatacts