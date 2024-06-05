module.exports=(req,res)=>{
   var flightNumber=""
   var flightName=""
   var origin=""
   var destination=""
   var departureDate=""
   var arrivalDate=""
    var data =req.flash('data')[0]  
    if (typeof data != "undefined") {
        
        console.log(data)
        flightNumber=data.flightNumber
        flightName=data.flightName
        origin=data.origin
        destination=data.destination
        departureDate=data.departureDate
        arrivalDate=data.arrivalDate
        
    }
    res.render('admin_flight', {
        errors: req.flash('validationErrors'),
        flightNumber: flightNumber,
        flightName:flightName,
        origin:origin,
        destination:destination,
        departureDate:departureDate,
        arrivalDate:arrivalDate     

    })
}