import { where } from 'sequelize';
import sequelize, { DataTypes } from '../config/database';
import { ICart } from '../interfaces/cart.interface';
import cart from '../models/cart';
import book from '../models/book';
import { error } from 'winston';

class CartService {
  private Cart = cart(sequelize, DataTypes);
  private Book = book(sequelize, DataTypes);

  // Add a Book to cart
  public addToCart = async (body, bookId, quantity) => {
    let book = await this.Book.findByPk(bookId);
    let present = await this.Cart.findOne({ where: { bookId: bookId } });

    if (!present) {
      if (book.quantity >= quantity) {
        let obj = {
          cartId: body.userId,
          userId: body.userId,
          bookId: bookId,
          quantity: quantity,
          discountPrice: book.discountPrice,
          total: book.discountPrice * quantity
        };
        const data = await this.Cart.create(obj);
        return data;
      }
    }
  };

  //get all Books from Cart
  public getAllBooksFromCart = async (id: number): Promise<ICart[]> => {
    const data = await this.Cart.findAll({ where: { cartId: id } });
    return data;
  };

  //update a Book to cart
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

  //delete a Book from cart
  public deleteBookFromCart = async (userId, bookId) => {
    await this.Cart.destroy({ where: { userId: userId, bookId: bookId } });
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

export default CartService;
