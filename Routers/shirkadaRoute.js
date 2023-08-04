const express=require('express')
const xogtashirkada=express.Router();
const {GET,GETONE,POST,deletes}=require('../controllars/xogta_herosectioncontroler')
xogtashirkada.get('/',GET)
xogtashirkada.get('/:id',GETONE)

xogtashirkada.post('/',POST)
// xogtashirkada.put('/:id',update)

xogtashirkada.delete('/:id',deletes)

module.exports=xogtashirkada