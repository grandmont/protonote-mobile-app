import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import LottieView from "lottie-react-native";
import {
  Button,
  View,
  Text,
  LoaderScreen,
  Incubator,
} from "react-native-ui-lib";
const { Toast } = Incubator;

import useAuth from "@hooks/useAuth";
import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import {
  DeleteAccountDocument,
  GetUserStatisticsDocument,
} from "@graphql/generated";
import i18n from "@i18n";

export default function DeleteAccountScreen() {
  const title = i18n.t("deleteAccount.title");

  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { userInfo, logout } = useAuth();

  const { data, loading } = useQuery(GetUserStatisticsDocument, {
    variables: {
      where: {
        id: userInfo?.id,
      },
    },
  });

  const [deleteAccount] = useMutation(DeleteAccountDocument);

  const handleDeleteAccount = async () => {
    setIsDeleting(true);

    try {
      await deleteAccount({
        variables: {
          input: {
            confirm: true,
          },
        },
      });

      logout();
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  // Perhaps we can create a hook?
  const isPortuguese = ["pt-BR", "pt"].includes(i18n.locale);

  const memos = data?.user._count.protos;
  const memosString = `${memos} memo${memos > 1 ? "s" : ""} ${i18n.t(
    "deleteAccount.info.willBeDeleted"
  )}`;
  const integrations = data?.user._count.integrations;
  const integrationsString = `${integrations} ${i18n.t(
    "deleteAccount.info.integrations"
  )}${integrations > 1 ? "s" : ""} ${i18n.t(
    "deleteAccount.info.willBeRemoved"
  )}`;

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <View center>
          {!isPortuguese && (
            <>
              {!!memos && <Text title>{memosString}</Text>}
              {!!integrations && <Text title>{integrationsString}</Text>}
            </>
          )}
          <Text h2 marginT-24>
            {i18n.t("deleteAccount.areYouSure")}
          </Text>
        </View>

        <LottieView
          autoPlay
          style={{
            width: "100%",
            height: 300,
          }}
          source={require("../../assets/animations/Animation 03/drawkit-grape-animation-3-LOOP.json")}
        />

        <Button
          label={i18n.t("deleteAccount.iWantToDelete")}
          backgroundColor="red"
          disabled={isDeleting}
          onPress={handleDeleteAccount}
        />
      </View>

      {/* Error toast */}
      <Toast
        visible={!!error}
        position="top"
        preset="failure"
        message={i18n.t("common.info.somethingWentWrong")}
        centerMessage
        autoDismiss={5000}
        onDismiss={() => setError(null)}
      />

      {(loading || isDeleting) && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
