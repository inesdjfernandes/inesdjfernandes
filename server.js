//Base setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//MongoDB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://inesdejesusfernandes0:lulupomerania@cluster0.ieqnyka.mongodb.net/oms?retryWrites=true&w=majority');

//Usar JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//definir porta
var port = process.env.PORT || 8081;

//API routes
//var paisesRoutes=require('./routes/routePaises');
app.use('/api/paises', paisesRoutes);

//var zonaRoutes=require('./routes/routeZona');
app.use('/api/zona', zonaRoutes);

//var virusRoutes=require('./routes/routeVirus');
app.use('/api/virus', virusRoutes);

//var virusRoutes=require('./routes/routeVirus');
app.use('/api/virus', virusRoutes);

//Start server
app.listen(port);
console.log('Magic happens on port ' + port);