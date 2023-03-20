import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Incubator, View, ActionBar } from "react-native-ui-lib";
const { Dialog } = Incubator;

import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import SettingsItem from "@components/elements/SettingsItem/SettingsItem";
import DialogCard from "@components/elements/DialogCard/DialogCard";

export default function AccountScreen() {
  const title = "Account";

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
        title="Delete account"
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
          title="Delete account"
          description={
            <View marginT-12>
              <Text center marginB-12>
                Are you sure you want to delete{`\n`}your account?
              </Text>
              <Text marginB-12 center>
                You are going to lose all your memos!
              </Text>
              <Text text80BO marginB-12 center>
                This action is irreversible!
              </Text>

              <ActionBar
                centered
                keepRelative
                actions={[
                  {
                    label: "Cancel",
                    onPress: handleCancel,
                    color: "white",
                    link: false,
                  },
                  {
                    label: "Delete",
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
