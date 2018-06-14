const htmlFiles = __dirname+'/public/html/';

module.exports = {
  home: function(request,response){
    console.log(__dirname);
    //response.send("arrived");
    response.sendFile(htmlFiles + 'index.html');
  }



}
