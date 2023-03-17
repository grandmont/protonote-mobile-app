import {
  Button,
  View,
  Text,
  LoaderScreen,
  Incubator,
} from "react-native-ui-lib";
const { Toast } = Incubator;
import LottieView from "lottie-react-native";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";
import { useMutation, useQuery } from "@apollo/client";
import {
  DeleteAccountDocument,
  GetUserStatisticsDocument,
} from "../graphql/generated";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export default function DeleteAccountScreen() {
  const title = "Delete account";

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
      const { data } = await deleteAccount({
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

  const memos = data?.user._count.protos;
  const memosString = `${memos} memo${memos > 1 ? "s" : ""} will be deleted.`;
  const integrations = data?.user._count.integrations;
  const integrationsString = `${integrations} third-party integration${
    integrations > 1 ? "s" : ""
  } will be removed.`;

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <View center>
          {!!memos && <Text title>{memosString}</Text>}
          {!!integrations && <Text title>{integrationsString}</Text>}
          <Text h2 marginT-24>
            Are you sure?
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
          label="I want to delete my account!"
          backgroundColor="red"
          disabled={isDeleting}
          onPress={handleDeleteAccount}
        />
      </View>

      {/* Error toast */}
      <Toast
        visible={!!error}
        position="top"
        message={`Something went wrong!\n Please try again later.`}
        centerMessage
        autoDismiss={5000}
        onDismiss={() => setError(null)}
      />

      {(loading || isDeleting) && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
