const express=require('express')
const ejs=require('ejs')

const app=new express()
const path=require('path')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.listen(4000,(req,res)=>{
    console.log("App listening on port 4000")
})

app.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('dasboard')
})