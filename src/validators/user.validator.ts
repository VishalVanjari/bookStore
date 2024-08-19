import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  userRegistration = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
      mobile: Joi.string().min(10).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  adminRegistration = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
      mobile: Joi.string().min(10).required(),
      role:'admin'
    });
    req.body.role = 'admin';
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  public login = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  public adminValidator = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  public checkAdmin = (req: Request, res: Response, next: NextFunction): void => {
    
    if (req.body.role == 'admin') {
      next();
    }
    else{
      res.json("Not Accesible")
    }
    
  };
}

export default UserValidator;
