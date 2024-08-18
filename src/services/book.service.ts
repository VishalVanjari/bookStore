import sequelize, { DataTypes } from '../config/database';
import { IBook } from '../interfaces/book.interface';

import book from '../models/book';

class AdminService {
  private Book = book(sequelize, DataTypes);

  // create new Book
  public newBook = async (body) => {
    const data = await this.Book.create(body);
    return data;
  };

  //get all Books
  public getAllBooks = async (id: number): Promise<IBook[]> => {
    const data = await this.Book.findAll({ where: { userId: id } });
    return data;
  };

  //get a single Book
  public getSingleBook = async (userId, bookId) => {
    const data = await this.Book.findOne({
      where: { userId: userId, bookId: bookId }
    });
    return data;
  };

  //update a Book
  public updateBook = async (userId, bookId, body) => {
    await this.Book.update(body, { where: { userId: userId, bookId: bookId } });
    return body;
  };

  //delete a Book
  public deleteBook = async (userId, bookId) => {
    await this.Book.destroy({ where: { userId: userId, bookId: bookId } });
    return '';
  };
}

export default AdminService;
