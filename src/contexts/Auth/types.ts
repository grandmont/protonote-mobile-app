import type { ColorSchemeName } from "react-native";

import type { User } from "../../graphql/generated";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export type ThemeType = ColorSchemeName;

export type AuthType = string;

export type UIType = {
  theme: ThemeType;
};

export type AuthContextStateType = {
  globalUI: UIType;
  auth: AuthType;
  userInfo: User;
};

export type AuthContextActionsType =
  | {
      type: "CHANGE_THEME";
      payload: ThemeType;
    }
  | {
      type: "CHANGE_AUTH";
      payload: AuthType | null;
    }
  | {
      type: "CHANGE_USER";
      payload: User | null;
    };
