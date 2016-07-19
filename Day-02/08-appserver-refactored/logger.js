var chalk = require('chalk');

module.exports = function(req, res, next){
	var reqStartTime = new Date();
	res.on('finish', function(){
		var reqFinishTime = new Date();
		var timeTaken = reqFinishTime - reqStartTime;
		console.log(chalk.red(res.statusCode) + ' ' + chalk.blue(req.method)  + ' - ' + req.urlObj.pathname + ' - ' +chalk.bold(timeTaken) +'ms');

	});
	next();
}