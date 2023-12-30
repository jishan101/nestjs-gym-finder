import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymEntity } from './entities/gym.entity';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

@Module({
  imports: [TypeOrmModule.forFeature([GymEntity])],
  controllers: [GymController],
  providers: [GymService],
  exports: [GymService],
})
export class GymModule {}
