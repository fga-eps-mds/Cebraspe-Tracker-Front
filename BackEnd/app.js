const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//configure env file
dotenv.config({path: './config.env'});
require('./db/conn');


app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(3001, ()=>{
    console.log("Server is Listening")
})