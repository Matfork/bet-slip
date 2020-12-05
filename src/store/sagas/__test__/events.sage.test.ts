import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { EventsService } from '../../../services/events.service';
import { AppActionCreators } from '../../actions/action-creators/app.actionCreator';
import { EventsActionCreators } from '../../actions/action-creators/events.actionCreator';
import { eventsSaga, getEvents } from '../events.saga';

EventsService.getEvents = jest.fn(() => {
  return Promise.resolve([1, 2]) as any;
});

describe('Events Saga', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(eventsSaga()).toMatchSnapshot();
  });

  describe('getEvents saga method', () => {
    describe('with correct response', () => {
      const it = sagaHelper(getEvents() as any);

      it('should set is loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.IsLoading }));
      });

      it('should call api', (result) => {
        expect(result).toEqual(call(EventsService.getEvents as any));
        expect(EventsService.getEvents).not.toHaveBeenCalled();
        return [1, 2];
      });

      it('should set matches data', (result) => {
        expect(result).toEqual(put({ type: EventsActionCreators.SetEvents, payload: [1, 2] }));
      });

      it('should finish loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.FinishedLoading }));
      });
    });

    describe('with error response', () => {
      const it = sagaHelper(getEvents() as any);

      it('should set is loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.IsLoading }));
      });

      it('should try call api', (result) => {
        expect(result).toEqual(call(EventsService.getEvents as any));
        expect(EventsService.getEvents).not.toHaveBeenCalled();
        return new Error('Something went wrong');
      });

      it('should set error', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.SetError, payload: new Error('Something went wrong') }));
      });

      it('should finish loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.FinishedLoading }));
      });
    });
  });
});
