function isAuthenticated(req, res, next){
    
    if(!req.user){
        return res.status(401).send("User is not authenticated");
    }
    next();
}

module.exports = isAuthenticated;