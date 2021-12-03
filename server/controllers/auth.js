function authUser(req, res, next) {
    if (req.user == null) {
        console.log(req.user)
        res.status(403)
        return res.send('You need to sign in')
    }
    next()
};

function authRole(role) {
    return (req, res, next) => {
        if (req.user.role_id_fk !== role) {
            console.log("USER ROL: " + req.user.role_id_fk)
            res.status(401)
            return res.send('You are not allowed')
        }
        console.log("USER ROL: " + req.user.role_id_fk)
        next();
    }
}

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

module.exports = {
    authUser,
    authRole,
    checkNotAuthenticated,
    checkAuthenticated
}