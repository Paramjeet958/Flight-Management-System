const Bookings = require('../models/Flights.js');

const path = require('path')

module.exports= async (req,res)=>{
    
    try{
        const Bookings = await Bookings.create(req.body);
        res.redirect('/myaccount');
    }
     catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            console.log(error)
            return res.redirect('/checkout');
        } else {
            // Handle other types of errors (e.g., database connection issues)
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    }
    };

    