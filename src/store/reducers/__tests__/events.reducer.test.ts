import { SelectedSelectionOptions } from 'domains/selection';
import { EventsActionCreators } from '../../actions/action-creators/events.actionCreator';
import eventsReducer, { initialState } from '../events.reducer';

describe('Events Reducer', () => {
  it('should match snapshot', () => {
    const state = eventsReducer(initialState, {
      type: 'other',
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

  it('should perform SerUserSelection action', () => {
    let state = eventsReducer(initialState, {
      type: EventsActionCreators.SetUserSelection,
      payload: {
        option: SelectedSelectionOptions.Select,
        selection: {
          id: '1',
          name: 'test',
          price: 2400,
        },
      },
    });
    expect(state).toMatchSnapshot();

    state = eventsReducer(initialState, {
      type: EventsActionCreators.SetUserSelection,
      payload: {
        option: SelectedSelectionOptions.Unselect,
        selection: {
          id: '1',
          name: 'test',
          price: 2400,
        },
      },
    });
    expect(state).toMatchSnapshot();
  });
});
