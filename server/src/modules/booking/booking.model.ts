import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { Cottages } from '../cottages/cottages.model';

@Table({ tableName: 'bookings' })
export class Booking extends Model<Booking> {
  @ForeignKey(() => Cottages)
  @Column(DataType.INTEGER)
  cottageId: number;

  @Column(DataType.DATE)
  startDate: Date;

  @Column(DataType.DATE)
  endDate: Date;

  @Default('pending')
  @Column(DataType.ENUM('pending', 'confirmed', 'cancelled'))
  status: 'pending' | 'confirmed' | 'cancelled';

  @BelongsTo(() => Cottages)
  cottage: Cottages;
}
