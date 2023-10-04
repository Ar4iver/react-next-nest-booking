import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Cottages } from 'src/cottages/cottages.model';

@Table
export class Images extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  url!: string;

  @ForeignKey(() => Cottages)
  @Column(DataType.INTEGER)
  cottageId!: number;

  @BelongsTo(() => Cottages)
  cottage!: Cottages;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}
