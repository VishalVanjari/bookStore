import sequelize, { DataTypes } from '../config/database';
import { IUser } from '../interfaces/user.interface';
import user from '../models/user';
import bcrypt from 'bcrypt';
import Util from '../utils/user.util';

class UserService {
  private User = user(sequelize, DataTypes);
  private util = new Util();

  //Register a new user
  public userRegistration = async (body) => {
    const data = await this.User.create(body);
    return data;
  };

  //login user/admin
  public login = async (email, password) => {
    try {
      const data = await this.User.findOne({ where: { email: email } });
      const obj = {
        data: data,
        token: '',
        message: 'Invalid User'
      };
      if (data && (await bcrypt.compare(password, data.password))) {
        obj.message = 'Loged In successfully';
      } else {
        obj.data = null;
        return obj;
      }
      const token = await this.util.login(data.id, data.firstName, data.role);
      obj.token = token;
      return obj;
    } catch (error) {
      throw new error('Error Logging user: ');
    }
  };

  //get all users
  public getAllUsers = async (): Promise<IUser[]> => {
    const data = await this.User.findAll();
    return data;
  };

  //update a user
  public updateUser = async (id, body) => {
    await this.User.update(body, {
      where: { id: id }
    });
    return body;
  };

  //delete a user
  public deleteUser = async (id) => {
    await this.User.destroy({ where: { id: id } });
    return '';
  };

  //get a single user
  public getUser = async (id) => {
    const data = await this.User.findByPk(id);
    return data;
  };
}

export default UserService;
