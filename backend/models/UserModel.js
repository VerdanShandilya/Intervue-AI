const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');
const token = require("../middleware/AuthMiddleware")

const UserSchema = new Schema({
    name:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: function(){
            return !this.googleId;
        }
    },
    googleId:{
        type: String,
        default: null,
    }
});



UserSchema.statics.signup = async function(name,email,password){


    if(!name || !email || !password){
        throw new Error('Please provide all fields');
    }
    if(!validator.isEmail(email)){
        throw new Error("Enter a Valid email");
    }

    if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
    }

    const existing = await this.findOne({ email });
    if (existing) {
        throw new Error("Email already in use");
    }

    const hashpass = await bcrypt.hash(password,10);

    const User = new this({
        name,
        email,
        password: hashpass
    })
    await User.save();
    return User;
} 


UserSchema.statics.login = async function(email,password){
    
    if(!email || !password){
        throw new Error('Please provide all fields');
    }

    const User = await this.findOne({ email });
    if (!User) {
        throw new Error("Invalid email");
    }

    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const Usertoken = token.gentoken(User);
    return Usertoken;

}

module.exports = mongoose.model('User', UserSchema);