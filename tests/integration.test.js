const request = require('supertest');
const app = require('../index');
const http = require('http');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(done);
});

afterAll((done) => {
  server.close(done);
});

describe('API Integration Tests', () => {
    // Test pour réussir l'authentification
    it('should authenticate a user', async () => {
      const res = await request(server)
        .post('/login')
        .send({ email: 'jorel@gmail.com', password: 'jorel1234' })
        .expect(200);
  
      expect(res.body).toHaveProperty('user_profile');
    });
  
    // Test pour échouer l'authentification avec des identifiants incorrects
    it('should fail to authenticate a user with wrong credentials', async () => {
      const res = await request(server)
        .post('/login')
        .send({ email: 'email@incorrect.com', password: 'passwordincorrect' })
        .expect(200);
  
      expect(res.body).toHaveProperty('message', "l'utilisateur n'existe pas");
      expect(res.body).toHaveProperty('error', true);
    });
  });
  
