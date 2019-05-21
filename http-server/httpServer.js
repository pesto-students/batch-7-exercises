const http = require('http');

const httpServer = http.createServer((req, res) => {
  res.write('Pesto Bootcamp!\n');
  res.end();
});

export { httpServer };
