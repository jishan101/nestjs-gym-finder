import { ApiResponseProperty } from '@nestjs/swagger';

export class DeleteResponseDTO {
  @ApiResponseProperty()
  is_deleted: boolean;

  @ApiResponseProperty()
  message: string;
}
