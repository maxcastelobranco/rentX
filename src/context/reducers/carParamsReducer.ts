import { Reducer } from "react";

import { ActionMap, AppActions } from "../types";

export interface DailyRateType {
  from: number;
  to: number;
}
export enum EngineTypes {
  gas = "gas",
  electric = "electric",
  hybrid = "hybrid",
}
export enum TransmissionTypes {
  auto = "auto",
  manual = "manual",
}

export interface CarData {
  id: string;
  dailyRate: number;
  available: true;
  make: string;
  model: string;
  topSpeed: number;
  acceleration: number;
  horsePower: number;
  engineType: EngineTypes;
  transmission: TransmissionTypes;
  seating: number;
  images: string[];
}
export type CarParamsState = {
  dailyRate: DailyRateType;
  engineType: EngineTypes | "";
  transmission: TransmissionTypes | "";
};

export enum CarParamsActionTypes {
  Update = "UPDATE",
}

type CarParamsActionPayloads = {
  [CarParamsActionTypes.Update]: Partial<CarParamsState>;
};

export type CarsActions = ActionMap<CarParamsActionPayloads>[keyof ActionMap<CarParamsActionPayloads>];

export const carParamsReducer: Reducer<CarParamsState, AppActions> = (
  state,
  action
) => {
  switch (action.type) {
    case CarParamsActionTypes.Update:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
