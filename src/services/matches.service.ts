import { ApiError } from '../shared/models/error';
import { EventType } from '../shared/models/matches';
import { API_URL } from '../shared/utilities/constants';

export class MatchesService {
  static getData = async (): Promise<EventType[]> => {
    const response = await fetch(`${API_URL}/59f08692310000b4130e9f71`);

    if (response.ok) {
      return response.json();
    }
    throw new ApiError({ status: response.status, message: response.statusText });
  };
}
