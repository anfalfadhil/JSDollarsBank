function AuthUser(req, res, next) {
    if (req.user === null) {
        res.status(403)
        return res.send("You are not signed in")
    }


    next()
}

module.exports = {
    AuthUser
}