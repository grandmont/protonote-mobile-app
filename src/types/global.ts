import type { IntegrationProvider } from "@graphql/generated";
import type { DeezerItemInterface, IntegrationProps } from "./integrations";

type MemoDateType = {
  date: {
    dateString: string;
    editData?: {
      id?: number;
      description?: string;
    };
  };
};

type IntegrationDataType = {
  title: string;
  protoId: number;
  provider: IntegrationProvider;
};

export type RootStackParamList = {
  // Tabs
  Home: undefined;
  Search: undefined;
  Calendar: undefined;
  Analytics: undefined;

  // Independent
  CreateMemo: MemoDateType;
  Memo: MemoDateType;
  Notifications: undefined;
  Settings: undefined;
  Account: undefined;
  IntegrationData: IntegrationDataType;
  DeleteAccount: undefined;

  // Settings
  Integrations: undefined;
  AboutUs: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  type ListItemType<T> = {
    spacing?: boolean;
  } & Partial<T>;

  type IntegrationPropsType = IntegrationProps;

  type DeezerItemType = DeezerItemInterface;
}
