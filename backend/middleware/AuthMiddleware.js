const jwt = require('jsonwebtoken');
require("dotenv").config()

function gentoken(user){
    const payload={
        id:user._id,
        email:user.email
    }
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"3d"})
}

function authenticatetoken (req,res,next) {
    
    const authheader = req.header("Authorization");

    if(!authheader){
        return res.status(401).send("Access denied.");
    }

    const [bearer,token] = authheader.split(" ");
    if(!token || bearer !== "Bearer"){
        res.status(401).json({message : "unauthorized token"})
    }

    jwt.verify(token, key, (err,user) =>{
        if(err){
            return res.status(403).json({message : "forbidden"})
        }
        req.user = user;
        next();
    })
}

module.exports = {gentoken,authenticatetoken}