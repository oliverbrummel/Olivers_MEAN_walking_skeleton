var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/', index);


//[][][][][][][]MOVED OVER TO INDEX.JS[][][][][][][][][]
// app.get('/', function(request, response){
//   response.send('Hello!');
// });



var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
});
