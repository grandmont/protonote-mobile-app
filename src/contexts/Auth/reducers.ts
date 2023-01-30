import { AuthType, AuthContextActionsType } from ".";
import { User } from "../../graphql/generated";

export const authReducer: React.Reducer<AuthType, AuthContextActionsType> = (
  state,
  action
) => {
  switch (action.type) {
    case "CHANGE_AUTH":
      return action.payload;

    default:
      return state;
  }
};

export const userReducer: React.Reducer<User, AuthContextActionsType> = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      return action.payload;

    default:
      return state;
  }
}