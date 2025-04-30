import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createMap } from '@automapper/core';

import { CatsService } from './cats.service';

import { CatEntity } from './entities/cat.entity';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Dto as CatDto } from './dto/cat.dto';

import { mapper } from 'src/mappings/mapper';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    const cats = await this.catsService.findAll();
    createMap(mapper, CatEntity, CatDto);
    const mapped = cats.map((cat: CatEntity) =>
      mapper.map(cat, CatEntity, CatDto),
    );

    return mapped;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
