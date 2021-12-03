// Import express
const express = require("express");
const passport = require('passport');
 
// Init express router
const routerLogin = express.Router();
 

routerLogin.get('/login', (req, res) => {
    res.render('login.ejs')
})

routerLogin.post('/login', passport.authenticate('local', {
    successRedirect: '/questions',
    failureRedirect: '/login',
    failureFlash: true
}))
 
// export router
module.exports = routerLogin;