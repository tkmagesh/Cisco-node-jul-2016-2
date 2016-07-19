var http = require('http');
var path = require('path');
var staticServer = require('./staticServer');
var calculatorHandler = require('./calculatorHandler');
var notFoundHandler = require('./notFoundHandler');
var dataParser = require('./dataParser');
var app = require('./app');
var logger = require('./logger');

app.use(logger);
app.use(dataParser);
app.use(staticServer(path.join(__dirname, 'public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
