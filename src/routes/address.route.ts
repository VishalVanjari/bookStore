import express, { IRouter } from 'express';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import addressController from '../controllers/address.controller';

class AddressRoutes {
  private AddressController = new addressController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to Create new Book
    this.router.post('', userAuth, this.AddressController.addAddress);

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default AddressRoutes;
