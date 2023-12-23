import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
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
import { AttributeEnum } from '../enum/attribute.enum';
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

  @ApiPropertyOptional({
    enum: AllowedGenderEnum,
    description: `Must be either ${AllowedGenderEnum.MALE}, ${AllowedGenderEnum.FEMALE} or ${AllowedGenderEnum.BOTH}.`,
  })
  @IsOptional()
  @IsEnum(AllowedGenderEnum, {
    message: `Must be either ${AllowedGenderEnum.MALE}, ${AllowedGenderEnum.FEMALE} or ${AllowedGenderEnum.BOTH}.`,
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
    description: `Must be either ${BusinessStatusEnum.OPERATIONAL} or ${BusinessStatusEnum.CLOSED}.`,
  })
  @IsOptional()
  @IsEnum(BusinessStatusEnum, {
    message: `Must be either ${BusinessStatusEnum.OPERATIONAL} or ${BusinessStatusEnum.CLOSED}.`,
  })
  business_status: BusinessStatusEnum;

  @ApiPropertyOptional({
    enum: AttributeEnum,
    isArray: true,
    description: `Array should only contain values from "${Object.values(
      AttributeEnum,
    )}".`,
  })
  @IsOptional()
  @IsArray()
  @IsEnum(AttributeEnum, {
    each: true,
    message: `Array should only contain values from "${Object.values(
      AttributeEnum,
    )}".`,
  })
  attributes: AttributeEnum[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  district_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
