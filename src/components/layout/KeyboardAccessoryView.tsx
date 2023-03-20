import { InputAccessoryView, Keyboard } from "react-native";
import { Button, View } from "react-native-ui-lib";

import usePlatform from "@hooks/usePlatform";

export default function KeyboardAccessoryView({ nativeId }) {
  const { isAndroid } = usePlatform();

  if (isAndroid) return null;

  return (
    <InputAccessoryView nativeID={nativeId}>
      <View
        flex
        paddingH-18
        paddingV-8
        right
        style={{
          zIndex: 1,
          height: 42,
        }}
        backgroundColor="#ededed"
      >
        <Button
          onPress={Keyboard.dismiss}
          hitSlop={5}
          label="Done"
          link
          linkColor="blue"
        />
      </View>
    </InputAccessoryView>
  );
}
