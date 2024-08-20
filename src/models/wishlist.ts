'use strict';
import { Model } from 'sequelize';
import { IWishlist } from '../interfaces/wishlist.interface';

export default (sequelize, DataTypes) => {
  class Wishlist extends Model<IWishlist> implements IWishlist {
    public wishId;
    public userId;
    public bookId;
    public bookName;
    public author;
    public discountPrice;

    static associate(models) {
      Wishlist.belongsTo(models.User, { foreignKey: 'userId' });
      Wishlist.belongsTo(models.Book, { foreignKey: 'bookId' });
    }
    
  }

  Wishlist.init(
    {
      wishId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id' 
        },
        onDelete: 'CASCADE'
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'books', 
          key: 'bookId' 
        },
        onDelete: 'CASCADE'
      },
      bookName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      discountPrice: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'wishlist',
      modelName: 'wishlist',
      timestamps: false
    }
  );

  return Wishlist;
};
