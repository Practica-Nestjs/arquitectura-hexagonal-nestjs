import { v4 as uuid } from 'uuid';

export class UserDoman {
  uid: string;
  name: string;
  email: string;
  password: string;

  constructor({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    this.uid = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
