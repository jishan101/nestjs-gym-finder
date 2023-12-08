import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { AllowedGenderEnum } from '../enum/allowed-gender.enum';

export class GymQueryDTO {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  @MinLength(1)
  district_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @ApiProperty()
  @ValidateIf((x) => x.monthly_fee_end)
  @IsNumber()
  @Transform((x: any) =>
    x.value && typeof x.value !== 'number' ? Number(x.value) : x.value,
  )
  @IsNotEmpty()
  @Min(1)
  monthly_fee_start: number;

  @ApiProperty()
  @ValidateIf((x) => x.monthly_fee_start)
  @IsNumber()
  @Transform((x: any) =>
    x.value && typeof x.value !== 'number' ? Number(x.value) : x.value,
  )
  @IsNotEmpty()
  @Min(1)
  monthly_fee_end: number;

  @ApiPropertyOptional({ enum: AllowedGenderEnum })
  @IsOptional()
  @IsEnum(AllowedGenderEnum, {
    message: 'Must be either Male, Female or Both.',
  })
  allowed_gender: AllowedGenderEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  @Transform((x: any) =>
    x.value && typeof x.value !== 'boolean' ? x.value === 'true' : x.value,
  )
  is_air_condition: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform((x: any) =>
    x.value && typeof x.value !== 'number' ? Number(x.value) : x.value,
  )
  @IsNotEmpty()
  @Min(1)
  rating: number;
}
