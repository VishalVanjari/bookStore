import sequelize, { DataTypes } from '../config/database';
import { IUser } from '../interfaces/user.interface';

import book from '../models/book';

class AdminService {
  private Book = book(sequelize, DataTypes);

  //create a new user
  public newAdmin = async (body) => {
    body.role = 'admin' ;
    const data = await this.Book.create(body);
    return data;
  };

  // create new Book
  public newBook = async (body) => {
    
    const data = await this.Book.create(body);
    return data;
  };

//   //get all users
//   public getAllUsers = async (): Promise<IUser[]> => {
//     const data = await this.User.findAll();
//     return data;
//   };

  

//   //update a user
//   public updateUser = async (id, body) => {
//     await this.User.update(body, {
//       where: { id: id }
//     });
//     return body;
//   };

//   //delete a user
//   public deleteUser = async (id) => {
//     await this.User.destroy({ where: { id: id } });
//     return '';
//   };

//   //get a single user
//   public getUser = async (id) => {
//     const data = await this.User.findByPk(id);
//     return data;
//   };
}

export default AdminService;
