const mongoose = require('mongoose'); // Add this line
const ObjectId = mongoose.Types.ObjectId;
const Bookings = require('../models/Bookings.js')
const path = require('path')
const {sendMail} =require('../services/emailService')
module.exports=async(req,res)=>{
   
    if(loggedIn){
        const booking = await Bookings.findOne({ _id: new ObjectId(req.body.booking_id)  });
    await Bookings.updateOne({
        _id: new ObjectId(req.body.booking_id)
    },{
        $set: {
                "flightNumber":req.body.flightNumber,
                "flightName":req.body.flightName,
                "seatNumber":req.body.seatNumber,
                "departureDate":req.body.departureDate,
                "arrivalDate":req.body.arrivalDate,
                "price": req.query.price,
                "fullName": req.body.fullName,
                "phone": req.body.phone,
                "address": req.body.add
        }
})
console.log("Booking updated")
res.redirect('/myaccount')
// await sendMail(user.email, 'Updated', 'Your account has been successfully updated!', '<h1>Your account has been successfully updated!</h1>');

    }else{
        const validationError="Something wrong!!";
                            req.flash("validationError",validationError)
                            res.redirect('/myaccount')
    }

}