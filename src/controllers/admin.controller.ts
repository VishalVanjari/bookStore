/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import adminService from '../services/admin.service';

import { Request, Response, NextFunction } from 'express';

class AdminController {
  public AdminService = new adminService();

  //Controller to create new Admin
  /**
   * Controller to create new Admin
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public adminRegistration = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.AdminService.adminRegistration(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Admin created successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  //Controller to Login Admin
  /**
   * Controller to create new Admin
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.AdminService.login(
        req.body.email,
        req.body.password
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data.data,
        message: data.message,
        token: data.token
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

export default AdminController;
