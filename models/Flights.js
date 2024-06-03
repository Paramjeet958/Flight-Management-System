const mongoose=require('mongoose')
const Schema= mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const FlightSchema = new Schema({
    flightNumber:{
        type: String,
        required:[true,'Please Enter Flight Number']
    },
    flightName: {type: String, required:[true,'Please provide Flight Name']},
    origin:{type: String, required:[true,'Please provide Departure']},
    destination: {type: String, required:[true,'Please provide Destination']},
    duration: {type: Number, required:[true,'Please provide Duration in Minutes']},
    departureDate: { type: Date, required: [true,'Please provide Departure Date'] },
    departureTime: { type: String, required: [true,'Please provide Departure Time'] },
    arrivalDate: { type: Date, required: [true,'Please provide Arrival Date'] },
    arrivalTime: { type: String, required: [true,'Please provide Arrival Time'] },
    status: { type: String, enum: ['scheduled', 'delayed', 'cancelled', 'completed'], default: 'scheduled' },
}, {
    timestamps: true
}
   

);
const Flights= mongoose.model('Flights',FlightSchema);
module.exports=Flights