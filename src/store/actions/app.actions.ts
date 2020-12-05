import { ErrorResponse } from '../../shared/models/error';
import { AppActionCreators } from './action-creators/app.actionCreator';

export type IsLoadingActionActionProps = {
  type: AppActionCreators.IsLoading;
};

export type FinishedLoadingActionProps = {
  type: AppActionCreators.FinishedLoading;
};

export type ClearErrorActionProps = {
  type: AppActionCreators.ClearError;
};

export type SetErrorActionProps = {
  type: AppActionCreators.SetError;
  payload: ErrorResponse;
};

export type ClearDataActionProps = {
  type: AppActionCreators.ClearData;
};

export type AppActionsProps =
  | IsLoadingActionActionProps
  | FinishedLoadingActionProps
  | ClearErrorActionProps
  | ClearDataActionProps
  | SetErrorActionProps;
