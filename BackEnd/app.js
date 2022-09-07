const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app = express();
//configure env file
dotenv.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;
//require model
const Users = require('./models/userSchema');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());



app.get('/', (req, res)=>{
    res.send("Hello World");
})
//Registration
app.post('/register',async (req,res)=>{ 
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
        res.status(400).send(error)
    }

        
    

})

// login do usuario 
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Facha usaurio se existe
        const user = await Users.findOne({email : email});
        if(user){
            // verificar senha
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                // gerar token 
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("dados incorretos");
            }
        }else{
            res.status(400).send("dados incorretos");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port, ()=>{
    console.log("Server is Listening")
})