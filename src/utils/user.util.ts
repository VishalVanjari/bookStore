import jwt from 'jsonwebtoken';
import config from '../config/config';

export default class Util {
  public async login(id, username,role) {    
    const token = await jwt.sign({ id, username ,role}, config.development.secret, {
      expiresIn: '1h'
    });
    return token;
  }

  public async verify(body) {
    const data = await jwt.verify(body, config.development.secret);
    return data;
  }

  public forgetUser = async (body) => {
    const token = await jwt.sign({ email: body }, config.development.secret2, {
      expiresIn: '1h'
    });
    return token;
  };

  public forgetUseVerify = async (token) => {
    const { email }: any = await jwt.verify(token, config.development.secret2);
    return email;
  };

}
