import http from 'http';

const httpServer = http.createServer(function (req, res) {
  //res.statusCode(200);
  res.write('Pesto Bootcamp!\n');
  res.end();
});

export {
  httpServer,
};
