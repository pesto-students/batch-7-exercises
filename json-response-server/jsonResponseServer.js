const http = require("http");

const requestHandler = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end('{ "data":"Pesto Bootcamp!"}');
};

const jsonResponseServer = http.createServer(requestHandler);

export { jsonResponseServer };
