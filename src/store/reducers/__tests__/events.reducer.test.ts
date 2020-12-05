import { EventsActionCreators } from '../../actions/action-creators/events.actionCreator';
import eventsReducer, { initialState } from '../events.reducer';

describe('Events Reducer', () => {
  it('should match snapshot', () => {
    const state = eventsReducer(initialState, {
      type: 'other',
    } as any);

    expect(state).toMatchSnapshot();
  });

  it('should perform RequestEvents action', () => {
    const state = eventsReducer(initialState, {
      type: EventsActionCreators.RequestEvents,
    } as any);
    expect(state).toMatchSnapshot();
  });

  it('should perform SetEvents action', () => {
    const state = eventsReducer(initialState, {
      type: EventsActionCreators.SetEvents,
      payload: [],
    });
    expect(state).toMatchSnapshot();
  });
});
