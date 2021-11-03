if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const flash = require('express-flash')
const session = require('express-session')

const passport = require('passport');
const initializePassport = require('./config/passport-config');

// Import express
const express = require('express');

// Import cors
const cors = require('cors');

// Import connection
const db = require("./config/database.js");

const methodOverride = require('method-override')

// Import routers
const routerUsers = require("./routes/routes-users.js");
const routerThemes = require("./routes/routes-themes.js");
const routerQuestions = require("./routes/routes-questions.js");
const routerAnswers = require("./routes/routes-answers.js");
const User = require("./models/user.js");

// Init express
const app = express();

// use express json and URLenconded
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// use cors
app.use(cors());

// Set view engine to .ejs
app.set('view-engine', 'ejs')

app.use(methodOverride('_method'))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

initializePassport(passport, email =>
    User.findOne({
        where: {
            user_email: email
        }
    }),
    id => User.findOne({
        where: {
            user_id: id
        }
    })
)

app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login')
})

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.then((user) => {
        console.log(user.user_name)
    }) })
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

// Testing database connection 
async (req, res) => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// use router
app.use(routerUsers);
app.use(routerThemes);
app.use(routerQuestions);
app.use(routerAnswers);

// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));