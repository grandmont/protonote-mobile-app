import { createContext } from "react";

import type { AuthContextActionsType, AuthContextStateType } from ".";

export const initialState: AuthContextStateType = {
  auth: null,
};

interface AuthContextInterface {
  state: AuthContextStateType;
  dispatch: React.Dispatch<AuthContextActionsType>;
}

const AuthContext = createContext<AuthContextInterface>({
  state: initialState,
  dispatch: () => null,
});

export default AuthContext;
