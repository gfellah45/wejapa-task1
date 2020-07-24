const http = require("http");

http
	.createServer((req, res) => {
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>Hello World! Welcome to we Japa Internship</h1>");
	})
	.listen(5000);
