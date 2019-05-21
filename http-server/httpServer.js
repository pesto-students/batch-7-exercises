// content of index.js
const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
  response.end("Pesto Bootcamp!\n");
};

const httpServer = http.createServer(requestHandler);

export { httpServer };
