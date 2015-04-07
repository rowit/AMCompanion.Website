// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

// configuration ===========================================
var port = 80; // set our port

app.use(express.static(__dirname)); 	// set the static files location /public/img will be /img for users

app.use(bodyParser.json());

// routes ==================================================
//require('./app/routes')(app); // pass our application into our routes

app.use("/js", express.static(__dirname + "/app/js"));
app.use("/img", express.static(__dirname + "/app/img"));
app.use("/css", express.static(__dirname + "/app/css"));
app.use("/data", express.static(__dirname + "/app/data"));
app.use("/partials", express.static(__dirname + "/app/partials"));

app.all('/*', function(req, res) {
    res.cookie('env', 'dev', { expires: new Date(Date.now() + 900000), httpOnly: false });
    res.sendFile( __dirname + "/index.html");
});


// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
