import { useReducer } from "react";
import AuthContext, { initialState } from "./AuthContext";

import type {
  AuthContextActionsType,
  AuthContextStateType,
  AuthProviderProps,
  AuthType,
} from ".";
import { authReducer, userReducer } from "./reducers";
import { User } from "../../graphql/generated";

const mainReducer = (
  // State
  { auth, userInfo }: AuthContextStateType,
  action: AuthContextActionsType
) => {
  return {
    auth: authReducer(auth, action),
    userInfo: userReducer(userInfo, action),
  };
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const setAuth = (payload: AuthType) =>
    dispatch({ type: "CHANGE_AUTH", payload });

  const setUserInfo = (payload: User) =>
    dispatch({ type: "CHANGE_USER", payload });

  const providerValue = {
    state,
    dispatch,
    setAuth,
    setUserInfo,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
