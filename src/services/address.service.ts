import sequelize, { DataTypes } from '../config/database';
import { IBook } from '../interfaces/book.interface';

import book from '../models/book';

class AddressService {

  // create new Book
  public addAddress = async (body) => {
    const data = body.address;
    return data;
  };
}

export default AddressService;
