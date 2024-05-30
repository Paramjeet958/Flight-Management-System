const express=require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.connect('mongodb+srv://ssabrup:sabrup@cluster0.tzbx683.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true});
const path=require('path')
const ejs=require('ejs')

const app=new express()
const expressSession = require('express-session');
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.urlencoded())


app.use(express.static('public'))
const flash = require('connect-flash');
app.set('view engine', 'ejs')
const dashboardController = require('./controllers/dashboard')
const addFlightController = require('./controllers/addFlight')
const adminFlightsController = require('./controllers/adminFlights')
global.loggedIn = null;
app.listen(4000,(req,res)=>{
    console.log("App listening on port 4000")
})

app.get('/',dashboardController)
app.get('/adminFlights',adminFlightsController)
app.post('/addFlight', addFlightController)