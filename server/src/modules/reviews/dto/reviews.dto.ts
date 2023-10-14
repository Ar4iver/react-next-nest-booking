import { IsNotEmpty, IsString, IsInt, Min, Max, IsDate } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  readonly rating: number;

  @IsNotEmpty()
  readonly cottageId: number;

  publicationDate: Date;
}
