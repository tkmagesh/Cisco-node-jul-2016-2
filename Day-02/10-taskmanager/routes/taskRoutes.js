var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Play pokemon go', isCompleted : false},
	{id : 2, name : 'Watch a movie', isCompleted : false},
	{id : 3, name : 'Fix THAT bug', isCompleted : true},
];


router.get('/', function(req, res, next){
	var completedCount = taskList.reduce(function(result, t){
		return t.isCompleted ? ++result : result;
	},0);
	res.render('tasks/list', {list : taskList, completedCount : completedCount});
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newId = taskList.reduce(function(t1, t2){
		return t1.id > t2.id ? t1 : t2
	}).id + 1;
	var newTask = {
		id : newId,
		name : req.body.taskName,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id, 10);
	var task = taskList.filter(function(t){
		return t.id === taskId
	})[0];
	if (task){
		task.isCompleted = !task.isCompleted;
	}
	res.redirect('/tasks');
});


module.exports = router;