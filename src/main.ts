import { NestFactory } from '@nestjs/core';
import * as process from 'node:process';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT as string;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
