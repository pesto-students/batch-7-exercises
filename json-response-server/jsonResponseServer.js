const http = require('http');

const jsonResponseServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end({ data: 'Pesto Bootcamp!' });
});

export { jsonResponseServer };
