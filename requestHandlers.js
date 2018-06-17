// Get app data from file
var fs = require("fs");
var appConfigFile = fs.readFileSync("appkey.json");
var appKeys = JSON.parse(appConfigFile);

var scopes = 'user-read-private';
var redirect_uri = 'https://localhost:8080/callback';

//set route file for html files
const htmlFiles = __dirname+'/public/html/';


module.exports = {
  home: function(request,response){
    response.sendFile(htmlFiles + 'index.html');
  },

  login: function(request, response){
    response.redirect('https://accounts.spotify.com/authorize'
      +'?response_type=code&client_id='+appKeys.clientId
      +(scopes ? '&scope=' + encodeURIComponent(scopes): '')
      +'&redirect_uri='+encodeURIComponent(redirect_uri)
      +'&show_dialog=false')
  },

  callback: function(request, response){
    console.log("reached");
    console.log(request);
  }



}
