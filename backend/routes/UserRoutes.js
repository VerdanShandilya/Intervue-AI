const User = require('../controllers/UserController');
const passport = require('../middleware/Passport');
const express = require('express');

const jwt = require('jsonwebtoken');
const router = express.Router();

require('dotenv').config();





router.post("/signup",User.signup)
router.post("/login",User.login)



router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: 'http://localhost:5173/login' }),
  (req, res) => {
    // Generate JWT
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email }, // payload
      process.env.SECRET_KEY,                      // secret
      { expiresIn: '7d' }                         // options
    );
    // Redirect to frontend with token as query param
    res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
  }
);

module.exports = router;