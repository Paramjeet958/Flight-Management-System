const Flights = require('./models/Flights');

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
const showFlights = require('./controllers/showFlights')
const serviceController = require('./controllers/service')
const petController = require('./controllers/pet')
const tacController = require('./controllers/tac')
const mealsController = require('./controllers/meals')
const signupController = require('./controllers/signup')
const usersignupController = require('./controllers/usersignup')

const loginController = require('./controllers/login')
const userloginController = require('./controllers/userlogin')
const myaccountController = require('./controllers/myaccount')
const logoutController = require('./controllers/logout')
// const schduleController = require('./controllers/showallflights')
const blogController = require('./controllers/blogController')

const updateProfileController = require('./controllers/updateProfile')
const redirectIfAutheticatedMiddleware = require('./views/middleWare/redirectAuthenticationMiddleWare.js');
const authMiddleware=require('./views/middleWare/authMiddleWare')
const allFlightsController = require('./controllers/allFlights.js')
global.loggedIn = null;
global.uType = "";
app.use(flash());
app.use(expressSession({
    secret: 'Flight_management'
    }))
    app.use("*", (req, res, next) => {
        loggedIn = req.session.userId;
       uType=req.session.userType
      
        next()
    });
app.listen(4000,(req,res)=>{
    console.log("App listening on port 4000")
})

app.get('/',dashboardController)
app.get('/signup', signupController)
app.post('/usersignup', redirectIfAutheticatedMiddleware, usersignupController)
app.get('/adminFlights', authMiddleware, adminFlightsController)
app.post('/addFlight', addFlightController)
app.post('/showFlights', showFlights)
app.get('/service', serviceController)
app.get('/meals', mealsController)
app.get('/tac', tacController)

app.get('/pet', petController)
app.get('/login', loginController)
app.get('/userlogin', redirectIfAutheticatedMiddleware, userloginController)
app.get('/myaccount',authMiddleware, myaccountController)
app.get('/logout', logoutController)
app.post('/updateProfile', updateProfileController)
app.get('/blog', blogController)
app.get('/pet', petController)
app.get('/allFlights', allFlightsController);
app.use((req, res) => res.render('notFound'));


