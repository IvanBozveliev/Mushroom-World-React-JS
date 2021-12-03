function isAuthenticated(req, res, next){
    
    if(!req.user){
        return res.status(400).json("You are not authenticated");
    }else{
        next();
    }
    
}

module.exports = isAuthenticated;