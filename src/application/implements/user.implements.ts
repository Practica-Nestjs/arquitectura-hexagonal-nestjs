import {
  CreateUserUseCase,
  DeleteUserUseCase,
  FindUserUseCase,
  UpdateUserUseCase,
} from '../use-case';
import { IUseCase } from '../use-case/interface/use-case.interface';
import { IUserRepository } from 'src/domain/repository/user.repository';
import { FindUserByIdUseCase } from '../use-case/findByIdUseCase/findByIdUseCase';

export class UserImplements implements IUseCase {
  private userImplements: IUseCase;
  constructor(private readonly userRepository: IUserRepository) {}

  async execute<Response>(...args: any[]): Promise<Response> {
    return this.userImplements.execute(...args);
  }

  forCreateUser(): void {
    this.userImplements = new CreateUserUseCase(this.userRepository);
  }

  forFindUser(): void {
    this.userImplements = new FindUserUseCase(this.userRepository);
  }

  forUserById(): void {
    this.userImplements = new FindUserByIdUseCase(this.userRepository);
  }

  forUpdateUser(): void {
    this.userImplements = new UpdateUserUseCase(this.userRepository);
  }

  forDeleteUser(): void {
    this.userImplements = new DeleteUserUseCase(this.userRepository);
  }
}
