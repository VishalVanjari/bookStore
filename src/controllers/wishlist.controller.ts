/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import wishlistService from '../services/wishlist.service';
import { Request, Response, NextFunction } from 'express';

class CartController {
  public WishlistService = new wishlistService();

  /**
   * Controller to Add Book to wishlist
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addToWishlist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.WishlistService.addToWishlist(
        req.body,
        req.params.bookId
      );
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Added to Wishlist successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get all books from wishlist
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllBooksFromWishlist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.WishlistService.getAllBooksFromWishlist(req.body.userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Books fetched successfully from Wishlist'
      });
    } catch (error) {
      next(error);
    }
  };


   /**
   * Controller to delete a Book from Wishlist
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteBookFromWishlist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      await this.WishlistService.deleteBookFromWishlist(
        req.body.userId,
        req.params.bookId
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: {},
        message: 'Book deleted successfully from wishlist'
      });
    } catch (error) {
      next(error);
    }
  };


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

export default CartController;
