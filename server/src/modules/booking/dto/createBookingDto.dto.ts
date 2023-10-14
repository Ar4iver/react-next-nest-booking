import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({
    description: 'ID коттеджа, для которого нужно добавить броинрование',
  })
  cottageId: number;

  @ApiProperty({ description: 'Начало бронирования' })
  startDate: Date;

  @ApiProperty({ description: 'Конец бронирования' })
  endDate: Date;
}
