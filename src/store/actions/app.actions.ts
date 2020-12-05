import { ErrorResponse } from "../../shared/models/error";

export type IsLoadingActionActionProps = {
  type: string;
};

export type FinishedLoadingActionProps = {
  type: string;
};

export type ClearErrorActionProps = {
  type: string;
};

export type SetErrorActionProps = {
  type: string;
  payload: ErrorResponse;
};

export type ClearDataActionProps = {
  type: string;
};

export type GetMatchesActionProps = {
  type: string;
};

export type AppActionsProps =
  | IsLoadingActionActionProps
  | FinishedLoadingActionProps
  | ClearErrorActionProps
  | ClearDataActionProps
  | SetErrorActionProps
  | GetMatchesActionProps;
