import { MatchesActionCreators } from '../../actions/action-creators/matches.actionCreator';
import matchesReducer, { initialState } from '../matches.reducer';

describe('Matches Reducer', () => {
  it('should match snapshot', () => {
    const state = matchesReducer(initialState, {
      type: 'other',
    } as any);

    expect(state).toMatchSnapshot();
  });

  it('should perform GetMatches action', () => {
    const state = matchesReducer(initialState, {
      type: MatchesActionCreators.GetMatches,
    } as any);
    expect(state).toMatchSnapshot();
  });

  it('should perform SetMatches action', () => {
    const state = matchesReducer(initialState, {
      type: MatchesActionCreators.SetMatches,
      payload: [],
    });
    expect(state).toMatchSnapshot();
  });
});
