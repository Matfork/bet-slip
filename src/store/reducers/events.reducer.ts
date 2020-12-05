import produce, { Draft } from 'immer';
import { SelectedSelectionOptions, SelectionType } from 'domains/selection';
import { EventType } from '../../domains/events';
import { EventsActionCreators } from '../actions/action-creators/events.actionCreator';
import { EventsActionProps } from '../actions/events.actionCreator';

export interface EventsInitialState {
  events: EventType[];
  userSelection: SelectionType[];
}

export const initialState: EventsInitialState = {
  events: [],
  userSelection: [],
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
    case EventsActionCreators.SetUserSelection: {
      const { option, selection } = props.payload;
      if (option === SelectedSelectionOptions.Select) {
        draft.userSelection.push(selection);
      } else {
        draft.userSelection = draft.userSelection.filter((current) => current.id !== selection.id);
      }
      break;
    }

    default:
  }

  return draft;
});
