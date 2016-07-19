var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.js', '.css', '.jpg', '.png', '.xml', '.json','.ico'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
	if (isStatic(req.urlObj.pathname)){
		var resourcePath = path.join(__dirname, req.urlObj.pathname === '/' ? 'index.html' : req.urlObj.pathname) ;
		if (!fs.existsSync(resourcePath)){
			return next();

		}
		console.log('[staticServer] - file found - ', req.urlObj.pathname);
		//fs.createReadStream(resourcePath).pipe(res);

		var stream = fs.createReadStream(resourcePath);
		stream.on('end', function(){
			next();
		});
		stream.pipe(res);
	} else {
		next();
	}
}