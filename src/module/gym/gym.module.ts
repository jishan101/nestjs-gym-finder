import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictModule } from '../district/district.module';
import { GymEntity } from './entities/gym.entity';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

@Module({
  imports: [TypeOrmModule.forFeature([GymEntity]), DistrictModule],
  controllers: [GymController],
  providers: [GymService],
  exports: [GymService],
})
export class GymModule {}
