import http from 'http';

const requestListener = function (req, res) {
	console.log(req.headers);
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify(req.headers));
};

const host = 'localhost';
const port = 4000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
