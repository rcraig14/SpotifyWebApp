// Get app data from file
var fs = require("fs");
var appConfigFile = fs.readFileSync("appkey.json");
var appKeys = JSON.parse(appConfigFile);

//set route file for html files
const htmlFiles = __dirname+'/public/html/';


module.exports = {
  home: function(request,response){
    console.log(__dirname);
    //response.send("arrived");
    response.sendFile(htmlFiles + 'index.html');
  }



}
