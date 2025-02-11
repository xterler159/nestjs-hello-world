import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatEntity } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepository: Repository<CatEntity>,
    private dataSource: DataSource,
  ) {
    console.log('CatsService constructor');
  }

  async create(createCatDto: CreateCatDto) {
    const cat = new CatEntity();

    cat.age = createCatDto.age;
    cat.name = createCatDto.name;
    cat.breed = createCatDto.breed;
    cat.is_dead = createCatDto.isDead;

    try {
      await this.catRepository.save(cat);
    } catch (err) {
      console.log('error while saving a cat into the database:', err);
    }

    return cat;
  }

  async createMany(cats: CatEntity[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(cats[0]);
    } catch (err) {
      console.log('error while saving many cats into the database:', err);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll(): Promise<CatEntity[] | []> {
    return this.catRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
