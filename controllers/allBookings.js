const Bookings = require('../models/Bookings.js');
module.exports = (req, res)=>{
    Bookings.find()
    .then(bookings => {
        res.render('allBookings', { bookings });
    })
    .catch(err => {
        console.error('Error fetching Bookings:', err);
        res.status(500).send('Internal Server Error');
    });
}