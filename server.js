// modules =================================================
var express = require('express');
var app     = express();

var port = process.env.PORT || 81; // set our port

app.configure(function() {
	app.use(express.static(__dirname ) ); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console

    //app.use(express.bodyParser()); 						// pull information from html in POST
    app.use(express.json());
    app.use(express.urlencoded());
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/data", express.static(__dirname + "/data"));
app.use("/partials", express.static(__dirname + "partials"));

app.get('/*', function(req, res) {
    res.sendfile('./index.html'); // load our public/views/index.html file
});

// routes ==================================================

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app