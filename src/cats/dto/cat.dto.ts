import { AutoMap } from '@automapper/classes';
import { UUID } from 'crypto';

export class Dto {
  @AutoMap(() => String)
  id!: UUID;

  @AutoMap(() => String)
  name: string;

  @AutoMap(() => Number)
  age!: number;
}
