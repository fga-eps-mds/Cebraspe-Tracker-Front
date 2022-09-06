const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


//schema structure

const  userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    phone :{
        type:String,
        required:true,
        

    },
    password:{
        type:String,
        required:true,

    },
    receberSms1:{
        type:Boolean,
        required:false,
        default:true
    },
    receberSms2:{
        type:Boolean,
        required:false,
        default:true
    },
    tokens:[{
        token: {
        type:String,
        required:true}
    }]
})
// hashing password to secure
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password,10);
    }
    next();
})

// token to verify user
userSchema.methods.generateToken = async function(){
    try{
        let generatedToken = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:generatedToken});
        await this.save();
        return generatedToken;
    } catch(error){

        console.log(error);
    }
}
const Users = new mongoose.Schema("USER",userSchema);
module.exports = Users;