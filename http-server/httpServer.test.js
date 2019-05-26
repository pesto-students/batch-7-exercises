const http = require('http');
import { httpServer } from './httpServer';


describe('httpServer', () => {
  beforeAll(() => {
    httpServer.listen(3000);
  });

  afterAll(() => {
    httpServer.close();
  });

  describe('/', () => {
    test('should return 200', (done) => {
      http.get('http://localhost:3000', (res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('should say "Pesto Bootcamp!"', (done) => {
      http.get('http://localhost:3000', (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          expect('Pesto Bootcamp!\n').toBe(data);
          done();
        });
      });
    });
  });
});
