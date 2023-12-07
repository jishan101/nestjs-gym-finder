import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResponseDTO } from '../../common/dto/delete-response.dto';
import { UpdateResponseDTO } from '../../common/dto/update-response.dto';
import { ResponseHelper } from '../../common/util/response-helper.util';
import { CreateGymDTO } from './dto/create-gym.dto';
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
