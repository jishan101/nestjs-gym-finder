import { ApiResponseProperty, PartialType } from '@nestjs/swagger';
import { BaseResponseDTO } from '../../../common/dto/base-response.dto';

export class GymResponseDTO extends PartialType(BaseResponseDTO) {
  @ApiResponseProperty()
  name: string;

  @ApiResponseProperty()
  monthly_fee: number;

  @ApiResponseProperty()
  allowed_gender: string;

  @ApiResponseProperty()
  location: string;

  @ApiResponseProperty()
  website: string;

  @ApiResponseProperty()
  contact: string;

  @ApiResponseProperty()
  rating: number;

  @ApiResponseProperty()
  working_hours: string;

  @ApiResponseProperty()
  business_status: string;

  @ApiResponseProperty()
  attributes: string[];
}
