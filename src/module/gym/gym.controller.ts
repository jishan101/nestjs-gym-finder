import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResponseDTO } from '../../common/dto/delete-response.dto';
import { UpdateResponseDTO } from '../../common/dto/update-response.dto';
import { CreateGymDTO } from './dto/create-gym.dto';
import { GymQueryDTO } from './dto/gym-query.dto';
import { GymResponseDTO } from './dto/gym-response.dto';
import { UpdateGymDTO } from './dto/update-gym.dto';
import { GymEntity } from './entities/gym.entity';
import { GymService } from './gym.service';

@ApiTags("Gym API's")
@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: GymResponseDTO })
  @Post('create')
  public create(@Body() body: CreateGymDTO) {
    return this.gymService.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: GymResponseDTO, isArray: true })
  @Get('all')
  public findAll(): Promise<GymEntity[]> {
    return this.gymService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: GymResponseDTO, isArray: true })
  @Get('filters')
  public findByFilters(@Query() query: GymQueryDTO): Promise<GymEntity[]> {
    return this.gymService.findByFilters(query);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: GymResponseDTO })
  @Get('details/:id')
  public findOne(@Param('id') id: string): Promise<GymEntity> {
    return this.gymService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UpdateResponseDTO })
  @Patch('update/:id')
  public update(
    @Param('id') id: string,
    @Body() body: UpdateGymDTO,
  ): Promise<UpdateResponseDTO> {
    return this.gymService.update(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DeleteResponseDTO })
  @Delete('delete/:id')
  public remove(@Param('id') id: string): Promise<DeleteResponseDTO> {
    return this.gymService.remove(id);
  }
}
