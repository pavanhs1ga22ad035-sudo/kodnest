const http = require('http');
const fs = require('fs');
const path = require('path');
const data = require('./data');

const PORT = Number(process.env.PORT || 4173);
const ROOT = __dirname;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveFile(reqPath, res, method = 'GET') {
  const safePath = path.normalize(reqPath).replace(/^\.\.(\/|\\|$)/, '');
  let filePath = path.join(ROOT, safePath);

  if (safePath === '/') {
    filePath = path.join(ROOT, 'index.html');
  }

  if (!filePath.startsWith(ROOT)) {
    sendJson(res, 403, { message: 'Forbidden' });
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        sendJson(res, 404, { message: 'Not Found' });
        return;
      }
      sendJson(res, 500, { message: 'Internal Server Error' });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });

    if (method === 'HEAD') {
      res.end();
      return;
    }

    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/profile' && req.method === 'GET') {
    sendJson(res, 200, data.profile);
    return;
  }

  if (url.pathname === '/api/dashboard' && req.method === 'GET') {
    sendJson(res, 200, data.dashboard);
    return;
  }

  if (req.method === 'GET' || req.method === 'HEAD') {
    if (req.method === 'HEAD' && url.pathname.startsWith('/api/')) {
      res.writeHead(200);
      res.end();
      return;
    }

    serveFile(url.pathname, res, req.method);
    return;
  }

  sendJson(res, 405, { message: 'Method Not Allowed' });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`KodNest LMS server running at http://0.0.0.0:${PORT}`);
});
