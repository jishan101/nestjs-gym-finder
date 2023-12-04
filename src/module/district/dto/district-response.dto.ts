import { ApiResponseProperty, PartialType } from '@nestjs/swagger';
import { BaseResponseDTO } from '../../../common/dto/base-response.dto';

export class DistrictResponseDTO extends PartialType(BaseResponseDTO) {
  @ApiResponseProperty()
  name: string;

  @ApiResponseProperty()
  division_id: string;
}
