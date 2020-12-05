import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { MatchesService } from '../../../services/matches.service';
import { AppActionCreators } from '../../actions/action-creators/app.actionCreator';
import { MatchesActionCreators } from '../../actions/action-creators/matches.actionCreator';
import { matchesSaga, getMatches } from '../matches.saga';

MatchesService.getData = jest.fn(() => {
  return Promise.resolve([1, 2]) as any;
});

describe('Matches Sage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(matchesSaga()).toMatchSnapshot();
  });

  describe('getMatches saga method', () => {
    describe('with correct response', () => {
      const it = sagaHelper(getMatches());

      it('should set is loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.IsLoading }));
      });

      it('should call api', (result) => {
        expect(result).toEqual(call(MatchesService.getData as any));
        expect(MatchesService.getData).not.toHaveBeenCalled();
        return [1, 2];
      });

      it('should set matches data', (result) => {
        expect(result).toEqual(put({ type: MatchesActionCreators.SetMatches, payload: [1, 2] }));
      });

      it('should finish loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.FinishedLoading }));
      });
    });

    describe('with error response', () => {
      const it = sagaHelper(getMatches());

      it('should set is loading', (result) => {
        expect(result).toEqual(put({ type: AppActionCreators.IsLoading }));
      });

      it('should try call api', (result) => {
        expect(result).toEqual(call(MatchesService.getData as any));
        expect(MatchesService.getData).not.toHaveBeenCalled();
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
