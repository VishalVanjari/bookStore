import { expect } from 'chai';
import CartService from '../../src/services/cart.service';

//////////////////////////////////   Cart   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/addToCart :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new CartService().addToCart(1, 1, {
        cartId: 1,
        userId: 1,
        bookId: 1,
        quantity: 2,
        discountPrice: 199,
        total: 398
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllBooksFromCart :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new CartService().getAllBooksFromCart(8);
      expect(result).to.be.an('array');
    });
  });


  describe('/updateCart/:id :  update a book', () => {
    it('Update note and Return a Updated Note  ', async () => {
      const result = await new CartService().updateCart(1, 8, {
        description: 'description sdfghjkl'
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/deleteBookFromCart/:id :  Delete a book', () => {
    it('Delete a one Note and return data', async () => {
      const result = await new CartService().deleteBookFromCart(4, 8);
      expect(result).to.be.an('number');
    });
  });
});
