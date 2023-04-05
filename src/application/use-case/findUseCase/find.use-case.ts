import { IUseCase } from '../interface/use-case.interface';
import { UserDoman } from '../../../domain/models/user.model';
import { IUserRepository } from 'src/domain/repository/user.repository';

export class FindUserUseCase implements IUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(): Promise<UserDoman[]> {
    return await this.userRepository.find();
  }
}
