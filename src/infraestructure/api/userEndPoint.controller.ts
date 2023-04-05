import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { User } from '../database/';
import { UserRepository } from '../database/repository/user.repository';
import { UserImplements } from '../../application/implements/user.implements';
import { UserDTO } from '../dto/user.dto';

@Controller('enpointUser')
export class UserEndPoint {
  private readonly useCase: UserImplements;
  constructor(private readonly userRepository: UserRepository) {
    this.useCase = new UserImplements(this.userRepository);
  }

  @Get()
  find(): Promise<User[]> {
    this.useCase.forFindUser();
    return this.useCase.execute<User[]>();
  }

  @Get(':uid')
  findById(@Param() uid: string): Promise<User> {
    this.useCase.forUserById();
    return this.useCase.execute(uid);
  }

  @Post()
  create(@Body() user: UserDTO): Promise<User> {
    this.useCase.forCreateUser();
    return this.useCase.execute(user);
  }

  @Patch(':uid')
  update(@Param() uid: string, @Body() user: UserDTO): Promise<User> {
    this.useCase.forUpdateUser();
    return this.useCase.execute(uid, user);
  }

  @Delete(':uid')
  delete(@Param() uid: string): Promise<boolean> {
    this.useCase.forDeleteUser();
    return this.useCase.execute(uid);
  }
}
