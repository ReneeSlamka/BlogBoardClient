//Lets require/import the HTTP module
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/pages'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/pages/index.html');
});

app.get("/home", function(req, res) {
	res.sendFile(__dirname + '/pages/home.html');
});


var port = 3000;

app.listen(port, function() {
	console.log("Listening on " + port);
});



