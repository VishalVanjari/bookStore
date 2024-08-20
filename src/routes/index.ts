import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import CartRoutes from './cart.route';
import WishlistRoutes from './wishlist.route';
import OrderRoutes from './order.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });

  // Default User Routes
  router.use('/users', new userRoute().getRoutes());

  // Default Book Routes
  router.use('/books', new bookRoute().getRoutes());

  // Default Cart Routes
  router.use('/cart', new CartRoutes().getRoutes());

  // Default Wishlist Routes
  router.use('/wishlist', new WishlistRoutes().getRoutes());

  // Default Order Routes
  router.use('/order', new OrderRoutes().getRoutes());
  

  return router;
};

export default routes;
