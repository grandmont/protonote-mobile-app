import type { User } from "../../graphql/generated";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export type AuthType = string;

export type AuthContextStateType = {
  auth: AuthType;
  userInfo: User;
};

export type AuthContextActionsType =
  | {
      type: "CHANGE_AUTH";
      payload: AuthType | null;
    }
  | {
      type: "CHANGE_USER";
      payload: User | null;
    };
