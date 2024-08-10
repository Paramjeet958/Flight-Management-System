module.exports=(req,res)=>{
   if(loggedIn){
    let flight;
    flight = {
        flightNumber: req.query.flightNumber,
        flightName: req.query.flightName,
        origin: req.query.origin,
        destination: req.query.destination,
        duration: req.query.duration,
        departureDate: new Date(req.query.departureDate),
        arrivalDate: new Date(req.query.arrivalDate),
        status: req.query.status,
        price: req.query.price,
        seatNumber: req.query.seatNumber,
        fullName:"",
        email: "",
        phone: "",
        address: "",


    };
    const data = req.flash('data')[0];
    if (typeof data != "undefined"){
        flight = {
            flightNumber: data.flightNumber,
            flightName: data.flightName,
            origin: data.origin,
            destination: data.destination,
            duration: data.duration,
            departureDate: new Date(data.departureDate),
            arrivalDate: new Date(data.arrivalDate),
            status: data.status,
            price: data.price,
            seatNumber: data.seatNumber,
            fullName:data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        };
    }
    res.render('checkout', { flight, userName:req.session.userName
      ,
        errors: req.flash('validationErrors'),
        
    })
}
else{
    res.redirect('/login')
}
}