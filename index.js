const express=require('express');
const app=express();
const cors=require('cors')
const mongoose=require('mongoose')
const DB_CON= require('./DB_connctions/dbconnect');
DB_CON();

// const {MongoMemoryServer} = require ('mongodb-memory-server-core');

// const CONNECCT=async()=>{
//     const mongoServer = await MongoMemoryServer.create();
//     await mongoose.connect(mongoServer.getUri(),{dbName:"betahouse"})

//     .then(() => console.log("Connected db"))
// }
// app.listen(2000,async()=>{
//     console.log('server started at port 2000')
// });
 

// CONNECCT()


app.use(cors())
app.use(express.json());
const guryaharout=require('./Routers/guryaharoute')
//app.use('/guryaharouter',guryaharouter)
const imgesroute=require('./Routers/sawir_route')
const users=require('./Routers/user_Route')

app.use('/guryaharout',guryaharout);
const loginroute=require('./Routers/loginRoute');
const xogtashirkada=require('./Routers/shirkadaRoute')
const service=require('./Routers/serviceroutes')
const cleints=require('./Routers/clentRout')
const gelley=require('./Routers/gellaryroute')
const conatacts=require('./Routers/contactRouter')
const about=require('./Routers/Aboutroutes')
app.use('/shirkada',xogtashirkada)
app.use('/login',loginroute)
app.use('/imgesroute',imgesroute)
app.use('/users',users)
 app.use('/service',service)
 app.use('/clients',cleints)
app.use('/gellary',gelley)
app.use('/contact',conatacts)
app.use('/about',about)

app.get('/',  (req,res)=>{
res.send('stared')
})
app.listen(2000,async()=>{
    console.log('server started at port 5000')
})
module.exports=app