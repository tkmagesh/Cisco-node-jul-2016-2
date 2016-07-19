var http = require('http');

var staticServer = require('./staticServer');
var calculatorHandler = require('./calculatorHandler');
var notFoundHandler = require('./notFoundHandler');
var dataParser = require('./dataParser');

var server = http.createServer(function(req, res){
	console.log(req.url);
	dataParser(req, res);
	staticServer(req, res);
	calculatorHandler(req, res);
	notFoundHandler(req, res);
});

server.listen(8080);

///calculator?op=add&n1=100&n2=200