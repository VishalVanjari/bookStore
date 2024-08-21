import { expect } from 'chai';
import OrderService from '../../src/services/order.service';

//////////////////////////////////   Order   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/newBook :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new OrderService().placeOrder(1, 1, {
        userId: 1,
        bookId: 1,
        quantity: 1,
        price: 199
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllOrders :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new OrderService().getAllOrders(8);
      expect(result).to.be.an('array');
    });
  });
});
