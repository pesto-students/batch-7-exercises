const http = require('http');

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Pesto Bootcamp!\n');
});

export { httpServer };
