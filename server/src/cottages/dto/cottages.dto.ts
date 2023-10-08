import { IsNotEmpty, IsString, IsInt, IsArray } from 'class-validator';
import { Images } from 'src/images/images.model';

// @IsNotEmpty() - проверка на непустое поле
// @IsString() - проверка, что поле это строка
// @IsInt() = проверка, что поле это число
// readonly - это означает, что после того, как объект был создан и свойство инициализировано, вы не сможете изменить это свойство.

export class CreateCottagesDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsInt()
  readonly numberOfBedrooms: number;

  @IsNotEmpty()
  @IsInt()
  readonly rate: number;

  @IsNotEmpty()
  @IsInt()
  readonly maxGuests: number;

  @IsNotEmpty()
  @IsInt()
  readonly price: number;

  @IsNotEmpty({ each: true })
  @IsArray()
  readonly images?: Images[];
}
