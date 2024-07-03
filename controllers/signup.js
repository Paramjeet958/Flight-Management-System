module.exports=(req,res)=>{
    var username = ""
    var password = ""
    var email=""
    var uType=""
    var fname=""
    var lname =""
    var phone =""
    var street = ""
    var city = ""
    var state =""
    var zip =""
    var country =""
    var dateOfBirth = ""
    var passportNumber =""

    const data = req.flash('data')[0];
    if (typeof data != "undefined") {
        username = data.userName
        password = data.password
        email =  data.email
        uType = data.uType
        fname= data.fname
        lname=data.lname
        phone = data.phone
        street = data.street
        city = data.city
        state = data.state
        zip = data.zip
        country = data.country
        dateOfBirth = data.dateOfBirth
        passportNumber= data.passportNumber
    }

    res.render('signup', {
        //errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        userName: username,
        password: password,
        email:email,
        uType: uType,
        fname : fname,
        lname :lname,
        phone : phone,
        street : street,
        city:city,
        state:state,
        zip: zip,
        country: country,
        dateOfBirth:dateOfBirth,
        passportNumber:passportNumber

    })
}