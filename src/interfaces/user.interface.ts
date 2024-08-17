export interface IUser {
  id ?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  role: { enum: ['user', 'admin'] };
}
