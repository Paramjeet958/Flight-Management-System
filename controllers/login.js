module.exports=(req,res)=>{
    var username = ""
    var password = ""
    var email=""
   

    const data = req.flash('data')[0];
    if (typeof data != "undefined") {
        username = data.userName
        password = data.password
        email =  data.email

    }

    res.render('login', {
        //errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        userName: username,
        password: password,
        email:email,
        

    })
}