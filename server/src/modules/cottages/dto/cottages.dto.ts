import { IsNotEmpty, IsString, IsInt, IsArray } from 'class-validator';
import { Images } from 'src/modules/images/images.model';

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
