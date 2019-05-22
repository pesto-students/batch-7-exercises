const http = require('http');

const STATUS_CODE_SUCCESS = 200;

const jsonResponseServer = http.createServer((request, response) => {
  const responseData = { data: 'Pesto Bootcamp!' };
  response.writeHead(STATUS_CODE_SUCCESS, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(responseData));
  response.end();
});

export { jsonResponseServer };
