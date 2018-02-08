var models = require('./../server/models');
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

	let keys = Object.keys(req.body);
	data = JSON.parse(keys);

	
	models.walker.create({
		userName: data["username"],
		password: data["password"]
	}).then(function() {
		res.redirect('/');
	});
	

	/*
	let keys = Object.keys(req.body);

	data = JSON.parse(keys);

	for (var key in data) {
		var val = data[key];
		var str = "k: " + key + " v: " + val;
		console.log(str)
	}
	*/
};

exports.walker_authenticate_post = function(req, res) {
	let keys = Object.keys(req.body);

	data = JSON.parse(keys);

	for (var key in data) {
		var val = data[key];
		var str = "k: " + key + " v: " + val;
		console.log(str)
	}

	let username = data["username"],
		password = data["password"];

	console.log("username: "+username);
	console.log("password: "+password); 

	res.send("n/a");
};