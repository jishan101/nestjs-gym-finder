import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';
import { AllowedGenderEnum } from '../enum/allowed-gender.enum';
import { BusinessStatusEnum } from '../enum/business-status.enum';

export class UpdateGymDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  monthly_fee: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  is_air_condition: boolean;

  @ApiPropertyOptional({
    enum: AllowedGenderEnum,
    description: 'Must be either Male, Female or Both.',
  })
  @IsOptional()
  @IsEnum(AllowedGenderEnum, {
    message: 'Must be either Male, Female or Both.',
  })
  allowed_gender: AllowedGenderEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  location: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  website: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  contact: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  rating: number;

  @ApiPropertyOptional({ description: 'Must be a JSON object.' })
  @IsOptional()
  @IsJSON({ message: 'Must be a JSON object.' })
  @IsNotEmpty()
  @MinLength(1)
  working_hours: string;

  @ApiPropertyOptional({
    enum: BusinessStatusEnum,
    description: 'Must be either Operational or Closed.',
  })
  @IsOptional()
  @IsEnum(BusinessStatusEnum, {
    message: 'Must be either Operational or Closed.',
  })
  business_status: BusinessStatusEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  district_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
