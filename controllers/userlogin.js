const bcrypt = require('bcrypt')
const User = require('../models/Users')

module.exports = (req, res) => {
    console.log(req.query)
    if(req.query.userName && req.query.password){
      
    const { userName, password } = req.query;
    User.findOne({ userName: userName }).then((user)=>{
        console.log(user)
        
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if (same) { // if passwords match
                       
                        // if(user.uType=="customer"){
                        req.session.userId = user._id
                        req.session.userName=userName
                        
                        console.log(req.session.userName)
                        console.log(loggedIn)
                        res.redirect(`/`)
                        
                        // }
                        // else if(user.uType=="Admin"){
                        //     req.session.userId = users._id
                        //     req.session.userName=userName
                        //     req.session.userType=user.userType
                        //     console.log("admin logged in")
                        //     res.redirect(`/admin_flight`)
                        //     }
                        // else{
                        //     const validationError="User Type must be Customer or Admin";
                        //     req.flash("validationError",validationError)
                        //     req.flash('data',req.body)
                        //     console.log("not customer/admin")
                        //     res.redirect('/login')
                        // }
                    }
                    else {
                        const validationError="Password doesn't match";
                        req.flash("validationError",validationError)
                        req.flash('data',req.body)
                        console.log("password does not matched")
                        res.redirect('/login')
                    }
                })
            }
            else {
                const validationError="User Not Found";
                req.flash("validationError",validationError)
                req.flash('data',req.body)
                console.log("user not found")
                res.redirect('/login')
            }
            
    })
    }
    else{
        const validationError="Please Enter all the fields";
        req.flash("validationError",validationError)
        req.flash('data',req.body)
        console.log("all fields required")
        res.redirect('/login')
    }
}
    

   
