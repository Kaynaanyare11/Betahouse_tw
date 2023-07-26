const express=require('express');
const cleints=express.Router()
const{getones,getservice,POST,update,deletes}=require('../controllars/clientcontroler')
cleints.get('/',getservice)
cleints.get('/:id',getones)
cleints.post('/',POST)
cleints.put('/:id',update)
cleints.delete('/:id',deletes)
module.exports=cleints