import { AuthType, AuthContextActionsType } from ".";

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
