import {
  TimeIntervalActions,
  TimeIntervalState,
} from "./reducers/timeIntervalReducer";

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

export type AppActions = TimeIntervalActions;
export type InitialAppState = {
  timeInterval: TimeIntervalState;
};
