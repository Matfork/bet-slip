import { call, put, StrictEffect, takeLatest } from 'redux-saga/effects';
import { MatchesService } from '../../services/matches.service';
import { EventType } from '../../shared/models/matches';
import { AppActionCreators } from '../actions/action-creators/app.actionCreator';
import { MatchesActionCreators } from '../actions/action-creators/matches.actionCreator';

export function* getMatches(): Generator<StrictEffect, EventType[], EventType[]> {
  try {
    yield put({ type: AppActionCreators.IsLoading });
    const matches = yield call(MatchesService.getData);

    yield put({ type: MatchesActionCreators.SetMatches, payload: matches });
    return matches;
  } catch (err) {
    yield put({ type: AppActionCreators.SetError, payload: err });
    return [];
  } finally {
    yield put({ type: AppActionCreators.FinishedLoading });
  }
}

/* istanbul ignore next */
export function* matchesSaga(): Generator<StrictEffect, void, void> {
  yield takeLatest(MatchesActionCreators.GetMatches, getMatches);
}
