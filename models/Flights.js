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
    duration: Number,
    departureDate: { type: Date, required: [true,'Please provide Departure Date'] },
    arrivalDate: { type: Date, required: [true,'Please provide Arrival Date'] },
    status: { type: String, enum: ['scheduled', 'delayed', 'cancelled', 'completed'], default: 'scheduled' },
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
FlightSchema.pre('save', function(next) {
    const flight = this;
    if (flight.departureDate && flight.arrivalDate) {
        const duration = (new Date(flight.arrivalDate) - new Date(flight.departureDate)) / (1000 * 60); // Convert milliseconds to minutes
        flight.duration = duration;
    }
    next();
});
const Flights= mongoose.model('Flights',FlightSchema);
module.exports=Flights