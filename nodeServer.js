//Lets require/import the HTTP module
var express = require('express');
var app = express();
var swig = require('swig');

app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/pages'));

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/pages');


// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.get("/", function(req, res) {
	//res.sendFile(__dirname + '/pages/index.html');
	res.render('index', {});
});

app.get("/home", function(req, res) {
	res.sendFile(__dirname + '/pages/home.html');
});


var port = 3000;

app.listen(port, function() {
	console.log("Listening on " + port);
});



