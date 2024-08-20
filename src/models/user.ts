/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Model } from 'sequelize';
import { IUser } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';
const saltRound = 10;
export default (sequelize, DataTypes) => {
  class User extends Model<IUser> implements IUser {
    public id;
    public firstName;
    public lastName;
    public email;
    public password;
    public mobile;
    public role;

    // static associate(models) {
    //   User.hasMany(models.Wishlist, { foreignKey: 'id' });
    // }

    static associate(models) {
      User.hasMany(models.Wishlist, { foreignKey: 'userId' });
    }
    
    
  }
  User.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'user',
      timestamps: false,
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, saltRound);
          }
        },beforeUpdate: async (user) => {
          if (user.changed(user.password)) {
            user.password = await bcrypt.hash(user.password, saltRound);
          }
        }
      }
    }
  );
  return User;
};
