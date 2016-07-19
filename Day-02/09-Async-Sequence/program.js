function f1Sync(){
	console.log('f1Sync Started..');
	console.log('f1Sync Completed..');
}

function f2Sync(){
	console.log('f2Sync Started..');
	console.log('f2Sync Completed..');
}

function f3Sync(){
	console.log('f3Sync Started..');
	console.log('f3Sync Completed..');
}

function f4Sync(){
	console.log('f4Sync Started..');
	console.log('f4Sync Completed..');
}

var syncFns = [f1Sync, f2Sync, f3Sync, f4Sync];

function runSync(){
	for(var i=0; i<syncFns.length; i++)
		syncFns[i]();
}

function f1(next){
	console.log('f1 Started..');
	setTimeout(function(){
		console.log('f1 Completed..');
		if (typeof next === 'function')
			next();
	},3000);
}

function f2(next){
	console.log('f2 Started..');
	setTimeout(function(){
		console.log('f2 Completed..');
		if (typeof next === 'function')
			next();
	},3000)
}

function f3(next){
	console.log('f3 Started..');
	setTimeout(function(){
		console.log('f3 Completed..');
		if (typeof next === 'function')
			next();
	},3000)
}

function f4(next){
	console.log('f4 Started..');
	setTimeout(function(){
		console.log('f4 Completed..');
		if (typeof next === 'function')
			next();
	},3000)
}

/*function run(){
	

	f1(function(){
		f2(function(){
			f3(function(){
				f4();
			});
		});
	});
}*/

var asyncFns = [f1, f2, f3, f4];

function run(){
	function exec(fns){
		var first = fns[0],
			remaining = fns.slice(1),
			next = function(){
				exec(remaining);
			};
		if (typeof first === 'function')
			first(next);
	}
	exec(asyncFns);
}

function runAll(){
	runSync();
	run();
}

runAll();