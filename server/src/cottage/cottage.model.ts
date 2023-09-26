import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Cottage extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  numberOfBedrooms: number;

  @Column
  maxGuests: number;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  images: string;

  @Column
  amenities: string;
}
