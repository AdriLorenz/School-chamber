const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById, getUserByRole) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        user.then( async (res) => {
            if (res === null) {
                return done(null, false, { message: 'No user linked to that email' })
            }
            try {
                if (await bcrypt.compare(password, res.user_password)) {
                    return done (null, res)
                } else {
                    return done(null, false, { message: 'Password incorrect' })
                }
            } catch (e) {
                return done(e)
            }
        })
    }
    passport.use(new localStrategy({ usernameField: 'email'}, 
    authenticateUser))
    
    passport.serializeUser((user, done) => done(null, user.user_id));
    passport.deserializeUser(async (id, done) => {
        const user = await getUserById(id)
        console.log("código: " + id)
        return done(null, user);
    });
}

module.exports = initialize;