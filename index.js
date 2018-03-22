const express = require('express')
const server = express();
const hostname = 'localhost';
const port = 3000;

server.use(express.static('assets'));

server.listen(port, () => {
	console.log(`server running at ${hostname}:${port}`);
});