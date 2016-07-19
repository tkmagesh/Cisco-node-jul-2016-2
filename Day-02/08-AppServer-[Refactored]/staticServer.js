var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.js', '.css', '.jpg', '.png', '.xml', '.json','.ico'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
	var resourcePath = path.join(__dirname, req.urlObj.pathname) ;
	if (isStatic(resourcePath) && fs.existsSync(resourcePath)){
		fs.createReadStream(resourcePath).pipe(res);
		res.on('finish', function(){
			next();
		});
	} else {
		next();
	}
}