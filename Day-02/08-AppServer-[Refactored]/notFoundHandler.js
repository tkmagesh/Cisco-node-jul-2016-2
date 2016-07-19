module.exports = function(req, res){
	console.log('[notFoundHandler] - sending 404');
	res.statusCode = 404;
	res.end();
}
	