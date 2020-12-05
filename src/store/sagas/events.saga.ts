import { call, put, StrictEffect, takeLatest } from 'redux-saga/effects';
import { EventsService } from '../../services/events.service';
import { EventType } from '../../domains/events';
import { AppActionCreators } from '../actions/action-creators/app.actionCreator';
import { EventsActionCreators } from '../actions/action-creators/events.actionCreator';

export function* getEvents(): Generator<StrictEffect, EventType[], EventType[]> {
  try {
    yield put({ type: AppActionCreators.IsLoading });
    const events = yield call(EventsService.getEvents);
    yield put({ type: EventsActionCreators.SetEvents, payload: events });
    return events;
  } catch (err) {
    yield put({ type: AppActionCreators.SetError, payload: err });
    return [];
  } finally {
    yield put({ type: AppActionCreators.FinishedLoading });
  }
}

/* istanbul ignore next */
export function* eventsSaga(): Generator<StrictEffect, void, void> {
  yield takeLatest(EventsActionCreators.RequestEvents, getEvents);
}
