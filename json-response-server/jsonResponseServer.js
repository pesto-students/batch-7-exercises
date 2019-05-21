import http from 'http';
const jsonResponseServer = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({ data: 'Pesto Bootcamp!'}));
  res.end();
});

export {
  jsonResponseServer,
};
