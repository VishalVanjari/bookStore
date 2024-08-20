import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class CartValidator {
  public cartBookQuantity = (req: Request, res: Response, next: NextFunction): void => {
    
    if (req.body.quantity >= ) {
        next();
      }
      else{
        res.json("Not Accesible")
      }
      
  };

}

export default CartValidator;
