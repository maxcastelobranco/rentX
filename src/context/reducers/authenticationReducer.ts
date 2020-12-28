import { Reducer } from "react";

import { ActionMap, AppActions } from "../types";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatarUrl: string;
}

export type AuthenticationState = {
  loading: boolean;
  error: string;
  user: User;
};

export enum AuthenticationActionTypes {
  Login = "LOGIN",
  LoginFailed = "LOGIN_FAILED",
  LoginSucceeded = "LOGIN_SUCCEEDED",
  UpdateUser = "UPDATE_USER",
  Logout = "LOGOUT",
}

type AuthenticationActionPayloads = {
  [AuthenticationActionTypes.Login]: undefined;
  [AuthenticationActionTypes.LoginFailed]: undefined;
  [AuthenticationActionTypes.LoginSucceeded]: User;
  [AuthenticationActionTypes.UpdateUser]: Partial<User>;
  [AuthenticationActionTypes.Logout]: undefined;
};

export type AuthenticationActions = ActionMap<AuthenticationActionPayloads>[keyof ActionMap<AuthenticationActionPayloads>];

export const authenticationReducer: Reducer<AuthenticationState, AppActions> = (
  state,
  action
) => {
  switch (action.type) {
    case AuthenticationActionTypes.Login:
      return {
        ...state,
        loading: true,
      };
    case AuthenticationActionTypes.LoginFailed:
      return {
        ...state,
        loading: false,
        error: "Invalid email/password combination",
      };
    case AuthenticationActionTypes.LoginSucceeded:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.payload,
      };
    case AuthenticationActionTypes.UpdateUser:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case AuthenticationActionTypes.Logout:
      return {
        ...state,
        user: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          avatarUrl: "",
        },
      };
    default:
      return state;
  }
};
