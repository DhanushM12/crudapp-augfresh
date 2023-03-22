const express = require('express')
const app = express()
const port = 8080;

const db = require('./config/mongoose')

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})