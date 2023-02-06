import { createContext } from "react";
import { Appearance } from "react-native";

import type {
  AuthContextActionsType,
  AuthContextStateType,
  AuthType,
  ThemeType,
} from ".";
import type { User } from "../../graphql/generated";

export const initialState: AuthContextStateType = {
  auth: null,
  userInfo: null,
  globalUI: {
    theme: Appearance.getColorScheme(),
  },
};

interface AuthContextInterface {
  state: AuthContextStateType;
  dispatch: React.Dispatch<AuthContextActionsType>;
  setAuth: (payload: AuthType) => void;
  setUserInfo: (payload: User) => void;
  setTheme: (payload: ThemeType) => void;
}

const AuthContext = createContext<AuthContextInterface>({
  state: initialState,
  dispatch: () => null,
  setAuth: () => null,
  setUserInfo: () => null,
  setTheme: () => null,
});

export default AuthContext;
