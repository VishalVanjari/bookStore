import { expect } from 'chai';
import BookService from '../../src/services/book.service';

//////////////////////////////////   Books   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/newBook :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new BookService().newBook({
        bookId: 1,
        bookName: 'Wings of fire',
        bookImage: '',
        description: 'qwertyuiop asdfghjkl zxcvbnm',
        discountPrice: 199,
        price: 299,
        author: 'APJ',
        quantity: 22,
        userId: 1
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllBooksUser :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new BookService().getAllBooksUser(8);
      expect(result).to.be.an('array');
    });
  });

  describe('/getAllBooksAdmin :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new BookService().getAllBooksAdmin(8);
      expect(result).to.be.an('array');
    });
  });

  describe('/getSingleBook/:id :  get a specific book', () => {
    it('Return a Specific one Note  ', async () => {
      const result = await new BookService().getSingleBook(2, 8);
      expect(result).to.be.an('object');
    });
  });

  describe('/updateBook/:id :  update a book', () => {
    it('Update note and Return a Updated Note  ', async () => {
      const result = await new BookService().updateBook(1, 8, {
        description: 'description sdfghjkl'
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/deleteBook/:id :  Delete a book', () => {
    it('Delete a one Note and return data', async () => {
      const result = await new BookService().deleteBook(4, 8);
      expect(result).to.be.an('number');
    });
  });
});
