import { ApiResponseProperty } from '@nestjs/swagger';

export class UpdateResponseDTO {
  @ApiResponseProperty()
  id: string;

  @ApiResponseProperty()
  is_updated: boolean;

  @ApiResponseProperty()
  message: string;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
}
