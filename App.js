//1st express application

// const express = require('express')

//es6 import method
import express from "express"

//callback in node http to handle request
const app = express() 

//port from environment or 3000
const port = process.env.port || '8080' 


//('/') defines root path   send the reponse on the root
app.get('/', function(req,res){
    res.send('Hello world')
})


//listen port to run server
app.listen(port, function(){
    console.log('Server listening at http://localhost:'+port)       
})


