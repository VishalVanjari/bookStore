import express, { IRouter } from 'express';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import cartController from '../controllers/cart.controller';

class CartRoutes {
  private CartController = new cartController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to Create new Book
    this.router.post('/addToCart/:bookId/:quantity', userAuth, this.CartController.addToCart);

    //route to get all books
    this.router.get('', userAuth, this.CartController.getAllBooksFromCart);

     //route to update a book by their id
    this.router.put('/update/:bookId/:quantity', userAuth, this.CartController.updateCart);

    //route to delete a user by their id
    this.router.delete('/delete/:bookId', userAuth, this.CartController.deleteBookFromCart);
    
    // //route to get single book
    // this.router.get('/:id', userAuth, this.CartController.getSingleBook);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default CartRoutes;
