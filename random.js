const fs = require("fs");

const { execSync } = require("child_process");

function random(length) {
	// Declare all characters
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789öäüÖÄÜ";

	// Pick characers randomly
	let str = "";
	for (let i = 0; i < length; i++) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return str;

};

var count = 0;

while (true) {
	try {
		var msg = execSync("curl http://whatthecommit.com/index.txt -s").toString();
		fs.writeFileSync("random.txt", random(5000));

		msg = msg.replace(/"/g, "");

		execSync("git add .");
		execSync("git commit -m \"" + msg + "\"");
		//execSync("git push");

		console.log("NEW COMMIT! " + count);

		if(count % 500 == 0) {
			console.log("Pushing now!");
			execSync("cat .cred | git push");
		}

		count++;
	} catch (_) {
		console.log(_);
	}
}
