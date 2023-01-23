import { useReducer } from "react";
import AuthContext, { initialState } from "./AuthContext";

import type {
  AuthContextActionsType,
  AuthContextStateType,
  AuthProviderProps,
} from ".";
import { authReducer } from "./reducers";

const mainReducer = (
  // State
  { auth }: AuthContextStateType,
  action: AuthContextActionsType
) => {
  return {
    auth: authReducer(auth, action),
  };
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const providerValue = {
    state,
    dispatch,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
