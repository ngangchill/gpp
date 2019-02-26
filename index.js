var express = require('express')
var app = express()
var PouchDB = require('pouchdb')
var port = process.env.PORT || 3000
var cors = require('cors')

// create pouchdb database in .data
var TempPouchDB = PouchDB.defaults({prefix: 'data/'})

app.use(cors())

app.use('/', require('express-pouchdb')(TempPouchDB))


//var listener = app.listen(process.env.PORT, function () {
var listener = app.listen(port, function () {
  console.log('Your pouchdb is listening on port ' + listener.address().port);
});
