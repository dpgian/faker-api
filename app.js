var express = require('express')
var app = express()
var routes = require('./routes/routes.js')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

var server = app.listen(3000, () => {
    console.log('App running on port: ', server.address().port)
})