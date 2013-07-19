var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    var fs = require('fs');
    var indexBuffer = fs.readFileSync('index.html');
    var indexContents = indexBuffer.toString();
    response.send(indexContents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
