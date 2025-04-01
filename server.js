// This is a custom server for Next.js that uses Node.js's built-in HTTP server!!
const fetch = require('node-fetch');
global.Request = fetch.Request;
global.Response = fetch.Response;
global.Headers = fetch.Headers;

const { TextEncoderStream, TextDecoderStream } = require('util');
global.TextEncoderStream = TextEncoderStream;
global.TextDecoderStream = TextDecoderStream;

if (typeof global.structuredClone === 'undefined') {
  const { serialize, deserialize } = require('v8');
  global.structuredClone = (value) => deserialize(serialize(value));
}

if (typeof global.ReadableStream === 'undefined') {
  const { ReadableStream } = require('stream/web');
  global.ReadableStream = ReadableStream;
}

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { createReadStream } = require('fs');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);

      // Handle apple-touch-icon.png request
      if (parsedUrl.pathname === '/apple-touch-icon.png') {
        const filePath = join(__dirname, 'public', 'apple-touch-icon.png');
        createReadStream(filePath)
          .on('error', () => {
            res.statusCode = 404;
            res.end('Not Found');
          })
          .pipe(res);
        return;
      }

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

