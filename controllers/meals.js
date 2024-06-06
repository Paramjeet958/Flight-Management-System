module.exports=(req,res)=>{
   
   
    res.render('meals', {
        //errors: req.session.validationErrors
        // errors: req.flash('validationErrors'),
        
    })
}