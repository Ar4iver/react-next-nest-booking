import { Table, Model, Column } from 'sequelize-typescript';

@Table
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

  @Column
  images: string;

  @Column
  amenities: string;
}
