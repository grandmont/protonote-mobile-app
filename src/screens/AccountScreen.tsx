import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Incubator, View, ActionBar } from "react-native-ui-lib";
const { Dialog } = Incubator;

import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import SettingsItem from "@components/elements/SettingsItem/SettingsItem";
import DialogCard from "@components/elements/DialogCard/DialogCard";
import i18n from "@i18n";

export default function AccountScreen() {
  const title = i18n.t("settings.general.account");

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const navigation = useNavigation();

  const handleShowDialog = () => {
    setIsDialogVisible(true);
  };

  const handleCancel = () => {
    setIsDialogVisible(false);
  };

  const handleGoToDeleteAccount = () => {
    setIsDialogVisible(false);
    navigation.navigate("DeleteAccount");
  };

  return (
    <ScreenLayout dividerSize="regular">
      <Header title={title} canGoBack />

      <SettingsItem
        title={i18n.t("account.deleteAccount")}
        onPress={handleShowDialog}
        mode="danger"
        hasNext={false}
      />

      <Dialog
        visible={isDialogVisible}
        onDismiss={() => setIsDialogVisible(false)}
        containerStyle={{
          top: "40%",
          width: "70%",
        }}
      >
        <DialogCard
          title={i18n.t("account.deleteAccount")}
          description={
            <View marginT-12>
              <Text center marginB-12>
                {i18n.t("account.dialog.title")}
              </Text>
              <Text marginB-12 center>
                {i18n.t("account.dialog.warning")}
              </Text>
              <Text text80BO marginB-12 center>
                {i18n.t("account.dialog.warning2")}
              </Text>

              <ActionBar
                centered
                keepRelative
                actions={[
                  {
                    label: i18n.t("common.actions.cancel"),
                    onPress: handleCancel,
                    color: "white",
                    link: false,
                  },
                  {
                    label: i18n.t("common.actions.delete"),
                    onPress: handleGoToDeleteAccount,
                    color: "red",
                  },
                ]}
              />
            </View>
          }
        />
      </Dialog>
    </ScreenLayout>
  );
}
