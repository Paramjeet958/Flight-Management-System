const Users = require('../models/Users.js');
module.exports = (req, res)=>{
    Users.find()
    .then(users => {
        res.render('allUsers', { users });
    })
    .catch(err => {
        console.error('Error fetching Users:', err);
        res.status(500).send('Internal Server Error');
    });
}