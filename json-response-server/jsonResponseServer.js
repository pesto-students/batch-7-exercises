import http from 'http';

const data = { data: 'Pesto Bootcamp!' };

const jsonResponseServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
});

export { jsonResponseServer };
