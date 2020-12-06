import { combineReducers } from 'redux';
import appReducer, { AppInitialState } from './app.reducer';
import eventsReducer, { EventsInitialState } from './events.reducer';

export interface RootState {
  app: AppInitialState;
  events: EventsInitialState;
}

export default combineReducers({
  app: appReducer,
  events: eventsReducer,
});
