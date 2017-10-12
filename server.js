// Imports variables from .env file
require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise


// Create a new app using express
const app = express()


// Connect to MongoDB and set up messages for when
// Mongo connects successfully or errors out
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;
connection.on('connect', () => {
    console.log('SUCCESSFULLY CONNECTED TO MONGODB')
})
connection.on('error', (err) => {
    console.log('MONGODB Error: ', err)
})



// Inject middleware
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
    
})



// Set App to specific port
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(` || PORT: ${PORT} IS HOT || `)
})