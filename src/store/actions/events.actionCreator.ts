import { EventType } from 'domains/events';
import { SelectedSelectionOptions, SelectionType } from 'domains/selection';
import { EventsActionCreators } from './action-creators/events.actionCreator';

type SetEventsActionProps = {
  type: EventsActionCreators.SetEvents;
  payload: EventType[];
};

type SetUserSelectionActionProps = {
  type: EventsActionCreators.SetUserSelection;
  payload: {
    selection: SelectionType;
    option: SelectedSelectionOptions;
  };
};

export type EventsActionProps = SetEventsActionProps | SetUserSelectionActionProps;
