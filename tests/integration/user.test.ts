import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

let token = '';
let forgetToken = '';

describe('Book Store Integration testing', () => {
  describe('User APIs Test', () => {
    describe('Register A User', () => {
      it('Registration Of User', (done) => {
        request(app.getApp())
          .post('/users/')
          .send({
            firstName: 'Sakshi',
            lastName: 'Kukreja',
            email: 'sakshi@gmail.com',
            password: 'sakshi@123',
            mobile: '9876541230'
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });

    describe('Register As Admin', () => {
      it('Registration Of Admin', (done) => {
        request(app.getApp())
          .post('/users/admin')
          .send({
            firstName: 'Sakshi',
            lastName: 'Kukreja',
            email: 'sakshi@gmail.com',
            password: 'sakshi@123',
            mobile: '9876541230'
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });

    describe('Login As User', () => {
      it('Login Of User', (done) => {
        request(app.getApp())
          .post('/users/login')
          .send({
            email: 'sakshi@gmail.com',
            password: 'sakshi@123'
          })
          .end((err, res) => {
            token = 'bearer ' + res.body.token;
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });
  });
});
