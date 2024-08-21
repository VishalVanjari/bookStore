import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

let token = '';

describe('Book Store Integration testing', () => {
  describe('Books APIs Test', () => {
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

    describe('Create new book', () => {
      it('Detail of book', (done) => {
        request(app.getApp())
          .post('/books/')
          .set('Authorization', token)
          .send({
            bookName: 'Wings of fire 3',
            description: 'qwertyuiop asdfghjkl zxcvbnm',
            discountPrice: 69.0,
            price: 99.0,
            author: 'APJ Abdul Kalam 3',
            quantity: 19
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            done();
          });
      });
    });

    describe('Get All Books', () => {
      it('Array of all Books', (done) => {
        request(app.getApp())
          .get('/books/getAllBooks')
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });

    describe('Get Specific single book', () => {
      it('Detail of Specific single book', (done) => {
        const id = '1';
        request(app.getApp())
          .get(`/books/${id}`)
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });

    describe('Update the Book', () => {
      it('Detail of Updated book', (done) => {
        const id = '1';
        request(app.getApp())
          .put(`/books/update/${id}`)
          .set('Authorization', token)
          .send({
            discountPrice: 69.0,
            price: 99.0,
            author: 'APJ Abdul Kalam 3',
            quantity: 19
          })
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(202);
            done();
          });
      });
    });

    describe('Delete the Book', () => {
      it('Detail of delete Book', (done) => {
        const id = '1';
        request(app.getApp())
          .delete(`/books/delete/${id}`)
          .set('Authorization', token)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
          });
      });
    });
  });
});
