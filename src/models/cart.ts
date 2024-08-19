'use strict';
import { Model } from 'sequelize';
import { ICart } from '../interfaces/cart.interface';
export default (sequelize, DataTypes) => {
  class Cart extends Model<ICart> implements ICart {
    public cartId;
    public userId;
    public bookId;
    public quantity;
    public discountPrice;
    public total;

    // static associate(models) {
    //   Cart.belongsTo(models.User, {
    //     foreignKey: 'userId',
    //     as: 'user'
    //   });
    // }
  }
  Cart.init(
    {
      cartId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      bookId: {
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      discountPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'cart',
      timestamps: false
    }
  );
  return Cart;
};
