import { where } from 'sequelize';
import sequelize, { DataTypes } from '../config/database';
import { ICart } from '../interfaces/cart.interface';
import cart from '../models/cart';
import book from '../models/book';
import { error } from 'winston';
import order from '../models/order';
import { IOrder } from '../interfaces/order.interface';

class OrderService {
  private Cart = cart(sequelize, DataTypes);
  private Book = book(sequelize, DataTypes);
  private Order = order(sequelize, DataTypes);

  // Place Order
  public placeOrder = async (userId, bookId, quantity) => {
    let book = await this.Book.findByPk(bookId);
    if (book.quantity >= quantity) {
      let obj = {
        userId: userId,
        bookId: book.bookId,
        quantity: quantity ||1,
        price: book.discountPrice * quantity
      };
      const data = await this.Order.create(obj);
      let updatedQuantity = book.quantity - quantity;
      let body = {
        quantity: updatedQuantity
      };
      await this.Book.update(body, {
        where: { bookId: bookId }
      });
      return data;
    }
  };

  //get all Orders
  public getAllOrders = async (id: number): Promise<IOrder[]> => {
    const data = await this.Order.findAll({ where: { userId: id } });
    return data;
  };

  //   //update a Book to Wishlist
  //   public updateCart = async (userId, bookId, quantity) => {
  //     const book = await this.Book.findOne({ where: { bookId: bookId } });
  //     const total = book.discountPrice * quantity;
  //     if (book.quantity >= quantity) {
  //       var body = {
  //         quantity: quantity,
  //         total: total,
  //         userId: userId
  //       };

  //       await this.Cart.update(body, {
  //         where: { userId: userId, bookId: bookId }
  //       });

  //       if (body.quantity <= 0) {
  //         await this.Cart.destroy({ where: { userId: userId, bookId: bookId } });
  //       }
  //     }
  //     return body;
  //   };

  //   //delete a Book from wishlist
  //   public deleteBookFromWishlist = async (userId, bookId) => {
  //     await this.Wishlist.destroy({ where: { userId: userId, bookId: bookId } });
  //     return '';
  //   };

  // //get a single Book from cart
  // public getSingleBook = async (userId, bookId) => {
  //   const data = await this.Book.findOne({
  //     where: { userId: userId, bookId: bookId }
  //   });
  //   return data;
  // };
}

export default OrderService;
