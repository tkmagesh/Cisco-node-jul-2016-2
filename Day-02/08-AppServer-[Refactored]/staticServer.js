var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.js', '.css', '.jpg', '.png', '.xml', '.json','.ico'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.urlObj.pathname)){
		var resourcePath = path.join(__dirname, req.urlObj.pathname === '/' ? 'index.html' : req.urlObj.pathname) ;
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		console.log('[staticServer] - file found - ', req.urlObj.pathname);
		//fs.createReadStream(resourcePath).pipe(res);

		var stream = fs.createReadStream(resourcePath);
		stream.on('open', function(){
			console.log('[staticServer] - streams open event');
			
		});
		stream.on('data', function(chunk){
			console.log('[staticServer] - streams data event');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('[staticServer] - streams end event');
			res.end();
		});
	}
}