module.exports=(req,res)=>{
    var username = ""
    var password = ""
   

    const data = req.flash('data')[0];
    if (typeof data != "undefined") {
        username = data.userName
        password = data.password

    }

    res.render('login', {
        //errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        userName: username,
        password: password
        

    })
}