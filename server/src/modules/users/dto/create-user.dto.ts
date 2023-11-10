import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Иван' })
  @IsNotEmpty()
  readonly firstname: string;

  @ApiProperty({ example: 'Петров' })
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty({ example: 'Ivan@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'Ivan123' })
  @IsNotEmpty()
  readonly password: string;
}
