import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  email: string;

  @Column
  password: string;
}
