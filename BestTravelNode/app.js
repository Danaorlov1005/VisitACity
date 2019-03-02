const http = require('http')
const fs = require('fs')
const hostname = 'localhost';
const port = 3000;
var index = require('./Routing/index')
var express = require('express')
var app = express()
var cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index)

http.createServer({
}, app).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});