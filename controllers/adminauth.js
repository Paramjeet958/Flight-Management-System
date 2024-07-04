module.exports=(req,res)=>{
   
   
    res.render('adminauth', {
        errors: req.flash('validationErrors')
    })
}