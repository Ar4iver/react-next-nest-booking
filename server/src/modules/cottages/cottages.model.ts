import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import { Images } from '../images/images.model';
import { Booking } from '../booking/booking.model';
import { Reviews } from '../reviews/reviews.model';

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

  @HasMany(() => Reviews)
  reviews: Reviews[];
}
