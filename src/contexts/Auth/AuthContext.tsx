import { createContext } from "react";

import type { AuthContextActionsType, AuthContextStateType, AuthType } from ".";
import type { User } from "../../graphql/generated";

export const initialState: AuthContextStateType = {
  auth: null,
  userInfo: null,
};

interface AuthContextInterface {
  state: AuthContextStateType;
  dispatch: React.Dispatch<AuthContextActionsType>;
  setAuth: (payload: AuthType) => void;
  setUserInfo: (payload: User) => void;
}

const AuthContext = createContext<AuthContextInterface>({
  state: initialState,
  dispatch: () => null,
  setAuth: () => null,
  setUserInfo: () => null,
});

export default AuthContext;
