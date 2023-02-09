import { InputAccessoryView, Keyboard } from "react-native";
import { Button, View } from "react-native-ui-lib";

export default function KeyboardAccessoryView({ nativeId }) {
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
