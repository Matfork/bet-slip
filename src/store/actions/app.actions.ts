import { ErrorResponse } from '../../domains/error';
import { AppActionCreators } from './action-creators/app.actionCreator';

type IsLoadingActionActionProps = {
  type: AppActionCreators.IsLoading;
};

type FinishedLoadingActionProps = {
  type: AppActionCreators.FinishedLoading;
};

type ClearErrorActionProps = {
  type: AppActionCreators.ClearError;
};

type SetErrorActionProps = {
  type: AppActionCreators.SetError;
  payload: ErrorResponse;
};

type ClearDataActionProps = {
  type: AppActionCreators.ClearData;
};

export type AppActionsProps =
  | IsLoadingActionActionProps
  | FinishedLoadingActionProps
  | ClearErrorActionProps
  | ClearDataActionProps
  | SetErrorActionProps;
