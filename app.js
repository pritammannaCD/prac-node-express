var express = require('express')
var app = express()

app.use("/",(req, res, next)=>{
    res.send("I am Up")
})


app.listen(3000)