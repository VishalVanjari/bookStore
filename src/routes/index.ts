import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';

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

  return router;
};

export default routes;
