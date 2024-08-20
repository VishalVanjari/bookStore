import express, { IRouter } from 'express';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import orderController from '../controllers/order.controller';

class OrderRoutes {
  private OrderController = new orderController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to Place order
    this.router.post('/:bookId/:quantity', userAuth, this.OrderController.placeOrder);

    //route to get all Orders
    this.router.get('', userAuth, this.OrderController.getAllOrders);

    // //route to delete a book by their id from Wishlist
    // this.router.delete('/delete/:bookId', userAuth, this.OrderController.deleteBookFromWishlist);

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default OrderRoutes;
