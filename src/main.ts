import { NestFactory } from '@nestjs/core';
import { AppModule } from './infraestructure/modules/app.module';
import { Logger } from '@nestjs/common';

async function main() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT);
  logger.log(`Server Running in ${process.env.PORT}`);
}
main();
