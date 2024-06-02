// const Flights = require('../models/Flights.js');
// module.exports = (req, res) =>{
//     console.log(req.body)
//     const {origin, destination, departureDate}= req.body;
//       Flights.find({origin:origin, destination: destination, departureDate: departureDate}).then((flights)=>{
//         res.redirect('/showFlights',{flights:flights})
//     })

// }
const Flights = require('../models/Flights.js');

module.exports = (req, res) => {
    console.log(req.body);
    const { origin, destination, departureDate } = req.body;
    
    Flights.find({ origin: origin, destination: destination, departureDate: departureDate })
        .then((flights) => {
            // Render the 'showFlights' view and pass the flights data to it
            res.render('flightResult', { flights: flights });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};
