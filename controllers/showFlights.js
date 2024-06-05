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
    const departureDateObj = new Date(departureDate);
    const startOfDay = new Date(departureDateObj.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(departureDateObj.setUTCHours(23, 59, 59, 999));

    Flights.find({
        origin: origin,
        destination: destination,
        departureDate: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    }).then((flights) => {
           
            res.render('flightResult', { flights: flights });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};
