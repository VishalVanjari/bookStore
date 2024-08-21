import { expect } from 'chai';
import UserService from '../../src/services/user.service';

///////////////////////////////////   user    //////////////////////////////////////////////////////

describe('Fundoo Notes User : Unit Testing', () => {
  describe('/ : register with id and passsword', () => {
    it('should return object contain registration detail of user', async () => {
      const result = await new UserService().userRegistration({
        firstName: 'Vishal',
        lastName: 'Vanjari',
        email: 'vishal@gmail.com',
        password: 'vishal@123',
        mobile: '8329223801',
        role: 'user'
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/login : login with credentials', () => {
    it('should return Details of user', async () => {
      const result = await new UserService().login(
        'Vishal@gmail.com',
        'vishal@123'
      );
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllUsers : get the user', () => {
    it('should return all Details of user', async () => {
      const result = await new UserService().getAllUsers();
      expect(result).to.be.an('object');
    });
  });

  describe('/updateuser : Update the user', () => {
    it('Shoud update user and retun updated Data', async () => {
      const result = await new UserService().updateUser(2, {
        firstName: 'Sakshi',
        lastName: 'Kukreja',
        email: 'sakshi@gmail.com',
        password: 'sakshi@123'
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/deleteuser : Delete The User', () => {
    it('delete the User and return empty string ', async () => {
      const result = await new UserService().deleteUser(4);
      expect(result).to.equal('');
    });
  });
  
  describe('/getUser :  reset a password', () => {
    it('reset password send email and shound return  ', async () => {
      const result = await new UserService().getUser(1);
      expect(result).to.be.an('object');
    });
  });
});
