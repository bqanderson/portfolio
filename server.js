var express = require('express');

var index = require('./routes/index');

var app = express();

app.use(express.static('public'));

// routes
app.use('/', index);

var server = app.listen(3300, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
})
