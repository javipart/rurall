const switchMethod = (supertest, method, endpoint, data, callback) => {
  switch (method.trim().toUpperCase()) {
    case "POST":
      supertest
        .post(endpoint)
        .send(data)
        .end(callback);
      break;
    case "GET":
      supertest
        .get(endpoint)
        .end(callback);
  }
};

exports.shouldEndpointFormat = (supertest, server, method, endpoint, data = {}, status = 200) => {
  describe(`Test Basic for [${method.toUpperCase()}] - ${endpoint}`, () => {
    test(`Not error`, done => {
      switchMethod(supertest(server), method, endpoint, data, (err, res) => {
        expect(res.body).not.toBe(err);
        done();
      })
    })

    test(`Status ${status}`, (done => {
      switchMethod(supertest(server), method, endpoint, data, (err, res) => {
        expect(res.statusCode).toBe(status);
        done();
      });

    }));

    test(`Body should be a Object`, (done) => {
      switchMethod(supertest(server), method, endpoint, data, (err, res) => {
        expect(typeof res.body).toBe('object');
        done();
      });
    });

    test(`Main Body's structure should have 'success' and 'data'`, (done) => {
      switchMethod(supertest(server), method, endpoint, data, (err, res) => {
        expect(res.body).toEqual(expect.objectContaining({
          'success': expect.anything(),
          'data': expect.anything(),
        }));
        done();
      });
    });

    test(`Main Body's structure should have 'success' it should be a 'boolean'`, (done) => {
      switchMethod(supertest(server), method, endpoint, data, (err, res) => {
        expect(res.body).toEqual(expect.objectContaining({
          'success': expect.any(Boolean),
        }));
        done();
      });
    });
  });
};

exports.shouldEndpointBeSuccess = (supertest, server, method, endpoint, data = {}) => {
  test(`Body.success should be True`, (done) => {
    switchMethod(supertest(server), method, endpoint, data, (err, res) => {
      expect(res.body.success).toBe(true);
      done();
    });
  });
}

exports.shouldEndpointBeSuccessFalse = (supertest, server, method, endpoint, data = {}) => {
  test(`Body.success should be True`, (done) => {
    switchMethod(supertest(server), method, endpoint, data, (err, res) => {
      expect(res.body.success).toBe(false);
      done();
    });
  });
}

exports.shouldDataBeObject = (supertest, server, method, endpoint, data = {}) => {
  test(`Body.data should be Object`, (done) => {
    switchMethod(supertest(server), method, endpoint, data, (err, res) => {
      expect(typeof res.body.data).toBe('object');
      done();
    });
  });
}

exports.shouldDataBeNumber = (supertest, server, method, endpoint, data = {}) => {
  test(`Body.data should be Number`, (done) => {
    switchMethod(supertest(server), method, endpoint, data, (err, res) => {
      expect(typeof res.body.data).toBe('number');
      done();
    });
  });
}

exports.shouldDataBeArray = (supertest, server, method, endpoint, data = {}) => {
  test(`Body.data should be Array`, (done) => {
    switchMethod(supertest(server), method, endpoint, data, (err, res) => {
      expect(typeof res.body.data).toBe('array');
      done();
    });
  });
}

exports.shouldDataBeArrayOfObject = (supertest, server, method, endpoint, data = {}) => {
  test(`Body.data should be a array of object`, (done) => {
    switchMethod(supertest(server), method, endpoint, data, (err, res) => {
      expect(typeof res.body.data).toBe('object');
      done();
    });
  });
}