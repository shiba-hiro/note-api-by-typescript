import Sequelize from '../Sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'notes',
  timestamps: true,
  underscored: true,
})
export default class Note extends Model<Note> {

  @PrimaryKey
  @Column(DataType.STRING)
  public id!: string;

  @Column(DataType.STRING)
  public title!: string;

  @Column(DataType.TEXT)
  public content?: string;
}

Sequelize.addModels([Note]);
