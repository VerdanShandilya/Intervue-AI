const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const validator = require('validator');

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

module.exports = mongoose.model('User', UserSchema);