import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  breed: string;

  @IsBoolean()
  isDead: boolean;
}
