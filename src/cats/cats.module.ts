import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatEntity } from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
