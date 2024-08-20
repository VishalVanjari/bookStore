/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import orderService from '../services/order.service';
import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  public OrderService = new orderService();

  /**
   * Controller to placeorder
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public placeOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.OrderService.placeOrder(
        req.body.userId,
        req.params.bookId,
        parseInt(req.params.quantity)
      );
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Order Placed successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get all Orders
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.OrderService.getAllOrders(req.body.userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Orders fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };


//    /**
//    * Controller to delete a Book from Wishlist
//    * @param  {object} Request - request object
//    * @param {object} Response - response object
//    * @param {Function} NextFunction
//    */
//   public deleteBookFromWishlist = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): Promise<any> => {
//     try {
//       await this.WishlistService.deleteBookFromWishlist(
//         req.body.userId,
//         req.params.bookId
//       );
//       res.status(HttpStatus.OK).json({
//         code: HttpStatus.OK,
//         data: {},
//         message: 'Book deleted successfully from wishlist'
//       });
//     } catch (error) {
//       next(error);
//     }
//   };


  // /**
  //  * Controller to update a Book from Cart
  //  * @param  {object} Request - request object
  //  * @param {object} Response - response object
  //  * @param {Function} NextFunction
  //  */
  // public updateCart = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<any> => {
  //   try {
  //     const data = await this.CartService.updateCart(
  //       req.body.userId,
  //       req.params.bookId,
  //       req.params.quantity
  //     );
  //     res.status(HttpStatus.ACCEPTED).json({
  //       code: HttpStatus.ACCEPTED,
  //       data: data,
  //       message: 'Cart updated successfully'
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

 

  // /**
  //  * Controller to get a single Book
  //  * @param  {object} Request - request object
  //  * @param {object} Response - response object
  //  * @param {Function} NextFunction
  //  */
  // public getSingleBook = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<any> => {
  //   try {
  //     const data = await this.CartService.getSingleBook(
  //       req.body.userId,
  //       req.params.id
  //     );
  //     res.status(HttpStatus.OK).json({
  //       code: HttpStatus.OK,
  //       data: data,
  //       message: 'Book fetched successfully'
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default OrderController;
