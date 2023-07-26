const express=require('express');
const gelley=express.Router();
const {getones,getgelry,POST,update,deletes}=require('../controllars/gellarycontroler')
gelley.get('/',getgelry)
gelley.get('/:id',getones)
gelley.post('/',POST)
gelley.put('/:id',update)
gelley.delete('/:id',deletes)
module.exports=gelley