import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from './cats/cats.module';
import { CatEntity } from './cats/entities/cat.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      schema: 'nestjs_hello_world',
      entities: [CatEntity],
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
