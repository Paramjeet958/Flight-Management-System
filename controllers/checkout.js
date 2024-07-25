module.exports=(req,res)=>{
   if(loggedIn){
    const flight = {
        flightNumber: req.query.flightNumber,
        flightName: req.query.flightName,
        origin: req.query.origin,
        destination: req.query.destination,
        duration: req.query.duration,
        departureDate: new Date(req.query.departureDate),
        arrivalDate: new Date(req.query.arrivalDate),
        status: req.query.status,
        price: '$799',
        seatNumber: req.query.seatNumber
    };
    res.render('checkout', { flight, userName:req.session.userName
        //errors: req.session.validationErrors
        // errors: req.flash('validationErrors'),
        
    })
}
else{
    res.redirect('/login')
}
}