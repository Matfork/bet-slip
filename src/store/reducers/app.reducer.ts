import produce, { Draft } from 'immer';
import { ErrorResponse } from '../../domains/error';
import { AppActionCreators } from '../actions/action-creators/app.actionCreator';
import { AppActionsProps } from '../actions/app.actions';

export interface AppInitialState {
  isLoading: boolean;
  error: null | ErrorResponse;
}

export const initialState: AppInitialState = {
  isLoading: false,
  error: null,
};

/* istanbul ignore next */
export default produce((draft: Draft<AppInitialState> = initialState, props: AppActionsProps) => {
  switch (props.type) {
    case AppActionCreators.IsLoading:
      draft.isLoading = true;
      break;
    case AppActionCreators.FinishedLoading:
      draft.isLoading = false;
      break;
    case AppActionCreators.SetError:
      draft.error = props.payload;
      break;
    case AppActionCreators.ClearError:
      draft.error = null;
      break;
    case AppActionCreators.ClearData:
      return initialState;
    default:
    // throw new Error(`Unknown type: ${props.type}`);
  }

  return draft as AppInitialState;
});
