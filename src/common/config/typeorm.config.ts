import { ConfigService } from '@nestjs/config';
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: config.get<string>('MYSQLHOST'),
  port: +config.get<number>('MYSQLPORT'),
  username: config.get<string>('MYSQLUSER'),
  password: config.get<string>('MYSQLPASSWORD'),
  database: config.get<string>('MYSQLDATABASE'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
