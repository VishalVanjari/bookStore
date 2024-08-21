import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

let token = '';

describe('Book Store Integration testing', () => {
  describe('order APIs Test', () => {
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

    describe('Plcae Order', () => {
      it('Detail of Order', (done) => {
        const id = '1';
        request(app.getApp())
          .post(`/order/${id}/${id}`)
          .set('Authorization', token)
          .send({
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });

    describe('Get All Orders', () => {
      it('Array of all Orders', (done) => {
        request(app.getApp())
          .get('/order/')
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });
  });
});
