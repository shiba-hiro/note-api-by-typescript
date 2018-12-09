import { Sequelize } from 'sequelize-typescript';

export default new Sequelize({
  operatorsAliases: false,
  dialect: 'mysql',
  database: 'note_db',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
  username: process.env.MYSQL_USER || 'note_db_user',
  password: process.env.MYSQL_PASS || 'note_db_pass',
});
