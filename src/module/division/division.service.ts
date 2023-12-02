import { Injectable } from '@nestjs/common';
import { CreateDivisionDTO } from './dto/create-division.dto';
import { UpdateDivisionDTO } from './dto/update-division.dto';

@Injectable()
export class DivisionService {
  create(createDivisionDto: CreateDivisionDTO) {
    return 'This action adds a new division';
  }

  findAll() {
    return `This action returns all division`;
  }

  findOne(id: number) {
    return `This action returns a #${id} division`;
  }

  update(id: number, updateDivisionDto: UpdateDivisionDTO) {
    return `This action updates a #${id} division`;
  }

  remove(id: number) {
    return `This action removes a #${id} division`;
  }
}
