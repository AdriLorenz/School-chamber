// Import User Model
const Role = require("../models/role.js");
const User = require("../models/user.js");

// Import encryption
const bcrypt = require('bcrypt');

// Import and initialize passport


// Get all user
exports.getUsers = async (req, res) => {
    try {
        const user = await User.findAll({
            include: [{ model: Role, required: true }]
        });
        return user;
    } catch (err) {
        console.log(err);
    }
}

// Get user by id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                user_id: req.params.user_id
            },

            include: [{ model: Role, required: true }]

        });
        res.send(user[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 3);
        const getUserByEmail = async (req, res) => {
            try {
                const user = await User.findAll({
                    where: {
                        user_email: req.body.email
                    },
        
                    include: [{ model: Role, required: true }]
        
                });
                return user[0].dataValues.user_email;
            } catch (err) {
                console.log(err);
            }
        }
        const email = await getUserByEmail(req, res);
        console.log(email);
        if (req.body.email === email) {
            req.flash('error', 'The email already exists');
            res.render('../views/register.ejs');
        } else if (req.body.repeatPassword !== req.body.password) {
            req.flash('error', 'The passwords do not match');
            res.render('../views/register.ejs');
        } else {
            User.create({
                user_name: req.body.name,
                user_email: req.body.email,
                user_password: hashedPassword,
                role_id_fk: 1
            });
            res.redirect('/login')
        }
    } catch (res) {
        console.log(res);
        res.redirect('/register')
    }

}

// Update user by id
exports.updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                user_id: req.params.user_id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete user by id
exports.deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                user_id: req.params.user_id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}