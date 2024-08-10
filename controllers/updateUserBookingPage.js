module.exports=(req,res)=>{
    const booking = {
        userName: req.session.userName,
        booking_id: req.query.booking_id,
        flightNumber: req.query.flightNumber,
        flightName: req.query.flightName,
        seatNumber: req.query.seatNumber,
        departureDate: new Date(req.query.departureDate),
        arrivalDate: new Date(req.query.arrivalDate),
        status: req.query.status,
        price:req.query.price,
        fullName: req.query.fullName,
        email:req.query.email,
        phone: req.query.phone,
        address: req.query.address
    };
   
    res.render('updateUserBookingPage', {booking

        //errors: req.session.validationErrors
        // errors: req.flash('validationErrors'),
        
    })
}