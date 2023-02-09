import { AuthType, AuthContextActionsType, UIType } from ".";
import { User } from "../../graphql/generated";

export const authReducer: React.Reducer<AuthType, AuthContextActionsType> = (
  auth,
  action
) => {
  switch (action.type) {
    case "CHANGE_AUTH":
      return action.payload;

    default:
      return auth;
  }
};

export const userReducer: React.Reducer<User, AuthContextActionsType> = (
  userInfo,
  action
) => {
  switch (action.type) {
    case "CHANGE_USER":
      return action.payload;

    default:
      return userInfo;
  }
};

export const uiReducer: React.Reducer<UIType, AuthContextActionsType> = (
  globalUI,
  action
) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...globalUI, theme: action.payload };

    default:
      return globalUI;
  }
};
