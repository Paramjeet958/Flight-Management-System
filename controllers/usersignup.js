
const User = require('../models/Users.js');
const { sendMail } = require('../services/emailService');

module.exports = async (req, res) => {
    try {
        
        const { email } = req.body; // Extract email from req.body
        const {password, cpassword}=req.body;
       
        if(password == cpassword){
        // Create the user
        const user = await User.create(req.body);
        // await sendMail(email, 'Welcome!', 'Your account has been successfully created!', '<h1>Your account has been successfully created!</h1>');

        
        res.redirect('/login');
        }
        else{
            const validationErrors = "Your both passwords do not match";
            req.flash('validationErrors', validationErrors);
            req.flash('data', req.body);
            console.log(error);
            res.redirect('/signup');
        }
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            req.flash('validationErrors', validationErrors);
            req.flash('data', req.body);
            console.log(error);
            res.redirect('/signup');
        } 
    }
};

    