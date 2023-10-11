import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Images } from 'src/images/images.model';

@Table({ tableName: 'cottages' })
export class Cottages extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  numberOfBedrooms: number;

  @Column
  rate: number;

  @Column
  maxGuests: number;

  @Column({ defaultValue: 0 })
  price: number;

  @HasMany(() => Images)
  images: Images[];

  @HasMany(() => Booking)
  bookings: Booking[];
}
