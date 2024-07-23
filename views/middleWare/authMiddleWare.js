const User = require('../../models/Users');

module.exports = (req, res, next) => {
    User.findById(req.session.userId).exec()
        .then(user => {
            if (!user) {
                return res.redirect('/login');
            }
            next();
        })
        .catch(error => {
            console.error(error);
            res.redirect('/login');
        });
};