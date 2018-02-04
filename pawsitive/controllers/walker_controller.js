var user = require('./../server/config/config');
var express = require('express');


exports.walker_list = function(req, res) {
	res.send("n/a");
};

exports.walker_create_get = function(req, res) {
	console.log("hello");
	res.send("n/a");
};

exports.walker_create_post = function(req, res) {
	console.log("this is the req body from controller: ");
	console.log(req.body);

	var data = Object.keys(req.body)

	for(var i =0; i<data.length; i++){
		var str = ""
		str += "this is key" + i + ": " + data[i];
		console.log(str);
		str = "this is the value " + data[data[i]]
		console.log(str);
	}

	//var keys = Object.keys(obj);
	//for (var i =0; i < keys.length; i++){
	//	console.log(obj[keys[i]]);
	//}

	res.send("n/a");
};