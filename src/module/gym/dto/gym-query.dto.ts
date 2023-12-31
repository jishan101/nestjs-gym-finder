import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
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
import { BusinessStatusEnum } from '../enum/business-status.enum';

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

  @ApiPropertyOptional({
    enum: AllowedGenderEnum,
  })
  @IsOptional()
  @IsEnum(AllowedGenderEnum, {
    message: `Must be either ${AllowedGenderEnum.MALE}, ${AllowedGenderEnum.FEMALE} or ${AllowedGenderEnum.COMBINED}.`,
  })
  allowed_gender: AllowedGenderEnum;

  @ApiPropertyOptional({
    enum: BusinessStatusEnum,
  })
  @IsOptional()
  @IsEnum(BusinessStatusEnum, {
    message: `Must be either ${BusinessStatusEnum.OPERATIONAL} or ${BusinessStatusEnum.NON_OPERATIONAL}.`,
  })
  business_status: BusinessStatusEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @Transform((x: { value: string }) =>
    x.value ? x.value.split(',').map((i) => Number(i.trim())) : x.value,
  )
  @IsNotEmpty()
  rating: number[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @Transform((x: { value: string }) =>
    x.value ? x.value.split(',').map((i) => i.trim()) : x.value,
  )
  @IsNotEmpty()
  attributes: string[];
}
