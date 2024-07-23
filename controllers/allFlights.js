const Flights = require('../models/Flights.js');
module.exports = (req, res)=>{
    Flights.find()
    .then(flights => {
        res.render('allFlights', { flights });
    })
    .catch(err => {
        console.error('Error fetching flights:', err);
        res.status(500).send('Internal Server Error');
    });
}