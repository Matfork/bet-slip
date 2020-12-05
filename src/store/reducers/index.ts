import { combineReducers } from 'redux';
import appReducer, { AppInitialState } from './app.reducer';
import matchesReducer, { MatchesInitialState } from './matches.reducer';

export interface RootState {
  app: AppInitialState;
  matches: MatchesInitialState;
}

export default combineReducers({
  app: appReducer,
  matches: matchesReducer,
});
