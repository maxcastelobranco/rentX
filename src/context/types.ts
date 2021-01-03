import {
  TimeIntervalActions,
  TimeIntervalState,
} from "./reducers/timeIntervalReducer";
import {
  AuthenticationActions,
  AuthenticationState,
} from "./reducers/authenticationReducer";
import { CarParamsState, CarsActions } from "./reducers/carParamsReducer";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AppActions =
  | TimeIntervalActions
  | AuthenticationActions
  | CarsActions;
export type InitialAppState = {
  timeInterval: TimeIntervalState;
  authentication: AuthenticationState;
  carParams: CarParamsState;
};
