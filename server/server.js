const express = require('express')
const mongoose = require('mongoose')

const app = express()

//Connecting mongoDB
const databaseConfig = require('./userdata')
console.log(databaseConfig)
mongoose.connect(databaseConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//Checking the connection to db
var db = mongoose.connection
db.once('open', () => console.log('Mongo Database is connected now!'))
db.on('error', console.error.bind(console, 'connection error:'))

const port = process.env.PORT || 5000
console.log(port)
app.listen(port, () => console.log(`Server running on port ${port}`))
module.exports = app
