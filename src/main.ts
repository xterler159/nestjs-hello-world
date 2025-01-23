import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function bootstrap() {
  const PORT = process.env.PORT as string;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
