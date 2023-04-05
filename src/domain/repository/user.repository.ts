import { UserDoman } from '../models/user.model';

export interface IUserRepository<Model extends UserDoman = UserDoman> {
  find(): Promise<Model[]>;
  findById(id: string): Promise<Model>;
  create(model: Model): Promise<Model>;
  update(id: string, model: Model): Promise<Model>;
  delete(id: string): Promise<boolean>;
}
