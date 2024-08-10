const bcrypt = require('bcrypt');
const User = require('../models/Users');
const Bookings = require('../models/Bookings');

module.exports = (req, res) => {
    User.findOne({ userName: req.session.userName })
        .then((user) => {
            if (!user) {
                console.log('User not found');
                return res.redirect('/login');
            }

            const userInfo = {
                userName: user.userName,
                email: user.email,
                fname: user.fname,
                lname: user.lname,
                phone: user.phone,
                street: user.street,
                city: user.city,
                state: user.state,
                zip: user.zip,
                country: user.country,
                dateOfBirth: user.dateOfBirth,
                passportNumber: user.passportNumber
            };

            // Find bookings for the user
            Bookings.find({ userName: req.session.userName })
                .then((bookings) => {
                    console.log('Bookings found:', bookings);
                    res.render('myaccount', {
                        errors: req.flash('validationErrors'),
                        user: userInfo,
                        bookings: bookings
                    });
                })
                .catch((err) => {
                    console.error('Error fetching bookings:', err);
                    res.render('myaccount', {
                        errors: req.flash('validationErrors'),
                        user: userInfo,
                        bookings: []
                    });
                });
        })
        .catch((err) => {
            console.error('Error fetching user:', err);
            res.redirect('/login');
        });
};
