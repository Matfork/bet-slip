import produce, { Draft } from 'immer';
import { EventType } from '../../shared/models/matches';
import { MatchesActionCreators } from '../actions/action-creators/matches.actionCreator';
import { MatchesActionProps } from '../actions/matches.actionCreator';

export interface MatchesInitialState {
  matches: EventType[];
}

export const initialState: MatchesInitialState = {
  matches: [],
};

/* istanbul ignore next */
export default produce((draft: Draft<MatchesInitialState> = initialState, props: MatchesActionProps) => {
  switch (props.type) {
    case MatchesActionCreators.GetMatches:
      return draft;
    case MatchesActionCreators.SetMatches:
      draft.matches = props.payload;
      break;
    default:
    // throw new Error(`Unknown type: ${props.type}`);
  }

  return draft;
});
