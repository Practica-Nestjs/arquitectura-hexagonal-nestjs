import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../model/user.schema';
import { IUserRepository } from 'src/domain/repository/user.repository';

@Injectable()
export class UserRepository implements IUserRepository<User> {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<UserDocument>,
  ) {}
  async find(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
  async findById(uid: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ uid: uid });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  create(model: User): Promise<User> {
    try {
      return this.userRepository.create(model);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async update(uid: string, model: User): Promise<User> {
    try {
      return await this.userRepository.findByIdAndUpdate(uid, model, {
        new: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async delete(uid: string): Promise<boolean> {
    try {
      return await this.userRepository.findByIdAndDelete(uid);
    } catch (error) {
      throw new Error(error);
    }
  }
}
