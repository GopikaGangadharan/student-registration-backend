//import express
const express=require('express')

//import cors
const cors = require('cors')

//import logic.js
const logic = require('./services/logic');
//server app
const server = express()


//using cors specify the origin to server app
server.use(cors({
    origin:'http://localhost:4200'
}))

//use json parser in server app
server.use(express.json())

//port number
server.listen(3000,()=>{
    console.log('student server is listening at port number 3000');
})


//register api-http request post -('http://localhost:3000/register',body)
 server.post('/register',(req,res)=>{
 console.log('inside register api');
 console.log(req.body);
 //get fname,lname...
 logic.register(req.body.admno,req.body.fname,req.body.lname,req.body.address,req.body.email,
    req.body.mobile,req.body.gender,req.body.dob,req.body.groups)
.then((result)=>{
    //send result to client
    res.status(result.statusCode).json(result)
})
 })

 server.get('/home',(req,res)=>{
  logic.getData().then((result)=>{
    res.json(result)
  })
 })


