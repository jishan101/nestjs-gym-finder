import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateGymDTO } from '../../gym/dto/create-gym.dto';

export class CreateDistrictDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  division_id?: string;

  @ApiPropertyOptional({ type: CreateGymDTO, isArray: true })
  @IsOptional()
  @Type(() => CreateGymDTO)
  @IsArray()
  @ValidateNested({ each: true })
  gyms?: CreateGymDTO[];
}
