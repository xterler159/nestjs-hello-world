import { Injectable } from '@nestjs/common';
import { HelloWorld } from './app.controller';

@Injectable()
export class AppService {
  getHello(): HelloWorld {
    return {
      hello: 'world',
    };
  }
}
