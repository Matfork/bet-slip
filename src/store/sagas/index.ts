import { all, fork, StrictEffect } from 'redux-saga/effects';
import { matchesSaga } from './matches.saga';

export default function* rootSaga(): Generator<StrictEffect, void, void> {
  yield all([fork(matchesSaga)]);
}
