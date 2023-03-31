const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  }).listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${process.env.HOST}:${process.env.PORT}`);
  });
});

// const { readFileSync } = require("fs");
// const { createServer } = require("https");
// //const {join} = require('path');
// const { parse } = require("url");

// const next = require("next");
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const credentials = {
//   key: readFileSync(process.env.SSL_KEY, "utf-8"),
//   cert: readFileSync(process.env.SSL_CERT, "utf-8"),
//   ca: readFileSync(process.env.SSL_CA, "utf-8"),
// };

// app.prepare().then(() => {
//   createServer(credentials, (req, res) => {
//     const parsedUrl = parse(req.url, true);

//     handle(req, res, parsedUrl);
//   }).listen(process.env.PORT, process.env.HOST, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on https://${process.env.HOST}:${process.env.PORT}`);
//   });
// });
