const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Bookings = require('../models/Bookings');
const { sendMail } = require('../services/emailService');

module.exports = async (req, res) => {
    
        try {
            const booking = await Bookings.findOne({ _id: new ObjectId(req.body.booking_id) });
            if (!booking) {
                console.log("Booking not found");
                return res.redirect('/myaccount');
            }

            await Bookings.updateOne({
                _id: new ObjectId(req.body.booking_id)
            }, {
                $set: {
                    "flightNumber": req.body.flightNumber,
                    "flightName": req.body.flightName,
                    "seatNumber": req.body.seatNumber,
                    "departureDate": req.body.departureDate,
                    "arrivalDate": req.body.arrivalDate,
                    "price": req.body.price,
                    "fullName": req.body.fullName,
                    "phone": req.body.phone,
                    "address": req.body.address
                }
            });

            console.log("Booking updated successfully");
            res.redirect('/myaccount');
        } catch (err) {
            console.error("Error updating booking:", err);
            res.redirect('/myaccount');
        }
  
};
