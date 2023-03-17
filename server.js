const express = require('express');
const bgCyan = require('colors');
const dotenv = require('dotenv');
//rest object
const app = express();
dotenv.config();

//rest api
app.get('/',(req,res)=>
{
    res.send('<h1>welcome to ecomerse app</h1>')
    console.log('hello world');
})

const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>
{
 console.log(`Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white)
})