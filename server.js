var express = require('express');
var fs = require('fs');
var https = require('https');

// Creates server instance
var app = express();

//create the HTML page and send to the host
app.get('/', function(req, res) {

  https.get('https://www.anychart.com/products/anystock/data/feed/?key[]=AAPL.US&format=json&kind=eod', function(response) {
    var data = '';
    // wait for the whole answer
    response.on('data', function(chunk) {
      data += chunk;
    });
    // when the answer is ready
    response.on('end', function() {
      // For this demo we are using a fs.readFileSync and string replace methods to render the page
      var chartTemplate = fs.readFileSync(__dirname + '/index.html').toString();
      var page = chartTemplate.replace("'{{data}}'", data);
      res.send(page);
    });
  });
});

var port = process.argv[2] || 8080;

// Runs express server
app.listen(port, function() {
  console.log('Example app is listening on localhost:' + port + '\n');
});
