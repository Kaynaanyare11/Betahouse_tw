const express=require('express')
const guryaharout = express.Router();
const joi=require('joi');
//all ip routes
const {getHouse,Posthouse,GETBY_id,Update,Delete} = require('../controllars/guryaha_controler')
guryaharout.get('/', getHouse)
guryaharout.get('/:id', GETBY_id)
guryaharout.post('/',Posthouse)
guryaharout.put('/:id',Update)
guryaharout.delete('/:id',Delete)
module.exports=guryaharout