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

	let data = Object.keys(req.body);

	data = JSON.parse(data);

	let username = data["username"],
		password = data["password"];

	console.log("username: "+username);
	console.log("password: "+password); 

	res.send("n/a");
};