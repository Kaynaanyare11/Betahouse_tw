 const jwt=require('jsonwebtoken')
const usermodel = require('../models/usermodel')
const Authentications=(allowerRoler)=>{

    return async (req,res,next)=>{

        const tokenheader=req.headers['authorization']
        if(!tokenheader) return res.status(401).send('access token is not profided')
        const token=tokenheader.split(' ')[1]
        //bearers 
        //if(!token) return res.status(401).send('Acess denied')
        console.log('token ayaad heshe',token)

        try {
            const verifaytoken= jwt.verify(token,process.env.SECRET_KEY)
const user= await usermodel.findById(verifaytoken.id)

           console.log('token data',verifaytoken.id)

if(!user) return res.status(404).send('user not found')
if(!user.status=='active') return res.status('this user is not active')
if(!allowerRoler.includes(user.role))return res.status(401).send('you are not allowed to accesss')
 console.log(user.role)
next()
        } 
        catch (error) {
           res.status(401).send(error.message) 
        }
    }
}
module.exports=Authentications