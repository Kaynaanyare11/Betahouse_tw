const express=require('express')
const service=express.Router()
const {getones,getservice,POST,update,deletes}=require('../controllars/servicecontroler')

service.get('/',getservice)
service.post('/',POST)
service.get('/:id',getones)
service.put('/:id',update)
service.delete('/:id',deletes)
module.exports=service