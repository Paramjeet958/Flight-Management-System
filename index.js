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
const adminauthController = require('./controllers/adminauth')
const logoutController = require('./controllers/logout')
const seatController = require('./controllers/seatselection')
const chcekoutController = require('./controllers/checkout')
// const schduleController = require('./controllers/showallflights')




global.loggedIn = null;
app.use(flash());
app.use(expressSession({
    secret: 'Flight_management'
    }))
    app.use("*", (req, res, next) => {
        loggedIn = req.session.userId;
       
      
        next()
    });
app.listen(4000,(req,res)=>{
    console.log("App listening on port 4000")
})

app.get('/',dashboardController)
app.get('/signup', signupController)
app.post('/usersignup', usersignupController)
app.get('/adminFlights',adminFlightsController)
app.post('/addFlight', addFlightController)
app.post('/showFlights', showFlights)
app.get('/service', serviceController)
app.get('/meals', mealsController)
app.get('/tac', tacController)

app.get('/pet', petController)
app.get('/login', loginController)
app.get('/userlogin', userloginController)
app.get('/myaccount', myaccountController)
app.get('/adminauth', adminauthController)
app.get('/logout', logoutController)
app.get('/seatselection',seatController)
app.get('/checkout', chcekoutController)

// app.get('/loginsignup', (req,res)=>{
//     res.render('login_signup')
// })

app.get('/pet', petController)

// // Assume you have a function to get flights from a database
// const getFlights = async (filters) => {
//     // Your logic to fetch flights from the database with applied filters
//     // This is a placeholder implementation
//     let allFlights = await allFlights.find(filters);
//     return allFlights;
// };

// app.get('/allFlights', async (req, res) => {
//     let filters = {};

//     if (req.query.origin) {
//         filters.origin = req.query.origin;
//     }
//     if (req.query.destination) {
//         filters.destination = req.query.destination;
//     }
//     if (req.query.departureDate) {
//         filters.departureDate = { $gte: new Date(req.query.departureDate) };
//     }
//     if (req.query.price) {
//         filters.price = { $lte: req.query.price };
//     }

//     try {
//         let flights = await getFlights(filters);
//         res.render('allFlights', { flights });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.get('/allFlights', (req, res) => {
//     Flights.find()
//         .then(flights => {
//             res.render('allFlights', { flights });
//         })
//         .catch(err => {
//             console.error('Error fetching flights:', err);
//             res.status(500).send('Internal Server Error');
//         });
// });

app.get('/allFlights', (req, res) => {
    const { origin, destination, price, date } = req.query;
    
    let filter = {};
    
    if (origin) filter.origin = origin;
    if (destination) filter.destination = destination;
    if (price) filter.price = { $lte: price };
    if (date) filter.departureDate = { $gte: new Date(date) };

    Flights.find(filter)
        .then(flights => {
            res.render('allFlights', { flights });
        })
        .catch(err => {
            console.error('Error fetching flights:', err);
            res.status(500).send('Internal Server Error');
        });
});
