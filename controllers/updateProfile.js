const mongoose = require('mongoose');
const Users = require('../models/Users');
const { sendMail } = require('../services/emailService');

module.exports = async (req, res) => {
    
        try {
            const user = await Users.findOne({ userName: req.session.userName });
            if (!user) {
                console.log("User not found");
                return res.redirect('/login');
            }

            await Users.updateOne({
                userName: req.session.userName
            }, {
                $set: {
                    "fname": req.body.fname,
                    "lname": req.body.lname,
                    "email": req.body.email,
                    "phone": req.body.phone,
                    "street": req.body.street,
                    "city": req.body.city,
                    "state": req.body.state,
                    "zip": req.body.country,
                    "dateofBirth": req.body.dateofBirth,
                    "passportNumber": req.body.passportNumber
                }
            });

            console.log("Info updated successfully", user);
            res.redirect('/myaccount');
        } catch (err) {
            console.error("Error updating info:", err);
            res.redirect('/myaccount');
        }
  
};
