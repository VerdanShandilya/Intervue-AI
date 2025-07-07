const User = require("../models/UserModel")



const signup = async (req,res) =>{
    const {name,email,password} =req.body;
    try{
        const user = await User.signup(name,email,password);
        res.status(200).json({message:"user created successfully"});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

const login = async (req,res) =>{
    const {email,password} =req.body;
    try{
        const user = await User.login(email,password);
        res.status(200).json({token:user});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

module.exports= {signup,login}