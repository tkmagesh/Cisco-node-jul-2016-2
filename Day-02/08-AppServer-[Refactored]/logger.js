module.exports = function(req, res, next){
	var reqStartTime = new Date();
	res.on('finish', function(){
		var reqFinishTime = new Date();
		var timeTaken = reqFinishTime - reqStartTime;
		console.log(res.statusCode + ' ' + req.method  + ' - ' + req.urlObj.pathname + ' - ' +timeTaken +'ms');

	});
	next();
}