var exec = require('child_process').exec;

var express = require('express');
var app = express();

app.get('/', function(req, res){
		 res.send('hello world');
	});

app.listen(9000);
