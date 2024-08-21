import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

let token = '';

describe('Book Store Integration testing', () => {
  describe('wishlists APIs Test', () => {
    describe('Register A user', () => {
      it('Registration Of User', (done) => {
        request(app.getApp())
          .post('/users')
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

    describe('Create new wishlist', () => {
      it('Detail of wishlist', (done) => {
        const id = '1';
        request(app.getApp())
          .post(`/wishlist/addTowishlist/${id}`)
          .set('Authorization', token)
          .send({})
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });

    describe('Get All wishlists', () => {
      it('Array of all wishlists', (done) => {
        request(app.getApp())
          .get('/wishlist')
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });

    describe('Delete the wishlist', () => {
      it('Detail of delete wishlist', (done) => {
        const id = '1';
        request(app.getApp())
          .delete(`/wishlist/delete/${id}`)
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });
  });
});
