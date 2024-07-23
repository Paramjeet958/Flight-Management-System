module.exports=(req,res)=>{
   
   
    res.render('checkout', {
        //errors: req.session.validationErrors
        // errors: req.flash('validationErrors'),
        
    })
}