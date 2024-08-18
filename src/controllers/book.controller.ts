/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import bookService from '../services/book.service';
import { Request, Response, NextFunction } from 'express';

class BookController {
  public BookService = new bookService();

  /**
   * Controller to create new Book
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

  /**
   * Controller to get all books
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.getAllBooks(req.body.userId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Books fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get a single Book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getSingleBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.getSingleBook(
        req.body.userId,
        req.params.id
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to update a Book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public updateBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.updateBook(
        req.body.userId,
        req.params.id,
        req.body
      );
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Book updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to delete a Book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      await this.BookService.deleteBook(req.body.userId, req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: {},
        message: 'Book deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BookController;
