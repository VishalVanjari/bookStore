import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import bookController from '../controllers/book.controller';

class BookRoutes {
  private BookController = new bookController();
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {

    //route to SignUp with Admin
    this.router.post('', this.BookController.newBook);

    //route to SignUp with User
    //this.router.post('', this.UserController.newUser);

     //route to get all users
     this.router.get('', this.UserController.getAllUsers);

    //route to get a single user by their id
    this.router.get('/:id', userAuth, this.UserController.getUser);

    //route to update a user by their id
    this.router.put('/:id', this.UserController.updateUser);

    //route to delete a user by their id
    this.router.delete('/:id', this.UserController.deleteUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default BookRoutes;
