import { EventType } from '../../shared/models/matches';

export type SetMatchesActionProps = {
  type: string;
  payload: EventType[];
};

export type MatchesActionProps = SetMatchesActionProps;
