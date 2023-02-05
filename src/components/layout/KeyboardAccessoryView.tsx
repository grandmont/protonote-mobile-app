import { InputAccessoryView, Keyboard } from "react-native";
import { Button, View } from "react-native-ui-lib";

export default function KeyboardAccessoryView({ nativeId }) {
  return (
    <InputAccessoryView nativeID={nativeId}>
      <View paddingH-12 paddingV-8 right backgroundColor="white">
        <Button
          onPress={Keyboard.dismiss}
          hitSlop={4}
          label="Done"
          link
          linkColor="blue"
        />
      </View>
    </InputAccessoryView>
  );
}
