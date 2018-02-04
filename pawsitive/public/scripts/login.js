function loginSubmit(){


	let username = document.getElementsByTagName("input")[0],
		password = document.getElementsByTagName("input")[1];

	console.log("//////////// POSTING LOGIN /////////////");
	// POST Row Index Array to Remove From DB
	var req = new XMLHttpRequest();
	req.open("POST", "/login", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	var sendData = {"username": username.value, "password": password.value};

	console.log(JSON.stringify(sendData));
	req.send(JSON.stringify(sendData));

	req.onreadystatechange = function() {
		if (req.readyState === 4 && req.status === 200) {
			username.innerHTML = "";
			password.innerHTML = "";
		} else { console.log("Req Status: "+req.status); }
	}

}