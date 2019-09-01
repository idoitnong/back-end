var sensorRouter = require('./routes/sensors');
var userRouter = require('./routes/users');
var connect = require('./schemas')

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/sensors', sensorRouter);

connect();

var port = process.env.PORT || 8080

var server = app.listen(port, () => console.log(`Express server has started on port ${port}`))