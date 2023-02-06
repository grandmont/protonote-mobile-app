import { useReducer } from "react";
import AuthContext, { initialState } from "./AuthContext";

import type {
  AuthContextActionsType,
  AuthContextStateType,
  AuthProviderProps,
  AuthType,
  ThemeType,
} from ".";
import { authReducer, uiReducer, userReducer } from "./reducers";
import { User } from "../../graphql/generated";

const mainReducer = (
  // State
  { auth, userInfo, globalUI }: AuthContextStateType,
  action: AuthContextActionsType
) => {
  return {
    auth: authReducer(auth, action),
    userInfo: userReducer(userInfo, action),
    globalUI: uiReducer(globalUI, action),
  };
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const setAuth = (payload: AuthType) =>
    dispatch({ type: "CHANGE_AUTH", payload });

  const setUserInfo = (payload: User) =>
    dispatch({ type: "CHANGE_USER", payload });

  const setTheme = (payload: ThemeType) =>
    dispatch({ type: "CHANGE_THEME", payload });

  const providerValue = {
    state,
    dispatch,
    setAuth,
    setUserInfo,
    setTheme,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
