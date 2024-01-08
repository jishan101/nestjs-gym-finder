import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResponseDTO } from '../../common/dto/delete-response.dto';
import { UpdateResponseDTO } from '../../common/dto/update-response.dto';
import { ResponseHelper } from '../../common/util/response-helper.util';
import { CreateDistrictDTO } from './dto/create-district.dto';
import { UpdateDistrictDTO } from './dto/update-district.dto';
import { DistrictEntity } from './entities/district.entity';
import { DivisionService } from '../division/division.service';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(DistrictEntity)
    private readonly districtRepo: Repository<DistrictEntity>,
    private readonly divisionService: DivisionService,
  ) {}

  public async create(body: CreateDistrictDTO): Promise<DistrictEntity> {
    const division = body.division_id
      ? await this.divisionService.findOne(body.division_id)
      : null;

    const newDistrict = this.districtRepo.create(body);
    if (division) {
      newDistrict.division = division;
    }

    return this.districtRepo.save(newDistrict);
  }

  public findAll(): Promise<DistrictEntity[]> {
    return this.districtRepo.find();
  }

  public findAllByDivisionId(divisionId: string): Promise<DistrictEntity[]> {
    return this.districtRepo.find({ where: { division: { id: divisionId } } });
  }

  public async findOne(id: string): Promise<DistrictEntity> {
    const district = await this.districtRepo.findOneBy({ id });
    if (!district) {
      throw new NotFoundException('District Does Not Exist.');
    }

    return district;
  }

  public async update(
    id: string,
    body: UpdateDistrictDTO,
  ): Promise<UpdateResponseDTO> {
    await this.findOne(id);

    const updateResult = await this.districtRepo.update(id, body);

    return ResponseHelper.updateResponse(
      updateResult.affected ? true : false,
      id,
    );
  }

  public async remove(id: string): Promise<DeleteResponseDTO> {
    await this.findOne(id);

    const deleteResult = await this.districtRepo.delete(id);

    return ResponseHelper.deleteResponse(deleteResult.affected ? true : false);
  }
}
