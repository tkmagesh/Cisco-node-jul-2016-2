var fs = require('fs');

fs.readFile('test.txt', {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong..!');
		console.log(err);
	} else {
		console.log(fileContents);
		console.log('----------------- EOF --------------'); 
	}
	console.log('-------------- end of program -------------');
});
