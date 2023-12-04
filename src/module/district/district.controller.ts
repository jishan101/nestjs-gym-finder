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
import { DistrictService } from './district.service';
import { CreateDistrictDTO } from './dto/create-district.dto';
import { DistrictResponseDTO } from './dto/district-response.dto';
import { UpdateDistrictDTO } from './dto/update-district.dto';
import { DistrictEntity } from './entities/district.entity';

@ApiTags("District Api's")
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DistrictResponseDTO })
  @Post('create')
  public create(@Body() body: CreateDistrictDTO): Promise<DistrictEntity> {
    return this.districtService.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DistrictResponseDTO, isArray: true })
  @Get('all')
  public findAll(): Promise<DistrictEntity[]> {
    return this.districtService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DistrictResponseDTO, isArray: true })
  @Get('all-by-division/:divisionId')
  public findAllByDivisionId(
    @Param('divisionId') divisionId: string,
  ): Promise<DistrictEntity[]> {
    return this.districtService.findAllByDivisionId(divisionId);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DistrictResponseDTO })
  @Get('details/:id')
  public findOne(@Param('id') id: string): Promise<DistrictEntity> {
    return this.districtService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UpdateResponseDTO })
  @Patch('update/:id')
  public update(
    @Param('id') id: string,
    @Body() body: UpdateDistrictDTO,
  ): Promise<UpdateResponseDTO> {
    return this.districtService.update(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DeleteResponseDTO })
  @Delete('delete/:id')
  public remove(@Param('id') id: string): Promise<DeleteResponseDTO> {
    return this.districtService.remove(id);
  }
}
