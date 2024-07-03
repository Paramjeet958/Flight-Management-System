const bcrypt = require('bcrypt')
const User = require('../models/Users')

module.exports = (req, res) => {
   
    var username = ""
    
    var email=""
    
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
   
    User.findOne({ userName: req.session.userName }).then((user)=>{
        console.log(user)
        
            if (user) {
                            username= user.userName,
                            email=user.email,
                            fname = user.fname,
                            lname =user.lname,
                            phone = user.phone,
                            street = user.street,
                            city=user.city,
                            state=user.state,
                            zip= user.zip,
                            country= user.country,
                            dateOfBirth=user.dateOfBirth,
                            passportNumber=user.passportNumber 
                        res.render('myaccount',{
                            userName: username,
                            email:email,
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
                
            })
           
            
    }
    
   

    

   
