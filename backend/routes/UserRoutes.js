const User = require('../controllers/UserController');



const express = require("express");
const router = express.Router();

router.post("/signup",User.signup)
router.post("/login",User.login)

module.exports = router