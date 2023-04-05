import { UserDoman } from 'src/domain/models/user.model';
import { IUseCase } from 'src/application/use-case/interface/use-case.interface';
import { IUserRepository } from 'src/domain/repository/user.repository';

export class FindUserByIdUseCase implements IUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(id: string): Promise<UserDoman> {
    return this.userRepository.findById(id);
  }
}
