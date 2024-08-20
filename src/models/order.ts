'use strict';
import { Model } from 'sequelize';
import { IOrder } from '../interfaces/order.interface';

export default (sequelize, DataTypes) => {
  class Order extends Model<IOrder> implements IOrder {
    public userId;
    public bookId;
    public quantity;
    public price;

    static associate(models) {
        Order.belongsTo(models.Users, { foreignKey: 'userId' });
        Order.belongsTo(models.Books, { foreignKey: 'bookId' });
    }
    
  }

  Order.init(
    {
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
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue :1
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'order',
      timestamps: false
    }
  );

  return Order;
};
