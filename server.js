// This is a custom server for Next.js that uses Node.js's built-in HTTP server!!
const fetch = require('node-fetch');
global.Request = fetch.Request;
global.Response = fetch.Response;
global.Headers = fetch.Headers;

const { TextEncoderStream, TextDecoderStream } = require('util');
global.TextEncoderStream = TextEncoderStream;
global.TextDecoderStream = TextDecoderStream;

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL and handle all requests with Next.js
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

