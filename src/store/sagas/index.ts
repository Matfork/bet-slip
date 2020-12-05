import { all, fork, StrictEffect } from 'redux-saga/effects';
import { eventsSaga } from './events.saga';

export default function* rootSaga(): Generator<StrictEffect, void, void> {
  yield all([fork(eventsSaga)]);
}
