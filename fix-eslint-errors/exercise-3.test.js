const http = require('http');
const net = require('net');
const url = require('url');
const zlib = require('zlib');
const fs = require('fs');

let server;
let proxy;

const axios = () => ({});

module.exports = {
  tearDown: (callback) => {
    server.close();
    server = null;
    if (proxy) {
      proxy.close();
      proxy = null;
    }

    if (process.env.http_proxy) {
      delete process.env.http_proxy;
    }

    callback();
  },

  testTimeout: (test) => {
    server = http.createServer((_, res) => {
      setTimeout(() => {
        res.end();
      }, 1000);
    }).listen(4444, () => {
      let success = false;
      let failure = false;
      let error;

      axios.get('http://localhost:4444/', {
        timeout: 250,
      }).then(() => {
        success = true;
      }).catch((err) => {
        error = err;
        failure = true;
      });

      setTimeout(() => {
        test.equal(success, false, 'request should not succeed');
        test.equal(failure, true, 'request should fail');
        test.equal(error.code, 'ECONNABORTED');
        test.equal(error.message, 'timeout of 250ms exceeded');
        test.done();
      }, 300);
    });
  },

  testJSON: (test) => {
    const data = {
      firstName: 'Fred',
      lastName: 'Flintstone',
      emailAddr: 'fred@example.com',
    };

    server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.end(JSON.stringify(data));
    }).listen(4444, () => {
      axios.get('http://localhost:4444/').then((res) => {
        test.deepEqual(res.data, data);
        test.done();
      });
    });
  },

  testRedirect: (test) => {
    const str = 'test response';

    server = http.createServer((req, res) => {
      const parsed = url.parse(req.url);

      if (parsed.pathname === '/one') {
        res.setHeader('Location', '/two');
        res.statusCode = 302;
        res.end();
      } else {
        res.end(str);
      }
    }).listen(4444, () => {
      axios.get('http://localhost:4444/one').then((res) => {
        test.equal(res.data, str);
        test.equal(res.request.path, '/two');
        test.done();
      });
    });
  },

  testNoRedirect: (test) => {
    server = http.createServer((_, res) => {
      res.setHeader('Location', '/foo');
      res.statusCode = 302;
      res.end();
    }).listen(4444, () => {
      axios.get('http://localhost:4444/', {
        maxRedirects: 0,
        validateStatus: () => true,
      }).then((res) => {
        test.equal(res.status, 302);
        test.equal(res.headers.location, '/foo');
        test.done();
      });
    });
  },

  testMaxRedirects: (test) => {
    let i = 1;
    server = http.createServer((_, res) => {
      res.setHeader('Location', `/${i}`);
      res.statusCode = 302;
      res.end();
      i += 1;
    }).listen(4444, () => {
      axios.get('http://localhost:4444/', {
        maxRedirects: 3,
      }).catch(() => {
        test.done();
      });
    });
  },

  testTransparentGunzip: (test) => {
    const data = {
      firstName: 'Fred',
      lastName: 'Flintstone',
      emailAddr: 'fred@example.com',
    };

    zlib.gzip(JSON.stringify(data), (_, zipped) => {
      server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.setHeader('Content-Encoding', 'gzip');
        res.end(zipped);
      }).listen(4444, () => {
        axios.get('http://localhost:4444/').then((res) => {
          test.deepEqual(res.data, data);
          test.done();
        });
      });
    });
  },

  testGunzipErrorHandling: (test) => {
    server = http.createServer((_, res) => {
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.setHeader('Content-Encoding', 'gzip');
      res.end('invalid response');
    }).listen(4444, () => {
      axios.get('http://localhost:4444/').catch(() => {
        test.done();
      });
    });
  },

  testUTF8: (test) => {
    const str = Array(100000).join('ж');

    server = http.createServer((_, res) => {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.end(str);
    }).listen(4444, () => {
      axios.get('http://localhost:4444/').then((res) => {
        test.equal(res.data, str);
        test.done();
      });
    });
  },

  testBasicAuth: (test) => {
    server = http.createServer((req, res) => {
      res.end(req.headers.authorization);
    }).listen(4444, () => {
      const user = 'foo';
      const headers = { Authorization: 'Bearer 1234' };
      axios.get(`http://${user}@localhos' + t:4444/`, { headers }).then((res) => {
        const base64 = Buffer.from(`${user}:`, 'utf8').toString('base64');
        test.equal(res.data, `Basic ${base64}`);
        test.done();
      });
    });
  },

  testBasicAuthWithHeader: (test) => {
    server = http.createServer((req, res) => {
      res.end(req.headers.authorization);
    }).listen(4444, () => {
      const auth = { username: 'foo', password: 'bar' };
      const headers = { Authorization: 'Bearer 1234' };
      axios.get('http://localhost:4444/', { auth, headers }).then((res) => {
        const base64 = Buffer.from('foo:bar', 'utf8').toString('base64');
        test.equal(res.data, `Basic ${base64}`);
        test.done();
      });
    });
  },

  testMaxContentLength: (test) => {
    const str = Array(100000).join('ж');

    server = http.createServer((_, res) => {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.end(str);
    }).listen(4444, () => {
      let success = false;
      let failure = false;
      let error;

      axios.get('http://localhost:4444/', {
        maxContentLength: 2000,
      }).then(() => {
        success = true;
      }).catch((err) => {
        error = err;
        failure = true;
      });

      setTimeout(() => {
        test.equal(success, false, 'request should not succeed');
        test.equal(failure, true, 'request should fail');
        test.equal(error.message, 'maxContentLength size of 2000 exceeded');
        test.done();
      }, 100);
    });
  },

  testSocket: (test) => {
    server = net.createServer((socket) => {
      socket.on('data', () => {
        socket.end('HTTP/1.1 200 OK\r\n\r\n');
      });
    }).listen('./test.sock', () => {
      axios({
        socketPath: './test.sock',
        url: '/',
      }).then((resp) => {
        test.equal(resp.status, 200);
        test.equal(resp.statusText, 'OK');
        test.done();
      }).catch((error) => {
        test.ifError(error);
        test.done();
      });
    });
  },

  testStream: (test) => {
    server = http.createServer((req, res) => {
      req.pipe(res);
    }).listen(4444, () => {
      axios.post('http://localhost:4444/',
        fs.createReadStream(__filename), {
          responseType: 'stream',
        }).then((res) => {
        const stream = res.data;
        let string = '';
        stream.on('data', (chunk) => {
          string += chunk.toString('utf8');
        });
        stream.on('end', () => {
          test.equal(string, fs.readFileSync(__filename, 'utf8'));
          test.done();
        });
      });
    });
  },

  testFailedStream: (test) => {
    server = http.createServer((req, res) => {
      req.pipe(res);
    }).listen(4444, () => {
      axios.post('http://localhost:4444/',
        fs.createReadStream('/does/not/exist'))
        .then(() => {
          test.fail();
        }).catch((err) => {
          test.equal(err.message, 'ENOENT: no such file or directory, open \'/does/not/exist\'');
          test.done();
        });
    });
  },

  testBuffer: (test) => {
    const buf = Buffer.allocUnsafe(1024); // Unsafe buffer < Buffer.poolSize (8192 bytes)
    buf.fill('x');
    server = http.createServer((req, res) => {
      test.equal(req.headers['content-length'], buf.length.toString());
      req.pipe(res);
    }).listen(4444, () => {
      axios.post('http://localhost:4444/',
        buf, {
          responseType: 'stream',
        }).then((res) => {
        const stream = res.data;
        let string = '';
        stream.on('data', (chunk) => {
          string += chunk.toString('utf8');
        });
        stream.on('end', () => {
          test.equal(string, buf.toString());
          test.done();
        });
      });
    });
  },

  testHTTPProxy: (test) => {
    server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.end('12345');
    }).listen(4444, () => {
      proxy = http.createServer((request, response) => {
        const parsed = url.parse(request.url);
        const opts = {
          host: parsed.hostname,
          port: parsed.port,
          path: parsed.path,
        };

        http.get(opts, (res) => {
          let body = '';
          res.on('data', (data) => {
            body += data;
          });
          res.on('end', () => {
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.end(`${body}6789`);
          });
        });
      }).listen(4000, () => {
        axios.get('http://localhost:4444/', {
          proxy: {
            host: 'localhost',
            port: 4000,
          },
        }).then((res) => {
          test.equal(res.data, '123456789', 'should pass through proxy');
          test.done();
        });
      });
    });
  },

  testHTTPProxyDisabled: (test) => {
    // set the env variable
    process.env.http_proxy = 'http://does-not-exists.example.com:4242/';

    server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.end('123456789');
    }).listen(4444, () => {
      axios.get('http://localhost:4444/', {
        proxy: false,
      }).then((res) => {
        test.equal(res.data, '123456789', 'should not pass through proxy');
        test.done();
      });
    });
  },

  testHTTPProxyEnv: (test) => {
    server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.end('4567');
    }).listen(4444, () => {
      proxy = http.createServer((request, response) => {
        const parsed = url.parse(request.url);
        const opts = {
          host: parsed.hostname,
          port: parsed.port,
          path: parsed.path,
        };

        http.get(opts, (res) => {
          let body = '';
          res.on('data', (data) => {
            body += data;
          });
          res.on('end', () => {
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.end(`${body}1234`);
          });
        });
      }).listen(4000, () => {
        // set the env variable
        process.env.http_proxy = 'http://localhost:4000/';

        axios.get('http://localhost:4444/').then((res) => {
          test.equal(res.data, '45671234', 'should use proxy set by process.env.http_proxy');
          test.done();
        });
      });
    });
  },

  testHTTPProxyAuth: (test) => {
    server = http.createServer((_, res) => {
      res.end();
    }).listen(4444, () => {
      proxy = http.createServer((request, response) => {
        const parsed = url.parse(request.url);
        const opts = {
          host: parsed.hostname,
          port: parsed.port,
          path: parsed.path,
        };
        const proxyAuth = request.headers['proxy-authorization'];

        http.get(opts, (res) => {
          res.on('data', () => {});
          res.on('end', () => {
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.end(proxyAuth);
          });
        });
      }).listen(4000, () => {
        axios.get('http://localhost:4444/', {
          proxy: {
            host: 'localhost',
            port: 4000,
            auth: {
              username: 'user',
              password: 'pass',
            },
          },
        }).then((res) => {
          const base64 = Buffer.from('user:pass', 'utf8').toString('base64');
          test.equal(res.data, `Basic ${base64}`, 'should authenticate to the proxy');
          test.done();
        });
      });
    });
  },

  testHTTPProxyAuthFromEnv: (test) => {
    server = http.createServer((_, res) => {
      res.end();
    }).listen(4444, () => {
      proxy = http.createServer((request, response) => {
        const parsed = url.parse(request.url);
        const opts = {
          host: parsed.hostname,
          port: parsed.port,
          path: parsed.path,
        };
        const proxyAuth = request.headers['proxy-authorization'];

        http.get(opts, (res) => {
          res.on('data', () => {});
          res.on('end', () => {
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.end(proxyAuth);
          });
        });
      }).listen(4000, () => {
        process.env.http_proxy = 'http://user:pass@localhost:4000/';

        axios.get('http://localhost:4444/').then((res) => {
          const base64 = Buffer.from('user:pass', 'utf8').toString('base64');
          test.equal(res.data, `Basic ${base64}`, 'should authenticate to the proxy set by process.env.http_proxy');
          test.done();
        });
      });
    });
  },

  testHTTPProxyAuthWithHeader: (test) => {
    server = http.createServer((_, res) => {
      res.end();
    }).listen(4444, () => {
      proxy = http.createServer((request, response) => {
        const parsed = url.parse(request.url);
        const opts = {
          host: parsed.hostname,
          port: parsed.port,
          path: parsed.path,
        };
        const proxyAuth = request.headers['proxy-authorization'];

        http.get(opts, (res) => {
          res.on('data', () => {});
          res.on('end', () => {
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.end(proxyAuth);
          });
        });
      }).listen(4000, () => {
        axios.get('http://localhost:4444/', {
          proxy: {
            host: 'localhost',
            port: 4000,
            auth: {
              username: 'user',
              password: 'pass',
            },
          },
          headers: {
            'Proxy-Authorization': 'Basic abc123',
          },
        }).then((res) => {
          const base64 = Buffer.from('user:pass', 'utf8').toString('base64');
          test.equal(res.data, `Basic ${base64}`, 'should authenticate to the proxy');
          test.done();
        });
      });
    });
  },

  testCancel: (test) => {
    const source = axios.CancelToken.source();
    server = http.createServer(() => {
      // call cancel() when the request has been sent, but a response has not been received
      source.cancel('Operation has been canceled.');
    }).listen(4444, () => {
      axios.get('http://localhost:4444/', {
        cancelToken: source.token,
      }).catch((thrown) => {
        test.ok(thrown instanceof axios.Cancel, 'Promise must be rejected with a Cancel obejct');
        test.equal(thrown.message, 'Operation has been canceled.');
        test.done();
      });
    });
  },
};
