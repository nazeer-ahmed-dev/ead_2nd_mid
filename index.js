const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const { default: mongoose } = require('mongoose')
const routes = require('./server/routes/routes')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/mid_exam')

app.use('/',routes)

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","pug")

app.use("/",express.static(path.resolve('public/css')))
// app.use("/",express.static(path.resolve('public/img')))
app.use("/",express.static(path.resolve('public/js')))
app.use("/",express.static(path.resolve('uploads/')))

app.listen(3000,()=>{
    console.log("Server is running on localhost!!!")
})