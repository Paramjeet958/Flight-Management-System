const mongoose=require('mongoose')
const Schema= mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const FlightSchema = new Schema({
    flightNumber:{
        type: String,
        required:[true,'Please Enter Flight Number']
    },
    flightName: String,
    departureTime: String,
    depatureDate: Date,
    arrivalTime: String,
    arrivalDate:Date,
    stay:{
        type:Boolean,
        default:false
    },
    stayTime:{
        type:String,
        default:'No'
    },
    stayLocation:{
        type:String,
        default:'No'
    }

});
const Flights= mongoose.model('Flights',FlightSchema);
module.exports=Flights