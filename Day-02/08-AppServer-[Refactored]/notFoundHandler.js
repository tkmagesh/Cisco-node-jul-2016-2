module.exports = function(req, res, next){
	if (!res.finished){
		console.log('not found handler');
		res.statusCode = 404;
		res.end();
		next();
	}
}
	