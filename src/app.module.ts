import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './common/config/typeorm.config';
import { DistrictModule } from './module/district/district.module';
import { DivisionModule } from './module/division/division.module';
import { GymModule } from './module/gym/gym.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    DivisionModule,
    DistrictModule,
    GymModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
