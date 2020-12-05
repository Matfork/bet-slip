import { EventType } from '../../shared/models/events';
import { EventsActionCreators } from './action-creators/events.actionCreator';

export type SetEventsActionProps = {
  type: EventsActionCreators.SetEvents;
  payload: EventType[];
};

export type EventsActionProps = SetEventsActionProps;
