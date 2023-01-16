export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  NotFound: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
