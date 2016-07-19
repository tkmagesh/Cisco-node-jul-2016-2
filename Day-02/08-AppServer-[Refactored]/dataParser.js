var url = require('url');

module.exports = function(req, res){
	console.log('[dataParser] - parsing the data');
	req.urlObj = url.parse(req.url);
}