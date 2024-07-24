module.exports=(req,res)=>{
    const flight = {
        flightNumber: req.query.flightNumber,
        flightName: req.query.flightName,
        origin: req.query.origin,
        destination: req.query.destination,
        duration: req.query.duration,
        departureDate: new Date(req.query.departureDate),
        arrivalDate: new Date(req.query.arrivalDate),
        status: req.query.status
    };
   
    res.render('seatselection', {flight

        //errors: req.session.validationErrors
        // errors: req.flash('validationErrors'),
        
    })
}