import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration, JoiValidationSchema } from '../config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
