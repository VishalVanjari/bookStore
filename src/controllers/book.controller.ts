/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import bookService from '../services/book.service';

import { Request, Response, NextFunction } from 'express';

class BookController {
  public BookService = new bookService();

  
// Create New Book

   /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public newBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.newBook(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'New Book created successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  //   /**
  //    * Controller to get all users available
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public getAllUsers = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.AdminService.getAllUsers();
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: data,
  //         message: 'All users fetched successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to get a single user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public getUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.AdminService.getUser(req.params.id);
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: data,
  //         message: 'User fetched successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to update a user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public updateUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.AdminService.updateUser(req.params.id, req.body);
  //       res.status(HttpStatus.ACCEPTED).json({
  //         code: HttpStatus.ACCEPTED,
  //         data: data,
  //         message: 'User updated successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to delete a user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public deleteUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       await this.AdminService.deleteUser(req.params.id);
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: {},
  //         message: 'User deleted successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}

export default BookController;
