import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateDistrictDTO } from '../../district/dto/create-district.dto';

export class CreateDivisionDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @ApiPropertyOptional({ type: CreateDistrictDTO, isArray: true })
  @Type(() => CreateDistrictDTO)
  @IsArray()
  @ValidateNested({ each: true })
  districts: CreateDistrictDTO[];
}
