var fs = require('fs');

try{
	var fileContents = fs.readFileSync('test1.txt', {encoding : 'utf8'});
	console.log(fileContents);
	console.log('----------------- EOF --------------'); 
} catch (err){
	console.log('something went wrong..!');
	console.log(err);
} finally {
	console.log('-------------- end of program -------------');
}