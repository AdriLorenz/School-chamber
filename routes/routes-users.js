// Import express
const express = require("express");
const passport = require('passport');


// Import User Controller
const { createUser, deleteUser, getUserById,
    getUsers, updateUser } = require
    ("../controllers/users-controller.js");
 
 // Init express router
const routerUser = express.Router();

routerUser.get('/register', checkNotAuthenticated, (req, res) => {
    console.log(req.sessionID)
    res.render('register.ejs')
 }) 

routerUser.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
 })

routerUser.post('/login', checkNotAuthenticated, passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/login',
     failureFlash: true
 }))

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('users/')
    }
    next();
}

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}
// Route get all users
routerUser.get('/users', checkAuthenticated, async (req, 
res, next) => {
    try {
        let users = await getUsers();
        res.render('../views/index.ejs', { users });
    } catch (e) {
        next(e);
    }
    });
// Route get user by id
routerUser.get('/users/:user_id', getUserById);
// Route create a new user
routerUser.post('/register', createUser);
// Route update user by id
routerUser.put('/users/:user_id', updateUser);
// Route delete user by id
routerUser.delete('/users/:user_id', deleteUser);
 
// export router
module.exports = routerUser;