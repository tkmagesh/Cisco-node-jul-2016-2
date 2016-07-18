var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var calculator = require('./calculator');

var staticExtns = ['.html', '.js', '.css', '.jpg', '.png', '.xml', '.json','.ico'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}
var server = http.createServer(function(req, res){
	console.log(req.url);
	var urlObj = url.parse(req.url);
	if (isStatic(urlObj.pathname)){
		var resourcePath = path.join(__dirname, urlObj.pathname === '/' ? 'index.html' : urlObj.pathname) ;
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	} else if (urlObj.pathname === '/calculator'){
		var data = qs.parse(urlObj.query),
			op = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8080);

///calculator?op=add&n1=100&n2=200