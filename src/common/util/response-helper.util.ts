import { DeleteResponseDTO } from '../dto/delete-response.dto';
import { UpdateResponseDTO } from '../dto/update-response.dto';

export class ResponseHelper {
  public static updateResponse(applied: any, id?: string, message?: string) {
    const isUpdated =
      typeof applied === 'boolean' ? applied : applied?.rows[0]['[applied]'];

    const response = new UpdateResponseDTO(id ? String(id) : null);
    response.is_updated = isUpdated;
    response.message = response.is_updated
      ? message || 'Successfully updated.'
      : message || 'Update failed.';

    return response;
  }

  public static deleteResponse(isSuccess: boolean, message?: string) {
    const deleteResponse = new DeleteResponseDTO();

    deleteResponse.is_deleted = isSuccess;
    deleteResponse.message = isSuccess
      ? message || 'Successfully deleted.'
      : message || 'Delete failed.';

    return deleteResponse;
  }
}
