import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDistrictDTO } from './dto/create-district.dto';
import { UpdateDistrictDTO } from './dto/update-district.dto';
import { DistrictEntity } from './entities/district.entity';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(DistrictEntity)
    private readonly districtRepo: Repository<DistrictEntity>,
  ) {}

  create(createDistrictDto: CreateDistrictDTO) {
    return 'This action adds a new district';
  }

  findAll() {
    return `This action returns all district`;
  }

  findOne(id: number) {
    return `This action returns a #${id} district`;
  }

  update(id: number, updateDistrictDto: UpdateDistrictDTO) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
