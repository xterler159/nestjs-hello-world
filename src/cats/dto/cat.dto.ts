import { UUID } from 'crypto';

export class Dto {
  id!: UUID;
  name: string;
  age!: number;
}
