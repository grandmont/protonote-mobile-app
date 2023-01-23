import type { TokenResponseConfig } from "expo-auth-session";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export type AuthType = TokenResponseConfig;

export type AuthContextStateType = {
  auth: AuthType;
};

export type AuthContextActionsType = {
  type: "CHANGE_AUTH";
  payload: AuthType | null;
};
