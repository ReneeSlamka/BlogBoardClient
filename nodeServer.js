//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var fs = require('fs');

//Create a server
var server = http.createServer(handleRequest);

//Lets define a port we want to listen to
const PORT=3000; 

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});




//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources'); //*CHANGE LATER


//We need a function which handles requests and send response
//Used by createServer method
function handleRequest(request, response){

	if (request.method == 'GET' && request.url == '/') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream("./pages/index.html").pipe(response);
	}
	else if (request.method == 'GET' && request.url == '/home') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream("./pages/home.html").pipe(response);
	}
	else {
		send404Response(response);
	}
}

function send404Response(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page request could not be found. Baka.");
	response.end();
}


