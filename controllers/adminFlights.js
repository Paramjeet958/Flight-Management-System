module.exports=(req,res)=>{
   var flightNumber=""
   var flightName=""
   var origin=""
   var destination=""
   var duration=""
   var departureDate=""
   var departureTime=""
   var arrivalDate=""
   var arrivalTime=""
    var data =req.flash('data')[0]  
    if (typeof data != "undefined") {
        
        console.log(data)
        flightNumber=data.flightNumber
        flightName=data.flightName
        origin=data.origin
        destination=data.destination
        duration=data.duration
        departureDate=data.departureDate
        departureTime=data.departureTime
        arrivalDate=data.arrivalDate
        arrivalTime=data.arrivalTime
        
    }
    res.render('admin_flight', {
        errors: req.flash('validationErrors'),
        flightNumber: flightNumber,
        flightName:flightName,
        origin:origin,
        destination:destination,
        duration:duration,
        departureDate:departureDate,
        departureTime:departureTime,
        arrivalDate:arrivalDate,
        arrivalTime:arrivalTime       

    })
}