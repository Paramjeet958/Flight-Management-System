
   
const bcrypt = require('bcrypt');
const User = require('../models/Users');
const { sendMail } = require('../services/emailService');

module.exports = async (req, res) => {
    try {
        console.log(req.query);
        if (req.query.userName && req.query.password) {
            const { userName, password} = req.query;
            const user = await User.findOne({ userName: userName });

            if (user) {
                const same = await bcrypt.compare(password, user.password);
                if (same) { 
              
                 if(user.userType=="customer"){
                        req.session.userId = user._id
                        req.session.userName=userName
                        req.session.userType=user.userType
                        
                        console.log(req.session.userName)
                        console.log(loggedIn)
                        res.redirect(`/`)
                        // await sendMail(user.email, 'Welcome!', 'You have logged in!', '<h1>You have logged in with Wing Ding</h1>');
                        
                        }
                        else if(user.userType=="admin"){
                            req.session.userId = user._id
                            req.session.userName=userName
                            req.session.userType=user.userType
                            console.log("admin logged in")
                            // await sendMail(user.email, 'Welcome!', 'You have logged in!', '<h1>You have logged in with Wing Ding</h1>');

                            res.redirect(`/`)
                            }
                        else{
                            const validationError="User Type must be Customer or Admin";
                            req.flash("validationErrors",validationError)
                            req.flash('data',req.body)
                            console.log("not customer/admin")
                            res.redirect('/login')
                        }
                    }
                    else {

                        const validationError="Password doesn't match";
                        req.flash("validationErrors",validationError)
                        req.flash('data',req.body)
                        console.log("password does not matched")
                        res.redirect('/login')
                    }
            } else {

                const validationError = "User Not Found";
                req.flash("validationErrors", validationError);
                req.flash('data', req.body);
                console.log("User not found");
                res.redirect('/login');
            }
        } else {

            const validationError = "Please Enter all the fields";
            req.flash("validationErrors", validationError);
            req.flash('data', req.body);
            console.log('not customer/ admin');
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Error during login process:', error);
        res.status(500).send('Internal Server Error');
    }
};
