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

const today = new Date();
const tomorrow = add(today, { days: 1 });

const initialState: InitialAppState = {
  timeInterval: {
    startDate: today,
    endDate: tomorrow,
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
  { timeInterval }: InitialAppState,
  action: AppActions
) => ({
  timeInterval: timeIntervalReducer(timeInterval, action),
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
