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
    //route to Create new Book
    this.router.post('', userAuth, this.UserValidator.checkAdmin,this.BookController.newBook);

    //route to get all books for User
    this.router.get('', userAuth, this.BookController.getAllBooksUser);

    //route to get all books fot admin
    this.router.get('/getAllBooks', userAuth,this.UserValidator.checkAdmin, this.BookController.getAllBooksAdmin);

    //route to get single book
    this.router.get('/:id', userAuth,this.UserValidator.checkAdmin, this.BookController.getSingleBook);

    //route to update a book by their id
    this.router.put('/update/:id', userAuth,this.UserValidator.checkAdmin, this.BookController.updateBook);

    //route to delete a user by their id
    this.router.delete('/delete/:id', userAuth,this.UserValidator.checkAdmin, this.BookController.deleteBook);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default BookRoutes;
