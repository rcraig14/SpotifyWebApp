
var express = require('express');
var app = express();
var requestHandler = require('./requestHandlers.js');
/* set up static files routes */
app.use(express.static('public'));



//Set app routes and handlers
app.get('/', requestHandler.home);


//Launch listening server on port 8081
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})
