const http = require('http');

const STATUS_CODE_SUCCESS = 200;

const httpServer = http.createServer((request, response) => {
  response.writeHead(STATUS_CODE_SUCCESS);
  response.write('Pesto Bootcamp!\n');
  response.end();
});

export { httpServer };
