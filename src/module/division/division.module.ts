import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';
import { DivisionEntity } from './entities/division.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DivisionEntity]),
    ScheduleModule.forRoot(),
  ],
  controllers: [DivisionController],
  providers: [DivisionService],
  exports: [DivisionService],
})
export class DivisionModule {}
