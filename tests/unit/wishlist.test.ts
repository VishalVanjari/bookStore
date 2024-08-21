import { expect } from 'chai';
import WishlistService from '../../src/services/wishlist.service';

//////////////////////////////////   Wishlist   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/addToCart :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new WishlistService().addToWishlist(1, {
        wishId: 1,
        userId: 1,
        bookId: 1,
        bookName: 'wings of fire',
        author: 1,
        discountPrice: 199
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllBooksFromWishlist :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new WishlistService().getAllBooksFromWishlist(8);
      expect(result).to.be.an('array');
    });
  });

  describe('/updateCart/:id :  update a book', () => {
    it('Update note and Return a Updated Note  ', async () => {
      const result = await new WishlistService().updateCart(1, 8, {
        description: 'description sdfghjkl'
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/deleteBookFromWishlist/:id :  Delete a book', () => {
    it('Delete a one Note and return data', async () => {
      const result = await new WishlistService().deleteBookFromWishlist(4, 8);
      expect(result).to.be.an('number');
    });
  });
});
