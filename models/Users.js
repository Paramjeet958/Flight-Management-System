const mongoose=require('mongoose')
const Schema= mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const UserSchema= new Schema({
  userType : {type:String, required:true},
    userName: {
        type: String,
        required: [true,'Please provide username'],
        unique: [true, 'This user name already taken']
        
        },
    password:{
        type: String,
        required: [true,'Please provide password']
       
        },
    
    fname:{type:String, required:[true,'Please provide First Name']},
    lname:{type:String, required:[true,'Please provide Last Name'] },

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
    
      street: { type: String, trim: true, required:[true,'Please provide Street'] },
      city: { type: String, trim: true, required:[true,'Please provide City'] },
      state: { type: String, trim: true, required:[true,'Please provide State'] },
      zip: { type: String, trim: true, required:[true,'Please provide Zip Code'] },
      country: { type: String, trim: true, required:[true,'Please provide Country'] },
    dateOfBirth: {
      type: Date, required:[true,'Please provide your Date of birth']
    },
    passportNumber: {
      type: String,
      trim: true,
      required:[true,'Please provide Passport Number']
    },
    
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
    })
    })
const User= mongoose.model('User', UserSchema);
module.exports=User
UserSchema.plugin(uniqueValidator);