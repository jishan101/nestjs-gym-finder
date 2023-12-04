import { ApiResponseProperty, PartialType } from '@nestjs/swagger';
import { BaseResponseDTO } from '../../../common/dto/base-response.dto';

export class DivisionResponseDTO extends PartialType(BaseResponseDTO) {
  @ApiResponseProperty()
  name: string;
}
