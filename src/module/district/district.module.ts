import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionModule } from '../division/division.module';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';
import { DistrictEntity } from './entities/district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistrictEntity]), DivisionModule],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
