export function authUser(req, res, next) {
    if (req.user == null) {
        console.log(req.user)
        res.status(403)
        return res.send('You need to sign in')
    }
    next()
};

export function authRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(401)
            return res.send('Not allowed')
        }
        next();
    }
}