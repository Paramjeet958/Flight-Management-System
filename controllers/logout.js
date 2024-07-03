const User = require('../models/Users.js')
const path = require('path')

module.exports = (req, res) =>{
    req.session.destroy(() =>{
    res.redirect('/')
    })
    }