/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Model } from 'sequelize';
import { IBook } from '../interfaces/book.interface';
export default (sequelize, DataTypes) => {
  class Book extends Model<IBook> implements IBook {
    public bookId;
    public bookName;
    public bookImage;
    public description;
    public discountPrice;
    public price;
    public author;
    public quantity;
    public userId;

    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Book.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bookName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bookImage: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      discountPrice: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    },
    {
      sequelize,
      modelName: 'book',
      timestamps: false
    }
  );
  return Book;
};
