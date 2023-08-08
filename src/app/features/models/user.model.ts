import { RegisterUser } from './register-user.model';

export interface User extends RegisterUser {
  id: number;
  firstName: string;
  lastName: string;
  country: number;
  role: string;
  currentCreation: string;
}
