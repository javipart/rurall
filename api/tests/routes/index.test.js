const { shared, supertest, server, mongoose } = require("../requires");

beforeAll(async () => {
  return new Promise((resolve, reject) => {
    let alreadyReturned = false;
    mongoose.connection.on('connected', () => {
      if (alreadyReturned === false) {
        alreadyReturned = true;
        resolve(true);
      }
    });
    mongoose.connection.on('error', () => {
      if (alreadyReturned === false) {
        alreadyReturned = true;
        reject(true);
      }
    });
  });
});

afterAll(() => mongoose.disconnect());

describe("Index", () => {
  describe("Live\'s Endpoint", () => {

    const endpoint = "/";

    shared.shouldEndpointFormat(supertest, server, "get", endpoint);

    shared.shouldEndpointBeSuccess(supertest, server, 'get', endpoint);

    shared.shouldDataBeObject(supertest, server, 'get', endpoint);

    test(`'${endpoint}': Body.data's structure`, (done) => {
      supertest(server).get(endpoint).end((err, res) => {
        expect(res.body.data).toHaveProperty('status');
        done();
      })
    });

    test(`'${endpoint}': Body.data.status should be 'Running'`, (done) => {
      supertest(server).get(endpoint).end((err, res) => {
        expect(res.body.data.status).toBe('Running');
        done();
      })
    });

  });
});