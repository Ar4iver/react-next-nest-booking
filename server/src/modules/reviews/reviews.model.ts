import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cottages } from '../cottages/cottages.model';

@Table({ tableName: 'reviews' })
export class Reviews extends Model {
  @Column
  title: string;

  @Column
  content: string;

  @Column
  rating: number;

  @ForeignKey(() => Cottages)
  @Column
  cottageId: number;

  @BelongsTo(() => Cottages)
  cottage: Cottages;

  @Column
  publicationDate: Date;
}
