const { shared, supertest, server } = require("../../requires");

describe('Locate', () => {
  const ip = '45.171.182.10';
  const endpoint = `/api/v1/locate/${ip}`;

  shared.shouldEndpointFormat(supertest, server, "get", endpoint);

  shared.shouldEndpointBeSuccess(supertest, server, 'get', endpoint);

  shared.shouldDataBeObject(supertest, server, 'get', endpoint);

  test('Endpoint 200 status', (done) => {
    supertest(server).get(endpoint).end((err, response) => {
      const { statusCode } = response;
      expect(statusCode).toBe(200);
      done();
    });
  });

  test(`'${endpoint}': Body.data's structure`, (done) => {
    supertest(server).get(endpoint).end((err, res) => {
      res.body.data.forEach(item => {
        expect(item).toHaveProperty('iso');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('id_row');
        expect(item).toHaveProperty('flag');
        expect(item).toHaveProperty('currency');
      });
      done();
    });
  });

  describe('Blacklist', () => {
    const ip = '10.20.30.40';
    const endpoint = `/api/v1/locate/${ip}`;

    shared.shouldEndpointFormat(supertest, server, "get", endpoint);

    shared.shouldEndpointBeSuccessFalse(supertest, server, 'get', endpoint);

    shared.shouldDataBeObject(supertest, server, 'get', endpoint);

    test('Endpoint 202 status', (done) => {
      supertest(server).get(endpoint).end((err, res) => {
        const { statusCode } = res;
        expect(statusCode).toBe(202);
        done();
      });
    });

    test(`'${endpoint}': Body.data's structure`, (done) => {
      supertest(server).get(endpoint).end((err, res) => {
        res.body.data.forEach(item => {
          expect(item).toHaveProperty('message');
          expect(item).toHaveProperty('error');
        });
        done();
      });
    });
  });
});