import { Reducer } from "react";

import { ActionMap, AppActions } from "../types";

export type TimeIntervalState = {
  startDate: Date;
  endDate: Date;
};

export enum TimeIntervalActionTypes {
  Update = "UPDATE_TIME_INTERVAL",
}

type TimeIntervalActionPayloads = {
  [TimeIntervalActionTypes.Update]: Partial<TimeIntervalState>;
};

export type TimeIntervalActions = ActionMap<TimeIntervalActionPayloads>[keyof TimeIntervalActionPayloads];

export const timeIntervalReducer: Reducer<TimeIntervalState, AppActions> = (
  state,
  action
) => {
  switch (action.type) {
    case TimeIntervalActionTypes.Update:
      const { startDate, endDate } = action.payload;

      return {
        startDate: startDate ? startDate : state.startDate,
        endDate: endDate ? endDate : state.endDate,
      };
    default:
      return state;
  }
};
