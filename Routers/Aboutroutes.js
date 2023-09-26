const express=require('express');
const about=express.Router();
const {getones,getaboutus,posts,deletes}=require('../controllars/aboutcontroler')
about.get('/',getaboutus)
about.get('/:id',getones)
about.post('/',posts)

about.delete('/:id',deletes)
module.exports=about