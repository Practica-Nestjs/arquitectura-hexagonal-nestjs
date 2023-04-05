import { UserDoman } from 'src/domain/models/user.model';
import { IUseCase } from '../interface/use-case.interface';
import { IUserRepository } from 'src/domain/repository/user.repository';

export class CreateUserUseCase implements IUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(user: UserDoman): Promise<UserDoman> {
    return await this.userRepository.create(user);
  }
}
