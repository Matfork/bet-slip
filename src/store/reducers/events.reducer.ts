import produce, { Draft } from 'immer';
import { EventType } from '../../shared/models/events';
import { EventsActionCreators } from '../actions/action-creators/events.actionCreator';
import { EventsActionProps } from '../actions/events.actionCreator';

export interface EventsInitialState {
  events: EventType[];
}

export const initialState: EventsInitialState = {
  events: [],
};

/* istanbul ignore next */
export default produce((draft: Draft<EventsInitialState> = initialState, props: EventsActionProps) => {
  switch (props.type) {
    // No needed since is only used in saga only
    // case EventsActionCreators.RequestEvents:
    //   return draft;
    case EventsActionCreators.SetEvents:
      draft.events = props.payload;
      break;
    default:
    // throw new Error(`Unknown type: ${props.type}`);
  }

  return draft;
});
