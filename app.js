var express = require("express");
 
var app = express();
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/vendor', express.static(__dirname + '/public/vendor'));
 
var server = app.listen(8080, function(){
    var port = server.address().port; 
    console.log("Server started at http://localhost:%s", port);
});