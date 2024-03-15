
require('dotenv').config();
//import 'dotenv/config';

  
const express = require('express')

//import express from 'express'  diff btw module or common js
const app = express()
//like Math.__

const port =4000;
//more or less 65,000 ports are present and ammong them somes are free

// respond with "hello world" when a GET request is made to the homepage

app.get('/', (req, res) => {
  res.send('hello world')

})

app.get('/twitter',(req,res)=>{
     res.send('This is twitter handle')
})

app.get('/hanji',(req,res)=>{
    
res.send('<h1>Debasish Das</h1>')

})

app.get('/youtube',(req,res)=>{
    
    res.send('<h2>chaiAurcode</h2>')
    
    })


app.listen(process.env.PORT,()=>{
  //app.listen(port,()=>{

    console.log(`Example listening on port ${port}`)
    

})
