/*
* ajax.js (Asynchronous JavaScript and XML)
*/

setTimeout(function() {
	console.log("step 1");

	setTimeout(function() {
		console.log("step 2");

		setTimeout(function() {
			console.log("step 3");
		}, 2000);

	}, 3000);

}, 1000);




