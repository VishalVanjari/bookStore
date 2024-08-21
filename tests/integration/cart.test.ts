import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

let token = '';

describe('Book Store Integration testing', () => {
  describe('carts APIs Test', () => {
    describe('Register A Admin', () => {
      it('Registration Of Admin', (done) => {
        request(app.getApp())
          .post('/users/admin')
          .send({
            firstName: 'Pruthvi',
            lastName: 'sharma',
            email: 'sharma@gmail.com',
            password: 'sharma@123',
            mobile: '4563214562'
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });
    describe('Login A User', () => {
      it('Login Of User', (done) => {
        request(app.getApp())
          .post('/users/login')
          .send({
            email: 'sharma@gmail.com',
            password: 'sharma@123'
          })
          .end((err, res) => {
            token = 'bearer ' + res.body.token;
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });

    describe('Create new cart', () => {
      it('Detail of cart', (done) => {
        const id = '1';
        request(app.getApp())
          .post(`/cart/addToCart/${id}/${id}`)
          .set('Authorization', token)
          .send({})
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });

    describe('Get All carts', () => {
      it('Array of all carts', (done) => {
        request(app.getApp())
          .get('/cart')
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });

    describe('Update the cart', () => {
      it('Detail of Updated cart', (done) => {
        const id = '1';
        request(app.getApp())
          .put(`/carts/update/${id}/${id}`)
          .set('Authorization', token)
          .send({
            quantity: 19
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(202);
            done();
          });
      });
    });

    describe('Delete the cart', () => {
      it('Detail of delete cart', (done) => {
        const id = '1';
        request(app.getApp())
          .delete(`/cart/delete/${id}`)
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });
  });
});
