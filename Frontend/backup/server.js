const {readFileSync} = require('fs');
const {createServer} = require('https');
const {parse} = require('url');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const port = 3000;
const host = 'ice.lds.net.ua';

const credentials = {
	key: readFileSync(process.env.SSL_KEY, 'utf-8'),
	cert: readFileSync(process.env.SSL_CERT, 'utf-8'),
	ca: readFileSync(process.env.SSL_CA, 'utf-8'),
};

app.prepare().then(() => {
	createServer(credentials, (req, res) => {
		const parsedUrl = parse(req.url, true);

		//const {pathname, query} = parsedUrl;

		handle(req, res, parsedUrl);
	}).listen(port, host, (err) => {
		if (err) throw err;
		console.log(`> Ready on https://${host}:${port}`);
	});
});
