const { shared, supertest, server } = require("../../requires");

describe('Currency', () => {
  const from = 'COP';
  const to = 'USD';
  const endpoint = `/api/v1/currency/${from}/${to}`;

  shared.shouldEndpointFormat(supertest, server, "get", endpoint);

  shared.shouldEndpointBeSuccess(supertest, server, 'get', endpoint);

  shared.shouldDataBeNumber(supertest, server, 'get', endpoint);

  test('Endpoint 200 status', (done) => {
    supertest(server).get(endpoint).end((err, res) => {
      const { statusCode } = res;
      expect(statusCode).toBe(200);
      done();
    });
  });
});