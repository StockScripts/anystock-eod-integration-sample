var express = require('express');
var fs = require('fs');
var https = require('https');

// Creates server instance
var app = express();

//create the HTML page and send to the host
app.get('/', function(req, res) {

  // learn more about this get request here:
  // https://eodhistoricaldata.com/knowledgebase/list-supported-currencies/
  https.get('https://eodhistoricaldata.com/api/eod/EUR.FOREX?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&order=d&fmt=json', function(response) {
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

// Runs express server
app.listen(8080, function() {
  console.log('Example app is listening on localhost:' + 8080 + '\n');
});
