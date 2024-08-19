/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import cartService from '../services/cart.service';
import { Request, Response, NextFunction } from 'express';

class CartController {
  public CartService = new cartService();

  /**
   * Controller to Add Book to cart
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addToCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.addToCart(
        req.body,
        req.params.bookId,
        req.params.quantity
      );
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Added to cart successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get all books from Cart
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllBooksFromCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.getAllBooksFromCart(req.body.userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Books fetched successfully from Cart'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to update a Book from Cart
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public updateCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.updateCart(
        req.body.userId,
        req.params.bookId,
        req.params.quantity
      );
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Cart updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to delete a Book from Cart
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteBookFromCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      await this.CartService.deleteBookFromCart(
        req.body.userId,
        req.params.bookId
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: {},
        message: 'Book deleted successfully from cart'
      });
    } catch (error) {
      next(error);
    }
  };

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

export default CartController;
