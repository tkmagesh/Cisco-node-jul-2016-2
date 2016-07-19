/*create a node program 'calculator.js'

create a calculator object with the following methods
	- add(x,y)
	- subtract(x,y)
	- multiply(x,y)
	- divide(x,y)

Use the calculator object to calculate the result of all the above opertions for the  values of x = 100 y = 50 and print the same.
*/

var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	},
};


module.exports = calculator;

//var calculator = require('./calculator.js');