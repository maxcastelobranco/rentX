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

const today = new Date();
const tomorrow = add(today, { days: 1 });

const initialState: InitialAppState = {
  timeInterval: {
    startDate: today,
    endDate: tomorrow,
  },
  authentication: {
    error: "",
    loading: false,
    user: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      avatarUrl: "",
    },
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
  { timeInterval, authentication }: InitialAppState,
  action: AppActions
) => ({
  timeInterval: timeIntervalReducer(timeInterval, action),
  authentication: authenticationReducer(authentication, action),
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
