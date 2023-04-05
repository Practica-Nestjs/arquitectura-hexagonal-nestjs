import { IUserRepository } from 'src/domain/repository/user.repository';
import { IUseCase } from '../interface/use-case.interface';

export class DeleteUserUseCase implements IUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
