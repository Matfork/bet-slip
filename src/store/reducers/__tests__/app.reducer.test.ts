import { AppActionCreators } from '../../actions/action-creators/app.actionCreator';
import appReducer, { initialState } from '../app.reducer';

describe('App Reducer', () => {
  it('should match snapshot', () => {
    const state = appReducer(initialState, {
      type: 'other',
    });

    expect(state).toMatchSnapshot();
  });

  it('should perform IsLoading action', () => {
    const state = appReducer(initialState, {
      type: AppActionCreators.IsLoading,
    });
    expect(state).toMatchSnapshot();
  });

  it('should perform FinishedLoading action', () => {
    const state = appReducer(initialState, {
      type: AppActionCreators.FinishedLoading,
    });
    expect(state).toMatchSnapshot();
  });

  it('should perform SetError action', () => {
    const state = appReducer(initialState, {
      type: AppActionCreators.SetError,
    });
    expect(state).toMatchSnapshot();
  });

  it('should perform ClearError action', () => {
    const state = appReducer(initialState, {
      type: AppActionCreators.ClearError,
    });
    expect(state).toMatchSnapshot();
  });

  it('should perform ClearData action', () => {
    const state = appReducer(initialState, {
      type: AppActionCreators.ClearData,
    });
    expect(state).toMatchSnapshot();
  });
});
