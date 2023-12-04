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
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResponseDTO } from '../../common/dto/delete-response.dto';
import { UpdateResponseDTO } from '../../common/dto/update-response.dto';
import { DivisionService } from './division.service';
import { CreateDivisionDTO } from './dto/create-division.dto';
import { DivisionResponseDTO } from './dto/division-response.dto';
import { UpdateDivisionDTO } from './dto/update-division.dto';
import { DivisionEntity } from './entities/division.entity';

@ApiTags("Division Api's")
@Controller('division')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Post('seed-division-district')
  public async seedDivisionDistrict() {
    await this.divisionService.seedDivisionDistrict();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DivisionResponseDTO })
  @Post('create')
  public create(@Body() body: CreateDivisionDTO): Promise<DivisionEntity> {
    return this.divisionService.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DivisionResponseDTO, isArray: true })
  @Get('all')
  public findAll(): Promise<DivisionEntity[]> {
    return this.divisionService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DivisionResponseDTO })
  @Get('details/:id')
  public findOne(@Param('id') id: string): Promise<DivisionEntity> {
    return this.divisionService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UpdateResponseDTO })
  @Patch('update/:id')
  public update(
    @Param('id') id: string,
    @Body() body: UpdateDivisionDTO,
  ): Promise<UpdateResponseDTO> {
    return this.divisionService.update(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DeleteResponseDTO })
  @Delete('delete/:id')
  public remove(@Param('id') id: string): Promise<DeleteResponseDTO> {
    return this.divisionService.remove(id);
  }
}
