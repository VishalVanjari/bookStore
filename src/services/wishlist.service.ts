import { where } from 'sequelize';
import sequelize, { DataTypes } from '../config/database';
import { ICart } from '../interfaces/cart.interface';
import cart from '../models/cart';
import book from '../models/book';
import { error } from 'winston';
import wishlist from '../models/wishlist';
import { IWishlist } from '../interfaces/wishlist.interface';

class WishlistService {
  private Cart = cart(sequelize, DataTypes);
  private Book = book(sequelize, DataTypes);
  private Wishlist = wishlist(sequelize, DataTypes);

  // Add a Book to Wishlist
  public addToWishlist = async (body, bookId) => {
    let book = await this.Book.findByPk(bookId);
    let present = await this.Wishlist.findOne({
      where: { bookId: bookId, userId: body.userId }
    });

    let obj = {
      userId: body.userId,
      bookId: book.bookId,
      bookName: book.bookName,
      author: book.author,
      discountPrice: book.discountPrice
    };

    if (!present) {
      const data = await this.Wishlist.create(obj);
      return data;
    }
  };

  //get all Books from Wishlist
  public getAllBooksFromWishlist = async (id: number): Promise<IWishlist[]> => {
    const data = await this.Wishlist.findAll({ where: { userId: id } });
    return data;
  };

  //update a Book to Wishlist
  public updateCart = async (userId, bookId, quantity) => {
    const book = await this.Book.findOne({ where: { bookId: bookId } });
    const total = book.discountPrice * quantity;
    if (book.quantity >= quantity) {
      var body = {
        quantity: quantity,
        total: total,
        userId: userId
      };

      await this.Cart.update(body, {
        where: { userId: userId, bookId: bookId }
      });

      if (body.quantity <= 0) {
        await this.Cart.destroy({ where: { userId: userId, bookId: bookId } });
      }
    }
    return body;
  };

  //delete a Book from wishlist
  public deleteBookFromWishlist = async (userId, bookId) => {
    await this.Wishlist.destroy({ where: { userId: userId, bookId: bookId } });
    return '';
  };

  // //get a single Book from cart
  // public getSingleBook = async (userId, bookId) => {
  //   const data = await this.Book.findOne({
  //     where: { userId: userId, bookId: bookId }
  //   });
  //   return data;
  // };
}

export default WishlistService;
