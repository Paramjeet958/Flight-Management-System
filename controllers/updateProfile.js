
const User = require('../models/Users.js')
const path = require('path')
const {sendMail} =require('../services/emailService')
module.exports=async(req,res)=>{
   
    if(loggedIn){
        const user = await User.findOne({ userName: req.session.userName });
    await User.updateOne({
        userName: req.session.userName
    },{
        $set: {
                "fname":req.body.fname,
                "lname":req.body.lname,
                "email":req.body.email,
                "phone":req.body.phone,
                "street":req.body.street,
                "city": req.body.city,
                "state": req.body.state,
                "zip": req.body.zip,
                "country": req.body.country,
                "dateOfBirth": req.body.dateOfBirth,
                "passportNumber": req.body.passportNumber
        }
})

res.redirect('/myaccount')
// await sendMail(user.email, 'Updated', 'Your account has been successfully updated!', '<h1>Your account has been successfully updated!</h1>');

    }else{
        const validationError="Something wrong!!";
                            req.flash("validationError",validationError)
                            res.redirect('/myaccount')
    }

}