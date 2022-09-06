const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//configure env file
dotenv.config({path: './config.env'});
require('./db/conn');

//require model
const Users = require('./models/userSchema');


app.get('/', (req, res)=>{
    res.send("Hello World");
})
//Registration
app.post('./register',(req,res)=>{ 
    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;

        const createUser = new Users({
            username : username,
            email: email,
            password:password,
            phone:phone

        });
        //save method or insert
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("registrado com sucesso");
    }
    catch(error){
        re.status(400).send(error)
    }

        
    

})


app.listen(3001, ()=>{
    console.log("Server is Listening")
})