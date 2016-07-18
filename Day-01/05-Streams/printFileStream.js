var fs = require('fs');

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});

'events -> open, data, end, close, error'

/*var readCount = 0;

stream.on('data', function(fileChunk){
	++readCount;
	console.log(fileChunk);
});
stream.on('end', function(){
	console.log('----------------- EOF --------------');
	console.log('read performed with ', readCount , ' times!!');
});
stream.on('error', function(err){
	console.log('something went wrong..');
	console.log(err);
});*/

stream.pipe(process.stdout);
var readCount = 0;
stream.on('data', function(fileChunk){
	++readCount;
	
});
stream.on('end', function(){
	console.log('----------------- EOF --------------');
	console.log('read performed with ', readCount , ' times!!');
});
stream.on('error', function(err){
	console.log('something went wrong..');
	console.log(err);
});