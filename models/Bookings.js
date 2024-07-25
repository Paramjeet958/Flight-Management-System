const mongoose=require('mongoose')
const Schema= mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const BookingSchema = new Schema({
    userName: {
        type: String
        
        
        },
    flightNumber:{
        type: String,
        required:[true,'Please Enter Flight Number']
    },
    flightName: {type: String, required:[true,'Please provide Flight Name']},
    seatNumber:{type: String, required:[true,'Please provide seatNumber']},
  
    departureDate: { type: Date, required: [true,'Please provide Departure Date'] },
    arrivalDate: { type: Date, required: [true,'Please provide Arrival Date'] },
    price:{type: String, required:[true,'Please provide Price']},
    fullName:{type: String, required:[true,'Please provide Full Name']},
    email: {
        type: String,
        required:[true,'Please provide Email'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
      },
        
        phone: {
          type: String,
          required:[true,'Please provide Phone Number'],
          trim: true,
          match: [/^\d{10}$/, 'Please enter a valid phone number']
        },
    address: {type: String, required:[true,'Please provide Valid Address']}, 
    cardNumber: {
        type: String,
        required: [true, 'Please provide a valid card number'],
        validate: {
          validator: function(value) {
            return /^\d{16}$/.test(value);
          },
          message: 'Please provide a valid 16-digit card number'
        }
      },   
    createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
}, {
    timestamps: true
}
   

);

const Bookings= mongoose.model('Bookings',BookingSchema);
module.exports=Bookings