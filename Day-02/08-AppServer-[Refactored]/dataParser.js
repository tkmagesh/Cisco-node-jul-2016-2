var url = require('url');
var qs = require('querystring');

module.exports = function(req, res, next){
	req.url = req.url === '/' ? 'index.html' : req.url;
	req.urlObj = url.parse(req.url);
	req.query = qs.parse(req.urlObj.query);
	if (req.method === 'POST'){
		var reqData = '';
		 req.on('data', function(chunk){
		 	reqData += chunk;
		 });
		 req.on('end', function(){
		 	req.body = qs.parse(reqData);
		 	next();
		 });
	} else {
		next();	
	}
	
}