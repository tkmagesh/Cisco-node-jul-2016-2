var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function(req, res){
	console.log(req.url);
	var urlObj = url.parse(req.url);
	var resourcePath = path.join(__dirname, urlObj.pathname === '/' ? 'index.html' : urlObj.pathname) ;
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resourcePath).pipe(res);
});

server.listen(8080);

///calculator?op=add&n1=100&n2=200