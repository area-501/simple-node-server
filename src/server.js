const PORT = 8080;

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send("Hello World");  
});

app.listen(PORT, function () {
  console.log('listening on port ' + PORT);
});
