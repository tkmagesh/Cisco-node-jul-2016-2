var qs = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){

	if (req.urlObj.pathname === '/calculator' && req.method === 'GET'){
		console.log('[calculatorHandler] Handling GET requests');
		var data = qs.parse(req.urlObj.query),
			op = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
		next();
	} else if (req.urlObj.pathname === '/calculator' && req.method === 'POST'){
		 console.log('[calculatorHandler] Handling POST requests');
		 var reqData = '';
		 req.on('data', function(chunk){
		 	reqData += chunk;
		 });
		 req.on('end', function(){
		 	var data = qs.parse(reqData),
				op = data.op,
				n1 = parseInt(data.n1, 10),
				n2 = parseInt(data.n2, 10);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
			next();
		 })
	} else {
		next();
	}
}