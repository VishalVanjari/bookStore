import express, { IRouter } from 'express';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import wishlistController from '../controllers/wishlist.controller';

class WishlistRoutes {
  private WishlistController = new wishlistController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to Add a Book to Wishlist
    this.router.post('/addToWishlist/:bookId', userAuth, this.WishlistController.addToWishlist);

    //route to get all books from Wishlist
    this.router.get('', userAuth, this.WishlistController.getAllBooksFromWishlist);

    //route to delete a book by their id from Wishlist
    this.router.delete('/delete/:bookId', userAuth, this.WishlistController.deleteBookFromWishlist);

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default WishlistRoutes;
