import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDate, IsEnum } from 'class-validator';

export class BookingDto {
  @ApiProperty({
    description: 'ID of the cottage.',
    type: Number,
  })
  @IsInt() // Валидация: убеждаемся, что это целое число.
  cottageId: number;

  @ApiProperty({
    description: 'Start date of the booking.',
    type: String,
    format: 'date',
  })
  @IsDate() // Валидация: убеждаемся, что это дата.
  startDate: Date;

  @ApiProperty({
    description: 'End date of the booking.',
    type: String,
    format: 'date',
  })
  @IsDate()
  endDate: Date;

  @ApiProperty({
    description: 'Status of the booking.',
    enum: ['pending', 'confirmed', 'cancelled'],
  })
  @IsEnum(['pending', 'confirmed', 'cancelled']) // Валидация: убеждаемся, что статус одно из перечисленных значений.
  status: 'pending' | 'confirmed' | 'cancelled';
}
