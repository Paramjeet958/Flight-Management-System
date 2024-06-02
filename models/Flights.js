const mongoose=require('mongoose')
const Schema= mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const FlightSchema = new Schema({
    flightNumber:{
        type: String,
        required:[true,'Please Enter Flight Number']
    },
    flightName: {type: String, required:true},
    origin:{type: String, required:true},
    destination: {type: String, required:true},
    duration: {type: Number, required:true},
    departureDate: { type: Date, required: true },
    departureTime: { type: String, required: true },
    arrivalDate: { type: Date, required: true },
    arrivalTime: { type: String, required: true },
    status: { type: String, enum: ['scheduled', 'delayed', 'cancelled', 'completed'], default: 'scheduled' },
}, {
    timestamps: true
}
   

);
const Flights= mongoose.model('Flights',FlightSchema);
module.exports=Flights