import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UserEndPoint } from '../api/userEndPoint.controller';
import { UserRepository, UserSchema, User } from '../database';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserEndPoint],
  providers: [UserRepository],
  exports: [MongooseModule],
})
export class UserModule {}
