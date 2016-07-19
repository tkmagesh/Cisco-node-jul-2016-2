var _middlewares = [];

function app(req, res){
	function exec(fns, req, res){
		var first = fns[0],
			remaining = fns.slice(1),
			next = function(){
				exec(remaining, req, res);
			};
			if (typeof first === 'function')
				first(req, res, next);
	}
	exec(_middlewares, req, res);
}

app.use = function(middleware){
	_middlewares.push(middleware);
};

module.exports = app;

