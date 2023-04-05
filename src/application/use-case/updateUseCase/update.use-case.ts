import { IUserRepository } from 'src/domain/repository/user.repository';
import { IUseCase } from '../interface/use-case.interface';
import { UserDoman } from 'src/domain/models/user.model';

export class UpdateUserUseCase implements IUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(id: string, user: UserDoman): Promise<UserDoman> {
    return await this.userRepository.update(id, user);
  }
}
