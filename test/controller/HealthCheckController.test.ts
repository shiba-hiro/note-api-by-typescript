import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const app = process.env.TEST_APP || 'http://localhost:3000';

describe('Health Check Controller Tests', () => {
  describe('/health-check', () => {
    it('Successfully get Response', (done) => {
      chai.request(app)
        .get('/health-check')
        .end((error, response) => {
          chai.expect(response).to.have.status(200);
          done();
        });
    });
  });
});
