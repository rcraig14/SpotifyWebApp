var express = require('express');
var app = express();
var requestHandler = require('./requestHandlers.js');
var fs = require('fs');
var https = require('https');
/* set up static files routes */
app.use(express.static('public'));



//Set app routes and handlers
app.get('/', requestHandler.home);
app.get('/login', requestHandler.login);
app.get('/callback', requestHandler.callback);

//Launch listening server on port 8080
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
  }, app).listen(8080, function () {
  console.log('app listening on port 8080!')
});
