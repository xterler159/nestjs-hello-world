import { AutoMap } from '@automapper/classes';
import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
  @AutoMap(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @AutoMap(() => String)
  @Column()
  name: string;

  @AutoMap(() => Number)
  @Column()
  age: number;

  @AutoMap(() => String)
  @Column()
  breed: string;

  @AutoMap(() => Boolean)
  @Column()
  is_dead: boolean;
}
