import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text' });
});

function httpServer(...args) {
  return args;
}

export { httpServer };
