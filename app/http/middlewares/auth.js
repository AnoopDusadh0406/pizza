function auth(req,res,next){
    // if aunthenticate just simple go in forward direction
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/login');
}

module.exports = auth;