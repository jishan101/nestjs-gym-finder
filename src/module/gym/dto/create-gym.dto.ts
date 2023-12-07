import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  is_air_condition: boolean;

  @ApiProperty({
    enum: AllowedGenderEnum,
    description: 'Must be either Male, Female or Both.',
  })
  @IsEnum(AllowedGenderEnum, {
    message: 'Must be either Male, Female or Both.',
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  district_id?: string;
}
