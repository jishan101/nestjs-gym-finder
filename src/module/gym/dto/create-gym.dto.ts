import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
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

export class CreateGymDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  monthly_fee: number;

  @ApiProperty({
    enum: AllowedGenderEnum,
    description: `Must be either ${AllowedGenderEnum.MALE}, ${AllowedGenderEnum.FEMALE} or ${AllowedGenderEnum.COMBINED}.`,
  })
  @IsEnum(AllowedGenderEnum, {
    message: `Must be either ${AllowedGenderEnum.MALE}, ${AllowedGenderEnum.FEMALE} or ${AllowedGenderEnum.COMBINED}.`,
  })
  allowed_gender: AllowedGenderEnum;

  @ApiProperty()
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
  district_id?: string;
}
