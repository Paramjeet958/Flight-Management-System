module.exports=(req,res)=>{
    var adminPassword ="admin123"
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
    
    if(req.query.password == adminPassword){
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
    else{
        const validationError="Please Enter Correct Password";
        req.flash("validationError",validationError)
        
        res.redirect('/adminauth')    
            
    }
   
}