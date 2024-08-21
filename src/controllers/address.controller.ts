/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import bookService from '../services/book.service';
import { Request, Response, NextFunction } from 'express';
import addressService from '../services/address.service';

class AddressController {
  public AddressService = new addressService();

  /**
   * Controller to create new Book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addAddress = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.AddressService.addAddress(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Address Fetch successfully'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AddressController;
