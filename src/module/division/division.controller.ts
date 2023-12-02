import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DivisionService } from './division.service';
import { CreateDivisionDTO } from './dto/create-division.dto';
import { UpdateDivisionDTO } from './dto/update-division.dto';

@Controller('division')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Post()
  create(@Body() createDivisionDto: CreateDivisionDTO) {
    return this.divisionService.create(createDivisionDto);
  }

  @Get()
  findAll() {
    return this.divisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDivisionDto: UpdateDivisionDTO,
  ) {
    return this.divisionService.update(+id, updateDivisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divisionService.remove(+id);
  }
}
