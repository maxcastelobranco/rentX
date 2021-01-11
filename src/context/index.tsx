import React, {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { add } from "date-fns";

import { AppActions, InitialAppState } from "./types";
import { timeIntervalReducer } from "./reducers/timeIntervalReducer";
import { authenticationReducer } from "./reducers/authenticationReducer";
import { carParamsReducer } from "./reducers/carParamsReducer";

const today = new Date();
const tomorrow = add(today, { days: 1 });
export const initialUserState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  avatarUrl: "",
};

const initialState: InitialAppState = {
  timeInterval: {
    startDate: today,
    endDate: tomorrow,
  },
  authentication: {
    error: "",
    loading: false,
    user: initialUserState,
  },
  carParams: {
    dailyRate: {
      from: 0,
      to: 10000,
    },
    engineType: "",
    transmission: "",
  },
};

const AppContext = createContext<{
  state: InitialAppState;
  dispatch: Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer: Reducer<InitialAppState, AppActions> = (
  { timeInterval, authentication, carParams }: InitialAppState,
  action: AppActions
) => ({
  timeInterval: timeIntervalReducer(timeInterval, action),
  authentication: authenticationReducer(authentication, action),
  carParams: carParamsReducer(carParams, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
