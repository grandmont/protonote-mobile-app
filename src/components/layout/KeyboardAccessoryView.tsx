import { InputAccessoryView, Keyboard } from "react-native";
import { Button, View } from "react-native-ui-lib";

export default function KeyboardAccessoryView({ nativeId }) {
  return (
    <InputAccessoryView nativeID={nativeId}>
      <View padding-12 right>
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
