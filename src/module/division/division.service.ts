import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResponseDTO } from '../../common/dto/delete-response.dto';
import { UpdateResponseDTO } from '../../common/dto/update-response.dto';
import { ResponseHelper } from '../../common/util/response-helper.util';
import { divisions } from '../../database/seed-data/division-district.seed';
import { CreateDivisionDTO } from './dto/create-division.dto';
import { UpdateDivisionDTO } from './dto/update-division.dto';
import { DivisionEntity } from './entities/division.entity';

@Injectable()
export class DivisionService {
  constructor(
    @InjectRepository(DivisionEntity)
    private readonly divisionRepo: Repository<DivisionEntity>,
  ) {}

  public async seedDivisionDistrict() {
    for (const division of divisions) {
      await this.create(division);
    }
  }

  public create(body: CreateDivisionDTO | object): Promise<DivisionEntity> {
    const newDivision = this.divisionRepo.create(body);

    return this.divisionRepo.save(newDivision);
  }

  public findAll(): Promise<DivisionEntity[]> {
    return this.divisionRepo.find();
  }

  public async findOne(id: string): Promise<DivisionEntity> {
    const division = await this.divisionRepo.findOneBy({ id });
    if (!division) {
      throw new NotFoundException('Division does not exist.');
    }

    return division;
  }

  public async update(
    id: string,
    body: UpdateDivisionDTO,
  ): Promise<UpdateResponseDTO> {
    await this.findOne(id);

    const updateResult = await this.divisionRepo.update(id, body);

    return ResponseHelper.updateResponse(
      updateResult.affected ? true : false,
      id,
    );
  }

  public async remove(id: string): Promise<DeleteResponseDTO> {
    await this.findOne(id);

    const deleteResult = await this.divisionRepo.delete(id);

    return ResponseHelper.deleteResponse(deleteResult.affected ? true : false);
  }
}
