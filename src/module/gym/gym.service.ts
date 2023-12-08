import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResponseDTO } from '../../common/dto/delete-response.dto';
import { UpdateResponseDTO } from '../../common/dto/update-response.dto';
import { isSameString } from '../../common/util/is-same-string.util';
import { ResponseHelper } from '../../common/util/response-helper.util';
import { CreateGymDTO } from './dto/create-gym.dto';
import { GymQueryDTO } from './dto/gym-query.dto';
import { UpdateGymDTO } from './dto/update-gym.dto';
import { GymEntity } from './entities/gym.entity';

@Injectable()
export class GymService {
  constructor(
    @InjectRepository(GymEntity)
    private readonly gymRepo: Repository<GymEntity>,
  ) {}

  public create(body: CreateGymDTO): Promise<GymEntity> {
    const newGym = this.gymRepo.create(body);

    return this.gymRepo.save(newGym);
  }

  public findAll(): Promise<GymEntity[]> {
    return this.gymRepo.find();
  }

  public async findByFilters(query: GymQueryDTO): Promise<GymEntity[]> {
    let gyms = await this.gymRepo.find({
      where: { district: { id: query.district_id } },
    });

    if (query.name) {
      gyms = gyms.filter((gym) => isSameString(gym.name, query.name));
    }

    if (query.monthly_fee_start && query.monthly_fee_end) {
      query.monthly_fee_start = Number(query.monthly_fee_start);
      query.monthly_fee_end = Number(query.monthly_fee_end);

      gyms = gyms.filter(
        (gym) =>
          query.monthly_fee_start <= gym.monthly_fee &&
          gym.monthly_fee <= query.monthly_fee_end,
      );
    }

    if (query.allowed_gender) {
      gyms = gyms.filter((gym) =>
        isSameString(gym.allowed_gender, query.allowed_gender),
      );
    }

    if (query.is_air_condition) {
      query.is_air_condition =
        typeof query.is_air_condition !== 'boolean'
          ? query.is_air_condition === 'true'
          : query.is_air_condition;

      gyms = gyms.filter(
        (gym) => gym.is_air_condition === query.is_air_condition,
      );
    }

    if (query.rating) {
      query.rating = Number(query.rating);

      gyms = gyms.filter((gym) => gym.rating >= query.rating);
    }

    return gyms;
  }

  public async findOne(id: string): Promise<GymEntity> {
    const gym = await this.gymRepo.findOneBy({ id });
    if (!gym) {
      throw new NotFoundException('Gym Does Not Exist.');
    }

    return gym;
  }

  public async update(
    id: string,
    body: UpdateGymDTO,
  ): Promise<UpdateResponseDTO> {
    await this.findOne(id);

    const updateResult = await this.gymRepo.update(id, body);

    return ResponseHelper.updateResponse(
      updateResult.affected ? true : false,
      id,
    );
  }

  public async remove(id: string): Promise<DeleteResponseDTO> {
    await this.findOne(id);

    const deleteResult = await this.gymRepo.delete(id);

    return ResponseHelper.deleteResponse(deleteResult.affected ? true : false);
  }
}
